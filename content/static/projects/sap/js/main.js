'use strict';

if (!Detector.webgl) Detector.addGetWebGLMessage();

var dotter = new Dotter({
    jitter: 1.0,
    density: 0.095
});

var view = new ParticleView({
    size: 10,
    count: 14000,
    color: {
        top: '#FFA317',
        bottom: '#E6141B',
        background: '#252142'
    },
    fidget: {
        speed: 2.4,
        distance: 1.4
    },
    tween: {
        duration: 500, // fps
        xfunc: Tween.easeInOutCubic,
        yfunc: Tween.easeInOutCubic,
        ofunc: Tween.easeInOutCubic
    }
});

function show(img) {
    dotter.process(img).then(view.shape.bind(view));
}

var INTERVAL = 7000;

var previewImages = ['masks/heart.png', 'masks/spiral.png', 'masks/face.png', 'masks/yinyang.png', 'masks/test.png'];

show(previewImages[previewImages.length - 1]);

setInterval(function () {
    var img = previewImages.shift();
    previewImages.push(img);
    show(img);
}, INTERVAL);