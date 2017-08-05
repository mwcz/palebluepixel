'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuState = function (_Phaser$State) {
    _inherits(MenuState, _Phaser$State);

    function MenuState() {
        _classCallCheck(this, MenuState);

        return _possibleConstructorReturn(this, (MenuState.__proto__ || Object.getPrototypeOf(MenuState)).apply(this, arguments));
    }

    _createClass(MenuState, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            console.log('[menu] showing main menu');

            window.state = this;

            if (config.AUTO_PLAY) {
                this.next();
            }

            var bg = this.game.add.sprite(0, 0, 'backdrop');
            bg.tint = 0x7f7f7f;

            var logoOff = this.game.add.sprite(this.game.world.centerX, 160, 'logo-off');
            logoOff.anchor.set(0.5, 0.5);

            var logoOn = this.game.add.sprite(this.game.world.centerX, 160, 'logo-on');
            logoOn.anchor.set(0.5, 0.5);
            logoOn.alpha = 0;

            this.heaterGlowTween = this.game.add.tween(logoOn);
            this.heaterGlowTween.to({ alpha: 1 }, 2 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In);
            this.heaterGlowTween.start();

            this.heaterGlowTween.onComplete.add(function () {
                _this2.heaterFlickerTween = _this2.game.add.tween(logoOn);
                _this2.heaterFlickerTween.to({
                    alpha: 0.5
                }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In, true, 0, -1, true);
                _this2.heaterFlickerTween.start();
            }, this);

            var playOff = this.game.add.sprite(this.game.world.centerX, this.game.world.height - 250, 'play-off');
            playOff.anchor.set(0.5, 0.5);

            this.playOn = this.game.add.sprite(this.game.world.centerX, this.game.world.height - 250, 'play-on');
            this.playOn.anchor.set(0.5, 0.5);
            this.playOn.alpha = 0;
            this.playOn.inputEnabled = true;
            this.playOn.input.useHandCursor = true;
            this.playOn.events.onInputDown.add(this.next, this);

            this.heaterSound = new Phaser.Sound(this.game, 'heater', 1.0, true);
            this.heaterOffSound = new Phaser.Sound(this.game, 'heater-off', 1.0);
            this.heaterSound.volume = 0;
            this.heaterSound.play();
            this.heaterOffSound.play();
        }
    }, {
        key: 'update',
        value: function update() {
            var mouseDist = Phaser.Point.distance(this.playOn.position, this.game.input);
            // console.log(mouseDist);
            var closeness = this.game.math.clamp(1 - mouseDist / 600, 0, 1);
            this.playOn.alpha = closeness;
            this.heaterSound.volume = closeness;
        }
    }, {
        key: 'next',
        value: function next() {
            this.game.stateTransition.to('PlayState');
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.heaterSound.stop();
            this.heaterOffSound.stop();
        }
    }]);

    return MenuState;
}(Phaser.State);