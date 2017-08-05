'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayState = function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
    }

    _createClass(PlayState, [{
        key: 'create',
        value: function create() {
            console.log('[play] starting play state');

            // for easy access to this state for debugging in browser console
            window.state = this;

            this.drawInitialScene();
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.actors.earth);
            // this.game.debug.body(this.actors.barrier);
            // this.actors.asteroids.forEach(this.game.debug.body.bind(this.game.debug));
            // this.actors.comets.forEach(this.game.debug.body.bind(this.game.debug));
            // this.actors.booms.forEach(this.game.debug.body.bind(this.game.debug));
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            _.forEach(this.sounds, function (sound) {
                return sound.stop();
            });
        }
    }, {
        key: 'createSounds',
        value: function createSounds() {
            this.sounds = {
                music: new Phaser.Sound(this.game, 'music', 1.0),
                starvation: new Phaser.Sound(this.game, 'insanity', 0.0, true),
                heater: new Phaser.Sound(this.game, 'heater', 1.5, true),
                refuel: new Phaser.Sound(this.game, 'refuel', 1.0),
                nom: new Phaser.Sound(this.game, 'nom', 1.0),
                heaterOff: new Phaser.Sound(this.game, 'heater-off', 1.0),
                generator: new Phaser.Sound(this.game, 'generator', 1.0, true),
                generatorEmpty: new Phaser.Sound(this.game, 'generator-empty', 1.0),
                generatorOff: new Phaser.Sound(this.game, 'generator-off', 1.0)
            };
            this.sounds.starvation.play();
        }
    }, {
        key: 'introText',
        value: function introText() {
            this.createTextBubble({
                text: 'In a teetering cabin high in the mountains, you attempt to survive the winter.\n\nAn aging diesel generator powers a space heater, your only source of warmth.  Cans of food collect dust in the cupboard.  Stay warm and fed, and you might make it to Spring.'
            });
        }
    }, {
        key: 'createTextBubble',
        value: function createTextBubble() {
            var _this2 = this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$text = _ref.text,
                text = _ref$text === undefined ? 'NO TEXT' : _ref$text,
                _ref$final = _ref.final,
                final = _ref$final === undefined ? false : _ref$final,
                _ref$speed = _ref.speed,
                speed = _ref$speed === undefined ? 15 : _ref$speed,
                _ref$x = _ref.x,
                x = _ref$x === undefined ? 110 : _ref$x,
                _ref$y = _ref.y,
                y = _ref$y === undefined ? 680 : _ref$y,
                _ref$callback = _ref.callback,
                callback = _ref$callback === undefined ? _.noop : _ref$callback;

            var overlaySprite = this.game.add.sprite(0, 0, 'background');
            overlaySprite.inputEnabled = true;
            overlaySprite.alpha = 0.0;
            overlaySprite.tint = 0x1f1f1f;

            if (final) {
                var finalVeil = this.game.add.tween(overlaySprite);
                finalVeil.to({ alpha: 1 }, 12 * Phaser.Timer.SECOND, Phaser.Easing.Cubic.InOut);
                finalVeil.start();
            }

            // clear meter highlighting
            this.meterNames.forEach(function (meterName) {
                _this2.sprites[meterName + 'Meter'].alpha = 0.5;
            });

            var textObj = this.game.add.text(0, 0, '', {
                // https://photonstorm.github.io/phaser-ce/Phaser.Text.html
                font: '24px monospace',
                fill: '#ffffff',
                // backgroundColor: '#070707',
                // boundsAlignH: 'center',
                // boundsAlignV: 'middle',
                wordWrap: true,
                wordWrapWidth: 500
            });
            textObj.position.set(x, y);
            textObj.inputEnabled = true;
            textObj.blendMode = Phaser.blendModes.SCREEN;

            var i = 0;
            var typing = this.game.time.events.repeat(speed, text.length, function () {
                textObj.setText(text.substr(0, i + 1));
                i += 1;

                // to avoid accidental dismissal, don't allow immediately dismissing
                // the text by clicking the overlay until the text printing is
                // complete.
                if (i + 1 === text.length) {
                    overlaySprite.events.onInputDown.add(dismiss, _this2);
                }
            }, this);

            this.simPaused = true;

            var dismiss = function dismiss() {
                textObj.destroy(true);
                _this2.simPaused = false;
                callback.call(_this2);
                overlaySprite.destroy();
            };

            textObj.events.onInputDown.add(dismiss, this);

            return textObj;
        }
    }, {
        key: 'startSim',
        value: function startSim() {
            this.sim = new Sim();
            this.sim.print();

            this.winTimer = 0;

            this.simLoop = this.game.time.events.loop(1 * Phaser.Timer.SECOND, this.updateSim, this);
        }
    }, {
        key: 'win',
        value: function win() {
            this.createTextBubble({
                text: 'A warm front blows in from the East.  Winter is over, and you have survived!',
                speed: 40,
                callback: this.toMenu
            });
        }
    }, {
        key: 'toMenu',
        value: function toMenu() {
            this.game.stateTransition.to('MenuState');
        }
    }, {
        key: 'updateSim',
        value: function updateSim() {
            var _this3 = this;

            if (this.simPaused) return;

            // make win!
            if (this.winTimer >= config.WIN_TIME) {
                this.win();
            }
            this.winTimer += 1;

            // get the names of any actions that failed due to violating config.BOUNDS

            var _sim$update = this.sim.update(),
                violations = _sim$update.violations,
                stateChange = _sim$update.stateChange;

            var violationProps = _.map(violations, 'prop');

            if (this.sim.state.deathCauses.length) {
                this.deathBy(this.sim.state.deathCauses);
            }

            // update starvation sound
            this.sounds.starvation.volume = Math.max(0, -0.5 + this.sim.state.hunger / config.BOUNDS.hunger[1]);

            this.meterNames.forEach(function (meter) {
                return _this3.updateMeter(meter);
            });

            // if generator is on and fuel tank is empty
            var tankEmpty = this.sim.state.fuelInUse <= config.BOUNDS.fuelInUse[0];
            var generatorOn = this.sim.state.generator;
            if (tankEmpty && generatorOn) {
                this.sim.toggleGenerator();
                this.stopHeater();
                this.stopGenerator(true);
            }
        }
    }, {
        key: 'updateMeter',
        value: function updateMeter(name) {
            var tween = this.game.add.tween(this.sprites[name + 'Meter']);
            tween.to({
                height: config.METER_HEIGHT * Math.max(0, Math.min(this.sim.state[name], 100)) / Math.min(config.BOUNDS[name][1], 100)
            }, config.SIM_UPDATE_FREQUENCY, Phaser.Easing.Cubic.Out);
            tween.start();
        }
    }, {
        key: 'startHeater',
        value: function startHeater() {
            var _this4 = this;

            this.sounds.heater.play();

            this.heaterOnTween = this.game.add.tween(this.sprites.heaterOn);
            this.heaterOnTween.to({ alpha: 1 }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In);
            this.heaterOnTween.start();

            this.heaterGlowTween = this.game.add.tween(this.sprites.heaterGlow);
            this.heaterGlowTween.to({ alpha: 1 }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In);
            this.heaterGlowTween.start();

            this.heaterGlowTween.onComplete.add(function () {
                _this4.heaterFlickerTween = _this4.game.add.tween(_this4.sprites.heaterGlow);
                _this4.heaterFlickerTween.to({
                    alpha: 0.7
                }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In, true, 0, -1, true);
                _this4.heaterFlickerTween.start();
            }, this);
        }
    }, {
        key: 'stopHeater',
        value: function stopHeater() {
            this.sounds.heater.stop();
            this.sounds.heaterOff.play();

            try {
                // try/catch because these tweens may not exist
                this.heaterOnTween.stop();
                this.heaterGlowTween.stop();
                this.heaterFlickerTween.stop();
            } catch (e) {}

            var heaterOffTween = this.game.add.tween(this.sprites.heaterOn);
            heaterOffTween.to({ alpha: 0 }, 2 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In);
            heaterOffTween.start();

            var heaterGlowOffTween = this.game.add.tween(this.sprites.heaterGlow);
            heaterGlowOffTween.to({ alpha: 0 }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Bounce.In);
            heaterGlowOffTween.start();
        }
    }, {
        key: 'startGenerator',
        value: function startGenerator() {
            this.sounds.generator.play();
        }
    }, {
        key: 'stopGenerator',
        value: function stopGenerator(outOfFuel) {
            this.sounds.generator.stop();
            if (outOfFuel) {
                this.sounds.generatorEmpty.play();
            } else {
                this.sounds.generatorOff.play();
            }
        }
    }, {
        key: 'stopSim',
        value: function stopSim() {
            this.simLoop.pendingDelete = true;
        }
    }, {
        key: 'deathBy',
        value: function deathBy(causes) {
            this.stopSim();

            // also stop certain sounds
            if (this.sounds.starvation.isPlaying) {
                this.sounds.starvation.stop();
            }

            var message = '';
            // for simplicity only mention the first cause of death
            switch (causes[0]) {
                case 'warmth':
                    message = 'The last remnant of warmth leaves your body.  Your role in the grand convection of the universe has ended.';
                    break;
                case 'hunger':
                    message = 'Your empty stomch feels oddly calm, even as your strength fails.  You slip first into a deep sleep, then drift away.';
                    break;
                default:
                    message = 'DIED BUT NO MESSAGE WAS GIVEN';
            }
            this.createTextBubble({
                text: message,
                speed: 40,
                callback: this.toMenu,
                final: true
            });
        }
    }, {
        key: 'drawInitialScene',
        value: function drawInitialScene() {
            var _this5 = this;

            this.sprites = {};

            var y = 100;

            this.sprites.sky = this.game.add.sprite(0, y, 'sky');
            this.sprites.sky2 = this.game.add.sprite(0, y, 'sky');
            this.sprites.mountain4 = this.game.add.sprite(0, y, 'mountain4');
            this.sprites.mountain3 = this.game.add.sprite(0, y, 'mountain3');
            this.sprites.mountain2 = this.game.add.sprite(0, y, 'mountain2');
            this.sprites.mountain1 = this.game.add.sprite(0, y, 'mountain1');

            // animate the sky
            this.sprites.sky2.position.y = this.sprites.sky2.height + this.sprites.sky2.position.y;
            var skyTween = this.game.add.tween(this.sprites.sky);
            skyTween.to({ y: -this.sprites.sky.height }, 4 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, true, 0, -1);
            var sky2Tween = this.game.add.tween(this.sprites.sky2);
            sky2Tween.to({ y: y }, 4 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, true, 0, -1);

            ['mountain1', 'mountain2', 'mountain3', 'mountain4'].forEach(function (num) {
                var sprite = _this5.sprites[num];
                sprite.blendMode = Phaser.blendModes.MULTIPLY;
            });
        }
    }, {
        key: 'initEventHandlers',
        value: function initEventHandlers() {
            var _this6 = this;

            // generator handlers
            this.sprites.generator.events.onInputDown.add(this.sim.toggleGenerator, this.sim);
            this.sprites.generator.events.onInputDown.add(function () {
                if (_this6.sim.state.generator) {
                    _this6.startGenerator();
                } else {
                    _this6.stopHeater();
                    _this6.stopGenerator(false);
                }
            });
            this.sprites.generator.events.onInputDown.add(function () {
                if (_this6.sim.state.fuelInUse > 0) {
                    if (!_this6.sprites.generator.data.used) {
                        _this6.sprites.generator.data.used = true;
                        _this6.createTextBubble({
                            text: 'You flip a switch and the generator rewards you with a reassuring rumble.'
                        });
                    }
                } else {
                    if (!_this6.sprites.generator.data.usedNoPower) {
                        _this6.sprites.generator.data.usedNoPower = true;
                        _this6.createTextBubble({
                            text: 'The generator\'s complaining rumble indicates a lack of fuel.'
                        });
                    }
                }
            }, this.sim);

            // heater handlers
            this.sprites.heater.events.onInputDown.add(function () {
                // only turn on heater if generator is on already
                if (_this6.sim.state.generator) {
                    _this6.sim.toggleHeater();
                }
            }, this.sim);
            this.sprites.heater.events.onInputDown.add(function () {
                if (_this6.sim.state.heater) {
                    _this6.startHeater();
                } else {
                    _this6.stopHeater();
                }
            });
            this.sprites.heater.events.onInputDown.add(function () {
                if (_this6.sim.state.generator) {
                    if (!_this6.sprites.heater.data.used) {
                        _this6.sprites.heater.data.used = true;
                        _this6.createTextBubble({
                            text: 'You click on the heater, and the comforting orange glow bathes the cabin in warmth and light.'
                        });
                    }
                } else {
                    if (!_this6.sprites.heater.data.usedNoPower) {
                        _this6.sprites.heater.data.usedNoPower = true;
                        _this6.createTextBubble({
                            text: 'You click on the heater, but without the generator running, there is no power.'
                        });
                    }
                }
            }, this.sim);

            // lamp handlers
            // this.sprites.lamp.events.onInputDown.add(this.sim.toggleLamp, this.sim);

            // cupboard handlers
            this.sprites.cupboard.events.onInputDown.add(this.sim.eatFood, this.sim);
            this.sprites.cupboard.events.onInputDown.add(function () {
                return _this6.sounds.nom.play();
            }, this.sim);
            this.sprites.cupboard.events.onInputDown.add(function () {
                if (!_this6.sprites.cupboard.data.used) {
                    _this6.sprites.cupboard.data.used = true;
                    var text = void 0;
                    if (_this6.sim.state.heater) {
                        text = 'You pull a can of beans from the cupboard and warm them a bit in front of the heater.\n\nAll things considered, they don\'t taste half bad.';
                    } else {
                        text = 'You pull a can from the cupboard and crack it open. The beans inside are nearly frozen. They abate your hunger, though, and provide some scant nourishment.';
                    }
                    _this6.createTextBubble({ text: text });
                }
            }, this.sim);

            // refuel handlers
            this.sprites.fuel.events.onInputDown.add(function () {
                if (!_this6.sprites.fuel.data.used) {
                    _this6.sprites.fuel.data.used = true;
                    _this6.createTextBubble({
                        text: 'After trudging up the mountain path, you give the generator a much-needed refueling. On the way back, the door is frozen shut, but you manage to bust it open at the cost of a bruised shoulder.'
                    });
                }
            }, this.sim);
            this.sprites.fuel.events.onInputDown.add(this.sim.refuelGenerator, this.sim);
            this.sprites.fuel.events.onInputDown.add(function () {
                _this6.sounds.refuel.play();
            }, this.sim);

            // you handlers
            this.sprites.you.events.onInputDown.add(function () {
                var text = void 0;
                if (_this6.sim.state.hunger / config.BOUNDS.hunger[1] > 0.9) {
                    text = 'You feel very hungry.';
                } else if (_this6.sim.state.warmth <= 2) {
                    text = 'You are shivering.';
                } else if (_this6.sim.state.fuelReserve <= 2) {
                    text = 'Worry over fuel reserves is everpresent in your thoughts.';
                } else if (_this6.sim.state.hungerSlope < -10) {
                    text = 'You overdid it a little with the beans.  Ugh.';
                } else {
                    text = 'You feel lonely.';
                }
                _this6.createTextBubble({ text: text });
            }, this.sim);

            // highlight meters when hovering over certain sprites
            this.sprites.generator.events.onInputOver.add(function () {
                _this6.sprites.fuelInUseMeter.alpha = 1;
            });
            this.sprites.generator.events.onInputOut.add(function () {
                _this6.sprites.fuelInUseMeter.alpha = 0.5;
            });
            this.sprites.fuel.events.onInputOver.add(function () {
                _this6.sprites.fuelReserveMeter.alpha = 1;
            });
            this.sprites.fuel.events.onInputOut.add(function () {
                _this6.sprites.fuelReserveMeter.alpha = 0.5;
            });
            this.sprites.fuel.events.onInputOver.add(function () {
                _this6.sprites.fuelInUseMeter.alpha = 1;
            });
            this.sprites.fuel.events.onInputOut.add(function () {
                _this6.sprites.fuelInUseMeter.alpha = 0.5;
            });
            this.sprites.heater.events.onInputOver.add(function () {
                _this6.sprites.warmthMeter.alpha = 1;
            });
            this.sprites.heater.events.onInputOut.add(function () {
                _this6.sprites.warmthMeter.alpha = 0.5;
            });
            this.sprites.cupboard.events.onInputOver.add(function () {
                _this6.sprites.foodMeter.alpha = 1;
            });
            this.sprites.cupboard.events.onInputOut.add(function () {
                _this6.sprites.foodMeter.alpha = 0.5;
            });
            this.sprites.cupboard.events.onInputOver.add(function () {
                _this6.sprites.hungerMeter.alpha = 1;
            });
            this.sprites.cupboard.events.onInputOut.add(function () {
                _this6.sprites.hungerMeter.alpha = 0.5;
            });
        }
    }]);

    return PlayState;
}(Phaser.State);