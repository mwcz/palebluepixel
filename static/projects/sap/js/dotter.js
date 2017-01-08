'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dotter = function () {
    function Dotter() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$density = _ref.density,
            density = _ref$density === undefined ? 0.15 : _ref$density,
            _ref$jitter = _ref.jitter,
            jitter = _ref$jitter === undefined ? 1.0 : _ref$jitter;

        _classCallCheck(this, Dotter);

        this.density = density;
        this.jitter = jitter;
    }

    _createClass(Dotter, [{
        key: 'process',
        value: function process(src) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this._fetchImage(src).then(function (img) {
                    resolve(_this._processImage(img));
                }).catch(reject);
            });
        }
    }, {
        key: '_fetchImage',
        value: function _fetchImage(src) {
            return new Promise(function (resolve, reject) {
                if (typeof src === 'string') {
                    var img = new Image();
                    img.onload = function (evt) {
                        return resolve(evt.target);
                    };
                    img.onerror = reject;
                    img.src = src;
                } else {
                    resolve(src);
                }
            });
        }
    }, {
        key: '_processImage',
        value: function _processImage(image) {
            var canvas = this._drawCanvas(image);
            var pixels = this._getPixels(canvas);
            var dots = this._sample(canvas, pixels);

            return {
                dots: dots,
                original: {
                    image: image,
                    pixels: pixels,
                    canvas: canvas,
                    aspect: canvas.width / canvas.height
                }
            };
        }
    }, {
        key: '_drawCanvas',
        value: function _drawCanvas(img) {
            var el = document.createElement('canvas');
            var ctx = el.getContext('2d');
            el.width = img.width;
            el.height = img.height;
            ctx.drawImage(img, 0, 0);
            return { el: el, ctx: ctx };
        }
    }, {
        key: '_getPixels',
        value: function _getPixels(canvas) {
            return canvas.ctx.getImageData(0, 0, canvas.el.width, canvas.el.height);
        }
    }, {
        key: '_sample',
        value: function _sample(canvas, pixels) {
            if (this.density <= 0) return [];

            var points = [];

            var w = canvas.el.width;
            var h = canvas.el.height;

            var step = Math.floor(1 / this.density);

            console.log('step: ' + step);

            var i = 0;
            var r = 0;
            var g = 0;
            var b = 0;

            for (var x = 0; x < w; x += step) {
                for (var y = 0; y < h; y += step) {
                    i = Math.floor((x + y * w) * 4);
                    r = pixels.data[i];
                    g = pixels.data[i + 1];
                    b = pixels.data[i + 2];

                    // look for black pixels
                    if (r + g + b === 0) {
                        var xJitter = Math.floor(Math.random() * this.jitter * step);
                        var yJitter = Math.floor(Math.random() * this.jitter * step);
                        points.push((x + xJitter) / w);
                        points.push((y + yJitter) / h);
                    }
                }
            }

            console.log(points.length / 2 + ' points found');
            this._drawPoints(canvas, points);

            return points;
        }

        // for debugging, draw the found points on a canvas

    }, {
        key: '_drawPoints',
        value: function _drawPoints(canvas, points) {
            canvas.ctx.fillStyle = '#47CD36';

            for (var i = 0; i < points.length; i += 2) {
                var x = points[i];
                var y = points[i + 1];
                canvas.ctx.fillRect(x * canvas.el.width, y * canvas.el.height, 1, 1);
            }
        }
    }]);

    return Dotter;
}();