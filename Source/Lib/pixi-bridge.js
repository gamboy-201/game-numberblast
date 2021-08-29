/** 
	Pixi Bridge v1.3.1 
	©Ingenuity Gaming Pvt. Ltd.
	Published: Wed Jul 01 2020 17:03:44 GMT+0530 (India Standard Time) 
**/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var RENDERER_TYPE;
        (function (RENDERER_TYPE) {
            RENDERER_TYPE[RENDERER_TYPE["UNKNOWN"] = 0] = "UNKNOWN";
            RENDERER_TYPE[RENDERER_TYPE["WEBGL"] = 1] = "WEBGL";
            RENDERER_TYPE[RENDERER_TYPE["CANVAS"] = 2] = "CANVAS";
            RENDERER_TYPE[RENDERER_TYPE["AUTO"] = 3] = "AUTO";
        })(RENDERER_TYPE = bridge.RENDERER_TYPE || (bridge.RENDERER_TYPE = {}));
        bridge.KeyCode = {
            A: "A".charCodeAt(0),
            B: "B".charCodeAt(0),
            C: "C".charCodeAt(0),
            D: "D".charCodeAt(0),
            E: "E".charCodeAt(0),
            F: "F".charCodeAt(0),
            G: "G".charCodeAt(0),
            H: "H".charCodeAt(0),
            I: "I".charCodeAt(0),
            J: "J".charCodeAt(0),
            K: "K".charCodeAt(0),
            L: "L".charCodeAt(0),
            M: "M".charCodeAt(0),
            N: "N".charCodeAt(0),
            O: "O".charCodeAt(0),
            P: "P".charCodeAt(0),
            Q: "Q".charCodeAt(0),
            R: "R".charCodeAt(0),
            S: "S".charCodeAt(0),
            T: "T".charCodeAt(0),
            U: "U".charCodeAt(0),
            V: "V".charCodeAt(0),
            W: "W".charCodeAt(0),
            X: "X".charCodeAt(0),
            Y: "Y".charCodeAt(0),
            Z: "Z".charCodeAt(0),
            ZERO: "0".charCodeAt(0),
            ONE: "1".charCodeAt(0),
            TWO: "2".charCodeAt(0),
            THREE: "3".charCodeAt(0),
            FOUR: "4".charCodeAt(0),
            FIVE: "5".charCodeAt(0),
            SIX: "6".charCodeAt(0),
            SEVEN: "7".charCodeAt(0),
            EIGHT: "8".charCodeAt(0),
            NINE: "9".charCodeAt(0),
            NUMPAD_0: 96,
            NUMPAD_1: 97,
            NUMPAD_2: 98,
            NUMPAD_3: 99,
            NUMPAD_4: 100,
            NUMPAD_5: 101,
            NUMPAD_6: 102,
            NUMPAD_7: 103,
            NUMPAD_8: 104,
            NUMPAD_9: 105,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_ADD: 107,
            NUMPAD_ENTER: 108,
            NUMPAD_SUBTRACT: 109,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            COLON: 186,
            EQUALS: 187,
            COMMA: 188,
            UNDERSCORE: 189,
            PERIOD: 190,
            QUESTION_MARK: 191,
            TILDE: 192,
            OPEN_BRACKET: 219,
            BACKWARD_SLASH: 220,
            CLOSED_BRACKET: 221,
            QUOTES: 222,
            BACKSPACE: 8,
            TAB: 9,
            CLEAR: 12,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACEBAR: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PLUS: 43,
            MINUS: 44,
            INSERT: 45,
            DELETE: 46,
            HELP: 47,
            NUM_LOCK: 144
        };
        bridge.PointerMode = {
            CURSOR: 1 << 0,
            CONTACT: 1 << 1
        };
        bridge._Device = null;
        bridge.UNKNOWN = 0;
        bridge.WEBGL = 1;
        bridge.CANVAS = 2;
        bridge.AUTO = 3;
        bridge.HEADLESS = 3;
        bridge.NONE = 0;
        bridge.LEFT = 1;
        bridge.RIGHT = 2;
        bridge.UP = 3;
        bridge.DOWN = 4;
        bridge.SPRITE = 0;
        bridge.BUTTON = 1;
        bridge.IMAGE = 2;
        bridge.GRAPHICS = 3;
        bridge.TEXT = 4;
        bridge.TILESPRITE = 5;
        bridge.BITMAPTEXT = 6;
        bridge.GROUP = 7;
        bridge.RENDERTEXTURE = 8;
        bridge.TILEMAP = 9;
        bridge.TILEMAPLAYER = 10;
        bridge.EMITTER = 11;
        bridge.POLYGON = 12;
        bridge.BITMAPDATA = 13;
        bridge.CANVAS_FILTER = 14;
        bridge.WEBGL_FILTER = 15;
        bridge.ELLIPSE = 16;
        bridge.SPRITEBATCH = 17;
        bridge.RETROFONT = 18;
        bridge.POINTER = 19;
        bridge.ROPE = 20;
        bridge.CIRCLE = 21;
        bridge.RECTANGLE = 22;
        bridge.LINE = 23;
        bridge.MATRIX = 24;
        bridge.POINT = 25;
        bridge.ROUNDEDRECTANGLE = 26;
        bridge.CREATURE = 27;
        bridge.VIDEO = 28;
        bridge.PENDING_ATLAS = -1;
        bridge.HORIZONTAL = 0;
        bridge.VERTICAL = 1;
        bridge.LANDSCAPE = 0;
        bridge.PORTRAIT = 1;
        bridge.ANGLE_UP = 270;
        bridge.ANGLE_DOWN = 90;
        bridge.ANGLE_LEFT = 180;
        bridge.ANGLE_RIGHT = 0;
        bridge.ANGLE_NORTH_EAST = 315;
        bridge.ANGLE_NORTH_WEST = 225;
        bridge.ANGLE_SOUTH_EAST = 45;
        bridge.ANGLE_SOUTH_WEST = 135;
        bridge.TOP_LEFT = 0;
        bridge.TOP_CENTER = 1;
        bridge.TOP_RIGHT = 2;
        bridge.LEFT_TOP = 3;
        bridge.LEFT_CENTER = 4;
        bridge.LEFT_BOTTOM = 5;
        bridge.CENTER = 6;
        bridge.RIGHT_TOP = 7;
        bridge.RIGHT_CENTER = 8;
        bridge.RIGHT_BOTTOM = 9;
        bridge.BOTTOM_LEFT = 10;
        bridge.BOTTOM_CENTER = 11;
        bridge.BOTTOM_RIGHT = 12;
        bridge.blendModes = PIXI.BLEND_MODES;
        bridge.scaleModes = {
            DEFAULT: 0,
            LINEAR: 0,
            NEAREST: 1
        };
        bridge.FPS = 60;
        bridge.EApplication = PIXI.Application;
        bridge.EDisplayObject = PIXI.DisplayObject;
        bridge.EContainer = PIXI.Container;
        bridge.EGraphics = PIXI.Graphics;
        bridge.ECircle = PIXI.Circle;
        bridge.EEllipse = PIXI.Ellipse;
        bridge.EPolygon = PIXI.Polygon;
        bridge.ERectangle = PIXI.Rectangle;
        bridge.ERoundedRectangle = PIXI.RoundedRectangle;
        bridge.EPoint = PIXI.Point;
        bridge.ESprite = PIXI.Sprite;
        bridge.EAnimation = PIXI.AnimatedSprite;
        bridge.EBaseTexture = PIXI.BaseTexture;
        bridge.ESpritesheet = PIXI.Spritesheet;
        bridge.ETexture = PIXI.Texture;
        bridge.EText = PIXI.Text;
        bridge.EObservablePoint = PIXI.ObservablePoint;
        bridge.EBitmapText = PIXI.BitmapText;
        bridge.EParticleContainer = PIXI.ParticleContainer;
        bridge.EMatrix = PIXI.Matrix;
        bridge.ERenderTexture = PIXI.RenderTexture;
        bridge.ESimpleRope = PIXI.SimpleRope;
        bridge.ETextInput = PIXI.TextInput;
        bridge.projection = PIXI.projection;
        if (!window.hasOwnProperty("THREE")) {
            window.THREE = {};
        }
        bridge.EThree = THREE;
        bridge.controls = THREE;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var IFilterType;
        (function (IFilterType) {
            IFilterType[IFilterType["ALPHA_FILTER"] = 1] = "ALPHA_FILTER";
            IFilterType[IFilterType["BLUR_FILTER"] = 2] = "BLUR_FILTER";
            IFilterType[IFilterType["BLUR_FILTER_PASS"] = 3] = "BLUR_FILTER_PASS";
            IFilterType[IFilterType["COLOR_MATRIX_FILTER"] = 4] = "COLOR_MATRIX_FILTER";
            IFilterType[IFilterType["DISPLACEMENT_FILTER"] = 5] = "DISPLACEMENT_FILTER";
            IFilterType[IFilterType["FXAA_FILTER"] = 6] = "FXAA_FILTER";
            IFilterType[IFilterType["NOISE_FILTER"] = 7] = "NOISE_FILTER";
        })(IFilterType = bridge.IFilterType || (bridge.IFilterType = {}));
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    function byPassMissingPluginError() {
        var classList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classList[_i] = arguments[_i];
        }
        classList.forEach(function (name) {
            var parts = name.split(".");
            var chainedClass = "";
            for (var i = 0; i < parts.length; i++) {
                chainedClass += parts[i].concat();
                if (eval(chainedClass) === undefined) {
                    console.warn("ingenuity :: " + chainedClass + " class doesn't exist.");
                    eval(chainedClass + " = function() {}");
                }
                chainedClass += ".";
            }
        });
    }
    ingenuity.byPassMissingPluginError = byPassMissingPluginError;
    function byPassNoClassError(className) {
        if (!window.hasOwnProperty(className)) {
            console.warn("ingenuity :: " + className + " doesn't exist.");
        }
    }
    ingenuity.byPassNoClassError = byPassNoClassError;
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Animation = (function () {
            function Animation(game, parent, texture, name, frameData, frames, frameRate, loop) {
                this.frames = [];
                this.animationSpeed = 1;
                this.currentTime = 0;
                this.frameRate = 60;
                if (loop === undefined) {
                    loop = false;
                }
                this.game = game;
                this.parent = parent;
                this.frameData = frameData;
                this.name = name;
                this.frames = [];
                this.frames = this.frames.concat(frames);
                this.delay = 1000 / frameRate;
                this.frameRate = frameRate;
                this.loop = loop;
                this.loopCount = 0;
                this.killOnComplete = false;
                this.isFinished = false;
                this.isPlaying = false;
                this.isPaused = false;
                this.pauseStartTime = 0;
                this.frameIndex = 0;
                this.prvFrameIndex = null;
                this.frameDiff = 0;
                this.frameSkip = 1;
                this.currentFrame = this.frameData.getFrame(this.frames[this.frameIndex]);
                this.onStart = new bridge.Signal();
                this.onUpdate = null;
                this.onComplete = new bridge.Signal();
                this.onLoop = new bridge.Signal();
                this.isReversed = false;
                this.textures = texture;
            }
            Animation.prototype.complete = function () {
                this.isPlaying = false;
                this.isFinished = true;
                this.isPaused = false;
                this.prvFrameIndex = null;
                this.parent.events.onAnimationComplete$dispatch(this.parent, this);
                this.onComplete.dispatch(this.parent, this);
                if (this.killOnComplete) {
                }
            };
            Animation.prototype.destroy = function () {
                this.game = null;
                this.parent = null;
                this.onStart.dispose();
                this.onLoop.dispose();
                this.onComplete.dispose();
                this.onUpdate && this.onUpdate.dispose();
            };
            Animation.generateFrameNames = function (prefix, start, stop, suffix, zeroPad) {
                if (suffix === undefined) {
                    suffix = "";
                }
                var output = [];
                var frame = "";
                if (start < stop) {
                    for (var i = start; i <= stop; i++) {
                        if (typeof zeroPad === "number") {
                            frame = bridge.pad(i.toString(), zeroPad, "0", 1);
                        }
                        else {
                            frame = i.toString();
                        }
                        frame = prefix + frame + suffix;
                        output.push(frame);
                    }
                }
                else {
                    for (var i = start; i >= stop; i--) {
                        if (typeof zeroPad === "number") {
                            frame = bridge.pad(i.toString(), zeroPad, "0", 1);
                        }
                        else {
                            frame = i.toString();
                        }
                        frame = prefix + frame + suffix;
                        output.push(frame);
                    }
                }
                return output;
            };
            Animation.prototype.next = function (quantity) {
                if (quantity === void 0) { quantity = 1; }
                this.frameIndex = this.parent.currentFrame;
                this.frameIndex += quantity;
                if (this.frameIndex >= this.frames.length) {
                    if (this.loop) {
                        this.frameIndex %= this.frames.length;
                    }
                    else {
                        this.frameIndex = this.frames.length - 1;
                    }
                }
                this.currentFrame = this.frameData.getFrame(this.frames[this.frameIndex]);
                this.parent.animations.currentFrame = this.currentFrame;
                return this;
            };
            Animation.prototype.previous = function (quantity) {
                if (quantity === void 0) { quantity = 1; }
                this.frameIndex = this.parent.currentFrame;
                this.frameIndex -= quantity;
                if (this.frameIndex < 0) {
                    if (this.loop) {
                        this.frameIndex = (this.frameIndex % this.frames.length) + this.frames.length;
                    }
                    else {
                        this.frameIndex = 0;
                    }
                }
                this.currentFrame = this.frameData.getFrame(this.frames[this.frameIndex]);
                this.parent.animations.currentFrame = this.currentFrame;
                return this;
            };
            Animation.prototype.play = function (frameRate, loop, killOnComplete) {
                this.parent.textures = this.textures;
                if (typeof frameRate === "number") {
                    this.delay = 1000 / frameRate;
                    this.frameRate = frameRate;
                }
                if (typeof loop === "boolean") {
                    this.loop = loop;
                }
                if (typeof killOnComplete !== "undefined") {
                    this.killOnComplete = killOnComplete;
                }
                this.isPlaying = true;
                this.isFinished = false;
                this.isPaused = false;
                this.pauseStartTime = 0;
                this.loopCount = 0;
                this.timeLastFrame = this.game.time.time;
                this.timeNextFrame = this.game.time.time + this.delay;
                this.frameIndex = this.isReversed ? this.frames.length - 1 : 0;
                this.prvFrameIndex = null;
                this.onStart.dispatch(this.parent, this);
                this.parent.animations.currentAnim = this;
                this.parent.animations.currentFrame = this.currentFrame;
                this.parent.animationSpeed = Number((this.frameRate / bridge.FPS).toFixed(Animation.SPEED_PRECISION)) || 1;
                this.parent.loop = this.loop;
                this.parent.play();
                return this;
            };
            Animation.prototype.stop = function (resetFrame, dispatchComplete) {
                this.isPlaying = false;
                this.parent.stop();
                this.pauseStartTime = 0;
                dispatchComplete && this.complete();
                return this;
            };
            Animation.prototype.update = function () {
                if (this.isPaused) {
                    return false;
                }
                if (this.isPlaying) {
                    this.prvFrameIndex = this.frameIndex;
                    this.frameIndex = this.parent.currentFrame;
                    if (this.reversed) {
                        if (this.loop) {
                            if (this.frameIndex >= this.frames.length - 1 && this.frameIndex > this.prvFrameIndex) {
                                this.loopCount++;
                                this.onLoop.dispatch(this.parent, this);
                                return false;
                            }
                        }
                        else {
                            if (this.frameIndex <= 0 && this.frameIndex < this.prvFrameIndex) {
                                this.complete();
                                return false;
                            }
                        }
                    }
                    else {
                        if (this.loop) {
                            if (this.frameIndex <= 0 && this.frameIndex < this.prvFrameIndex) {
                                this.loopCount++;
                                this.onLoop.dispatch(this.parent, this);
                                return false;
                            }
                        }
                        else {
                            if (this.frameIndex >= this.frames.length - 1 && this.frameIndex > this.prvFrameIndex) {
                                this.complete();
                                return false;
                            }
                        }
                    }
                    (this.enableUpdate && this.onUpdate) && this.onUpdate.dispatch(this, this.currentFrame);
                }
                return false;
            };
            Animation.prototype.gotoAndStop = function (frameNumber) {
                this.parent.gotoAndStop(frameNumber);
            };
            Animation.prototype.updateFrameData = function (frameData) {
                this.frameData = frameData;
                this.currentFrame = this.frameData ? this.frameData.getFrame(this.frames[this.frameIndex % this.frames.length]) : null;
            };
            Object.defineProperty(Animation.prototype, "currFrame", {
                get: function () {
                    var currentFrame = Math.floor(this.currentTime) % this.textures.length;
                    if (currentFrame < 0) {
                        currentFrame += this.textures.length;
                    }
                    return currentFrame;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Animation.prototype, "enableUpdate", {
                get: function () {
                    return !!this.onUpdate;
                },
                set: function (val) {
                    if (val) {
                        this.onUpdate = new bridge.Signal();
                    }
                    else {
                        this.onUpdate && this.onUpdate.dispose();
                        this.onUpdate = null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Animation.prototype, "reversed", {
                get: function () {
                    return this.isReversed;
                },
                set: function (value) {
                    this.isReversed = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Animation.prototype, "paused", {
                get: function () {
                    return this.isPaused;
                },
                set: function (value) {
                    if (value) {
                        this.pauseStartTime = this.game.time.time;
                        this.isPaused = true;
                        this.stop(false, false);
                    }
                    else {
                        this.play();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Animation.prototype.onPause = function () {
                if (this.isPlaying) {
                    this.frameDiff = this.timeNextFrame - this.game.time.time;
                }
            };
            Animation.prototype.onResume = function () {
                if (this.isPlaying) {
                    this.timeNextFrame = this.game.time.time + this.frameDiff;
                }
            };
            Animation.SPEED_PRECISION = 6;
            return Animation;
        }());
        bridge.Animation = Animation;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var AnimationManager = (function () {
            function AnimationManager(sprite) {
                this.outputFrames = [];
                this.sprite = sprite;
                this.game = sprite.game;
                this.currentFrame = null;
                this.currentAnim = null;
                this.updateIfVisible = true;
                this.isLoaded = false;
                this.frameDataObj = null;
                this.anims = {};
                this.outputFrames = [];
                this.texture = sprite.textureArray;
            }
            AnimationManager.prototype.loadFrameData = function (frameData, frame) {
                if (frameData === undefined) {
                    return false;
                }
                if (this.isLoaded) {
                    for (var anim in this.anims) {
                        if (this.anims.hasOwnProperty(anim)) {
                            this.anims[anim].updateFrameData(frameData);
                        }
                    }
                }
                this.frameDataObj = frameData;
                if (frame === undefined || frame === null) {
                    this.frame = 0;
                }
                else if (typeof frame === "string") {
                    this.frameName = frame;
                }
                else {
                    this.frame = frame;
                }
                this.isLoaded = true;
                return true;
            };
            AnimationManager.prototype.add = function (name, frames, frameRate, loop, useNumericIndex) {
                frames = frames || [];
                frameRate = frameRate || 60;
                if (loop === undefined) {
                    loop = false;
                }
                var texture = this.texture;
                if (useNumericIndex === undefined) {
                    if (frames && typeof frames[0] === "number") {
                        useNumericIndex = true;
                        texture = this.createTextureArrayFromNumber(frames);
                    }
                    else {
                        useNumericIndex = false;
                        texture = this.createTextureArrayFromNames(frames);
                    }
                }
                else {
                    if (frames && typeof frames[0] === "number") {
                        useNumericIndex = true;
                        texture = this.createTextureArrayFromNumber(frames);
                    }
                }
                this.outputFrames = [];
                this.frameDataObj.getFrameIndexes(frames, useNumericIndex, this.outputFrames);
                this.anims[name] = new bridge.Animation(this.game, this.sprite, texture, name, this.frameDataObj, this.outputFrames, frameRate, loop);
                this.currentAnim = this.anims[name];
                return this.anims[name];
            };
            AnimationManager.prototype.createTextureArrayFromNames = function (frames) {
                var textureArray = [];
                frames.forEach(function (element) {
                    textureArray.push(bridge.Texture.from(element));
                });
                return textureArray;
            };
            AnimationManager.prototype.createTextureArrayFromNumber = function (frames) {
                var textureArray = [];
                for (var i = 0; i < frames.length; i++) {
                    textureArray.push(bridge.Texture.from(this.frameDataObj.frames[frames[i]].name));
                }
                return textureArray;
            };
            AnimationManager.prototype.play = function (name, frameRate, loop, killOnComplete) {
                if (this.anims[name]) {
                    if (this.currentAnim === this.anims[name]) {
                        if (this.currentAnim.isPlaying === false) {
                            this.currentAnim.paused = false;
                            return this.currentAnim.play(frameRate, loop, killOnComplete);
                        }
                        return this.currentAnim;
                    }
                    else {
                        if (this.currentAnim && this.currentAnim.isPlaying) {
                            this.currentAnim.stop();
                        }
                        this.currentAnim = this.anims[name];
                        this.currentAnim.paused = false;
                        this.currentFrame = this.currentAnim.currentFrame;
                        return this.currentAnim.play(frameRate, loop, killOnComplete);
                    }
                }
            };
            AnimationManager.prototype.stop = function (name, resetFrame) {
                if (resetFrame === void 0) { resetFrame = false; }
                if (this.currentAnim && (typeof name !== "string" || name === this.currentAnim.name)) {
                    this.currentAnim.stop(resetFrame);
                }
            };
            AnimationManager.prototype.update = function () {
                if (this.updateIfVisible && !this.sprite.visible) {
                    return false;
                }
                if (this.currentAnim && this.currentAnim.update()) {
                    this.currentFrame = this.currentAnim.currentFrame;
                    return true;
                }
                return false;
            };
            AnimationManager.prototype.next = function (quantity) {
                if (this.currentAnim) {
                    this.currentAnim.next(quantity);
                    this.currentFrame = this.currentAnim.currentFrame;
                }
                return this.currentAnim;
            };
            AnimationManager.prototype.previous = function (quantity) {
                if (this.currentAnim) {
                    this.currentAnim.previous(quantity);
                    this.currentFrame = this.currentAnim.currentFrame;
                }
                return this.currentAnim;
            };
            AnimationManager.prototype.getAnimation = function (name) {
                if (typeof name === "string") {
                    if (this.anims[name]) {
                        return this.anims[name];
                    }
                }
                return null;
            };
            AnimationManager.prototype.destroy = function () {
                for (var anim in this.anims) {
                    if (this.anims.hasOwnProperty(anim)) {
                        this.anims[anim].destroy();
                    }
                }
                this.anims = {};
                this.outputFrames = [];
                this.frameDataObj = null;
                this.currentAnim = null;
                this.currentFrame = null;
                this.sprite = null;
                this.game = null;
            };
            Object.defineProperty(AnimationManager.prototype, "frameData", {
                get: function () {
                    return this.frameDataObj;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "frameTotal", {
                get: function () {
                    return this.frameData.total;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "paused", {
                get: function () {
                    return this.currentAnim.isPaused;
                },
                set: function (value) {
                    this.currentAnim.paused = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "frame", {
                get: function () {
                    if (this.currentFrame) {
                        return this.currentFrame.index;
                    }
                },
                set: function (value) {
                    var gotFrame;
                    if (typeof value === "number" && this.frameData && (gotFrame = this.frameData.getFrame(value))) {
                        this.currentFrame = gotFrame;
                        this.sprite.setFrame(this.currentFrame);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "name", {
                get: function () {
                    if (this.currentAnim) {
                        return this.currentAnim.name;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "frameName", {
                get: function () {
                    if (this.currentFrame) {
                        return this.currentFrame.name;
                    }
                },
                set: function (value) {
                    var gotFrame;
                    if (typeof value === "string" && this.frameData && (gotFrame = this.frameData.getFrameByName(value))) {
                        this.currentFrame = gotFrame;
                        this.sprite.setFrame(this.currentFrame);
                    }
                    else {
                        console.warn("Cannot set frameName: " + value);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return AnimationManager;
        }());
        bridge.AnimationManager = AnimationManager;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var AnimationParser = (function () {
            function AnimationParser() {
            }
            AnimationParser.spriteSheet = function (game, key, frameWidth, frameHeight, frameMax, margin, spacing, skipFrames) {
                if (frameMax === undefined) {
                    frameMax = -1;
                }
                if (margin === undefined) {
                    margin = 0;
                }
                if (spacing === undefined) {
                    spacing = 0;
                }
                if (skipFrames === undefined) {
                    skipFrames = 0;
                }
                var img = key;
                if (typeof key === "string") {
                    img = game.cache.getImage(key);
                }
                else {
                    key = img.name;
                }
                if (img === null) {
                    return null;
                }
                if (frameWidth <= 0 || frameHeight <= 0) {
                    console.warn("bridge.AnimationParser.spriteSheet: '%s' frameWidth (%s) or frameHeight (%s) must be positive", key, frameWidth, frameHeight);
                    return null;
                }
                var width = img.width;
                var height = img.height;
                if (width === 0 || height === 0) {
                    console.warn("bridge.AnimationParser.spriteSheet: '%s' width (%s) or height (%s) is zero", key, width, height);
                    return null;
                }
                if (width < frameWidth || height < frameHeight) {
                    console.warn("bridge.AnimationParser.spriteSheet: '%s' width (%s) or height (%s) is less than the given frameWidth (%s) or frameHeight (%s)", key, width, height, frameWidth, frameHeight);
                    return null;
                }
                var row = Math.floor((width - margin) / (frameWidth + spacing));
                var column = Math.floor((height - margin) / (frameHeight + spacing));
                var total = row * column;
                var totalAvailable = total;
                var lastAvailable = total - 1;
                var firstFrame = 0;
                var lastFrame = lastAvailable;
                if (skipFrames > total || skipFrames < -total) {
                    console.warn("bridge.AnimationParser.spriteSheet: '%s' skipFrames = %s is larger than the frame total %s", key, skipFrames, total);
                    return null;
                }
                if (frameMax > -1) {
                    total = frameMax;
                    lastFrame = total - 1;
                }
                if (row < 1) {
                    console.warn("bridge.AnimationParser.spriteSheet: image '%s' has width %d, but it should be at least %d (frameWidth=%s, margin=%s, spacing=%s)", key, width, frameWidth + margin + spacing, frameWidth, margin, spacing);
                }
                if (column < 1) {
                    console.warn("bridge.AnimationParser.spriteSheet: image '%s' has height %d, but it should be at least %d (frameHeight=%s, margin=%s, spacing=%s)", key, height, frameHeight + margin + spacing, frameHeight, margin, spacing);
                }
                if (totalAvailable === 0) {
                    console.warn("bridge.AnimationParser.spriteSheet: '%s' zero frames were produced", key);
                    return null;
                }
                if (skipFrames > 0) {
                    firstFrame = skipFrames;
                    total = Math.min(total, totalAvailable - skipFrames);
                    lastFrame = firstFrame + total - 1;
                }
                else if (skipFrames < 0) {
                    lastFrame = lastAvailable + skipFrames;
                    total = Math.min(total, totalAvailable + skipFrames);
                    firstFrame = lastFrame - total + 1;
                }
                if (firstFrame < 0) {
                    console.warn("First frame index %s is outside of range [0, %d]", firstFrame, lastAvailable);
                    return null;
                }
                if (lastFrame > lastAvailable) {
                    console.warn("Last frame index %s is outside of range [0, %d]", lastFrame, lastAvailable);
                    return null;
                }
                var data = new bridge.FrameData();
                var x = margin;
                var y = margin;
                var frameIndex = 0;
                for (var i = 0; i < totalAvailable; i++) {
                    if (i > lastFrame) {
                        break;
                    }
                    if (i >= firstFrame) {
                        data.addFrame(new bridge.Frame(frameIndex++, x, y, frameWidth, frameHeight, ""));
                    }
                    x += frameWidth + spacing;
                    if (x + frameWidth > width) {
                        x = margin;
                        y += frameHeight + spacing;
                    }
                }
                return data;
            };
            AnimationParser.JSONData = function (game, json) {
                if (!json.frames) {
                    console.warn("bridge.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array");
                    console.log(json);
                    return;
                }
                var data = new bridge.FrameData();
                var frames = json.frames;
                var newFrame;
                for (var i = 0; i < frames.length; i++) {
                    newFrame = data.addFrame(new bridge.Frame(i, frames[i].frame.x, frames[i].frame.y, frames[i].frame.w, frames[i].frame.h, frames[i].filename));
                    if (frames[i].trimmed) {
                        newFrame.setTrim(frames[i].trimmed, frames[i].sourceSize.w, frames[i].sourceSize.h, frames[i].spriteSourceSize.x, frames[i].spriteSourceSize.y, frames[i].spriteSourceSize.w, frames[i].spriteSourceSize.h);
                    }
                    if (frames[i].rotated) {
                        newFrame.rotated = true;
                    }
                }
                return data;
            };
            AnimationParser.JSONDataPyxel = function (game, json) {
                var signature = ["layers", "tilewidth", "tileheight", "tileswide", "tileshigh"];
                signature.forEach(function (key) {
                    if (!json[key]) {
                        console.warn('bridge.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing "' + key + '" key.');
                        console.log(json);
                        return;
                    }
                });
                if (json.layers.length !== 1) {
                    console.warn("bridge.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps.");
                    console.log(json);
                    return;
                }
                var data = new bridge.FrameData();
                var tileheight = json.tileheight;
                var tilewidth = json.tilewidth;
                var frames = json.layers[0].tiles;
                var newFrame;
                for (var i = 0; i < frames.length; i++) {
                    newFrame = data.addFrame(new bridge.Frame(i, frames[i].x, frames[i].y, tilewidth, tileheight, "frame_" + i));
                    newFrame.setTrim(false);
                }
                return data;
            };
            AnimationParser.JSONDataHash = function (game, json) {
                if (!json.frames) {
                    console.warn("bridge.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object");
                    console.log(json);
                    return;
                }
                var data = new bridge.FrameData();
                var frames = json.frames;
                var newFrame;
                var i = 0;
                for (var key in frames) {
                    newFrame = data.addFrame(new bridge.Frame(i, frames[key].frame.x, frames[key].frame.y, frames[key].frame.w, frames[key].frame.h, key));
                    if (frames[key].trimmed) {
                        newFrame.setTrim(frames[key].trimmed, frames[key].sourceSize.w, frames[key].sourceSize.h, frames[key].spriteSourceSize.x, frames[key].spriteSourceSize.y, frames[key].spriteSourceSize.w, frames[key].spriteSourceSize.h);
                    }
                    if (frames[key].rotated) {
                        newFrame.rotated = true;
                    }
                    i++;
                }
                return data;
            };
            AnimationParser.XMLData = function (game, xml) {
                if (!xml.getElementsByTagName("TextureAtlas")) {
                    console.warn("bridge.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
                    return;
                }
                var data = new bridge.FrameData();
                var frames = xml.getElementsByTagName("SubTexture");
                var newFrame;
                var name;
                var frame;
                var x;
                var y;
                var width;
                var height;
                var frameX;
                var frameY;
                var frameWidth;
                var frameHeight;
                for (var i = 0; i < frames.length; i++) {
                    frame = frames[i].attributes;
                    name = frame.name.value;
                    x = parseInt(frame.x.value, 10);
                    y = parseInt(frame.y.value, 10);
                    width = parseInt(frame.width.value, 10);
                    height = parseInt(frame.height.value, 10);
                    frameX = null;
                    frameY = null;
                    if (frame.frameX) {
                        frameX = Math.abs(parseInt(frame.frameX.value, 10));
                        frameY = Math.abs(parseInt(frame.frameY.value, 10));
                        frameWidth = parseInt(frame.frameWidth.value, 10);
                        frameHeight = parseInt(frame.frameHeight.value, 10);
                    }
                    newFrame = data.addFrame(new bridge.Frame(i, x, y, width, height, name));
                    if (frameX !== null || frameY !== null) {
                        newFrame.setTrim(true, width, height, frameX, frameY, frameWidth, frameHeight);
                    }
                }
                return data;
            };
            return AnimationParser;
        }());
        bridge.AnimationParser = AnimationParser;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Frame = (function () {
            function Frame(index, x, y, width, height, name) {
                this.index = index;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                if (this.width === 0 || this.height === 0) {
                    console.warn('Frame: Frame "' + this.name + '" has a width or height of zero');
                }
                this.name = name;
                this.centerX = Math.floor(width / 2);
                this.centerY = Math.floor(height / 2);
                this.distance = bridge.distance(0, 0, width, height);
                this.rotated = false;
                this.trimmed = false;
                this.sourceSizeW = width;
                this.sourceSizeH = height;
                this.spriteSourceSizeX = 0;
                this.spriteSourceSizeY = 0;
                this.spriteSourceSizeW = 0;
                this.spriteSourceSizeH = 0;
                this.right = this.x + this.width;
                this.bottom = this.y + this.height;
            }
            Frame.prototype.resize = function (width, height) {
                this.width = width;
                this.height = height;
                this.centerX = Math.floor(width / 2);
                this.centerY = Math.floor(height / 2);
                this.distance = bridge.distance(0, 0, width, height);
                this.sourceSizeW = width;
                this.sourceSizeH = height;
                this.right = this.x + width;
                this.bottom = this.y + height;
            };
            Frame.prototype.setTrim = function (trimmed, actualWidth, actualHeight, destX, destY, destWidth, destHeight) {
                this.trimmed = trimmed;
                if (trimmed) {
                    this.sourceSizeW = actualWidth;
                    this.sourceSizeH = actualHeight;
                    this.centerX = Math.floor(actualWidth / 2);
                    this.centerY = Math.floor(actualHeight / 2);
                    this.spriteSourceSizeX = destX;
                    this.spriteSourceSizeY = destY;
                    this.spriteSourceSizeW = destWidth;
                    this.spriteSourceSizeH = destHeight;
                }
            };
            Frame.prototype.clone = function () {
                var output = new Frame(this.index, this.x, this.y, this.width, this.height, this.name);
                for (var prop in this) {
                    if (this.hasOwnProperty(prop)) {
                        output[prop] = this[prop];
                    }
                }
                return output;
            };
            Frame.prototype.getRect = function (out) {
                if (out === undefined) {
                    out = new bridge.Rectangle(this.x, this.y, this.width, this.height);
                }
                else {
                    out.setTo(this.x, this.y, this.width, this.height);
                }
                return out;
            };
            return Frame;
        }());
        bridge.Frame = Frame;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var FrameData = (function () {
            function FrameData() {
                this.frames = [];
                this.frameNames = [];
            }
            FrameData.prototype.addFrame = function (frame) {
                frame.index = this.frames.length;
                this.frames.push(frame);
                if (frame.name !== "") {
                    this.frameNames[frame.name] = frame.index;
                }
                return frame;
            };
            FrameData.prototype.getFrame = function (index) {
                if (index >= this.frames.length) {
                    index = 0;
                }
                return this.frames[index];
            };
            FrameData.prototype.getFrameByName = function (name) {
                if (typeof this.frameNames[name] === "number") {
                    return this.frames[this.frameNames[name]];
                }
                return null;
            };
            FrameData.prototype.checkFrameName = function (name) {
                if (this.frameNames[name] === null || this.frameNames[name] === undefined) {
                    return false;
                }
                return true;
            };
            FrameData.prototype.clone = function () {
                var output = new FrameData();
                for (var i = 0; i < this.frames.length; i++) {
                    output.frames.push(this.frames[i].clone());
                }
                for (var p in this.frameNames) {
                    if (this.frameNames.hasOwnProperty(p)) {
                        output.frameNames.push(this.frameNames[p]);
                    }
                }
                return output;
            };
            FrameData.prototype.getFrameRange = function (start, end, output) {
                if (output === undefined) {
                    output = [];
                }
                for (var i = start; i <= end; i++) {
                    output.push(this.frames[i]);
                }
                return output;
            };
            FrameData.prototype.getFrames = function (frames, useNumericIndex, output) {
                if (useNumericIndex === undefined) {
                    useNumericIndex = true;
                }
                if (output === undefined) {
                    output = [];
                }
                if (frames === undefined || frames.length === 0) {
                    for (var i = 0; i < this.frames.length; i++) {
                        output.push(this.frames[i]);
                    }
                }
                else {
                    for (var i = 0; i < frames.length; i++) {
                        if (useNumericIndex) {
                            output.push(this.getFrame(frames[i]));
                        }
                        else {
                            output.push(this.getFrameByName(frames[i]));
                        }
                    }
                }
                return output;
            };
            FrameData.prototype.getFrameIndexes = function (frames, useNumericIndex, output) {
                if (useNumericIndex === undefined) {
                    useNumericIndex = true;
                }
                if (output === undefined) {
                    output = [];
                }
                if (frames === undefined || frames.length === 0) {
                    for (var i = 0; i < this.frames.length; i++) {
                        output.push(this.frames[i].index);
                    }
                }
                else {
                    for (var i = 0; i < frames.length; i++) {
                        if (useNumericIndex && this.frames[frames[i]]) {
                            output.push(this.frames[frames[i]].index);
                        }
                        else if (this.getFrameByName(frames[i])) {
                            output.push(this.getFrameByName(frames[i]).index);
                        }
                    }
                }
                return output;
            };
            FrameData.prototype.destroy = function () {
                this.frames = null;
                this.frameNames = null;
            };
            Object.defineProperty(FrameData.prototype, "total", {
                get: function () {
                    return this.frames.length;
                },
                enumerable: true,
                configurable: true
            });
            return FrameData;
        }());
        bridge.FrameData = FrameData;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var BitmapImage = (function (_super) {
            __extends(BitmapImage, _super);
            function BitmapImage(game, x, y, key, frame, texture) {
                var _this = _super.call(this, texture || bridge.Texture.EMPTY) || this;
                _this.fixedToCamera = true;
                _this.input = null;
                _this.textures = [];
                _this.game = game;
                _this.x = x || 0;
                _this.y = y || 0;
                _this.cameraOffset = new bridge.Point(x, y);
                if (key) {
                    var img = _this.game.cache.getImage(key, true);
                    _this.key = img.key;
                    var currentJSON = _this.game.cache.getJSON(key);
                    if (currentJSON) {
                        var frameNames = [];
                        for (var frameId in currentJSON.frames) {
                            if (Number(frameId) >= 0) {
                                frameNames.push(currentJSON.frames[frameId].filename);
                            }
                            else {
                                frameNames.push(frameId);
                            }
                        }
                        _this.createTextureArray(frameNames);
                    }
                    else {
                        _this.texture = bridge.Texture.from(img.url);
                    }
                    _this.loadFrameData(img.frameData, frame);
                    _this.frameData = img.frameData;
                }
                _this.events = new bridge.Events(_this);
                return _this;
            }
            Object.defineProperty(BitmapImage.prototype, "inputEnabled", {
                get: function () {
                    return !!(this.input && this.input.enabled);
                },
                set: function (value) {
                    if (value) {
                        if (this.input === null) {
                            this.input = new bridge.InputHandler(this);
                            this.input.start();
                        }
                        else if (this.input && !this.input.enabled) {
                            this.input.start();
                        }
                    }
                    else {
                        if (this.input && this.input.enabled) {
                            this.input.stop();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            BitmapImage.prototype.loadFrameData = function (frameData, frame) {
                if (frameData === undefined) {
                    return false;
                }
                if (frame === undefined || frame === null) {
                    this.frame = 0;
                }
                else {
                    this.setFrame(frame, frameData);
                }
                return true;
            };
            BitmapImage.prototype.setFrame = function (frame, frameData) {
                var gotFrame;
                var currentFrame;
                if (typeof frame === "string" && frameData && (gotFrame = frameData.getFrameByName(frame))) {
                    currentFrame = gotFrame;
                }
                else {
                    if (typeof frame === "number" && frameData && (gotFrame = frameData.getFrame(frame))) {
                        currentFrame = gotFrame;
                    }
                }
                if (this.textures.length > 0) {
                    this.texture = this.textures[currentFrame.index];
                }
                else {
                }
            };
            BitmapImage.prototype.createTextureArray = function (frames) {
                var _this = this;
                this.textures = [];
                frames.forEach(function (element) {
                    _this.textures.push(bridge.Texture.from(element));
                });
            };
            BitmapImage.prototype.loadTexture = function (key, frame) {
                var currentJSON = this.game.cache.getJSON(key);
                if (currentJSON) {
                    var frameNames = [];
                    for (var frameId in currentJSON.frames) {
                        if (Number(frameId) >= 0) {
                            frameNames.push(currentJSON.frames[frameId].filename);
                        }
                        else {
                            frameNames.push(frameId);
                        }
                    }
                    this.createTextureArray(frameNames);
                }
                else {
                    var img_1 = this.game.cache.getImage(key, true);
                    (img_1) && (this.texture = bridge.Texture.from(img_1.url));
                }
                var img = this.game.cache.getImage(key, true);
                if (img) {
                    this.key = img.key;
                    this.loadFrameData(img.frameData, frame);
                    this.frameData = img.frameData;
                }
            };
            BitmapImage.prototype.setTexture = function (texture, destroyBase) {
                if (destroyBase) {
                    this.texture.baseTexture.destroy();
                }
                this.texture = texture;
                this.texture.valid = true;
            };
            return BitmapImage;
        }(bridge.ESprite));
        bridge.BitmapImage = BitmapImage;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var GifBase = (function (_super) {
            __extends(GifBase, _super);
            function GifBase(game, key, x, y) {
                var _this = _super.call(this, game, x, y) || this;
                _this.isPlaying = false;
                _this.currentLoopCount = 0;
                _this.maxLoops = Infinity;
                _this.currFrameIndex = 0;
                _this.framesDelay = [];
                _this.textures = [];
                _this.speed = 0.1;
                _this.timeSinceLastUpdate = 0;
                _this._isReversed = false;
                _this.data = {};
                _this._addedToTicker = false;
                _this._onCompleteCallback = null;
                _this._onCompleteCallbackContext = null;
                _this.onLoop = null;
                _this.onComplete = null;
                _this.onUpdate = null;
                _this.onPause = null;
                _this.onResume = null;
                _this.onStop = null;
                _this.key = key;
                _this.name = key;
                _this.ticker = _this.game.ticker;
                _this.currFrameIndex = 0;
                _this.init();
                return _this;
            }
            GifBase.prototype.init = function () {
                var gifDecodeData = this.gifResourceToTextures(this.game.cache.getGif(this.key));
                this.textures = gifDecodeData.textures;
                this.framesDelay = gifDecodeData.delayTimes;
                this.validateTextures();
                this.validateMaxLoop();
                this.texture = this.textures[this.currFrameIndex];
            };
            GifBase.prototype.play = function (fromIndex, maxLoops, callback, context) {
                this.validateTextures();
                this.validateMaxLoop();
                if (this._addedToTicker) {
                    this.ticker.remove(this.update, this);
                }
                if (typeof maxLoops === "number") {
                    this.maxLoops = maxLoops;
                }
                if (this.textures.length === 1) {
                    return;
                }
                this.currentLoopCount = 0;
                this._onCompleteCallback = callback;
                this._onCompleteCallbackContext = context;
                this.isPlaying = true;
                this._addedToTicker = true;
                if (typeof fromIndex === "number") {
                    this.jumpToFrame(fromIndex);
                }
                this.ticker.add(this.update, this);
            };
            GifBase.prototype.stop = function (stopFrame) {
                this.ticker.remove(this.update, this);
                this._addedToTicker = false;
                this.isPlaying = false;
                this.currentLoopCount = 0;
                (typeof stopFrame === "number") && this.jumpToFrame(stopFrame);
                this.onStop && this.onStop.dispatch(this);
                return this;
            };
            GifBase.prototype.pause = function () {
                this._addedToTicker && (this.isPlaying = false);
                this.onPause && this.onPause.dispatch(this);
                return this;
            };
            GifBase.prototype.resume = function () {
                this._addedToTicker && (this.isPlaying = true);
                this.onPause && this.onResume.dispatch(this);
                return this;
            };
            GifBase.prototype.update = function (delta) {
                if (!this.isPlaying) {
                    return;
                }
                var elapsed = PIXI.ticker.shared.elapsedMS;
                this.timeSinceLastUpdate += elapsed;
                this.validateTextures();
                this.validateMaxLoop();
                if (this.timeSinceLastUpdate >= (this.framesDelay[this.currFrameIndex] / this.speed)) {
                    this.currFrameIndex++;
                    this.timeSinceLastUpdate = 0;
                    if (this.currFrameIndex >= this.textures.length - 1) {
                        this.currFrameIndex = Math.min(this.currFrameIndex, this.textures.length - 1);
                        if (this.maxLoops > 0 && this.currentLoopCount >= this.maxLoops) {
                            if (this._onCompleteCallback) {
                                this._onCompleteCallbackContext ? this._onCompleteCallback.call(this._onCompleteCallbackContext, this) : this._onCompleteCallback(this);
                                this._onCompleteCallback = null;
                                this._onCompleteCallbackContext = null;
                            }
                            this.onComplete && this.onComplete.dispatch(this);
                            this.currentLoopCount = 0;
                            this.stop();
                        }
                        else if (this.maxLoops > 0) {
                            this.currFrameIndex = 0;
                            this.currentLoopCount++;
                            this.onLoop && this.onLoop.dispatch(this);
                        }
                    }
                    this.texture = this.textures[this.currFrameIndex];
                    this.onUpdate && this.onUpdate.dispatch(this);
                }
            };
            GifBase.prototype.jumpToFrame = function (frameIndex) {
                if (frameIndex === void 0) { frameIndex = 0; }
                this.validateTextures();
                this.currFrameIndex = bridge.clamp(frameIndex, 0, this.textures.length - 1);
                this.texture = this.textures[this.currFrameIndex];
                return this;
            };
            GifBase.prototype.getFramesLength = function () {
                return this.textures.length || 0;
            };
            GifBase.prototype.getDuration = function () {
                this.validateTextures();
                var totalTime = 0;
                this.framesDelay.forEach(function (delay) {
                    totalTime += delay;
                });
                return (totalTime / this.speed);
            };
            Object.defineProperty(GifBase.prototype, "enableUpdate", {
                get: function () {
                    return !!this.onUpdate;
                },
                set: function (val) {
                    if (val) {
                        this.onUpdate = new bridge.Signal();
                    }
                    else {
                        this.onUpdate && this.onUpdate.dispose();
                        this.onUpdate = null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            GifBase.prototype.activateSignals = function () {
                this.onLoop = new bridge.Signal();
                this.onComplete = new bridge.Signal();
                this.onPause = new bridge.Signal();
                this.onResume = new bridge.Signal();
                this.onStop = new bridge.Signal();
                return this;
            };
            GifBase.prototype.deactivateSignals = function () {
                this.onLoop && this.onLoop.dispose();
                this.onComplete && this.onComplete.dispose();
                this.onPause && this.onPause.dispose();
                this.onResume && this.onResume.dispose();
                this.onStop && this.onStop.dispose();
                return this;
            };
            GifBase.prototype.destroy = function (options) {
                this.deactivateSignals();
                (this._addedToTicker) && this.stop();
                this.enableUpdate = false;
                this.game = null;
                _super.prototype.destroy.call(this);
            };
            Object.defineProperty(GifBase.prototype, "reverse", {
                get: function () {
                    return this._isReversed;
                },
                set: function (val) {
                    if (val === this._isReversed) {
                    }
                    else {
                        var tempCurrFrameIndex = this.currFrameIndex;
                        this.textures.reverse();
                        this.framesDelay.reverse();
                        this.currFrameIndex = (this.textures.length - 1) - tempCurrFrameIndex;
                        this._isReversed = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            GifBase.prototype.gifResourceToTextures = function (cachedGifData) {
                var returnObj = {
                    delayTimes: [],
                    textures: []
                };
                var buf = new Uint8Array(cachedGifData.data);
                var gif = new bridge.GifReader(buf);
                var gifWidth = gif.width;
                var gifHeight = gif.height;
                var gifFramesLen = gif.numFrames();
                var gifFrameInfo;
                var spriteSheet;
                var canvas;
                var ctx;
                var imageData;
                for (var i = 0; i < gifFramesLen; i++) {
                    gifFrameInfo = gif.frameInfo(i);
                    returnObj.delayTimes.push(gifFrameInfo.delay);
                    canvas = document.createElement("canvas");
                    canvas.width = gifWidth;
                    canvas.height = gifHeight;
                    ctx = canvas.getContext("2d");
                    imageData = ctx.createImageData(gifWidth, gifHeight);
                    gif.decodeAndBlitFrameRGBA(i, imageData.data);
                    ctx.putImageData(imageData, 0, 0);
                    spriteSheet = PIXI.BaseTexture.from(canvas);
                    returnObj.textures.push(new PIXI.Texture(spriteSheet, new PIXI.Rectangle(0, 0, gifWidth, gifHeight)));
                }
                return returnObj;
            };
            GifBase.prototype.validateTextures = function () {
                if (this.textures.length && this.framesDelay.length && this.textures.length === this.framesDelay.length) {
                    return true;
                }
                else {
                    throw new Error("Bridge :: GifBase :: No textures found.");
                }
            };
            GifBase.prototype.validateMaxLoop = function () {
                if (typeof (this.maxLoops) === "number" && this.maxLoops >= 0) {
                    return true;
                }
                else {
                    this.maxLoops = Infinity;
                    return false;
                }
            };
            GifBase.prototype.loadFrameData = function (frameData, frame) {
                return false;
            };
            GifBase.prototype.setFrame = function (frame) {
                if (typeof frame === "number") {
                    this.jumpToFrame(frame);
                }
                else {
                    console.warn("Bridge :: GifBase :: Invalid frame index.");
                }
            };
            return GifBase;
        }(bridge.BitmapImage));
        bridge.GifBase = GifBase;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        function GifReader(buf) {
            var p = 0;
            if (buf[p++] !== 0x47 || buf[p++] !== 0x49 || buf[p++] !== 0x46 ||
                buf[p++] !== 0x38 || (buf[p++] + 1 & 0xfd) !== 0x38 || buf[p++] !== 0x61) {
                throw new Error("Invalid GIF 87a/89a header.");
            }
            var width = buf[p++] | buf[p++] << 8;
            var height = buf[p++] | buf[p++] << 8;
            var pf0 = buf[p++];
            var global_palette_flag = pf0 >> 7;
            var num_global_colors_pow2 = pf0 & 0x7;
            var num_global_colors = 1 << (num_global_colors_pow2 + 1);
            buf[p++];
            buf[p++];
            var global_palette_offset = null;
            var global_palette_size = null;
            if (global_palette_flag) {
                global_palette_offset = p;
                global_palette_size = num_global_colors;
                p += num_global_colors * 3;
            }
            var no_eof = true;
            var frames = [];
            var delay = 0;
            var transparent_index = null;
            var disposal = 0;
            var loop_count = null;
            this.width = width;
            this.height = height;
            while (no_eof && p < buf.length) {
                switch (buf[p++]) {
                    case 0x21:
                        switch (buf[p++]) {
                            case 0xff:
                                if (buf[p] !== 0x0b ||
                                    buf[p + 1] == 0x4e && buf[p + 2] == 0x45 && buf[p + 3] == 0x54 &&
                                        buf[p + 4] == 0x53 && buf[p + 5] == 0x43 && buf[p + 6] == 0x41 &&
                                        buf[p + 7] == 0x50 && buf[p + 8] == 0x45 && buf[p + 9] == 0x32 &&
                                        buf[p + 10] == 0x2e && buf[p + 11] == 0x30 &&
                                        buf[p + 12] == 0x03 && buf[p + 13] == 0x01 && buf[p + 16] == 0) {
                                    p += 14;
                                    loop_count = buf[p++] | buf[p++] << 8;
                                    p++;
                                }
                                else {
                                    p += 12;
                                    while (true) {
                                        var block_size = buf[p++];
                                        if (!(block_size >= 0))
                                            throw Error("Invalid block size");
                                        if (block_size === 0)
                                            break;
                                        p += block_size;
                                    }
                                }
                                break;
                            case 0xf9:
                                if (buf[p++] !== 0x4 || buf[p + 4] !== 0)
                                    throw new Error("Invalid graphics extension block.");
                                var pf1 = buf[p++];
                                delay = buf[p++] | buf[p++] << 8;
                                transparent_index = buf[p++];
                                if ((pf1 & 1) === 0)
                                    transparent_index = null;
                                disposal = pf1 >> 2 & 0x7;
                                p++;
                                break;
                            case 0xfe:
                                while (true) {
                                    var block_size = buf[p++];
                                    if (!(block_size >= 0))
                                        throw Error("Invalid block size");
                                    if (block_size === 0)
                                        break;
                                    p += block_size;
                                }
                                break;
                            default:
                                throw new Error("Unknown graphic control label: 0x" + buf[p - 1].toString(16));
                        }
                        break;
                    case 0x2c:
                        var x = buf[p++] | buf[p++] << 8;
                        var y = buf[p++] | buf[p++] << 8;
                        var w = buf[p++] | buf[p++] << 8;
                        var h = buf[p++] | buf[p++] << 8;
                        var pf2 = buf[p++];
                        var local_palette_flag = pf2 >> 7;
                        var interlace_flag = pf2 >> 6 & 1;
                        var num_local_colors_pow2 = pf2 & 0x7;
                        var num_local_colors = 1 << (num_local_colors_pow2 + 1);
                        var palette_offset = global_palette_offset;
                        var palette_size = global_palette_size;
                        var has_local_palette = false;
                        if (local_palette_flag) {
                            var has_local_palette = true;
                            palette_offset = p;
                            palette_size = num_local_colors;
                            p += num_local_colors * 3;
                        }
                        var data_offset = p;
                        p++;
                        while (true) {
                            var block_size = buf[p++];
                            if (!(block_size >= 0))
                                throw Error("Invalid block size");
                            if (block_size === 0)
                                break;
                            p += block_size;
                        }
                        frames.push({
                            x: x, y: y, width: w, height: h,
                            has_local_palette: has_local_palette,
                            palette_offset: palette_offset,
                            palette_size: palette_size,
                            data_offset: data_offset,
                            data_length: p - data_offset,
                            transparent_index: transparent_index,
                            interlaced: !!interlace_flag,
                            delay: delay,
                            disposal: disposal
                        });
                        break;
                    case 0x3b:
                        no_eof = false;
                        break;
                    default:
                        throw new Error("Unknown gif block: 0x" + buf[p - 1].toString(16));
                }
            }
            this.numFrames = function () {
                return frames.length;
            };
            this.loopCount = function () {
                return loop_count;
            };
            this.frameInfo = function (frame_num) {
                if (frame_num < 0 || frame_num >= frames.length)
                    throw new Error("Frame index out of range.");
                return frames[frame_num];
            };
            this.decodeAndBlitFrameBGRA = function (frame_num, pixels) {
                var frame = this.frameInfo(frame_num);
                var num_pixels = frame.width * frame.height;
                var index_stream = new Uint8Array(num_pixels);
                GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
                var palette_offset = frame.palette_offset;
                var trans = frame.transparent_index;
                if (trans === null)
                    trans = 256;
                var framewidth = frame.width;
                var framestride = width - framewidth;
                var xleft = framewidth;
                var opbeg = ((frame.y * width) + frame.x) * 4;
                var opend = ((frame.y + frame.height) * width + frame.x) * 4;
                var op = opbeg;
                var scanstride = framestride * 4;
                if (frame.interlaced === true) {
                    scanstride += width * 4 * 7;
                }
                var interlaceskip = 8;
                for (var i = 0, il = index_stream.length; i < il; ++i) {
                    var index = index_stream[i];
                    if (xleft === 0) {
                        op += scanstride;
                        xleft = framewidth;
                        if (op >= opend) {
                            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
                            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                            interlaceskip >>= 1;
                        }
                    }
                    if (index === trans) {
                        op += 4;
                    }
                    else {
                        var r = buf[palette_offset + index * 3];
                        var g = buf[palette_offset + index * 3 + 1];
                        var b = buf[palette_offset + index * 3 + 2];
                        pixels[op++] = b;
                        pixels[op++] = g;
                        pixels[op++] = r;
                        pixels[op++] = 255;
                    }
                    --xleft;
                }
            };
            this.decodeAndBlitFrameRGBA = function (frame_num, pixels) {
                var frame = this.frameInfo(frame_num);
                var num_pixels = frame.width * frame.height;
                var index_stream = new Uint8Array(num_pixels);
                GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
                var palette_offset = frame.palette_offset;
                var trans = frame.transparent_index;
                if (trans === null)
                    trans = 256;
                var framewidth = frame.width;
                var framestride = width - framewidth;
                var xleft = framewidth;
                var opbeg = ((frame.y * width) + frame.x) * 4;
                var opend = ((frame.y + frame.height) * width + frame.x) * 4;
                var op = opbeg;
                var scanstride = framestride * 4;
                if (frame.interlaced === true) {
                    scanstride += width * 4 * 7;
                }
                var interlaceskip = 8;
                for (var i = 0, il = index_stream.length; i < il; ++i) {
                    var index = index_stream[i];
                    if (xleft === 0) {
                        op += scanstride;
                        xleft = framewidth;
                        if (op >= opend) {
                            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
                            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                            interlaceskip >>= 1;
                        }
                    }
                    if (index === trans) {
                        op += 4;
                    }
                    else {
                        var r = buf[palette_offset + index * 3];
                        var g = buf[palette_offset + index * 3 + 1];
                        var b = buf[palette_offset + index * 3 + 2];
                        pixels[op++] = r;
                        pixels[op++] = g;
                        pixels[op++] = b;
                        pixels[op++] = 255;
                    }
                    --xleft;
                }
            };
        }
        bridge.GifReader = GifReader;
        function GifReaderLZWOutputIndexStream(code_stream, p, output, output_length) {
            var min_code_size = code_stream[p++];
            var clear_code = 1 << min_code_size;
            var eoi_code = clear_code + 1;
            var next_code = eoi_code + 1;
            var cur_code_size = min_code_size + 1;
            var code_mask = (1 << cur_code_size) - 1;
            var cur_shift = 0;
            var cur = 0;
            var op = 0;
            var subblock_size = code_stream[p++];
            var code_table = new Int32Array(4096);
            var prev_code = null;
            while (true) {
                while (cur_shift < 16) {
                    if (subblock_size === 0)
                        break;
                    cur |= code_stream[p++] << cur_shift;
                    cur_shift += 8;
                    if (subblock_size === 1) {
                        subblock_size = code_stream[p++];
                    }
                    else {
                        --subblock_size;
                    }
                }
                if (cur_shift < cur_code_size)
                    break;
                var code = cur & code_mask;
                cur >>= cur_code_size;
                cur_shift -= cur_code_size;
                if (code === clear_code) {
                    next_code = eoi_code + 1;
                    cur_code_size = min_code_size + 1;
                    code_mask = (1 << cur_code_size) - 1;
                    prev_code = null;
                    continue;
                }
                else if (code === eoi_code) {
                    break;
                }
                var chase_code = code < next_code ? code : prev_code;
                var chase_length = 0;
                var chase = chase_code;
                while (chase > clear_code) {
                    chase = code_table[chase] >> 8;
                    ++chase_length;
                }
                var k = chase;
                var op_end = op + chase_length + (chase_code !== code ? 1 : 0);
                if (op_end > output_length) {
                    console.log("Warning, gif stream longer than expected.");
                    return;
                }
                output[op++] = k;
                op += chase_length;
                var b = op;
                if (chase_code !== code)
                    output[op++] = k;
                chase = chase_code;
                while (chase_length--) {
                    chase = code_table[chase];
                    output[--b] = chase & 0xff;
                    chase >>= 8;
                }
                if (prev_code !== null && next_code < 4096) {
                    code_table[next_code++] = prev_code << 8 | k;
                    if (next_code >= code_mask + 1 && cur_code_size < 12) {
                        ++cur_code_size;
                        code_mask = code_mask << 1 | 1;
                    }
                }
                prev_code = code;
            }
            if (op !== output_length) {
                console.log("Warning, gif stream shorter than expected.");
            }
            return output;
        }
        bridge.GifReaderLZWOutputIndexStream = GifReaderLZWOutputIndexStream;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Camera = (function () {
            function Camera(game, id, x, y, width, height) {
                this.x = 0;
                this.y = 0;
                this.game = game;
                this.view = new bridge.Rectangle(x, y, width, height);
                x = x || 0;
                y = y || 0;
                width = width || 0;
                height = height || 0;
            }
            Camera.prototype.setSize = function (width, height) {
                this.view.width = width;
                this.view.height = height;
            };
            Object.defineProperty(Camera.prototype, "width", {
                get: function () {
                    return this.view.width;
                },
                set: function (val) {
                    this.view.width = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera.prototype, "height", {
                get: function () {
                    return this.view.height;
                },
                set: function (val) {
                    this.view.height = val;
                },
                enumerable: true,
                configurable: true
            });
            return Camera;
        }());
        bridge.Camera = Camera;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        bridge.GenericConstants = {
            SPINE_NAMESPACE: "spine",
            VIDEO_NAMESPACE: "video",
            GIF_NAMESPACE: "gif"
        };
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var BitmapText = (function (_super) {
            __extends(BitmapText, _super);
            function BitmapText(game, text, json) {
                var _this = _super.call(this, text, json.style) || this;
                _this.game = null;
                _this.game = game;
                return _this;
            }
            BitmapText.prototype.setText = function (text) {
                this.text = text;
                return this;
            };
            Object.defineProperty(BitmapText.prototype, "fontSize", {
                get: function () {
                    return this.font.size;
                },
                set: function (val) {
                    if (val !== this.fontSize && val > 0) {
                        this.font.size = val;
                        this.dirty = true;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return BitmapText;
        }(bridge.EBitmapText));
        bridge.BitmapText = BitmapText;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite(game, x, y, key, frame, texture) {
                var _this = _super.call(this, texture || [bridge.Texture.EMPTY]) || this;
                _this.cropObj = null;
                _this.input = null;
                _this.onInputOver = new bridge.Signal();
                _this.onInputOut = new bridge.Signal();
                _this.onInputDown = new bridge.Signal();
                _this.onInputUp = new bridge.Signal();
                _this.targetSpritesheet = null;
                _this.tagetFrameOffset = 0;
                _this.game = game;
                _this.x = x || 0;
                _this.y = y || 0;
                _this.frameId = frame || null;
                if (key) {
                    if (Array.isArray(key)) {
                        _this.initSpritesheets(key, frame);
                    }
                    else {
                        _this.initSpritesheet(key, frame);
                    }
                }
                _this.animations = new bridge.AnimationManager(_this);
                if (key) {
                    if (Array.isArray(key)) {
                        _this.postInit(_this.targetSpritesheet, frame);
                    }
                    else {
                        _this.postInit(key, frame);
                    }
                }
                _this.events = new bridge.Events(_this);
                return _this;
            }
            Sprite.prototype.initSpritesheets = function (key, frame) {
                var _this = this;
                var frameNames = [];
                var offset = 0;
                key.forEach(function (sheetName) {
                    var currentJSON = _this.game.cache.getJSON(sheetName);
                    if (currentJSON) {
                        var index = 0;
                        for (var frameId in currentJSON.frames) {
                            if (Number(frameId) >= 0) {
                                frameNames.push(currentJSON.frames[frameId].filename);
                            }
                            else {
                                frameNames.push(frameId);
                            }
                            if ((typeof frame === "string" && frame === frameId) || (typeof frame === "number" && index === frame)) {
                                _this.targetSpritesheet = sheetName;
                                _this.tagetFrameOffset = offset;
                            }
                            index++;
                        }
                        offset += Object.keys(currentJSON.frames).length;
                    }
                    else {
                        var img = _this.game.cache.getImage(sheetName, true);
                        (img) && (_this.texture = bridge.Texture.from(img.url));
                    }
                });
                this.createTextureArray(frameNames);
            };
            Sprite.prototype.initSpritesheet = function (key, frame) {
                var currentJSON = this.game.cache.getJSON(key);
                if (currentJSON) {
                    var frameNames = [];
                    for (var frameId in currentJSON.frames) {
                        if (Number(frameId) >= 0) {
                            frameNames.push(currentJSON.frames[frameId].filename);
                        }
                        else {
                            frameNames.push(frameId);
                        }
                    }
                    this.createTextureArray(frameNames);
                }
                else {
                    var img = this.game.cache.getImage(key, true);
                    (img) && (this.texture = bridge.Texture.from(img.url));
                }
            };
            Sprite.prototype.postInit = function (targetSheet, frame) {
                var img = this.game.cache.getImage(targetSheet, true);
                if (img) {
                    this.key = img.key;
                    this.animations.loadFrameData(img.frameData, frame);
                }
            };
            Object.defineProperty(Sprite.prototype, "inputEnabled", {
                get: function () {
                    return !!(this.input && this.input.enabled);
                },
                set: function (value) {
                    if (value) {
                        if (this.input === null) {
                            this.input = new bridge.InputHandler(this);
                            this.input.start();
                        }
                        else if (this.input && !this.input.enabled) {
                            this.input.start();
                        }
                    }
                    else {
                        if (this.input && this.input.enabled) {
                            this.input.stop();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Sprite.prototype.setFrame = function (frame) {
                this.gotoAndStop(frame.index + this.tagetFrameOffset);
            };
            Sprite.prototype.createTextureArray = function (frames) {
                var _this = this;
                this.textureArray = [];
                frames.forEach(function (element) {
                    _this.textureArray.push(bridge.Texture.from(element));
                });
                this.textures = this.textureArray;
            };
            Sprite.prototype.loadTexture = function (key, frame, stopAnimation) {
                if (stopAnimation === void 0) { stopAnimation = false; }
                var currentJSON = this.game.cache.getJSON(key);
                if (currentJSON) {
                    var frameNames = [];
                    for (var frameId in currentJSON.frames) {
                        if (Number(frameId) >= 0) {
                            frameNames.push(currentJSON.frames[frameId].filename);
                        }
                        else {
                            frameNames.push(frameId);
                        }
                    }
                    this.createTextureArray(frameNames);
                }
                else {
                    var img_2 = this.game.cache.getImage(key, true);
                    (img_2) && (this.texture = bridge.Texture.from(img_2.url));
                }
                var img = this.game.cache.getImage(key, true);
                if (img) {
                    this.key = img.key;
                    this.animations.loadFrameData(img.frameData, frame);
                }
                if (stopAnimation) {
                    this.animations.stop();
                }
            };
            Sprite.prototype.update = function (deltaTime) {
                _super.prototype.update.call(this, deltaTime);
                this.animations.update();
            };
            Sprite.prototype.setTexture = function (texture, destroyBase) {
                if (destroyBase) {
                    this.texture.baseTexture.destroy();
                }
                this.texture.baseTexture.skipRender = false;
                this.texture = texture;
                this.texture.valid = true;
            };
            return Sprite;
        }(bridge.EAnimation));
        bridge.Sprite = Sprite;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (key === void 0) { key = ""; }
                var _this = _super.call(this, game, 0, 0, key, outFrame) || this;
                _this.type = bridge.BUTTON;
                _this.physicsType = bridge.SPRITE;
                _this.onOverSound = null;
                _this.onOutSound = null;
                _this.onDownSound = null;
                _this.onUpSound = null;
                _this.onOverSoundMarker = "";
                _this.onOutSoundMarker = "";
                _this.onDownSoundMarker = "";
                _this.onUpSoundMarker = "";
                _this.onInputOver = new bridge.Signal();
                _this.onInputOut = new bridge.Signal();
                _this.onInputDown = new bridge.Signal();
                _this.onInputUp = new bridge.Signal();
                _this.onOverMouseOnly = true;
                _this.freezeFrames = false;
                _this.forceOut = false;
                _this.x = x || 0;
                _this.y = y || 0;
                _this.key = key || null;
                callback = callback || null;
                callbackContext = callbackContext || _this;
                _this.inputEnabled = true;
                _this.input.start(0, true);
                _this.input.useHandCursor = true;
                _this.setFrames(overFrame, outFrame, downFrame, upFrame);
                if (callback !== null) {
                    _this.onInputUp.add(callback, callbackContext);
                }
                _this.events.onInputDown.add(_this.onInputDownHandler, _this);
                _this.events.onInputUp.add(_this.onInputUpHandler, _this);
                _this.events.onInputOver.add(_this.onInputOverHandler, _this);
                _this.events.onInputOut.add(_this.onInputOutHandler, _this);
                _this.events.onRemovedFromWorld.add(_this.removedFromWorld, _this);
                return _this;
            }
            Button.prototype.clearFrames = function () {
                this.setFrames(null, null, null, null);
            };
            Button.prototype.removedFromWorld = function () {
                this.inputEnabled = false;
            };
            Button.prototype.setStateFrame = function (state, frame, switchImmediately) {
                var frameKey = "_on" + state + "Frame";
                if (frame !== null) {
                    this[frameKey] = frame;
                    if (switchImmediately) {
                        this.changeStateFrame(state);
                    }
                }
                else {
                    this[frameKey] = null;
                }
            };
            Button.prototype.changeStateFrame = function (state) {
                if (this.freezeFrames) {
                    return false;
                }
                var frameKey = "_on" + state + "Frame";
                var frame = this[frameKey];
                if (typeof frame === "string") {
                    this.frameName = frame;
                    this.loadFrameData(this.frameData, frame);
                    return true;
                }
                else if (typeof frame === "number") {
                    this.frame = frame;
                    this.loadFrameData(this.frameData, frame);
                    return true;
                }
                else {
                    return false;
                }
            };
            Button.prototype.setFrames = function (overFrame, outFrame, downFrame, upFrame) {
                this.setStateFrame(Button.STATE_OVER, overFrame, true);
                this.setStateFrame(Button.STATE_OUT, outFrame, false);
                this.setStateFrame(Button.STATE_DOWN, downFrame, true);
                this.setStateFrame(Button.STATE_UP, upFrame, true);
            };
            Button.prototype.setStateSound = function (state, sound, marker) {
            };
            Button.prototype.playStateSound = function (state) {
                var soundKey = "on" + state + "Sound";
                var sound = this[soundKey];
                if (sound) {
                    return true;
                }
                else {
                    return false;
                }
            };
            Button.prototype.setSounds = function (overSound, overMarker, downSound, downMarker, outSound, outMarker, upSound, upMarker) {
                this.setStateSound(Button.STATE_OVER, overSound, overMarker);
                this.setStateSound(Button.STATE_OUT, outSound, outMarker);
                this.setStateSound(Button.STATE_DOWN, downSound, downMarker);
                this.setStateSound(Button.STATE_UP, upSound, upMarker);
            };
            Button.prototype.setOverSound = function (sound, marker) {
                this.setStateSound(Button.STATE_OVER, sound, marker);
            };
            Button.prototype.setOutSound = function (sound, marker) {
                this.setStateSound(Button.STATE_OUT, sound, marker);
            };
            Button.prototype.setDownSound = function (sound, marker) {
                this.setStateSound(Button.STATE_DOWN, sound, marker);
            };
            Button.prototype.setUpSound = function (sound, marker) {
                this.setStateSound(Button.STATE_UP, sound, marker);
            };
            Button.prototype.onInputOverHandler = function (btn, evt, isOver) {
                this.changeStateFrame(Button.STATE_OVER);
                this.playStateSound(Button.STATE_OVER);
                if (this.onInputOver) {
                    this.onInputOver.dispatch(this, evt);
                }
            };
            Button.prototype.onInputOutHandler = function (btn, evt, isOver) {
                this.changeStateFrame(Button.STATE_OUT);
                this.playStateSound(Button.STATE_OUT);
                if (this.onInputOut) {
                    this.onInputOut.dispatch(this, evt);
                }
            };
            Button.prototype.onInputDownHandler = function (btn, evt, isOver) {
                this.changeStateFrame(Button.STATE_DOWN);
                this.playStateSound(Button.STATE_DOWN);
                if (this.onInputDown) {
                    this.onInputDown.dispatch(this, evt);
                }
            };
            Button.prototype.onInputUpHandler = function (btn, evt, isOver) {
                this.playStateSound(Button.STATE_UP);
                if (this.onInputUp) {
                    this.onInputUp.dispatch(this, evt, isOver);
                }
                if (this.freezeFrames) {
                    return;
                }
                if (this.forceOut === true || (this.forceOut && evt.pointerMode) === evt.pointerMode) {
                    this.changeStateFrame(Button.STATE_OUT);
                }
                else {
                    var changedUp = this.changeStateFrame(Button.STATE_UP);
                    if (!changedUp) {
                        if (isOver) {
                            this.changeStateFrame(Button.STATE_OVER);
                        }
                        else {
                            this.changeStateFrame(Button.STATE_OUT);
                        }
                    }
                }
            };
            Button.STATE_OVER = "Over";
            Button.STATE_OUT = "Out";
            Button.STATE_DOWN = "Down";
            Button.STATE_UP = "Up";
            return Button;
        }(bridge.BitmapImage));
        bridge.Button = Button;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Cache = (function () {
            function Cache(game) {
                this._pendingCount = 0;
                this.onReady = new bridge.Signal();
                this.urlResolver = new Image();
                this.autoResolveURL = false;
                this.cache = {
                    canvas: {},
                    image: {},
                    texture: {},
                    sound: {},
                    video: {},
                    text: {},
                    json: {},
                    xml: {},
                    physics: {},
                    tilemap: {},
                    binary: {},
                    bitmapData: {},
                    bitmapFont: {},
                    shader: {},
                    renderTexture: {},
                    spine: {},
                    gif: {}
                };
                this.spine = {};
                this.cacheMap = [];
                this.urlMap = {};
                this.urlTemp = null;
                this.game = game;
                this.cacheMap = [];
                this.cacheMap[Cache.CANVAS] = this.cache.canvas;
                this.cacheMap[Cache.IMAGE] = this.cache.image;
                this.cacheMap[Cache.TEXTURE] = this.cache.texture;
                this.cacheMap[Cache.SOUND] = this.cache.sound;
                this.cacheMap[Cache.TEXT] = this.cache.text;
                this.cacheMap[Cache.PHYSICS] = this.cache.physics;
                this.cacheMap[Cache.TILEMAP] = this.cache.tilemap;
                this.cacheMap[Cache.BINARY] = this.cache.binary;
                this.cacheMap[Cache.BITMAPDATA] = this.cache.bitmapData;
                this.cacheMap[Cache.BITMAPFONT] = this.cache.bitmapFont;
                this.cacheMap[Cache.JSON] = this.cache.json;
                this.cacheMap[Cache.XML] = this.cache.xml;
                this.cacheMap[Cache.VIDEO] = this.cache.video;
                this.cacheMap[Cache.SHADER] = this.cache.shader;
                this.cacheMap[Cache.RENDER_TEXTURE] = this.cache.renderTexture;
                this.cacheMap[Cache.SPINE] = this.cache.spine;
                this.cacheMap[Cache.GIF] = this.cache.gif;
                this.addImages();
            }
            Object.defineProperty(Cache.prototype, "isReady", {
                get: function () {
                    return this._pendingCount <= 0;
                },
                enumerable: true,
                configurable: true
            });
            Cache.prototype.addSpine = function (key, data) {
                this.spine[key] = data;
                this.cache.spine[key] = data;
            };
            Cache.prototype.getSpine = function (key) {
                var spineKeys = this.getItem(key, Cache.SPINE, "getSpine");
                var spineObj = {
                    atlas: this.getItem(spineKeys.atlas, Cache.TEXT, "getSpine", "data"),
                    json: this.getItem(spineKeys.json, Cache.JSON, "getSpine", "data"),
                    images: this.getItem(spineKeys.images[0], Cache.IMAGE, "getSpine")
                };
                return spineObj;
            };
            Cache.prototype.addGif = function (key, data) {
                this.cache.gif[key] = data;
            };
            Cache.prototype.getGif = function (key) {
                return this.getItem(key, Cache.GIF, "getGif");
            };
            Cache.prototype.addBinary = function (key, binaryData) {
                this.cache.binary[key] = binaryData;
            };
            Cache.prototype.addBitmapFont = function (key, url, data, atlasData, atlasType, xSpacing, ySpacing) {
                var obj = {
                    url: url,
                    data: data,
                    font: null,
                    base: new PIXI.BaseTexture(data)
                };
                var txt = new ingenuity.bridge.Texture(obj.base);
                ingenuity.bridge.Texture.addToCache(txt, obj.url);
                bridge.EBitmapText.registerFont(atlasData, txt);
                if (xSpacing === undefined) {
                    xSpacing = 0;
                }
                if (ySpacing === undefined) {
                    ySpacing = 0;
                }
                if (atlasType === "json") {
                    obj.font = bridge.LoaderParser.jsonBitmapFont(atlasData, obj.base, xSpacing, ySpacing);
                }
                else {
                    obj.font = bridge.LoaderParser.xmlBitmapFont(atlasData, obj.base, xSpacing, ySpacing);
                }
                this.cache.bitmapFont[key] = obj;
                this.resolveURL(url, obj);
            };
            Cache.prototype.addBitmapFontFromAtlas = function (key, atlasKey, atlasFrame, dataKey, dataType, xSpacing, ySpacing) {
            };
            Cache.prototype.addCanvas = function (key, canvas, context) {
                if (context === undefined) {
                    context = canvas.getContext("2d");
                }
                this.cache.canvas[key] = { canvas: canvas, context: context };
            };
            Cache.prototype.addImages = function () {
                this._pendingCount = 0;
                this.addDefaultImage();
                this.addMissingImage();
                var self = this;
                var readyTimeout = Cache.READY_TIMEOUT;
                if (Cache.READY_TIMEOUT > 0) {
                    setTimeout(function () {
                        if (!self.isReady) {
                            console.warn("Cache: Still waiting for images after %s ms.", readyTimeout);
                            self.ready();
                        }
                    }, Cache.READY_TIMEOUT);
                }
                else {
                    this.ready();
                }
            };
            Cache.prototype.addDefaultImage = function () {
                this.addImageAsync(Cache.DEFAULT_KEY, Cache.DEFAULT_SRC, function (obj) {
                    obj.base.skipRender = true;
                    Cache.DEFAULT = new PIXI.Texture(obj.base);
                });
            };
            Cache.prototype.addImageAsync = function (key, src, callback) {
                var self = this;
                var img = new Image();
                img.onload = function () {
                    callback.call(this, self.addImage(key, null, img));
                    self.removePending();
                    img.onload = null;
                };
                this.addPending();
                img.src = src;
            };
            Cache.prototype.removePending = function () {
                this._pendingCount -= 1;
                this.checkReady();
            };
            Cache.prototype.addPending = function () {
                this._pendingCount += 1;
            };
            Cache.prototype.checkReady = function () {
                if (this.isReady) {
                    this.ready();
                }
            };
            Cache.prototype.ready = function () {
                this._pendingCount = 0;
                this.onReady.dispatch(this);
            };
            Cache.prototype.addImage = function (key, url, data) {
                if (this.checkImageKey(key)) {
                    this.removeImage(key);
                }
                var img = {
                    key: key,
                    url: url,
                    data: data,
                    base: new PIXI.BaseTexture(data),
                    frame: new bridge.Frame(0, 0, 0, data.width, data.height, key),
                    frameData: new bridge.FrameData()
                };
                img.frameData.addFrame(new bridge.Frame(0, 0, 0, data.width, data.height, url));
                this.cache.image[key] = img;
                var texture = new PIXI.Texture(img.base);
                bridge.Texture.addToCache(texture, url);
                this.resolveURL(url, img);
                if (key === "__default") {
                    Cache.DEFAULT = new bridge.Texture(img.base);
                }
                else if (key === "__missing") {
                    Cache.MISSING = new bridge.Texture(img.base);
                }
                return img;
            };
            Cache.prototype.addJSON = function (key, url, data) {
                this.cache.json[key] = { url: url, data: data };
                this.resolveURL(url, this.cache.json[key]);
            };
            Cache.prototype.addMissingImage = function () {
                this.addImageAsync(Cache.MISSING_KEY, Cache.MISSING_SRC, function (obj) {
                    Cache.MISSING = new PIXI.Texture(obj.base);
                });
            };
            Cache.prototype.addRenderTexture = function (key, texture) {
                this.cache.renderTexture[key] = {
                    texture: texture,
                    frame: new bridge.Frame(0, 0, 0, texture.width, texture.height, "")
                };
            };
            Cache.prototype.addShader = function (key, url, data) {
                this.cache.shader[key] = { url: url, data: data };
                this.resolveURL(url, this.cache.shader[key]);
            };
            Cache.prototype.addSound = function (key, url, data, webAudio, audioTag) {
                if (webAudio === undefined) {
                    webAudio = true;
                    audioTag = false;
                }
                if (audioTag === undefined) {
                    webAudio = false;
                    audioTag = true;
                }
                var decoded = false;
                if (audioTag) {
                    decoded = true;
                }
                this.cache.sound[key] = {
                    url: url,
                    data: data,
                    isDecoding: false,
                    decoded: decoded,
                    webAudio: webAudio,
                    audioTag: audioTag,
                    locked: this.game.sound.touchLocked
                };
                this.resolveURL(url, this.cache.sound[key]);
            };
            Cache.prototype.addSpriteSheet = function (key, url, data, frameWidth, frameHeight, frameMax, margin, spacing, skipFrames) {
                if (frameMax === undefined) {
                    frameMax = -1;
                }
                if (margin === undefined) {
                    margin = 0;
                }
                if (spacing === undefined) {
                    spacing = 0;
                }
                var obj = {
                    key: key,
                    url: url,
                    data: data,
                    frameWidth: frameWidth,
                    frameHeight: frameHeight,
                    margin: margin,
                    spacing: spacing,
                    base: new PIXI.BaseTexture(data),
                    frameData: bridge.AnimationParser.spriteSheet(this.game, data, frameWidth, frameHeight, frameMax, margin, spacing)
                };
                this.cache.image[key] = obj;
                this.resolveURL(url, obj);
            };
            Cache.prototype.addText = function (key, url, data) {
                this.cache.text[key] = { url: url, data: data };
                this.resolveURL(url, this.cache.text[key]);
            };
            Cache.prototype.getBaseTexture = function (key, cache) {
                if (cache === undefined) {
                    cache = bridge.Cache.IMAGE;
                }
                return this.getItem(key, cache, "getBaseTexture", "base");
            };
            Cache.prototype.addTextureAtlas = function (key, url, data, atlasData, format) {
                var bs = new bridge.EBaseTexture(data);
                var txt = new ingenuity.bridge.Texture(bs);
                ingenuity.bridge.Texture.addToCache(txt, url);
                var sheet2 = new bridge.Spritesheet(bs, atlasData, url);
                sheet2.parse(function () { });
                var obj = {
                    key: key,
                    url: url,
                    data: data,
                    base: new bridge.EBaseTexture(data)
                };
                if (format === bridge.Loader.TEXTURE_ATLAS_XML_STARLING) {
                    obj.frameData = bridge.AnimationParser.XMLData(this.game, atlasData);
                }
                else if (format === bridge.Loader.TEXTURE_ATLAS_JSON_PYXEL) {
                    obj.frameData = bridge.AnimationParser.JSONDataPyxel(this.game, atlasData);
                }
                else {
                    if (Array.isArray(atlasData.frames)) {
                        obj.frameData = bridge.AnimationParser.JSONData(this.game, atlasData);
                    }
                    else {
                        obj.frameData = bridge.AnimationParser.JSONDataHash(this.game, atlasData);
                    }
                }
                this.cache.image[key] = obj;
                this.resolveURL(url, obj);
            };
            Cache.prototype.addTilemap = function (key, url, mapData, format) {
                this.cache.tilemap[key] = { url: url, data: mapData, format: format };
                this.resolveURL(url, this.cache.tilemap[key]);
            };
            Cache.prototype.addPhysicsData = function (key, url, mapData, format) {
                this.cache.physics[key] = { url: url, data: mapData, format: format };
                this.resolveURL(url, this.cache.physics[key]);
            };
            Cache.prototype.addVideo = function (key, url, data, isBlob) {
                this.cache.video[key] = { url: url, data: data, isBlob: isBlob, locked: true };
                this.resolveURL(url, this.cache.video[key]);
            };
            Cache.prototype.addXML = function (key, url, data) {
                this.cache.xml[key] = { url: url, data: data };
                this.resolveURL(url, this.cache.xml[key]);
            };
            Cache.prototype.checkBinaryKey = function (key) {
                return this.checkKey(Cache.BINARY, key);
            };
            Cache.prototype.checkBitmapDataKey = function (key) {
                return this.checkKey(Cache.BITMAPDATA, key);
            };
            Cache.prototype.checkBitmapFontKey = function (key) {
                return this.checkKey(Cache.BITMAPFONT, key);
            };
            Cache.prototype.checkCanvasKey = function (key) {
                return this.checkKey(Cache.CANVAS, key);
            };
            Cache.prototype.checkImageKey = function (key) {
                return this.checkKey(Cache.IMAGE, key);
            };
            Cache.prototype.checkGifKey = function (key) {
                return this.checkKey(Cache.GIF, key);
            };
            Cache.prototype.checkJSONKey = function (key) {
                return this.checkKey(Cache.JSON, key);
            };
            Cache.prototype.checkKey = function (cache, key) {
                if (this.cacheMap[cache][key]) {
                    return true;
                }
                return false;
            };
            Cache.prototype.checkRenderTextureKey = function (key) {
                return this.checkKey(Cache.RENDER_TEXTURE, key);
            };
            Cache.prototype.checkShaderKey = function (key) {
                return this.checkKey(Cache.SHADER, key);
            };
            Cache.prototype.checkSoundKey = function (key) {
                return this.checkKey(Cache.SOUND, key);
            };
            Cache.prototype.checkTextKey = function (key) {
                return this.checkKey(Cache.TEXT, key);
            };
            Cache.prototype.checkTextureKey = function (key) {
                return this.checkKey(Cache.TEXTURE, key);
            };
            Cache.prototype.checkTilemapKey = function (key) {
                return this.checkKey(Cache.TILEMAP, key);
            };
            Cache.prototype.checkURL = function (url) {
                if (this.urlMap[this.resolveURL(url)]) {
                    return true;
                }
                return false;
            };
            Cache.prototype.checkXMLKey = function (key) {
                return this.checkKey(Cache.XML, key);
            };
            Cache.prototype.checkVideoKey = function (key) {
                return this.checkKey(Cache.VIDEO, key);
            };
            Cache.prototype.checkSpine = function (key) {
                return false;
            };
            Cache.prototype.getBinary = function (key) {
                return this.getItem(key, Cache.BINARY, "getBinary");
            };
            Cache.prototype.getBitmapFont = function (key) {
                return this.getItem(key, Cache.BITMAPFONT, "getBitmapFont");
            };
            Cache.prototype.getCanvas = function (key) {
                return this.getItem(key, Cache.CANVAS, "getCanvas", "canvas");
            };
            Cache.prototype.getFrame = function (key, cache) {
                if (cache === undefined) {
                    cache = Cache.IMAGE;
                }
                return this.getItem(key, cache, "getFrame", "frame");
            };
            Cache.prototype.getFrameByIndex = function (key, index, cache) {
                var data = this.getFrameData(key, cache);
                if (data) {
                    return data.getFrame(index);
                }
                else {
                    return null;
                }
            };
            Cache.prototype.getFrameByName = function (key, name, cache) {
                var data = this.getFrameData(key, cache);
                if (data) {
                    return data.getFrameByName(name);
                }
                else {
                    return null;
                }
            };
            Cache.prototype.getFrameCount = function (key, cache) {
                if (cache === undefined) {
                    cache = Cache.IMAGE;
                }
                return this.getItem(key, cache, "getFrame", "frame");
            };
            Cache.prototype.getFrameData = function (key, cache) {
                if (cache === undefined) {
                    cache = Cache.IMAGE;
                }
                return this.getItem(key, cache, "getFrameData", "frameData");
            };
            Cache.prototype.getImage = function (key, full) {
                if (key === undefined || key === null) {
                    key = "__default";
                }
                if (full === undefined) {
                    full = false;
                }
                var img = this.getItem(key, Cache.IMAGE, "getImage");
                if (img === null) {
                    img = this.getItem("__missing", Cache.IMAGE, "getImage");
                }
                if (full) {
                    return img;
                }
                else {
                    return img.data;
                }
            };
            Cache.prototype.getItem = function (key, cache, method, property) {
                if (!this.checkKey(cache, key)) {
                    if (method) {
                        console.warn("Cache." + method + ": Key " + key + " not found in Cache.");
                    }
                }
                else {
                    if (property === undefined) {
                        return this.cacheMap[cache][key];
                    }
                    else {
                        return this.cacheMap[cache][key][property];
                    }
                }
                return null;
            };
            Cache.prototype.getJSON = function (key, clone) {
                var data = this.getItem(key, Cache.JSON, "getJSON", "data");
                if (data) {
                    if (clone) {
                        return bridge.extendObj(Array.isArray(data) ? [] : {}, data, true);
                    }
                    else {
                        return data;
                    }
                }
                else {
                    return null;
                }
            };
            Cache.prototype.getJSONById = function (key, clone) {
                return this.getJSON(key, clone);
            };
            Cache.prototype.getKeys = function (cache) {
                if (cache === undefined) {
                    cache = Cache.IMAGE;
                }
                var out = [];
                if (this.cacheMap[cache]) {
                    for (var key in this.cacheMap[cache]) {
                        if (key !== "__default" && key !== "__missing") {
                            out.push(key);
                        }
                    }
                }
                return out;
            };
            Cache.prototype.getRenderTexture = function (key) {
                return this.getItem(key, Cache.RENDER_TEXTURE, "getRenderTexture");
            };
            Cache.prototype.getShader = function (key) {
                return this.getItem(key, Cache.SHADER, "getShader", "data");
            };
            Cache.prototype.getSound = function (key) {
                return this.getItem(key, Cache.SOUND, "getSound");
            };
            Cache.prototype.getSoundData = function (key) {
                return this.getItem(key, Cache.SOUND, "getSoundData", "data");
            };
            Cache.prototype.getSpriteSheetKey = function (key) {
                return false;
            };
            Cache.prototype.getText = function (key) {
                return this.getItem(key, Cache.TEXT, "getText", "data");
            };
            Cache.prototype.getTextKeys = function () {
                return [];
            };
            Cache.prototype.getTexture = function (key) {
                return null;
            };
            Cache.prototype.getTextureAtlasKey = function (key) {
                return false;
            };
            Cache.prototype.getTextureFrame = function (key) {
                return this.getItem(key, Cache.TEXTURE, "getTextureFrame", "frame");
            };
            Cache.prototype.getTilemap = function (key) {
                return null;
            };
            Cache.prototype.getTilemapData = function (key) {
                return this.getItem(key, Cache.TILEMAP, "getTilemapData");
            };
            Cache.prototype.getURL = function (url) {
                var rUrl = this.resolveURL(url);
                if (rUrl) {
                    return this.urlMap[rUrl];
                }
                else {
                    console.warn("Cache.getUrl: Invalid url: " + url + " or Cache.autoResolveURL was false");
                    return null;
                }
            };
            Cache.prototype.getXML = function (key) {
                return this.getItem(key, Cache.XML, "getXML", "data");
            };
            Cache.prototype.getVideo = function (key) {
                return this.getItem(key, Cache.VIDEO, "getVideo");
            };
            Cache.prototype.hasFrameData = function (key, cache) {
                if (cache === undefined) {
                    cache = Cache.IMAGE;
                }
                return (this.getItem(key, cache, "", "frameData") !== null);
            };
            Cache.prototype.removeBinary = function (key) {
                delete this.cache.binary[key];
            };
            Cache.prototype.removeBitmapData = function (key) {
                delete this.cache.bitmapData[key];
            };
            Cache.prototype.removeBitmapFont = function (key) {
                delete this.cache.bitmapFont[key];
            };
            Cache.prototype.removeCanvas = function (key) {
                delete this.cache.canvas[key];
            };
            Cache.prototype.removeImage = function (key, destroyBaseTexture) {
                if (destroyBaseTexture === undefined) {
                    destroyBaseTexture = true;
                }
                var img = this.getImage(key, true);
                if (destroyBaseTexture && img.base) {
                    img.base.destroy();
                }
                delete this.cache.image[key];
            };
            Cache.prototype.removeJSON = function (key) {
                delete this.cache.json[key];
            };
            Cache.prototype.removeRenderTexture = function (key) {
                delete this.cache.renderTexture[key];
            };
            Cache.prototype.removeShader = function (key) {
                delete this.cache.shader[key];
            };
            Cache.prototype.removeSound = function (key) {
                delete this.cache.sound[key];
            };
            Cache.prototype.removeSpriteSheet = function (key) {
                delete this.cache.spriteSheet[key];
            };
            Cache.prototype.removeText = function (key) {
                delete this.cache.text[key];
            };
            Cache.prototype.removeTextureAtlas = function (key) {
                delete this.cache.atlas[key];
            };
            Cache.prototype.removeTilemap = function (key) {
                delete this.cache.tilemap[key];
            };
            Cache.prototype.removeXML = function (key) {
                delete this.cache.xml[key];
            };
            Cache.prototype.removeVideo = function (key) {
                delete this.cache.video[key];
            };
            Cache.prototype.removeSpine = function (key) {
            };
            Cache.prototype.destroy = function () {
                for (var i = 0; i < this.cacheMap.length; i++) {
                    var cache = this.cacheMap[i];
                    for (var key in cache) {
                        if (key !== "__default" && key !== "__missing") {
                            if (cache[key].destroy) {
                                cache[key].destroy();
                            }
                            delete cache[key];
                        }
                    }
                }
                this.urlMap = null;
                this.urlTemp = null;
            };
            Cache.prototype.resolveURL = function (url, data) {
                if (!this.autoResolveURL) {
                    return null;
                }
                this.urlResolver.src = this.game.load.baseURL + url;
                this.urlTemp = this.urlResolver.src;
                this.urlResolver.src = "";
                if (data) {
                    this.urlMap[this.urlTemp] = data;
                }
                return this.urlTemp;
            };
            Cache.CANVAS = 1;
            Cache.IMAGE = 2;
            Cache.TEXTURE = 3;
            Cache.SOUND = 4;
            Cache.TEXT = 5;
            Cache.PHYSICS = 6;
            Cache.TILEMAP = 7;
            Cache.BINARY = 8;
            Cache.BITMAPDATA = 9;
            Cache.BITMAPFONT = 10;
            Cache.JSON = 11;
            Cache.XML = 12;
            Cache.VIDEO = 13;
            Cache.SHADER = 14;
            Cache.RENDER_TEXTURE = 15;
            Cache.SPINE = 16;
            Cache.GIF = 17;
            Cache.DEFAULT = null;
            Cache.MISSING = null;
            Cache.DEFAULT_KEY = "__default";
            Cache.DEFAULT_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
            Cache.MISSING_KEY = "__missing";
            Cache.MISSING_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==";
            Cache.READY_TIMEOUT = 1000;
            return Cache;
        }());
        bridge.Cache = Cache;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Canvas = (function () {
            function Canvas() {
            }
            Canvas.create = function (parent, width, height, id, skipPool) {
                width = width || 256;
                height = height || 256;
                var canvas = (skipPool) ? document.createElement("canvas") : bridge.CanvasPool.create(parent, width, height);
                if (typeof id === "string" && id !== "") {
                    canvas.id = id;
                }
                canvas.width = width;
                canvas.height = height;
                canvas.style.display = "block";
                return canvas;
            };
            Canvas.prototype.setBackgroundColor = function (canvas, color) {
                color = color || "rgb(0,0,0)";
                canvas.style.backgroundColor = color;
                return canvas;
            };
            Canvas.prototype.setTouchAction = function (canvas, value) {
                value = value || "none";
                canvas.style.msTouchAction = value;
                canvas.style["ms-touch-action"] = value;
                canvas.style["touch-action"] = value;
                return canvas;
            };
            Canvas.prototype.setUserSelect = function (canvas, value) {
                value = value || "none";
                canvas.style["-webkit-touch-callout"] = value;
                canvas.style["-webkit-user-select"] = value;
                canvas.style["-khtml-user-select"] = value;
                canvas.style["-moz-user-select"] = value;
                canvas.style["-ms-user-select"] = value;
                canvas.style["user-select"] = value;
                canvas.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)";
                return canvas;
            };
            Canvas.prototype.addToDOM = function (canvas, parent, overflowHidden) {
                var target;
                if (overflowHidden === undefined) {
                    overflowHidden = true;
                }
                if (parent) {
                    if (typeof parent === "string") {
                        target = document.getElementById(parent);
                    }
                    else if (typeof parent === "object" && parent.nodeType === 1) {
                        target = parent;
                    }
                }
                if (!target) {
                    target = document.body;
                }
                if (overflowHidden && target.style) {
                    target.style.overflow = "hidden";
                }
                target.appendChild(canvas);
                return canvas;
            };
            Canvas.prototype.removeFromDOM = function (canvas) {
                if (canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            };
            Canvas.prototype.setTransform = function (context, translateX, translateY, scaleX, scaleY, skewX, skewY) {
                context.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY);
                return context;
            };
            Canvas.setSmoothingEnabled = function (context, value) {
                var s = Canvas.getSmoothingPrefix(context);
                if (s) {
                    context[s] = value;
                }
                return context;
            };
            Canvas.getSmoothingPrefix = function (context) {
                var vendor = ["i", "webkitI", "msI", "mozI", "oI"];
                for (var prefix in vendor) {
                    var s = vendor[prefix] + "mageSmoothingEnabled";
                    if (s in context) {
                        return s;
                    }
                }
                return null;
            };
            Canvas.getSmoothingEnabled = function (context) {
                var s = Canvas.getSmoothingPrefix(context);
                if (s) {
                    return context[s];
                }
            };
            Canvas.prototype.setImageRenderingCrisp = function (canvas) {
                var types = ["optimizeSpeed", "crisp-edges", "-moz-crisp-edges", "-webkit-optimize-contrast", "optimize-contrast", "pixelated"];
                for (var i = 0; i < types.length; i++) {
                    canvas.style["image-rendering"] = types[i];
                }
                canvas.style.msInterpolationMode = "nearest-neighbor";
                return canvas;
            };
            Canvas.prototype.setImageRenderingBicubic = function (canvas) {
                canvas.style["image-rendering"] = "auto";
                canvas.style.msInterpolationMode = "bicubic";
                return canvas;
            };
            return Canvas;
        }());
        bridge.Canvas = Canvas;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var CanvasPool = (function () {
            function CanvasPool() {
            }
            CanvasPool.create = function (parent, width, height) {
                var idx = CanvasPool.getFirst();
                var canvas;
                if (idx === -1) {
                    var container = {
                        parent: parent,
                        canvas: document.createElement("canvas")
                    };
                    CanvasPool.pool.push(container);
                    canvas = container.canvas;
                }
                else {
                    CanvasPool.pool[idx].parent = parent;
                    canvas = CanvasPool.pool[idx].canvas;
                }
                if (width !== undefined) {
                    canvas.width = width;
                    canvas.height = height;
                }
                return canvas;
            };
            CanvasPool.getFirst = function () {
                var pool = CanvasPool.pool;
                for (var i = 0; i < pool.length; i++) {
                    if (!pool[i].parent) {
                        return i;
                    }
                }
                return -1;
            };
            CanvasPool.remove = function (parent) {
                var pool = CanvasPool.pool;
                for (var _i = 0, pool_1 = pool; _i < pool_1.length; _i++) {
                    var ele = pool_1[_i];
                    if (ele.parent === parent) {
                        ele.parent = null;
                        ele.canvas.width = 1;
                        ele.canvas.height = 1;
                    }
                }
            };
            CanvasPool.removeByCanvas = function (canvas) {
                var pool = CanvasPool.pool;
                for (var _i = 0, pool_2 = pool; _i < pool_2.length; _i++) {
                    var ele = pool_2[_i];
                    if (ele.canvas === canvas) {
                        ele.parent = null;
                        ele.canvas.width = 1;
                        ele.canvas.height = 1;
                    }
                }
            };
            CanvasPool.getTotal = function () {
                var pool = CanvasPool.pool;
                var c = 0;
                for (var _i = 0, pool_3 = pool; _i < pool_3.length; _i++) {
                    var ele = pool_3[_i];
                    if (ele.parent) {
                        c++;
                    }
                }
                return c;
            };
            CanvasPool.getFree = function () {
                var pool = CanvasPool.pool;
                var c = 0;
                for (var _i = 0, pool_4 = pool; _i < pool_4.length; _i++) {
                    var ele = pool_4[_i];
                    if (!ele.parent) {
                        c++;
                    }
                }
                return c;
            };
            CanvasPool.pool = [];
            return CanvasPool;
        }());
        bridge.CanvasPool = CanvasPool;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Circle = (function (_super) {
            __extends(Circle, _super);
            function Circle(x, y, radius) {
                return _super.call(this, x, y, radius) || this;
            }
            Object.defineProperty(Circle.prototype, "diameter", {
                get: function () {
                    return this.radius * 2;
                },
                set: function (value) {
                    this.radius *= 2;
                },
                enumerable: true,
                configurable: true
            });
            Circle.prototype.clone = function () {
                return new Circle(this.x, this.y, this.radius);
            };
            Circle.prototype.contains = function (x, y) {
                return Circle._contains(this, x, y);
            };
            Circle._contains = function (a, x, y) {
                if (a.radius > 0 && x >= a.left && x <= a.right && y >= a.top && y <= a.bottom) {
                    var dx = (a.x - x) * (a.x - x);
                    var dy = (a.y - y) * (a.y - y);
                    return (dx + dy) <= (a.radius * a.radius);
                }
                else {
                    return false;
                }
            };
            Circle.prototype.getBounds = function () {
                return new bridge.Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            };
            Circle.prototype.setTo = function (x, y, radius) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                return this;
            };
            Circle.prototype.circumferencePoint = function () {
            };
            Object.defineProperty(Circle.prototype, "left", {
                get: function () {
                    return this.x - this.radius;
                },
                set: function (value) {
                    if (value > this.x) {
                        this.radius = 0;
                        this.diameter = 0;
                    }
                    else {
                        this.radius = this.x - value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Circle.prototype, "right", {
                get: function () {
                    return this.x + this.radius;
                },
                set: function (value) {
                    if (value < this.x) {
                        this.radius = 0;
                        this.diameter = 0;
                    }
                    else {
                        this.radius = value - this.x;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Circle.prototype, "top", {
                get: function () {
                    return this.y - this.radius;
                },
                set: function (value) {
                    if (value > this.y) {
                        this.radius = 0;
                        this.diameter = 0;
                    }
                    else {
                        this.radius = this.y - value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Circle.prototype, "bottom", {
                get: function () {
                    return this.y + this.radius;
                },
                set: function (value) {
                    if (value < this.y) {
                        this.radius = 0;
                        this.diameter = 0;
                    }
                    else {
                        this.radius = value - this.y;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return Circle;
        }(bridge.ECircle));
        bridge.Circle = Circle;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container(json, game, parent, name, addToStage, enableBody, physicsBodyType) {
                if (addToStage === void 0) { addToStage = false; }
                if (enableBody === void 0) { enableBody = false; }
                if (physicsBodyType === void 0) { physicsBodyType = 0; }
                var _this = _super.call(this) || this;
                _this.signals = {};
                _this.children = [];
                _this._cursor = null;
                _this.cursorIndex = 0;
                _this.onDestroy = new bridge.Signal();
                _this.inputEnableChildren = false;
                _this.json = json;
                _this.name = json.name;
                var currentContext = _this;
                _this.anchor = {
                    x: 0,
                    y: 0,
                    set: function (x, y) {
                        currentContext.setAnchor(x, (y === undefined) ? y = x : y);
                    },
                    clone: function () {
                        return currentContext.anchor;
                    }
                };
                (json.scale) && _this.scale.set(json.scale);
                (json.scaleX || json.scaleY) && _this.scale.set(json.scaleX || 1, json.scaleY || 1);
                _this.x = (json && json.x) || 0;
                _this.y = (json && json.y) || 0;
                (json.regX || json.regY) && _this.setAnchor((json.regX || 0), (json.regY || 0));
                (typeof json.visible !== "undefined") && (_this.visible = json.visible);
                if (game) {
                    _this.game = game;
                }
                if (parent) {
                    _this.setParent(parent);
                }
                else if (json.skipParent === true) {
                }
                else {
                    _this.setParent(_this.game.stage);
                }
                if (name) {
                    _this.name = name;
                }
                _this.exists = true;
                _this.enablePixiInteractionEvents();
                return _this;
            }
            Object.defineProperty(Container.prototype, "length", {
                get: function () {
                    return this.children.length;
                },
                enumerable: true,
                configurable: true
            });
            Container.prototype.enablePixiInteractionEvents = function () {
                var _this = this;
                _super.prototype.on.call(this, "mousedown", function (evt) {
                    _this.fireEvent(bridge.Button.STATE_DOWN, evt.target);
                }, this);
                _super.prototype.on.call(this, "mouseout", function (evt) {
                    _this.fireEvent(bridge.Button.STATE_OUT, evt.currentTarget);
                }, this);
                _super.prototype.on.call(this, "mouseover", function (evt) {
                    _this.fireEvent(bridge.Button.STATE_OVER, evt.currentTarget);
                }, this);
                _super.prototype.on.call(this, "mouseup", function (evt) {
                    _this.fireEvent(bridge.Button.STATE_UP, evt.target);
                }, this);
                _super.prototype.on.call(this, "tap", function (evt) {
                    _this.fireEvent(bridge.Button.STATE_UP, evt.target);
                }, this);
            };
            Object.defineProperty(Container.prototype, "pageCursor", {
                get: function () {
                    if (this._cursor === null && this.children.length >= 0) {
                        this.cursorIndex = this.children.length - 1;
                        this._cursor = this.children[this.cursorIndex];
                    }
                    return this._cursor;
                },
                set: function (value) {
                    this._cursor = value;
                },
                enumerable: true,
                configurable: true
            });
            Container.prototype.next = function () {
                if (this._cursor) {
                    if (this.cursorIndex >= this.children.length - 1) {
                        this.cursorIndex = 0;
                    }
                    else {
                        this.cursorIndex++;
                    }
                    this._cursor = this.children[this.cursorIndex];
                    return this._cursor;
                }
            };
            Container.prototype.previous = function () {
                if (this._cursor) {
                    if (this.cursorIndex === 0) {
                        this.cursorIndex = this.children.length - 1;
                    }
                    else {
                        this.cursorIndex--;
                    }
                    this._cursor = this.children[this.cursorIndex];
                    return this._cursor;
                }
            };
            Object.defineProperty(Container.prototype, "worldScale", {
                get: function () {
                    return this.game.stage.scale;
                },
                set: function (scale) {
                    this.game.stage.scale = scale;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "inputEnabled", {
                get: function () {
                    return this.interactive;
                },
                set: function (key) {
                    this.interactive = key;
                },
                enumerable: true,
                configurable: true
            });
            Container.prototype.setPivot = function (x, y) {
                this.pivot.x = x;
                this.pivot.y = y;
            };
            Container.prototype.setAnchor = function (x, y) {
                if (x > 1 || y > 1) {
                    this.setPivot(x, y);
                }
                else {
                    this.anchor.x = x;
                    this.anchor.y = y;
                    this.setPivot(x * (this.json.w || this.json.width || 0), (y === undefined) ? y = x * (this.json.h || this.json.height || 0) : y * (this.json.h || this.json.height || 0));
                }
            };
            Container.prototype.getJson = function () {
                return bridge.clone(this.json);
            };
            Container.prototype.on = function (type, handler, scope, once, data, priority) {
                if (!this.signals.hasOwnProperty(type)) {
                    this.signals[type] = new bridge.Signal();
                }
                if (once) {
                    this.signals[type].addOnce(handler, scope, priority, data);
                }
                else {
                    this.signals[type].add(handler, scope, priority, data);
                }
                return this;
            };
            Container.prototype.off = function (type, handler, scope) {
                if (this.signals.hasOwnProperty(type)) {
                    if (handler) {
                        if (this.signals[type].has(handler, scope)) {
                            this.signals[type].remove(handler, scope);
                        }
                        else {
                            console.warn("No such handler exists on " + type);
                        }
                    }
                    else {
                        this.signals[type].removeAll();
                        this.signals[type].dispose();
                        delete this.signals[type];
                    }
                }
                return this;
            };
            Container.prototype.hasEvent = function (type) {
                return this.signals.hasOwnProperty(type);
            };
            Container.prototype.update = function () {
                if (!this.exists) {
                    return;
                }
                var i = this.children.length;
                while (i--) {
                    var len = this.children.length;
                    if (i >= len) {
                        i = len - 1;
                    }
                    var child = this.children[i];
                    if (child.exists) {
                        if (child instanceof ingenuity.bridge.Container) {
                            child.update();
                        }
                    }
                }
            };
            Container.prototype.fireEvent = function (type, data, handler, scope) {
                if (this.signals.hasOwnProperty(type)) {
                    this.signals[type].dispatch(data);
                }
                else {
                    console.warn("No such event exists " + type);
                }
            };
            Container.prototype.addChildAt = function (child, index) {
                if (index >= 0 && index <= this.children.length) {
                    if (child.parent) {
                        child.parent.removeChild(child);
                    }
                    child.parent = this;
                    this.children.splice(index, 0, child);
                    child.emit("added", this);
                    this.emit("childAdded", child, this, index);
                    return child;
                }
                else {
                    throw new Error(child + "addChildAt: The index " + index + " supplied is out of bounds " + this.children.length);
                }
            };
            Container.prototype.addChild = function (child) {
                var additionalChildren = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    additionalChildren[_i - 1] = arguments[_i];
                }
                return this.addChildAt(child, this.children.length);
            };
            Container.prototype.removeChild = function (child) {
                var index = this.children.indexOf(child);
                if (index === -1) {
                    return;
                }
                return this.removeChildAt(index);
            };
            Container.prototype.removeChildAt = function (index) {
                var child = this.getChildAt(index);
                if (child) {
                    child.parent = undefined;
                    this.children.splice(index, 1);
                    child.emit("removed", this);
                    this.emit("childRemoved", child, this, index);
                }
                return child;
            };
            Container.prototype.showBounds = function (targetCoordinateSpace) {
                var rect = this.getBounds();
                var g = new bridge.Graphics(this.game);
                g.lineStyle(this.json.boundsStroke || Container.DEFAULT_VALUES.boundsStroke, this.json.boundsColor || Container.DEFAULT_VALUES.boundsColor, Container.DEFAULT_VALUES.boundsAlpha);
                g.drawRect(0, 0, this.json.w, this.json.h);
                if (rect.width !== this.json.w || rect.height !== this.json.h) {
                    g.lineStyle(this.json.boundsStroke || Container.DEFAULT_VALUES.boundsStroke_2, this.json.boundsColor || Container.DEFAULT_VALUES.boundsColor_2, Container.DEFAULT_VALUES.boundsAlpha_2);
                    g.drawRect(0, 0, rect.width, rect.height);
                }
            };
            Container.prototype.fetchTextureFromAtlas = function (key, frame) {
                var texture;
                var atlasJson = (this.game.cache.resources) ? this.game.cache.resources["json_" + key] : undefined;
                if (atlasJson) {
                    var count = -1;
                    var atlasJsonFrames = atlasJson.data.frames;
                    var objIndex = void 0;
                    for (objIndex in atlasJsonFrames) {
                        var currObj = atlasJsonFrames[objIndex];
                        if ("filename" in currObj) {
                            if (currObj.filename === frame) {
                                texture = atlasJson.textures[objIndex];
                                break;
                            }
                        }
                        else {
                            if (typeof frame === "string") {
                                if (objIndex === frame) {
                                    texture = atlasJson.textures[objIndex];
                                }
                            }
                            else {
                                count++;
                                if (count === frame) {
                                    texture = atlasJson.textures[objIndex];
                                }
                            }
                        }
                    }
                    return texture;
                }
                return this.game.cache.getImage(key);
            };
            Container.prototype.getFirstExists = function (exists) {
                if (exists === void 0) { exists = true; }
                (typeof exists !== "boolean") && (exists = true);
                for (var i = 0; i < this.children.length; i++) {
                    if (this.children[i].exists === exists) {
                        return this.children[i];
                    }
                }
                return null;
            };
            Container.prototype.toString = function () {
                return "[Container (name: " + this.name + ", numChildren: " + this.children.length + ")]";
            };
            Container.prototype.forEach = function (callback, callbackContext, checkExists) {
                if (checkExists === undefined) {
                    checkExists = false;
                }
                if (arguments.length <= 3) {
                    for (var i = 0; i < this.children.length; i++) {
                        if (!checkExists || (checkExists && this.children[i])) {
                            callback.call(callbackContext, this.children[i]);
                        }
                    }
                }
                else {
                    var args = [null];
                    for (var i = 3; i < arguments.length; i++) {
                        args.push(arguments[i]);
                    }
                    for (var i = 0; i < this.children.length; i++) {
                        if (!checkExists || (checkExists && this.children[i])) {
                            args[0] = this.children[i];
                            callback.apply(callbackContext, args);
                        }
                    }
                }
            };
            Container.prototype.create = function (x, y, key, frame, exists, index) {
                if (exists === undefined) {
                    exists = true;
                }
                var child = new bridge.Sprite(this.game, x, y, key, frame);
                child.exists = exists;
                child.visible = exists;
                child.alive = exists;
                return this.add(child, false, index);
            };
            Container.prototype.add = function (child, silent, index) {
                if (silent === void 0) { silent = false; }
                if (silent === undefined) {
                    silent = false;
                }
                if (child.parent === this) {
                    return child;
                }
                if (index === undefined) {
                    this.addChild(child);
                }
                else {
                    this.addChildAt(child, index);
                }
                return child;
            };
            Container.prototype.bringToTop = function (child) {
                if (this.children.indexOf(child) !== -1) {
                    this.addChild(child);
                }
            };
            Container.prototype.sendToBack = function (child) {
                if (this.children.indexOf(child) !== -1) {
                    this.addChildAt(child, 0);
                }
            };
            Object.defineProperty(Container.prototype, "left", {
                get: function () { return this.x; },
                set: function (value) { this.x = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "right", {
                get: function () { return this.x + this.width; },
                set: function (value) { this.x = value - this.width; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "top", {
                get: function () { return this.y; },
                set: function (value) { this.y = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "bottom", {
                get: function () { return this.y + this.height; },
                set: function (value) { this.y = value - this.height; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "centerX", {
                get: function () { return this.x + bridge.Maths.getHalf(this.width); },
                set: function (value) { this.x = value - bridge.Maths.getHalf(this.width); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "centerY", {
                get: function () { return this.y + bridge.Maths.getHalf(this.height); },
                set: function (value) { this.y = value - bridge.Maths.getHalf(this.height); },
                enumerable: true,
                configurable: true
            });
            Container.prototype.destroy = function (options) {
                bridge.DisplayObject.prototype.destroy.call(this);
                this.sortDirty = false;
                var destroyChildren = true;
                for (var i = 0; i < this.children.length; i++) {
                    if (this.children[i].input) {
                        this.children[i].input.destroy();
                    }
                    if (this.children[i].animations) {
                        this.children[i].animations.destroy();
                    }
                }
                var oldChildren = this.removeChildren(0, this.children.length);
                if (destroyChildren) {
                    for (var i = 0; i < oldChildren.length; ++i) {
                        if (oldChildren.input) {
                            oldChildren.input.destroy();
                        }
                        oldChildren[i].destroy();
                    }
                }
            };
            Container.prototype.removeAll = function (destroy, silent, destroyTexture) {
                if (destroy === undefined) {
                    destroy = false;
                }
                if (silent === undefined) {
                    silent = false;
                }
                if (destroyTexture === undefined) {
                    destroyTexture = false;
                }
                if (this.children.length === 0) {
                    return;
                }
                do {
                    var removed = this.removeChild(this.children[0]);
                    if (destroy && removed) {
                        removed.destroy(true, destroyTexture);
                    }
                } while (this.children.length > 0);
                this.cursor = null;
            };
            Container.prototype.getByName = function (name) {
                for (var i = 0; i < this.children.length; i++) {
                    if (this.children[i].name === name) {
                        return this.children[i];
                    }
                }
                return null;
            };
            Container.prototype.getIndex = function (child) {
                return this.getChildIndex(child);
            };
            Container.prototype.reverse = function () {
                this.children.reverse();
            };
            Object.defineProperty(Container.prototype, "scaleX", {
                get: function () {
                    return this.scale ? this.scale.x : 0;
                },
                set: function (val) {
                    this.scale && (this.scale.x = val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Container.prototype, "scaleY", {
                get: function () {
                    return this.scale ? this.scale.y : 0;
                },
                set: function (val) {
                    this.scale && (this.scale.y = val);
                },
                enumerable: true,
                configurable: true
            });
            Container.DEFAULT_VALUES = {
                boundsStroke: 2,
                boundsColor: 0xFF00FF,
                boundsAlpha: 1,
                boundsStroke_2: 3,
                boundsColor_2: 0xFF0000,
                boundsAlpha_2: 1
            };
            return Container;
        }(bridge.EContainer));
        bridge.Container = Container;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var DisplayObject = (function (_super) {
            __extends(DisplayObject, _super);
            function DisplayObject() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DisplayObject;
        }(bridge.EDisplayObject));
        bridge.DisplayObject = DisplayObject;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var DisplayObjectContainer = (function (_super) {
            __extends(DisplayObjectContainer, _super);
            function DisplayObjectContainer(game) {
                return _super.call(this) || this;
            }
            DisplayObjectContainer.prototype.addChild = function (child) {
                return;
            };
            DisplayObjectContainer.prototype.addChildAt = function (child, index) {
                return;
            };
            DisplayObjectContainer.prototype.getBounds = function (skipUpdate, rect) {
                return;
            };
            DisplayObjectContainer.prototype.getChildAt = function (index) {
                return;
            };
            DisplayObjectContainer.prototype.getChildIndex = function (child) {
                return 0;
            };
            DisplayObjectContainer.prototype.getLocalBounds = function (rect) {
                return;
            };
            DisplayObjectContainer.prototype.removeChild = function (child) {
                return;
            };
            DisplayObjectContainer.prototype.removeChildAt = function (index) {
                return;
            };
            DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex) {
                return;
            };
            DisplayObjectContainer.prototype.removeStageReference = function () {
            };
            DisplayObjectContainer.prototype.setChildIndex = function (child, index) {
            };
            DisplayObjectContainer.prototype.swapChildren = function (child, child2) {
            };
            DisplayObjectContainer.prototype.contains = function (child) {
                return false;
            };
            return DisplayObjectContainer;
        }(bridge.DisplayObject));
        bridge.DisplayObjectContainer = DisplayObjectContainer;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Ellipse = (function (_super) {
            __extends(Ellipse, _super);
            function Ellipse(x, y, width, height) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                return _super.call(this, x, y, width, height) || this;
            }
            Ellipse.prototype.clone = function () {
                return new Ellipse(this.x, this.y, this.width, this.height);
            };
            Ellipse.prototype.contains = function (x, y) {
                return Ellipse._contains(this, x, y);
            };
            Ellipse._contains = function (a, x, y) {
                if (a.width <= 0 || a.height <= 0) {
                    return false;
                }
                var normx = ((x - a.x) / a.width) - 0.5;
                var normy = ((y - a.y) / a.height) - 0.5;
                normx *= normx;
                normy *= normy;
                return (normx + normy < 0.25);
            };
            Ellipse.prototype.getBounds = function () {
                return new bridge.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
            };
            Ellipse.prototype.setTo = function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                return this;
            };
            return Ellipse;
        }(bridge.EEllipse));
        bridge.Ellipse = Ellipse;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Events = (function () {
            function Events(sprite) {
                this.parent = sprite;
            }
            Events.prototype.destroy = function () {
                this.parent = null;
                if (this.onDestroy) {
                    this.onDestroy.dispose();
                }
                if (this.onAddedToGroup) {
                    this.onAddedToGroup.dispose();
                }
                if (this.onRemovedFromGroup) {
                    this.onRemovedFromGroup.dispose();
                }
                if (this.onKilled) {
                    this.onKilled.dispose();
                }
                if (this.onRevived) {
                    this.onRevived.dispose();
                }
                if (this.onEnterBounds) {
                    this.onEnterBounds.dispose();
                }
                if (this.onOutOfBounds) {
                    this.onOutOfBounds.dispose();
                }
                if (this._onRemovedFromWorld) {
                    this._onRemovedFromWorld.dispose();
                }
                if (this.onInputOver) {
                    this.onInputOver.dispose();
                }
                if (this.onInputOut) {
                    this.onInputOut.dispose();
                }
                if (this.onInputDown) {
                    this.onInputDown.dispose();
                }
                if (this.onInputUp) {
                    this.onInputUp.dispose();
                }
                if (this.onDragStart) {
                    this.onDragStart.dispose();
                }
                if (this.onDragUpdate) {
                    this.onDragUpdate.dispose();
                }
                if (this.onDragStop) {
                    this.onDragStop.dispose();
                }
                if (this.onAnimationStart) {
                    this.onAnimationStart.dispose();
                }
                if (this.onAnimationComplete) {
                    this.onAnimationComplete.dispose();
                }
                if (this.onAnimationLoop) {
                    this.onAnimationLoop.dispose();
                }
            };
            return Events;
        }());
        bridge.Events = Events;
        Events.prototype.onAddedToGroup = null;
        Events.prototype.onAnimationComplete = null;
        Events.prototype.onAnimationLoop = null;
        Events.prototype.onAnimationStart = null;
        Events.prototype.onDestroy = null;
        Events.prototype.onDragStart = null;
        Events.prototype.onDragStop = null;
        Events.prototype.onDragUpdate = null;
        Events.prototype.onInputDown = null;
        Events.prototype.onInputOut = null;
        Events.prototype.onInputUp = null;
        Events.prototype.onInputOver = null;
        Events.prototype.onEnterBounds = null;
        Events.prototype.onOutOfBounds = null;
        Events.prototype.onRemovedFromGroup = null;
        Events.prototype.onRevived = null;
        Events.prototype.onKilled = null;
        Events.prototype.onRemovedFromWorld = null;
        for (var prop in Events.prototype) {
            if (!Events.prototype.hasOwnProperty(prop) ||
                prop.indexOf("on") !== 0 ||
                Events.prototype[prop] !== null) {
                continue;
            }
            (function (prop, backing) {
                "use strict";
                Object.defineProperty(Events.prototype, prop, {
                    get: function () {
                        return this[backing] || (this[backing] = new bridge.Signal());
                    }
                });
                Events.prototype[prop + "$dispatch"] = function () {
                    return this[backing] ? this[backing].dispatch.apply(this[backing], arguments) : null;
                };
            })(prop, "_" + prop);
        }
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Graphics = (function (_super) {
            __extends(Graphics, _super);
            function Graphics(game, x, y) {
                var _this = _super.call(this) || this;
                _this.input = null;
                _this.onInputOver = new bridge.Signal();
                _this.onInputOut = new bridge.Signal();
                _this.onInputDown = new bridge.Signal();
                _this.onInputUp = new bridge.Signal();
                _this.x = x || 0;
                _this.y = y || 0;
                _this.game = game;
                _this.events = new bridge.Events(_this);
                _this.addInputHandlers();
                return _this;
            }
            Graphics.prototype.addInputHandlers = function () {
                this.events.onInputDown.add(this.onInputDownHandler, this);
                this.events.onInputUp.add(this.onInputUpHandler, this);
                this.events.onInputOver.add(this.onInputOverHandler, this);
                this.events.onInputOut.add(this.onInputOutHandler, this);
            };
            Graphics.prototype.onInputDownHandler = function (btn, evt, isOver) {
                if (this.onInputDown) {
                    this.onInputDown.dispatch(this, evt);
                }
            };
            Graphics.prototype.onInputUpHandler = function (btn, evt, isOver) {
                if (this.onInputUp) {
                    this.onInputUp.dispatch(this, evt);
                }
            };
            Graphics.prototype.onInputOverHandler = function (btn, evt, isOver) {
                if (this.onInputOver) {
                    this.onInputOver.dispatch(this, evt);
                }
            };
            Graphics.prototype.onInputOutHandler = function (btn, evt, isOver) {
                if (this.onInputOut) {
                    this.onInputOut.dispatch(this, evt);
                }
            };
            Object.defineProperty(Graphics.prototype, "inputEnabled", {
                get: function () {
                    return !!(this.input && this.input.enabled);
                },
                set: function (value) {
                    if (value) {
                        if (this.input === null) {
                            this.input = new bridge.InputHandler(this);
                            this.input.start();
                        }
                        else if (this.input && !this.input.enabled) {
                            this.input.start();
                        }
                    }
                    else {
                        if (this.input && this.input.enabled) {
                            this.input.stop();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Graphics.prototype.update = function () {
            };
            Graphics.prototype.generateCanvasTexture = function (scaleMode, resolution) {
                return _super.prototype.generateCanvasTexture.call(this, scaleMode, resolution);
            };
            return Graphics;
        }(bridge.EGraphics));
        bridge.Graphics = Graphics;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Loader = (function () {
            function Loader(game) {
                this.onLoadStart = new bridge.Signal();
                this.onLoadComplete = new bridge.Signal();
                this.onPackComplete = new bridge.Signal();
                this.onFileStart = new bridge.Signal();
                this.onFileComplete = new bridge.Signal();
                this.onFileError = new bridge.Signal();
                this.resetLocked = false;
                this.isLoading = false;
                this.hasLoaded = false;
                this.crossOrigin = false;
                this.baseURL = "";
                this.path = "";
                this.headers = {
                    json: "application/json",
                    requestedWith: false,
                    xml: "application/xml"
                };
                this.useXDomainRequest = false;
                this.onSoundLoaded = true;
                this._warnedAboutXDomainRequest = false;
                this.enableParallel = true;
                this.maxParallelDownloads = 4;
                this._withSyncPointDepth = 0;
                this._fileList = [];
                this._flightQueue = [];
                this._processingHead = 0;
                this._fileLoadStarted = false;
                this._totalPackCount = 0;
                this._totalFileCount = 0;
                this._loadedPackCount = 0;
                this._loadedFileCount = 0;
                this.game = game;
                this.cache = game.cache;
            }
            Object.defineProperty(Loader.prototype, "progressFloat", {
                get: function () {
                    var progress = (this._loadedFileCount / this._totalFileCount) * 100;
                    return bridge.clamp(progress || 0, 0, 100);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Loader.prototype, "progress", {
                get: function () {
                    return Math.round(this.progressFloat);
                },
                enumerable: true,
                configurable: true
            });
            Loader.prototype.resize = function (width, height) {
            };
            Loader.prototype.checkKeyExists = function (type, key) {
                return this.getAssetIndex(type, key) > -1;
            };
            Loader.prototype.getAssetIndex = function (type, key) {
                var bestFound = -1;
                for (var i = 0; i < this._fileList.length; i++) {
                    var file = this._fileList[i];
                    if (file.type === type && file.key === key) {
                        bestFound = i;
                        if (!file.loaded && !file.loading) {
                            break;
                        }
                    }
                }
                return bestFound;
            };
            Loader.prototype.getAsset = function (type, key) {
                var fileIndex = this.getAssetIndex(type, key);
                if (fileIndex > -1) {
                    return { index: fileIndex, file: this._fileList[fileIndex] };
                }
                return false;
            };
            Loader.prototype.reset = function (hard, clearEvents) {
                if (clearEvents === undefined) {
                    clearEvents = false;
                }
                if (this.resetLocked) {
                    return;
                }
                this.isLoading = false;
                this._processingHead = 0;
                this._fileList.length = 0;
                this._flightQueue.length = 0;
                this._fileLoadStarted = false;
                this._totalFileCount = 0;
                this._totalPackCount = 0;
                this._loadedPackCount = 0;
                this._loadedFileCount = 0;
                if (clearEvents) {
                    this.onLoadStart.removeAll();
                    this.onLoadComplete.removeAll();
                    this.onPackComplete.removeAll();
                    this.onFileStart.removeAll();
                    this.onFileComplete.removeAll();
                    this.onFileError.removeAll();
                }
            };
            Loader.prototype.addToFileList = function (type, key, url, properties, overwrite, extension) {
                if (overwrite === undefined) {
                    overwrite = false;
                }
                if (key === undefined || key === "") {
                    console.warn("bridge.Loader: Invalid or no key given of type " + type);
                    return this;
                }
                if (url === undefined || url === null) {
                    if (extension) {
                        url = key + extension;
                    }
                    else {
                        console.warn("bridge.Loader: No URL given for file type: " + type + " key: " + key);
                        return this;
                    }
                }
                var file = {
                    type: type,
                    key: key,
                    path: this.path,
                    url: url,
                    syncPoint: this._withSyncPointDepth > 0,
                    data: null,
                    loading: false,
                    loaded: false,
                    error: false
                };
                if (properties) {
                    for (var prop in properties) {
                        file[prop] = properties[prop];
                    }
                }
                var fileIndex = this.getAssetIndex(type, key);
                if (overwrite && fileIndex > -1) {
                    var currentFile = this._fileList[fileIndex];
                    if (!currentFile.loading && !currentFile.loaded) {
                        this._fileList[fileIndex] = file;
                    }
                    else {
                        this._fileList.push(file);
                        this._totalFileCount++;
                    }
                }
                else if (fileIndex === -1) {
                    this._fileList.push(file);
                    this._totalFileCount++;
                }
                return this;
            };
            Loader.prototype.replaceInFileList = function (type, key, url, properties) {
                return this.addToFileList(type, key, url, properties, true);
            };
            Loader.prototype.pack = function (key, url, data, callbackContext) {
                if (url === undefined) {
                    url = null;
                }
                if (data === undefined) {
                    data = null;
                }
                if (callbackContext === undefined) {
                    callbackContext = null;
                }
                if (!url && !data) {
                    console.warn("bridge.Loader.pack - Both url and data are null. One must be set.");
                    return this;
                }
                var pack = {
                    type: "packfile",
                    key: key,
                    url: url,
                    path: this.path,
                    syncPoint: true,
                    data: {},
                    loading: false,
                    loaded: false,
                    error: false,
                    callbackContext: callbackContext
                };
                if (data) {
                    if (typeof data === "string") {
                        data = JSON.parse(data);
                    }
                    pack.data = data || {};
                    pack.loaded = true;
                }
                for (var i = 0; i < this._fileList.length + 1; i++) {
                    var file = this._fileList[i];
                    if (!file || (!file.loaded && !file.loading && file.type !== "packfile")) {
                        this._fileList.splice(i, 0, pack);
                        this._totalPackCount++;
                        break;
                    }
                }
                return this;
            };
            Loader.prototype.image = function (key, url, overwrite) {
                return this.addToFileList("image", key, url, undefined, overwrite, ".png");
            };
            Loader.prototype.gif = function (key, url, overwrite) {
                return this.addToFileList(bridge.GenericConstants.GIF_NAMESPACE, key, url, undefined, overwrite);
            };
            Loader.prototype.images = function (keys, urls) {
                if (Array.isArray(urls)) {
                    for (var i = 0; i < keys.length; i++) {
                        this.image(keys[i], urls[i]);
                    }
                }
                else {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        this.image(key);
                    }
                }
                return this;
            };
            Loader.prototype.text = function (key, url, overwrite) {
                return this.addToFileList("text", key, url, undefined, overwrite, ".txt");
            };
            Loader.prototype.json = function (key, url, overwrite) {
                return this.addToFileList("json", key, url, undefined, overwrite, ".json");
            };
            Loader.prototype.shader = function (key, url, overwrite) {
                return this.addToFileList("shader", key, url, undefined, overwrite, ".frag");
            };
            Loader.prototype.xml = function (key, url, overwrite) {
                return this.addToFileList("xml", key, url, undefined, overwrite, ".xml");
            };
            Loader.prototype.script = function (key, url, callback, callbackContext) {
                if (callback === undefined) {
                    callback = false;
                }
                if (callback !== false && callbackContext === undefined) {
                    callbackContext = this;
                }
                return this.addToFileList("script", key, url, {
                    syncPoint: true,
                    callback: callback,
                    callbackContext: callbackContext
                }, false, ".js");
            };
            Loader.prototype.binary = function (key, url, callback, callbackContext) {
                if (callback === undefined) {
                    callback = false;
                }
                if (callback !== false && callbackContext === undefined) {
                    callbackContext = callback;
                }
                return this.addToFileList("binary", key, url, {
                    callback: callback,
                    callbackContext: callbackContext
                }, false, ".bin");
            };
            Loader.prototype.spritesheet = function (key, url, frameWidth, frameHeight, frameMax, margin, spacing) {
                if (frameMax === undefined) {
                    frameMax = -1;
                }
                if (margin === undefined) {
                    margin = 0;
                }
                if (spacing === undefined) {
                    spacing = 0;
                }
                return this.addToFileList("spritesheet", key, url, {
                    frameWidth: frameWidth,
                    frameHeight: frameHeight,
                    frameMax: frameMax,
                    margin: margin,
                    spacing: spacing
                }, false, ".png");
            };
            Loader.prototype.audio = function (key, urls, autoDecode) {
                var _this_1 = this;
                if (autoDecode === void 0) { autoDecode = true; }
                this.onSoundLoaded = false;
                var soundJson = this.game.cache.getJSON(key);
                var urls2 = soundJson.urls.map(function (item) { return _this_1.baseURL + item; });
                soundJson.urls = urls2;
                this.game.sound.onLoadComplete.add(this.onSoundLoadComplete, this);
                this.game.sound.onLoadError.add(function (howl, id, msg) {
                    var fileKey = howl._src.replace(/^.*[\\\/]/, "");
                    fileKey = fileKey.split("\\").pop().split("/").pop();
                    _this_1.onFileError.dispatch(fileKey, howl);
                }, this);
                this.game.sound.add(soundJson, key);
                return this;
            };
            Loader.prototype.onSoundLoadComplete = function () {
                this.onSoundLoaded = true;
                this.processLoadQueue();
            };
            Loader.prototype.audioSprite = function (key, urls, jsonURL, jsonData, autoDecode) {
                if (jsonURL === void 0) { jsonURL = null; }
                if (jsonData === void 0) { jsonData = null; }
                if (autoDecode === void 0) { autoDecode = true; }
                if (jsonURL) {
                    this.json(key + "-audioatlas", jsonURL);
                }
                else if (jsonData) {
                    if (typeof jsonData === "string") {
                        jsonData = JSON.parse(jsonData);
                    }
                    this.cache.addJSON(key + "-audioatlas", "", jsonData);
                }
                else {
                    console.warn("Loader.audiosprite - You must specify either a jsonURL or provide a jsonData object");
                }
                return this;
            };
            Loader.prototype.audiosprite = function (key, urls, jsonURL, jsonData, autoDecode) {
                return this.audioSprite(key, urls, jsonURL, jsonData, autoDecode);
            };
            Loader.prototype.video = function (key, urls, loadEvent, asBlob) {
                if (loadEvent === undefined) {
                    if (this.game.device.firefox) {
                        loadEvent = "loadeddata";
                    }
                    else {
                        loadEvent = "canplaythrough";
                    }
                }
                if (asBlob === undefined) {
                    asBlob = false;
                }
                if (typeof urls === "string") {
                    urls = [urls];
                }
                return this.addToFileList("video", key, urls, { buffer: null, asBlob: asBlob, loadEvent: loadEvent });
            };
            Loader.prototype.tilemap = function (key, url, data, format) {
                if (url === undefined) {
                    url = null;
                }
                if (data === undefined) {
                    data = null;
                }
                if (format === undefined) {
                    format = bridge.Tilemap.CSV;
                }
                if (!url && !data) {
                    if (format === bridge.Tilemap.CSV) {
                        url = key + ".csv";
                    }
                    else {
                        url = key + ".json";
                    }
                }
                if (data) {
                    switch (format) {
                        case bridge.Tilemap.CSV:
                            break;
                        case bridge.Tilemap.TILED_JSON:
                            if (typeof data === "string") {
                                data = JSON.parse(data);
                            }
                            break;
                    }
                    this.cache.addTilemap(key, null, data, format);
                }
                else {
                    this.addToFileList("tilemap", key, url, { format: format });
                }
                return this;
            };
            Loader.prototype.bitmapFont = function (key, textureURL, atlasURL, atlasData, xSpacing, ySpacing) {
                if (textureURL === undefined || textureURL === null) {
                    textureURL = key + ".png";
                }
                if (atlasURL === undefined) {
                    atlasURL = null;
                }
                if (atlasData === undefined) {
                    atlasData = null;
                }
                if (atlasURL === null && atlasData === null) {
                    atlasURL = key + ".xml";
                }
                if (xSpacing === undefined) {
                    xSpacing = 0;
                }
                if (ySpacing === undefined) {
                    ySpacing = 0;
                }
                if (atlasURL) {
                    this.addToFileList("bitmapfont", key, textureURL, {
                        atlasURL: atlasURL,
                        xSpacing: xSpacing,
                        ySpacing: ySpacing
                    });
                }
                else {
                    if (typeof atlasData === "string") {
                        var json = void 0;
                        var xml = void 0;
                        try {
                            json = JSON.parse(atlasData);
                        }
                        catch (e) {
                            xml = this.parseXml(atlasData);
                        }
                        if (!xml && !json) {
                            throw new Error("Loader. Invalid Bitmap Font atlas given");
                        }
                        this.addToFileList("bitmapfont", key, textureURL, {
                            atlasURL: null, atlasData: json || xml,
                            atlasType: (!!json ? "json" : "xml"), xSpacing: xSpacing, ySpacing: ySpacing
                        });
                    }
                }
                return this;
            };
            Loader.prototype.atlasJSONArray = function (key, textureURL, atlasURL, atlasData) {
                return this.atlas(key, textureURL, atlasURL, atlasData, Loader.TEXTURE_ATLAS_JSON_ARRAY);
            };
            Loader.prototype.atlasJSONHash = function (key, textureURL, atlasURL, atlasData) {
                return this.atlas(key, textureURL, atlasURL, atlasData, Loader.TEXTURE_ATLAS_JSON_HASH);
            };
            Loader.prototype.atlasXML = function (key, textureURL, atlasURL, atlasData) {
                if (atlasURL === undefined) {
                    atlasURL = null;
                }
                if (atlasData === undefined) {
                    atlasData = null;
                }
                if (!atlasURL && !atlasData) {
                    atlasURL = key + ".xml";
                }
                return this.atlas(key, textureURL, atlasURL, atlasData, Loader.TEXTURE_ATLAS_XML_STARLING);
            };
            Loader.prototype.atlas = function (key, textureURL, atlasURL, atlasData, format) {
                if (textureURL === undefined || textureURL === null) {
                    textureURL = key + ".png";
                }
                if (atlasURL === undefined) {
                    atlasURL = null;
                }
                if (atlasData === undefined) {
                    atlasData = null;
                }
                if (format === undefined) {
                    format = Loader.TEXTURE_ATLAS_JSON_ARRAY;
                }
                if (!atlasURL && !atlasData) {
                    if (format === Loader.TEXTURE_ATLAS_XML_STARLING) {
                        atlasURL = key + ".xml";
                    }
                    else {
                        atlasURL = key + ".json";
                    }
                }
                if (atlasURL) {
                    this.addToFileList("textureatlas", key, textureURL, { atlasURL: atlasURL, format: format });
                }
                else {
                    switch (format) {
                        case Loader.TEXTURE_ATLAS_JSON_ARRAY:
                            if (typeof atlasData === "string") {
                                atlasData = JSON.parse(atlasData);
                            }
                            break;
                        case Loader.TEXTURE_ATLAS_XML_STARLING:
                            if (typeof atlasData === "string") {
                                var xml = this.parseXml(atlasData);
                                if (!xml) {
                                    throw new Error("Loader. Invalid Texture Atlas XML given");
                                }
                                atlasData = xml;
                            }
                            break;
                    }
                    this.addToFileList("textureatlas", key, textureURL, { atlasURL: null, atlasData: atlasData, format: format });
                }
                return this;
            };
            Loader.prototype.spine = function (key, url) {
                var _this_1 = this;
                var path = url.substr(0, url.lastIndexOf("."));
                var pathonly = url.substr(0, url.lastIndexOf("/"));
                var filenameonly = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
                this.text("atlas_" + bridge.GenericConstants.SPINE_NAMESPACE + "_" + key, path + ".atlas");
                this.json(bridge.GenericConstants.SPINE_NAMESPACE + key, path + ".json");
                var imageKeys = [];
                var imagesLoaded = 0;
                this.onFileComplete.add(function (progress, name) {
                    if (name.indexOf("atlas_spine_") === 0) {
                        var atlas = _this_1.game.cache.getText(name);
                        var firstImageName_1 = null;
                        atlas.split(/\r\n|\r|\n/).forEach(function (line, idx) {
                            if (line.length === 0 || line.indexOf(":") !== -1) {
                                return;
                            }
                            if (firstImageName_1 === null) {
                                firstImageName_1 = line.substr(0, line.lastIndexOf("."));
                            }
                            if (firstImageName_1 !== null && line.indexOf(firstImageName_1) !== -1 && line.indexOf(".") !== -1) {
                                if (filenameonly === name.replace("atlas_spine_", "") || key === name.replace("atlas_spine_", "")) {
                                    imageKeys.push(line);
                                    this.image(line, pathonly + "/" + line);
                                }
                            }
                        }, _this_1);
                    }
                    else if (imageKeys.indexOf(name) !== -1) {
                        imagesLoaded++;
                    }
                    if (imageKeys.length && imagesLoaded === imageKeys.length) {
                        imagesLoaded = 0;
                        _this_1.game.cache.addSpine(key, {
                            atlas: "atlas_" + bridge.GenericConstants.SPINE_NAMESPACE + "_" + key,
                            json: bridge.GenericConstants.SPINE_NAMESPACE + key,
                            images: imageKeys
                        });
                    }
                }, this);
                return this;
            };
            Loader.prototype.withSyncPoint = function (callback, callbackContext) {
                this._withSyncPointDepth++;
                try {
                    callback.call(callbackContext || this, this);
                }
                finally {
                    this._withSyncPointDepth--;
                }
                return this;
            };
            Loader.prototype.addSyncPoint = function (type, key) {
                var asset = this.getAsset(type, key);
                if (asset) {
                    asset.file.syncPoint = true;
                }
                return this;
            };
            Loader.prototype.removeFile = function (type, key) {
                var asset = this.getAsset(type, key);
                if (asset) {
                    if (!asset.loaded && !asset.loading) {
                        this._fileList.splice(asset.index, 1);
                    }
                }
            };
            Loader.prototype.removeAll = function () {
                this._fileList.length = 0;
                this._flightQueue.length = 0;
            };
            Loader.prototype.start = function () {
                if (this.isLoading) {
                    return;
                }
                this.hasLoaded = false;
                this.isLoading = true;
                this.updateProgress();
                this.processLoadQueue();
            };
            Loader.prototype.transformUrl = function (url, file) {
                if (!url) {
                    return false;
                }
                if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) {
                    return url;
                }
                else {
                    return this.baseURL + file.path + url;
                }
            };
            Loader.prototype.totalLoadedFiles = function () {
                return this._loadedFileCount;
            };
            Loader.prototype.totalQueuedFiles = function () {
                return this._totalFileCount - this._loadedFileCount;
            };
            Loader.prototype.totalLoadedPacks = function () {
                return this._totalPackCount;
            };
            Loader.prototype.totalQueuedPacks = function () {
                return this._totalPackCount - this._loadedPackCount;
            };
            Loader.prototype.processLoadQueue = function () {
                if (!this.isLoading) {
                    console.warn("Loader - active loading canceled / reset");
                    this.finishedLoading(true);
                    return;
                }
                for (var i = 0; i < this._flightQueue.length; i++) {
                    var file = this._flightQueue[i];
                    if (file.loaded || file.error) {
                        this._flightQueue.splice(i, 1);
                        i--;
                        file.loading = false;
                        file.requestUrl = null;
                        file.requestObject = null;
                        if (file.error) {
                            this.onFileError.dispatch(file.key, file);
                        }
                        if (file.type !== "packfile") {
                            this._loadedFileCount++;
                            this.onFileComplete.dispatch(this.progress, file.key, !file.error, this._loadedFileCount, this._totalFileCount, file.type, file);
                        }
                        else if (file.type === "packfile" && file.error) {
                            this._loadedPackCount++;
                            this.onPackComplete.dispatch(file.key, !file.error, this._loadedPackCount, this._totalPackCount);
                        }
                    }
                }
                var syncblock = false;
                var inflightLimit = this.enableParallel ? bridge.clamp(this.maxParallelDownloads, 1, 12) : 1;
                for (var i = this._processingHead; i < this._fileList.length; i++) {
                    var file = this._fileList[i];
                    if (file.type === "packfile" && !file.error && file.loaded && i === this._processingHead) {
                        this.processPack(file);
                        this._loadedPackCount++;
                        this.onPackComplete.dispatch(file.key, !file.error, this._loadedPackCount, this._totalPackCount);
                    }
                    if (file.loaded || file.error) {
                        if (i === this._processingHead) {
                            this._processingHead = i + 1;
                        }
                    }
                    else if (!file.loading && this._flightQueue.length < inflightLimit) {
                        if (file.type === "packfile" && !file.data) {
                            this._flightQueue.push(file);
                            file.loading = true;
                            this.loadFile(file);
                        }
                        else if (!syncblock) {
                            if (!this._fileLoadStarted) {
                                this._fileLoadStarted = true;
                                this.onLoadStart.dispatch();
                            }
                            this._flightQueue.push(file);
                            file.loading = true;
                            this.onFileStart.dispatch(this.progress, file.key, file.url);
                            this.loadFile(file);
                        }
                    }
                    if (!file.loaded && file.syncPoint) {
                        syncblock = true;
                    }
                    if (this._flightQueue.length >= inflightLimit ||
                        (syncblock && this._loadedPackCount === this._totalPackCount)) {
                        break;
                    }
                }
                this.updateProgress();
                if (this._processingHead >= this._fileList.length) {
                    this.finishedLoading();
                }
                else if (!this._flightQueue.length) {
                    console.warn("Loader - aborting: processing queue empty, loading may have stalled");
                    var _this_2 = this;
                    setTimeout(function () {
                        _this_2.finishedLoading(true);
                    }, 2000);
                }
            };
            Loader.prototype.finishedLoading = function (abnormal) {
                if (!this.hasLoaded && this.onSoundLoaded) {
                }
                else {
                    return;
                }
                this.hasLoaded = true;
                this.isLoading = false;
                if (!abnormal && !this._fileLoadStarted) {
                    this._fileLoadStarted = true;
                    this.onLoadStart.dispatch();
                }
                this.onLoadComplete.dispatch();
                this.game.state.loadComplete();
                this.reset();
            };
            Loader.prototype.asyncComplete = function (file, errorMessage) {
                if (errorMessage === undefined) {
                    errorMessage = "";
                }
                file.loaded = true;
                file.error = !!errorMessage;
                if (errorMessage) {
                    file.errorMessage = errorMessage;
                    console.warn("Loader - " + file.type + "[" + file.key + "]" + ": " + errorMessage);
                }
                this.processLoadQueue();
            };
            Loader.prototype.processPack = function (pack) {
                var packData = pack.data[pack.key];
                if (!packData) {
                    console.warn("Loader - " + pack.key + ": pack has data, but not for pack key");
                    return;
                }
                for (var _i = 0, packData_1 = packData; _i < packData_1.length; _i++) {
                    var file = packData_1[_i];
                    switch (file.type) {
                        case "image":
                            this.image(file.key, file.url, file.overwrite);
                            break;
                        case "text":
                            this.text(file.key, file.url, file.overwrite);
                            break;
                        case "json":
                            this.json(file.key, file.url, file.overwrite);
                            break;
                        case "xml":
                            this.xml(file.key, file.url, file.overwrite);
                            break;
                        case "script":
                            this.script(file.key, file.url, file.callback, pack.callbackContext || this);
                            break;
                        case "binary":
                            this.binary(file.key, file.url, file.callback, pack.callbackContext || this);
                            break;
                        case "spritesheet":
                            this.spritesheet(file.key, file.url, file.frameWidth, file.frameHeight, file.frameMax, file.margin, file.spacing);
                            break;
                        case "video":
                            this.video(file.key, file.url);
                            break;
                        case "audio":
                            this.audio(file.key, file.urls, file.autoDecode);
                            break;
                        case "audiosprite":
                            this.audiosprite(file.key, file.urls, file.jsonURL, file.jsonData, file.autoDecode);
                            break;
                        case "tilemap":
                            break;
                        case "bitmapFont":
                            this.bitmapFont(file.key, file.textureURL, file.atlasURL, file.atlasData, file.xSpacing, file.ySpacing);
                            break;
                        case "atlasJSONArray":
                            this.atlasJSONArray(file.key, file.textureURL, file.atlasURL, file.atlasData);
                            break;
                        case "atlasJSONHash":
                            this.atlasJSONHash(file.key, file.textureURL, file.atlasURL, file.atlasData);
                            break;
                        case "atlasXML":
                            this.atlasXML(file.key, file.textureURL, file.atlasURL, file.atlasData);
                            break;
                        case "atlas":
                            this.atlas(file.key, file.textureURL, file.atlasURL, file.atlasData, Loader[file.format]);
                            break;
                        case "shader":
                            this.shader(file.key, file.url, file.overwrite);
                            break;
                        case bridge.GenericConstants.SPINE_NAMESPACE:
                            this.spine(file.key, file.url);
                            break;
                        case bridge.GenericConstants.GIF_NAMESPACE:
                            this.gif(file.key, file.url, file.overwrite);
                            break;
                    }
                }
            };
            Loader.prototype.loadFile = function (file) {
                switch (file.type) {
                    case "packfile":
                        this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.fileComplete);
                        break;
                    case "image":
                    case "spritesheet":
                    case "textureatlas":
                    case "bitmapfont":
                        this.loadImageTag(file);
                        break;
                    case "audio":
                        file.url = this.getAudioURL(file.url);
                        if (file.url) {
                            if (this.game.sound.usingWebAudio) {
                                this.xhrLoad(file, this.transformUrl(file.url, file), "arraybuffer", this.fileComplete);
                            }
                            else if (this.game.sound.usingAudioTag) {
                                this.loadAudioTag(file);
                            }
                        }
                        else {
                            this.fileError(file, null, "No supported audio URL specified or device does not have audio playback support");
                        }
                        break;
                    case "video":
                        file.url = this.getVideoURL(file.url);
                        if (file.url) {
                            if (file.asBlob) {
                                this.xhrLoad(file, this.transformUrl(file.url, file), "blob", this.fileComplete);
                            }
                            else {
                                this.loadVideoTag(file);
                            }
                        }
                        else {
                            this.fileError(file, null, "No supported video URL specified or device does not have video playback support");
                        }
                        break;
                    case "json":
                        this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.jsonLoadComplete);
                        break;
                    case "xml":
                        this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.xmlLoadComplete);
                        break;
                    case "tilemap":
                        if (file.format === bridge.Tilemap.TILED_JSON) {
                            this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.jsonLoadComplete);
                        }
                        else if (file.format === bridge.Tilemap.CSV) {
                            this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.csvLoadComplete);
                        }
                        else {
                            this.asyncComplete(file, "invalid Tilemap format: " + file.format);
                        }
                        break;
                    case "text":
                    case "script":
                    case "shader":
                    case "physics":
                        this.xhrLoad(file, this.transformUrl(file.url, file), "text", this.fileComplete);
                        break;
                    case "binary":
                        this.xhrLoad(file, this.transformUrl(file.url, file), "arraybuffer", this.fileComplete);
                        break;
                    case bridge.GenericConstants.GIF_NAMESPACE:
                        this.xhrLoad(file, this.transformUrl(file.url, file), "arraybuffer", this.fileComplete);
                        break;
                }
            };
            Loader.prototype.loadImageTag = function (file) {
                var _this = this;
                file.data = new Image();
                file.data.name = file.key;
                if (this.crossOrigin) {
                    file.data.crossOrigin = this.crossOrigin;
                }
                file.data.onload = function () {
                    if (file.data.onload) {
                        file.data.onload = null;
                        file.data.onerror = null;
                        _this.fileComplete(file);
                    }
                };
                file.data.onerror = function () {
                    if (file.data.onload) {
                        file.data.onload = null;
                        file.data.onerror = null;
                        _this.fileError(file);
                    }
                };
                file.data.src = this.transformUrl(file.url, file);
                if (file.data.complete && file.data.width && file.data.height) {
                    file.data.onload = null;
                    file.data.onerror = null;
                    this.fileComplete(file);
                }
            };
            Loader.prototype.loadVideoTag = function (file) {
                var _this_1 = this;
                var _th = this;
                file.data = document.createElement("video");
                file.data.name = file.key;
                file.data.controls = false;
                file.data.autoplay = false;
                var videoLoadEvent = function () {
                    file.data.removeEventListener(file.loadEvent, videoLoadEvent, false);
                    file.data.onerror = null;
                    file.data.canplay = true;
                    _this_1.fileComplete(file);
                };
                file.data.onerror = function () {
                    file.data.removeEventListener(file.loadEvent, videoLoadEvent, false);
                    file.data.onerror = null;
                    file.data.canplay = false;
                    _th.fileError(file);
                };
                file.data.addEventListener(file.loadEvent, videoLoadEvent, false);
                file.data.src = this.transformUrl(file.url, file);
                file.data.load();
            };
            Loader.prototype.loadAudioTag = function (file) {
                var _th = this;
                if (this.game.sound.touchLocked) {
                    file.data = new Audio();
                    file.data.name = file.key;
                    file.data.preload = "auto";
                    file.data.src = this.transformUrl(file.url, file);
                    this.fileComplete(file);
                }
                else {
                    file.data = new Audio();
                    file.data.name = file.key;
                    var playThroughEvent_1 = function () {
                        file.data.removeEventListener("canplaythrough", playThroughEvent_1, false);
                        file.data.onerror = null;
                        _th.fileComplete(file);
                    };
                    file.data.onerror = function () {
                        file.data.removeEventListener("canplaythrough", playThroughEvent_1, false);
                        file.data.onerror = null;
                        _th.fileError(file);
                    };
                    file.data.preload = "auto";
                    file.data.src = this.transformUrl(file.url, file);
                    file.data.addEventListener("canplaythrough", playThroughEvent_1, false);
                    file.data.load();
                }
            };
            Loader.prototype.xhrLoad = function (file, url, type, onload, onerror) {
                if (this.useXDomainRequest && window.XDomainRequest) {
                    this.xhrLoadWithXDR(file, url, type, onload, onerror);
                    return;
                }
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = type;
                if (this.headers.requestedWith !== false) {
                    xhr.setRequestHeader("X-Requested-With", this.headers.requestedWith);
                }
                if (this.headers[file.type]) {
                    xhr.setRequestHeader("Accept", this.headers[file.type]);
                }
                onerror = onerror || this.fileError;
                var _this = this;
                xhr.onload = function () {
                    try {
                        if (xhr.readyState === 4 && xhr.status >= 400 && xhr.status <= 599) {
                            return onerror.call(_this, file, xhr);
                        }
                        else {
                            return onload.call(_this, file, xhr);
                        }
                    }
                    catch (e) {
                        if (!_this.hasLoaded) {
                            _this.asyncComplete(file, e.message || "Exception");
                        }
                        else {
                            if (window.console) {
                                console.error(e);
                            }
                        }
                    }
                };
                xhr.onerror = function () {
                    try {
                        return onerror.call(_this, file, xhr);
                    }
                    catch (e) {
                        if (!_this.hasLoaded) {
                            _this.asyncComplete(file, e.message || "Exception");
                        }
                        else {
                            if (window.console) {
                                console.error(e);
                            }
                        }
                    }
                };
                file.requestObject = xhr;
                file.requestUrl = url;
                xhr.send();
            };
            Loader.prototype.xhrLoadWithXDR = function (file, url, type, onload, onerror) {
                if (!this._warnedAboutXDomainRequest &&
                    (!this.game.device.ie || this.game.device.ieVersion >= 10)) {
                    this._warnedAboutXDomainRequest = true;
                    console.warn("Loader - using XDomainRequest outside of IE 9");
                }
                var xhr = new window.XDomainRequest();
                xhr.open("GET", url, true);
                xhr.responseType = type;
                xhr.timeout = 3000;
                onerror = onerror || this.fileError;
                var _this = this;
                xhr.onerror = function () {
                    try {
                        return onerror.call(_this, file, xhr);
                    }
                    catch (e) {
                        _this.asyncComplete(file, e.message || "Exception");
                    }
                };
                xhr.ontimeout = function () {
                    try {
                        return onerror.call(_this, file, xhr);
                    }
                    catch (e) {
                        _this.asyncComplete(file, e.message || "Exception");
                    }
                };
                xhr.onprogress = function () {
                };
                xhr.onload = function () {
                    try {
                        if (xhr.readyState === 4 && xhr.status >= 400 && xhr.status <= 599) {
                            return onerror.call(_this, file, xhr);
                        }
                        else {
                            return onload.call(_this, file, xhr);
                        }
                    }
                    catch (e) {
                        _this.asyncComplete(file, e.message || "Exception");
                    }
                };
                file.requestObject = xhr;
                file.requestUrl = url;
                setTimeout(function () {
                    xhr.send();
                }, 0);
            };
            Loader.prototype.getVideoURL = function (urls) {
                for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                    var url = urls_1[_i];
                    var videoType = void 0;
                    if (url.uri) {
                        videoType = url.type;
                        url = url.uri;
                        if (this.game.device.canPlayVideo(videoType)) {
                            return url;
                        }
                    }
                    else {
                        if (url.indexOf("blob:") === 0 || url.indexOf("data:") === 0) {
                            return url;
                        }
                        if (url.indexOf("?") >= 0) {
                            url = url.substr(0, url.indexOf("?"));
                        }
                        var extension = url.substr((Math.max(0, url.lastIndexOf(".")) || Infinity) + 1);
                        videoType = extension.toLowerCase();
                        if (this.game.device.canPlayVideo(videoType)) {
                            return url;
                        }
                    }
                }
                return null;
            };
            Loader.prototype.getAudioURL = function (urls) {
                for (var _i = 0, urls_2 = urls; _i < urls_2.length; _i++) {
                    var url = urls_2[_i];
                    var audioType = void 0;
                    if (url.uri) {
                        audioType = url.type;
                        url = url.uri;
                        if (this.game.device.canPlayAudio(audioType)) {
                            return url;
                        }
                    }
                    else {
                        if (url.indexOf("blob:") === 0 || url.indexOf("data:") === 0) {
                            return url;
                        }
                        if (url.indexOf("?") >= 0) {
                            url = url.substr(0, url.indexOf("?"));
                        }
                        var extension = url.substr((Math.max(0, url.lastIndexOf(".")) || Infinity) + 1);
                        audioType = extension.toLowerCase();
                        if (this.game.device.canPlayAudio(audioType)) {
                            return url;
                        }
                    }
                }
                return null;
            };
            Loader.prototype.fileError = function (file, xhr, reason) {
                var url = file.requestUrl || this.transformUrl(file.url, file);
                var message = "error loading asset from URL " + url;
                if (!reason && xhr) {
                    reason = xhr.status;
                }
                if (reason) {
                    message = message + " (" + reason + ")";
                }
                this.asyncComplete(file, message);
            };
            Loader.prototype.fileComplete = function (file, xhr) {
                var _this_1 = this;
                var loadNext = true;
                switch (file.type) {
                    case "packfile":
                        var dObj = JSON.parse(xhr.responseText);
                        file.data = dObj || {};
                        break;
                    case "image":
                        this.cache.addImage(file.key, file.url, file.data);
                        break;
                    case "spritesheet":
                        this.cache.addSpriteSheet(file.key, file.url, file.data, file.frameWidth, file.frameHeight, file.frameMax, file.margin, file.spacing);
                        break;
                    case "textureatlas":
                        if (file.atlasURL == null) {
                            this.cache.addTextureAtlas(file.key, file.url, file.data, file.atlasData, file.format);
                        }
                        else {
                            loadNext = false;
                            if (file.format === Loader.TEXTURE_ATLAS_JSON_ARRAY || file.format === Loader.TEXTURE_ATLAS_JSON_HASH || file.format === Loader.TEXTURE_ATLAS_JSON_PYXEL) {
                                this.xhrLoad(file, this.transformUrl(file.atlasURL, file), "text", this.jsonLoadComplete);
                            }
                            else if (file.format === Loader.TEXTURE_ATLAS_XML_STARLING) {
                                this.xhrLoad(file, this.transformUrl(file.atlasURL, file), "text", this.xmlLoadComplete);
                            }
                            else {
                                throw new Error("Loader. Invalid Texture Atlas format: " + file.format);
                            }
                        }
                        break;
                    case "bitmapfont":
                        if (!file.atlasURL) {
                            this.cache.addBitmapFont(file.key, file.url, file.data, file.atlasData, file.atlasType, file.xSpacing, file.ySpacing);
                        }
                        else {
                            loadNext = false;
                            this.xhrLoad(file, this.transformUrl(file.atlasURL, file), "text", function (file, xhr) {
                                var json;
                                try {
                                    json = JSON.parse(xhr.responseText);
                                }
                                catch (e) {
                                }
                                if (!!json) {
                                    file.atlasType = "json";
                                    _this_1.jsonLoadComplete(file, xhr);
                                }
                                else {
                                    file.atlasType = "xml";
                                    _this_1.xmlLoadComplete(file, xhr);
                                }
                            });
                        }
                        break;
                    case "video":
                        if (file.asBlob) {
                            try {
                                file.data = xhr.response;
                            }
                            catch (e) {
                                throw new Error("Loader. Unable to parse video file as Blob: " + file.key);
                            }
                        }
                        this.cache.addVideo(file.key, file.url, file.data, file.asBlob);
                        break;
                    case "audio":
                        if (this.game.sound.usingWebAudio) {
                            file.data = xhr.response;
                            this.cache.addSound(file.key, file.url, file.data, true, false);
                            if (file.autoDecode) {
                                this.game.sound.decode && this.game.sound.decode(file.key);
                            }
                        }
                        else {
                            this.cache.addSound(file.key, file.url, file.data, false, true);
                        }
                        break;
                    case "text":
                        file.data = xhr.responseText;
                        this.cache.addText(file.key, file.url, file.data);
                        break;
                    case "shader":
                        file.data = xhr.responseText;
                        this.cache.addShader(file.key, file.url, file.data);
                        break;
                    case "physics":
                        var data = JSON.parse(xhr.responseText);
                        this.cache.addPhysicsData(file.key, file.url, data, file.format);
                        break;
                    case "script":
                        file.data = document.createElement("script");
                        file.data.language = "javascript";
                        file.data.type = "text/javascript";
                        file.data.defer = false;
                        file.data.text = xhr.responseText;
                        document.head.appendChild(file.data);
                        if (file.callback) {
                            file.data = file.callback.call(file.callbackContext, file.key, xhr.responseText);
                        }
                        break;
                    case "binary":
                        if (file.callback) {
                            file.data = file.callback.call(file.callbackContext, file.key, xhr.response);
                        }
                        else {
                            file.data = xhr.response;
                        }
                        this.cache.addBinary(file.key, file.data);
                        break;
                    case bridge.GenericConstants.GIF_NAMESPACE:
                        file.data = xhr.response;
                        this.cache.addGif(file.key, file);
                        break;
                }
                if (loadNext) {
                    this.asyncComplete(file);
                }
            };
            Loader.prototype.jsonLoadComplete = function (file, xhr) {
                var data = JSON.parse(xhr.responseText);
                if (file.type === "tilemap") {
                    this.cache.addTilemap(file.key, file.url, data, file.format);
                }
                else if (file.type === "bitmapfont") {
                    this.cache.addBitmapFont(file.key, file.url, file.data, data, file.atlasType, file.xSpacing, file.ySpacing);
                }
                else if (file.type === "json") {
                    if (file.key.indexOf("-audioatlas") >= 0) {
                        file.key = file.key.split("-audioatlas")[0];
                        this.cache.addJSON(file.key, file.url, data);
                        this.audio(file.key);
                    }
                    else {
                        this.cache.addJSON(file.key, file.url, data);
                    }
                }
                else {
                    this.cache.addTextureAtlas(file.key, file.url, file.data, data, file.format);
                }
                this.asyncComplete(file);
            };
            Loader.prototype.csvLoadComplete = function (file, xhr) {
                var data = xhr.responseText;
                this.cache.addTilemap(file.key, file.url, data, file.format);
                this.asyncComplete(file);
            };
            Loader.prototype.xmlLoadComplete = function (file, xhr) {
                var data = xhr.responseText;
                var xml = this.parseXml(data);
                if (!xml) {
                    var responseType = xhr.responseType || xhr.contentType;
                    console.warn("Loader - " + file.key + ": invalid XML (" + responseType + ")");
                    this.asyncComplete(file, "invalid XML");
                    return;
                }
                if (file.type === "bitmapfont") {
                    this.cache.addBitmapFont(file.key, file.url, file.data, xml, file.atlasType, file.xSpacing, file.ySpacing);
                }
                else if (file.type === "textureatlas") {
                    this.cache.addTextureAtlas(file.key, file.url, file.data, xml, file.format);
                }
                else if (file.type === "xml") {
                    this.cache.addXML(file.key, file.url, xml);
                }
                this.asyncComplete(file);
            };
            Loader.prototype.parseXml = function (data) {
                var xml;
                try {
                    if (window.DOMParser) {
                        var domparser = new DOMParser();
                        xml = domparser.parseFromString(data, "text/xml");
                    }
                    else {
                        xml = new ActiveXObject("Microsoft.XMLDOM");
                        xml.async = "false";
                        xml.loadXML(data);
                    }
                }
                catch (e) {
                    xml = null;
                }
                if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                    return null;
                }
                else {
                    return xml;
                }
            };
            Loader.prototype.updateProgress = function () {
            };
            Loader.TEXTURE_ATLAS_JSON_ARRAY = 0;
            Loader.TEXTURE_ATLAS_JSON_HASH = 1;
            Loader.TEXTURE_ATLAS_XML_STARLING = 2;
            Loader.PHYSICS_LIME_CORONA_JSON = 3;
            Loader.PHYSICS_bridge_JSON = 4;
            Loader.TEXTURE_ATLAS_JSON_PYXEL = 5;
            return Loader;
        }());
        bridge.Loader = Loader;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var LoaderParser = (function () {
            function LoaderParser() {
            }
            LoaderParser.bitmapFont = function (xml, baseTexture, xSpacing, ySpacing) {
                return this.xmlBitmapFont(xml, baseTexture, xSpacing, ySpacing);
            };
            LoaderParser.xmlBitmapFont = function (xml, baseTexture, xSpacing, ySpacing) {
                var data = {};
                var info = xml.getElementsByTagName("info")[0];
                var common = xml.getElementsByTagName("common")[0];
                data.font = info.getAttribute("face");
                data.size = parseInt(info.getAttribute("size"), 10);
                data.lineHeight = parseInt(common.getAttribute("lineHeight"), 10) + ySpacing;
                data.chars = {};
                var letters = xml.getElementsByTagName("char");
                for (var i = 0; i < letters.length; i++) {
                    var charCode = parseInt(letters[i].getAttribute("id"), 10);
                    data.chars[charCode] = {
                        x: parseInt(letters[i].getAttribute("x"), 10),
                        y: parseInt(letters[i].getAttribute("y"), 10),
                        width: parseInt(letters[i].getAttribute("width"), 10),
                        height: parseInt(letters[i].getAttribute("height"), 10),
                        xOffset: parseInt(letters[i].getAttribute("xoffset"), 10),
                        yOffset: parseInt(letters[i].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(letters[i].getAttribute("xadvance"), 10) + xSpacing,
                        kerning: {}
                    };
                }
                var kernings = xml.getElementsByTagName("kerning");
                for (var i = 0; i < kernings.length; i++) {
                    var first = parseInt(kernings[i].getAttribute("first"), 10);
                    var second = parseInt(kernings[i].getAttribute("second"), 10);
                    var amount = parseInt(kernings[i].getAttribute("amount"), 10);
                    data.chars[second].kerning[first] = amount;
                }
                return this.finalizeBitmapFont(baseTexture, data);
            };
            LoaderParser.jsonBitmapFont = function (json, baseTexture, xSpacing, ySpacing) {
                var data = {
                    font: json.font.info._face,
                    size: parseInt(json.font.info._size, 10),
                    lineHeight: parseInt(json.font.common._lineHeight, 10) + ySpacing,
                    chars: {}
                };
                json.font.chars["char"].forEach(function (letter) {
                    var charCode = parseInt(letter._id, 10);
                    data.chars[charCode] = {
                        x: parseInt(letter._x, 10),
                        y: parseInt(letter._y, 10),
                        width: parseInt(letter._width, 10),
                        height: parseInt(letter._height, 10),
                        xOffset: parseInt(letter._xoffset, 10),
                        yOffset: parseInt(letter._yoffset, 10),
                        xAdvance: parseInt(letter._xadvance, 10) + xSpacing,
                        kerning: {}
                    };
                });
                if (json.font.kernings && json.font.kernings.kerning) {
                    json.font.kernings.kerning.forEach(function (kerning) {
                        data.chars[kerning._second].kerning[kerning._first] = parseInt(kerning._amount, 10);
                    });
                }
                return this.finalizeBitmapFont(baseTexture, data);
            };
            LoaderParser.finalizeBitmapFont = function (baseTexture, bitmapFontData) {
                Object.keys(bitmapFontData.chars).forEach(function (charCode) {
                    var letter = bitmapFontData.chars[charCode];
                    letter.texture = new bridge.Texture(baseTexture, new bridge.Rectangle(letter.x, letter.y, letter.width, letter.height));
                });
                return bitmapFontData;
            };
            return LoaderParser;
        }());
        bridge.LoaderParser = LoaderParser;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text(game, x, y, text, style, canvas) {
                var _this = this;
                var pixiStyle = Text.getPixiTextStyle(style);
                _this = _super.call(this, text, pixiStyle, canvas) || this;
                _this.game = game;
                _this.x = x || 0;
                _this.y = y || 0;
                _this.style = bridge.clone(pixiStyle);
                return _this;
            }
            Object.defineProperty(Text.prototype, "boundsAlignH", {
                get: function () {
                    return this.style.boundsAlignH;
                },
                set: function (value) {
                    this.style.boundsAlignH = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Text.prototype, "boundsAlignV", {
                get: function () {
                    return this.style.boundsAlignV;
                },
                set: function (value) {
                    this.style.boundsAlignV = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Text.prototype, "lineSpacing", {
                get: function () {
                    return this.style.leading;
                },
                set: function (value) {
                    this.style.leading = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Text.prototype, "fontSize", {
                get: function () {
                    return this.style.fontSize;
                },
                set: function (value) {
                    this.style.fontSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Text.getPixiTextStyle = function (style) {
                var fontStyle = new Object();
                if (style.font) {
                    var fontStyleObject = this.fontToComponents(style.font);
                    if (fontStyleObject) {
                        fontStyle.fontSize = style.fontSize || fontStyleObject.fontSize;
                        fontStyle.fontStyle = style.fontStyle || fontStyleObject.fontStyle;
                        fontStyle.fontWeight = style.fontWeight || fontStyleObject.fontWeight;
                        fontStyle.fontVariant = style.fontVariant || fontStyleObject.fontVariant;
                        fontStyle.fontFamily = fontStyleObject.fontFamily || Text.DEFAULT_VALUES.fontFamily;
                        fontStyle.align = style.boundsAlignH || style.align || Text.DEFAULT_VALUES.align;
                        fontStyle.fill = style.fill || Text.DEFAULT_VALUES.fill;
                        fontStyle.stroke = style.stroke || Text.DEFAULT_VALUES.stroke;
                        fontStyle.strokeThickness = style.strokeThickness || Text.DEFAULT_VALUES.strokeThickness;
                        fontStyle.wordWrap = style.wordWrap || Text.DEFAULT_VALUES.wordWrap;
                        fontStyle.wordWrapWidth = style.wordWrapWidth || Text.DEFAULT_VALUES.wordWrapWidth;
                        fontStyle.boundsAlignH = style.boundsAlignH || Text.DEFAULT_VALUES.boundsAlignH;
                        fontStyle.boundsAlignV = style.boundsAlignV || Text.DEFAULT_VALUES.boundsAlignV;
                        (style.lineJoin) && (fontStyle.lineJoin = style.lineJoin);
                        fontStyle.miterLimit = (fontStyle.miterLimit === undefined || fontStyle.miterLimit === null) ? Text.DEFAULT_VALUES.miterLimit : Number(fontStyle.miterLimit);
                        (style.fillGradientStops) && (fontStyle.fillGradientStops = style.fillGradientStops);
                        (style.fillGradientType) && (fontStyle.fillGradientType = style.fillGradientType);
                        (style.strokeGradientStops) && (fontStyle.strokeGradientStops = style.strokeGradientStops);
                    }
                }
                return fontStyle;
            };
            Text.fontToComponents = function (font) {
                var m = font.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);
                var updatedFont = new Object();
                if (m) {
                    updatedFont.fontStyle = m[1] || "normal";
                    updatedFont.fontVariant = m[2] || "normal";
                    updatedFont.fontWeight = m[3] || "normal";
                    updatedFont.fontSize = m[4] || "medium";
                    updatedFont.fontFamily = m[5];
                }
                else {
                    console.warn("PIXI.Text - unparsable CSS font: " + font);
                }
                return updatedFont;
            };
            Text.prototype.setShadow = function (x, y, color, blur, shadowStroke, shadowFill) {
                if (x === undefined) {
                    x = 0;
                }
                if (y === undefined) {
                    y = 0;
                }
                if (color === undefined) {
                    color = "rgba(0, 0, 0, 1)";
                }
                if (blur === undefined) {
                    blur = 0;
                }
                if (shadowStroke === undefined) {
                    shadowStroke = true;
                }
                if (shadowFill === undefined) {
                    shadowFill = true;
                }
                this.style.dropShadow = shadowFill;
                this.style.dropShadowDistance = x;
                this.style.dropShadowAngle = bridge.degToRad(y);
                this.style.dropShadowColor = color;
                this.style.dropShadowBlur = blur;
                this.dirty = true;
                return this;
            };
            Text.prototype.setText = function (text, immediate) {
                if (immediate === undefined) {
                    immediate = false;
                }
                this.text = text.toString() || "";
                if (immediate) {
                    this.updateText();
                }
                else {
                    this.dirty = true;
                }
                return this;
            };
            Text.prototype.setTextBounds = function (x, y, width, height) {
                if (x === undefined) {
                    this.textBounds = null;
                }
                else {
                    if (!this.textBounds) {
                        this.textBounds = new bridge.Rectangle(x, y, width, height);
                    }
                    else {
                        this.textBounds = this.textBounds.setTo(x, y, width, height);
                    }
                    if (this.style.wordWrapWidth > width) {
                        this.style.wordWrapWidth = width;
                    }
                }
                this.updateTexture();
                return this;
            };
            Text.prototype.updateTexture = function () {
                _super.prototype.updateTexture.call(this);
                if (this.textBounds) {
                    var x = this.textBounds.x;
                    var y = this.textBounds.y;
                    if (this.style.boundsAlignH === "right") {
                        x += this.textBounds.width - this.canvas.width / this.resolution;
                    }
                    else if (this.style.boundsAlignH === "center") {
                        x += this.textBounds.width * bridge.Maths.HALF - (this.canvas.width / this.resolution / 2);
                    }
                    if (this.style.boundsAlignV === "bottom") {
                        y += this.textBounds.height - this.canvas.height / this.resolution;
                    }
                    else if (this.style.boundsAlignV === "middle") {
                        y += this.textBounds.height * bridge.Maths.HALF - (this.canvas.height / this.resolution / 2);
                    }
                    this.pivot.x = -x;
                    this.pivot.y = -y;
                }
            };
            Text.prototype.setStyle = function (style, update) {
                if (update === undefined) {
                    update = false;
                }
                var _style = Text.getPixiTextStyle(style) || {};
                this.style = bridge.clone(_style);
                this.dirty = true;
                if (update) {
                    this.updateText();
                }
                return this;
            };
            Text.prototype.updateText = function (respectDirty) {
                if (respectDirty === void 0) { respectDirty = false; }
                _super.prototype.updateText.call(this, respectDirty);
            };
            Text.DEFAULT_VALUES = {
                fontFamily: "Arial",
                align: "left",
                fill: "black",
                stroke: "black",
                strokeThickness: 0,
                wordWrap: false,
                wordWrapWidth: 100,
                boundsAlignH: "left",
                boundsAlignV: "top",
                miterLimit: 3
            };
            return Text;
        }(bridge.EText));
        bridge.Text = Text;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var INTERACTION_EVENTS = [
            "pointerover",
            "pointerenter",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointercancel",
            "pointerout",
            "pointerleave",
            "gotpointercapture",
            "lostpointercapture",
            "mouseover",
            "mouseenter",
            "mousedown",
            "mousemove",
            "mouseup",
            "mousecancel",
            "mouseout",
            "mouseleave",
            "touchover",
            "touchenter",
            "touchdown",
            "touchmove",
            "touchup",
            "touchcancel",
            "touchout",
            "touchleave"
        ];
        var TAG_STYLE = {
            bbcode: "bbcode",
            xml: "xml"
        };
        var TAG = {
            bbcode: ["[", "]"],
            xml: ["<", ">"]
        };
        var MultiText = (function (_super) {
            __extends(MultiText, _super);
            function MultiText(game, x, y, text, styles, canvas) {
                var _this = _super.call(this, game, x, y, text, styles, canvas) || this;
                _this.styles = styles;
                INTERACTION_EVENTS.forEach(function (event) {
                    _this.on(event, function (e) { return _this.handleInteraction(e); });
                });
                return _this;
            }
            MultiText.prototype.handleInteraction = function (e) {
                var ev = e;
                var localPoint = e.data.getLocalPosition(this);
                var targetTag = this.hitboxes.reduce(function (prev, hitbox) { return prev !== undefined ? prev : (hitbox.hitbox.contains(localPoint.x, localPoint.y) ? hitbox : undefined); }, undefined);
                ev.targetTag = targetTag === undefined ? undefined : targetTag.tag;
            };
            Object.defineProperty(MultiText.prototype, "styles", {
                set: function (styles) {
                    this.textStyles = {};
                    this.textStyles["default"] = this.assign({}, MultiText.DEFAULT_TAG_STYLE);
                    for (var style in styles) {
                        if (style === "default") {
                            this.assign(this.textStyles["default"], styles[style]);
                        }
                        else {
                            this.textStyles[style] = this.assign({}, styles[style]);
                        }
                    }
                    if (this.textStyles.default.tagStyle === TAG_STYLE.bbcode) {
                        this.textStyles.b = this.assign({}, { fontStyle: "bold" });
                        this.textStyles.i = this.assign({}, { fontStyle: "italic" });
                        this.textStyles.color = this.assign({}, { fill: "" });
                        this.textStyles.outline = this.assign({}, { stroke: "", strokeThickness: 6 });
                        this.textStyles.font = this.assign({}, { fontFamily: "" });
                        this.textStyles.shadow = this.assign({}, {
                            dropShadowColor: "", dropShadow: true, dropShadowBlur: 3, dropShadowDistance: 3, dropShadowAngle: 2
                        });
                        this.textStyles.size = this.assign({}, { fontSize: "px" });
                        this.textStyles.spacing = this.assign({}, { letterSpacing: "" });
                        this.textStyles.align = this.assign({}, { align: "" });
                    }
                    this.withPrivateMembers()._style = new PIXI.TextStyle(this.textStyles["default"]);
                    this.withPrivateMembers().dirty = true;
                },
                enumerable: true,
                configurable: true
            });
            MultiText.prototype.setTagStyle = function (tag, style) {
                if (tag in this.textStyles) {
                    this.assign(this.textStyles[tag], style);
                }
                else {
                    this.textStyles[tag] = this.assign({}, style);
                }
                this.withPrivateMembers()._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.withPrivateMembers().dirty = true;
            };
            MultiText.prototype.deleteTagStyle = function (tag) {
                if (tag === "default") {
                    this.textStyles["default"] = this.assign({}, MultiText.DEFAULT_TAG_STYLE);
                }
                else {
                    delete this.textStyles[tag];
                }
                this.withPrivateMembers()._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.withPrivateMembers().dirty = true;
            };
            MultiText.prototype.getTagRegex = function (captureName, captureMatch) {
                var tagAlternation = Object.keys(this.textStyles).join("|");
                var tagStyle = this.textStyles.default.tagStyle;
                if (captureName) {
                    tagAlternation = "(" + tagAlternation + ")";
                }
                else {
                    tagAlternation = "(?:" + tagAlternation + ")";
                }
                var reStr = tagStyle === TAG_STYLE.bbcode ? "\\" + TAG.bbcode[0] + tagAlternation + "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\" + TAG.bbcode[1] + "|\\" + TAG.bbcode[0] + "\\/" + tagAlternation + "\\s*\\" + TAG.bbcode[1]
                    : "\\" + TAG.xml[0] + tagAlternation + "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\" + TAG.xml[1] + "|\\" + TAG.xml[0] + "\\/" + tagAlternation + "\\s*\\" + TAG.xml[1];
                if (captureMatch) {
                    reStr = "(" + reStr + ")";
                }
                return new RegExp(reStr, "g");
            };
            MultiText.prototype.getPropertyRegex = function () {
                return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')", "g");
            };
            MultiText.prototype.getBBcodePropertyRegex = function () {
                return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)", "g");
            };
            MultiText.prototype._getTextDataPerLine = function (lines) {
                var outputTextData = [];
                var re = this.getTagRegex(true, false);
                var styleStack = [this.assign({}, this.textStyles["default"])];
                var tagStack = [{ name: "default", properties: {} }];
                for (var i = 0; i < lines.length; i++) {
                    var lineTextData = [];
                    var matches = [];
                    var matchArray = void 0;
                    while (matchArray = re.exec(lines[i])) {
                        matches.push(matchArray);
                    }
                    if (matches.length === 0) {
                        lineTextData.push(this.createTextData(lines[i], styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                    }
                    else {
                        var currentSearchIdx = 0;
                        var _loop_1 = function (j) {
                            if (matches[j].index > currentSearchIdx) {
                                lineTextData.push(this_1.createTextData(lines[i].substring(currentSearchIdx, matches[j].index), styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]));
                            }
                            if (matches[j][0][1] === "/") {
                                if (styleStack.length > 1) {
                                    styleStack.pop();
                                    tagStack.pop();
                                }
                            }
                            else {
                                var properties = {};
                                var propertyRegex = this_1.getPropertyRegex();
                                var propertyMatch = void 0;
                                while (propertyMatch = propertyRegex.exec(matches[j][0])) {
                                    properties[propertyMatch[1]] = propertyMatch[2] || propertyMatch[3];
                                }
                                tagStack.push({ name: matches[j][1], properties: properties });
                                var tagStyle_1 = this_1.textStyles.default.tagStyle;
                                if (tagStyle_1 === TAG_STYLE.bbcode && matches[j][0].includes("=") && this_1.textStyles[matches[j][1]]) {
                                    var bbcodeRegex = this_1.getBBcodePropertyRegex();
                                    var bbcodeTags_1 = bbcodeRegex.exec(matches[j][0]);
                                    var bbStyle_1 = {};
                                    Object.entries(this_1.textStyles[matches[j][1]]).forEach(function (style) {
                                        bbStyle_1[style[0]] = typeof style[1] !== "string" ? style[1] : bbcodeTags_1[1] + style[1];
                                    });
                                    styleStack.push(this_1.assign({}, styleStack[styleStack.length - 1], bbStyle_1));
                                }
                                else {
                                    styleStack.push(this_1.assign({}, styleStack[styleStack.length - 1], this_1.textStyles[matches[j][1]]));
                                }
                            }
                            currentSearchIdx = matches[j].index + matches[j][0].length;
                        };
                        var this_1 = this;
                        for (var j = 0; j < matches.length; j++) {
                            _loop_1(j);
                        }
                        if (currentSearchIdx < lines[i].length) {
                            var result = this.createTextData(currentSearchIdx ? lines[i].substring(currentSearchIdx) : lines[i], styleStack[styleStack.length - 1], tagStack[tagStack.length - 1]);
                            lineTextData.push(result);
                        }
                    }
                    outputTextData.push(lineTextData);
                }
                var tagStyle = this.textStyles.default.tagStyle;
                outputTextData[outputTextData.length - 1].map(function (data) {
                    if (data.text.includes(TAG[tagStyle][0])) {
                        data.text = data.text.match(tagStyle === TAG_STYLE.bbcode ? /^(.*)\[/ : /^(.*)\</)[1];
                    }
                });
                return outputTextData;
            };
            MultiText.prototype.getFontString = function (style) {
                return new PIXI.TextStyle(style).toFontString();
            };
            MultiText.prototype.createTextData = function (text, style, tag) {
                return {
                    text: text,
                    style: style,
                    width: 0,
                    height: 0,
                    fontProperties: undefined,
                    tag: tag
                };
            };
            MultiText.prototype.getDropShadowPadding = function () {
                var _this = this;
                var maxDistance = 0;
                var maxBlur = 0;
                Object.keys(this.textStyles).forEach(function (styleKey) {
                    var _a = _this.textStyles[styleKey], dropShadowDistance = _a.dropShadowDistance, dropShadowBlur = _a.dropShadowBlur;
                    maxDistance = Math.max(maxDistance, dropShadowDistance || 0);
                    maxBlur = Math.max(maxBlur, dropShadowBlur || 0);
                });
                return maxDistance + maxBlur;
            };
            MultiText.prototype.withPrivateMembers = function () {
                return this;
            };
            MultiText.prototype.updateText = function () {
                var _this = this;
                if (!this.withPrivateMembers().dirty) {
                    return;
                }
                this.hitboxes = [];
                this.texture.baseTexture.resolution = this.resolution;
                var textStyles = this.textStyles;
                var outputText = this.text;
                if (this.withPrivateMembers()._style.wordWrap) {
                    outputText = this.wordWrap(this.text);
                }
                var lines = outputText.split(/(?:\r\n|\r|\n)/);
                var outputTextData = this._getTextDataPerLine(lines);
                var lineWidths = [];
                var lineYMins = [];
                var lineYMaxs = [];
                var baselines = [];
                var maxLineWidth = 0;
                for (var i = 0; i < lines.length; i++) {
                    var lineWidth = 0;
                    var lineYMin = 0;
                    var lineYMax = 0;
                    var baseline = 0;
                    for (var j = 0; j < outputTextData[i].length; j++) {
                        var sty = outputTextData[i][j].style;
                        this.context.font = this.getFontString(sty);
                        outputTextData[i][j].width = this.context.measureText(outputTextData[i][j].text).width;
                        if (outputTextData[i][j].text.length !== 0) {
                            outputTextData[i][j].width += (outputTextData[i][j].text.length - 1) * sty.letterSpacing;
                            if (j > 0) {
                                lineWidth += sty.letterSpacing / 2;
                            }
                            if (j < outputTextData[i].length - 1) {
                                lineWidth += sty.letterSpacing / 2;
                            }
                        }
                        lineWidth += outputTextData[i][j].width;
                        outputTextData[i][j].fontProperties = PIXI.TextMetrics.measureFont(this.context.font);
                        outputTextData[i][j].height = outputTextData[i][j].fontProperties.fontSize;
                        if (typeof sty.valign === "number") {
                            lineYMin =
                                Math.min(lineYMin, sty.valign
                                    - outputTextData[i][j].fontProperties.descent);
                            lineYMax =
                                Math.max(lineYMax, sty.valign
                                    + outputTextData[i][j].fontProperties.ascent);
                        }
                        else {
                            lineYMin =
                                Math.min(lineYMin, -outputTextData[i][j].fontProperties.descent);
                            lineYMax =
                                Math.max(lineYMax, outputTextData[i][j].fontProperties.ascent);
                        }
                    }
                    lineWidths[i] = lineWidth;
                    lineYMins[i] = lineYMin;
                    lineYMaxs[i] = lineYMax;
                    maxLineWidth = Math.max(maxLineWidth, lineWidth);
                }
                var stylesArray = Object.keys(textStyles).map(function (key) { return textStyles[key]; });
                var maxStrokeThickness = stylesArray.reduce(function (prev, cur) { return Math.max(prev, cur.strokeThickness || 0); }, 0);
                var dropShadowPadding = this.getDropShadowPadding();
                var totalHeight = lineYMaxs.reduce(function (prev, cur) { return prev + cur; }, 0) - lineYMins.reduce(function (prev, cur) { return prev + cur; }, 0);
                var width = maxLineWidth + 2 * maxStrokeThickness + 2 * dropShadowPadding;
                var height = totalHeight + 2 * maxStrokeThickness + 2 * dropShadowPadding;
                this.canvas.width = width * this.resolution;
                this.canvas.height = height * this.resolution;
                this.context.scale(this.resolution, this.resolution);
                this.context.textBaseline = "alphabetic";
                this.context.lineJoin = "round";
                var basePositionY = dropShadowPadding + maxStrokeThickness;
                var drawingData = [];
                for (var i = 0; i < outputTextData.length; i++) {
                    var line = outputTextData[i];
                    var linePositionX = void 0;
                    switch (this.withPrivateMembers()._style.align) {
                        case "left":
                            linePositionX = dropShadowPadding + maxStrokeThickness;
                            break;
                        case "center":
                            linePositionX = dropShadowPadding + maxStrokeThickness + (maxLineWidth - lineWidths[i]) / 2;
                            break;
                        case "right":
                            linePositionX = dropShadowPadding + maxStrokeThickness + maxLineWidth - lineWidths[i];
                            break;
                    }
                    for (var j = 0; j < line.length; j++) {
                        var _a = line[j], style = _a.style, text = _a.text, fontProperties = _a.fontProperties, width_1 = _a.width, height_1 = _a.height, tag = _a.tag;
                        var linePositionY = basePositionY + fontProperties.ascent;
                        switch (style.valign) {
                            case "top":
                                break;
                            case "baseline":
                                linePositionY += lineYMaxs[i] - fontProperties.ascent;
                                break;
                            case "middle":
                                linePositionY += (lineYMaxs[i] - lineYMins[i] - fontProperties.ascent - fontProperties.descent) / 2;
                                break;
                            case "bottom":
                                linePositionY += lineYMaxs[i] - lineYMins[i] - fontProperties.ascent - fontProperties.descent;
                                break;
                            default:
                                linePositionY += lineYMaxs[i] - fontProperties.ascent - style.valign;
                                break;
                        }
                        if (style.letterSpacing === 0) {
                            drawingData.push({
                                text: text,
                                style: style,
                                x: linePositionX,
                                y: linePositionY,
                                width: width_1,
                                ascent: fontProperties.ascent,
                                descent: fontProperties.descent,
                                tag: tag
                            });
                            linePositionX += line[j].width;
                        }
                        else {
                            this.context.font = this.getFontString(line[j].style);
                            for (var k = 0; k < text.length; k++) {
                                if (k > 0 || j > 0) {
                                    linePositionX += style.letterSpacing / 2;
                                }
                                var charWidth = this.context.measureText(text.charAt(k)).width;
                                drawingData.push({
                                    text: text.charAt(k),
                                    style: style,
                                    x: linePositionX,
                                    y: linePositionY,
                                    width: charWidth,
                                    ascent: fontProperties.ascent,
                                    descent: fontProperties.descent,
                                    tag: tag
                                });
                                linePositionX += charWidth;
                                if (k < text.length - 1 || j < line.length - 1) {
                                    linePositionX += style.letterSpacing / 2;
                                }
                            }
                        }
                    }
                    basePositionY += lineYMaxs[i] - lineYMins[i];
                }
                this.context.save();
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y;
                    if (!style.dropShadow) {
                        return;
                    }
                    _this.context.font = _this.getFontString(style);
                    var dropFillStyle = style.dropShadowColor;
                    if (typeof dropFillStyle === "number") {
                        dropFillStyle = PIXI.utils.hex2string(dropFillStyle);
                    }
                    _this.context.shadowColor = dropFillStyle;
                    _this.context.shadowBlur = style.dropShadowBlur;
                    _this.context.shadowOffsetX = Math.cos(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                    _this.context.shadowOffsetY = Math.sin(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                    _this.context.fillText(text, x, y);
                });
                this.context.restore();
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y, width = _a.width, ascent = _a.ascent, descent = _a.descent, tag = _a.tag;
                    if (style.stroke === undefined || !style.strokeThickness) {
                        return;
                    }
                    _this.context.font = _this.getFontString(style);
                    var strokeStyle = style.stroke;
                    if (typeof strokeStyle === "number") {
                        strokeStyle = PIXI.utils.hex2string(strokeStyle);
                    }
                    _this.context.strokeStyle = strokeStyle;
                    _this.context.lineWidth = style.strokeThickness;
                    _this.context.strokeText(text, x, y);
                });
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y, width = _a.width, ascent = _a.ascent, descent = _a.descent, tag = _a.tag;
                    if (style.fill === undefined) {
                        return;
                    }
                    _this.context.font = _this.getFontString(style);
                    var fillStyle = style.fill;
                    if (typeof fillStyle === "number") {
                        fillStyle = PIXI.utils.hex2string(fillStyle);
                    }
                    else if (Array.isArray(fillStyle)) {
                        for (var i = 0; i < fillStyle.length; i++) {
                            var fill = fillStyle[i];
                            if (typeof fill === "number") {
                                fillStyle[i] = PIXI.utils.hex2string(fill);
                            }
                        }
                    }
                    _this.context.fillStyle = _this._generateFillStyle(new PIXI.TextStyle(style), [text]);
                    _this.context.fillText(text, x, y);
                });
                drawingData.forEach(function (_a) {
                    var style = _a.style, text = _a.text, x = _a.x, y = _a.y, width = _a.width, ascent = _a.ascent, descent = _a.descent, tag = _a.tag;
                    var offset = -_this.withPrivateMembers()._style.padding - _this.getDropShadowPadding();
                    _this.hitboxes.push({
                        tag: tag,
                        hitbox: new PIXI.Rectangle(x + offset, y - ascent + offset, width, ascent + descent)
                    });
                    var debugSpan = style.debug === undefined
                        ? MultiText.debugOptions.spans.enabled
                        : style.debug;
                    if (debugSpan) {
                        _this.context.lineWidth = 1;
                        if (MultiText.debugOptions.spans.bounding) {
                            _this.context.fillStyle = MultiText.debugOptions.spans.bounding;
                            _this.context.strokeStyle = MultiText.debugOptions.spans.bounding;
                            _this.context.beginPath();
                            _this.context.rect(x, y - ascent, width, ascent + descent);
                            _this.context.fill();
                            _this.context.stroke();
                            _this.context.stroke();
                        }
                        if (MultiText.debugOptions.spans.baseline) {
                            _this.context.strokeStyle = MultiText.debugOptions.spans.baseline;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y);
                            _this.context.lineTo(x + width, y);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiText.debugOptions.spans.top) {
                            _this.context.strokeStyle = MultiText.debugOptions.spans.top;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y - ascent);
                            _this.context.lineTo(x + width, y - ascent);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiText.debugOptions.spans.bottom) {
                            _this.context.strokeStyle = MultiText.debugOptions.spans.bottom;
                            _this.context.beginPath();
                            _this.context.moveTo(x, y + descent);
                            _this.context.lineTo(x + width, y + descent);
                            _this.context.closePath();
                            _this.context.stroke();
                        }
                        if (MultiText.debugOptions.spans.text) {
                            _this.context.fillStyle = "#ffffff";
                            _this.context.strokeStyle = "#000000";
                            _this.context.lineWidth = 2;
                            _this.context.font = "8px monospace";
                            _this.context.strokeText(tag.name, x, y - ascent + 8);
                            _this.context.fillText(tag.name, x, y - ascent + 8);
                            _this.context.strokeText(width.toFixed(2) + "x" + (ascent + descent).toFixed(2), x, y - ascent + 16);
                            _this.context.fillText(width.toFixed(2) + "x" + (ascent + descent).toFixed(2), x, y - ascent + 16);
                        }
                    }
                });
                if (MultiText.debugOptions.objects.enabled) {
                    if (MultiText.debugOptions.objects.bounding) {
                        this.context.fillStyle = MultiText.debugOptions.objects.bounding;
                        this.context.beginPath();
                        this.context.rect(0, 0, width, height);
                        this.context.fill();
                    }
                    if (MultiText.debugOptions.objects.text) {
                        this.context.fillStyle = "#ffffff";
                        this.context.strokeStyle = "#000000";
                        this.context.lineWidth = 2;
                        this.context.font = "8px monospace";
                        this.context.strokeText(width.toFixed(2) + "x" + height.toFixed(2), 0, 8, width);
                        this.context.fillText(width.toFixed(2) + "x" + height.toFixed(2), 0, 8, width);
                    }
                }
                this.updateTexture();
            };
            MultiText.prototype.wordWrap = function (text) {
                var result = "";
                var re = this.getTagRegex(true, true);
                var lines = text.split("\n");
                var wordWrapWidth = this.withPrivateMembers()._style.wordWrapWidth;
                var styleStack = [this.assign({}, this.textStyles["default"])];
                this.context.font = this.getFontString(this.textStyles["default"]);
                for (var i = 0; i < lines.length; i++) {
                    var spaceLeft = wordWrapWidth;
                    var tagSplit = lines[i].split(re);
                    var firstWordOfLine = true;
                    for (var j = 0; j < tagSplit.length; j++) {
                        if (re.test(tagSplit[j])) {
                            result += tagSplit[j];
                            if (tagSplit[j][1] === "/") {
                                j += 2;
                                styleStack.pop();
                            }
                            else {
                                j++;
                                styleStack.push(this.assign({}, styleStack[styleStack.length - 1], this.textStyles[tagSplit[j]]));
                                j++;
                            }
                            this.context.font = this.getFontString(styleStack[styleStack.length - 1]);
                        }
                        else {
                            var words = tagSplit[j].split(" ");
                            for (var k = 0; k < words.length; k++) {
                                var wordWidth = this.context.measureText(words[k]).width;
                                if (this.withPrivateMembers()._style.breakWords && wordWidth > spaceLeft) {
                                    var characters = words[k].split("");
                                    if (k > 0) {
                                        result += " ";
                                        spaceLeft -= this.context.measureText(" ").width;
                                    }
                                    for (var c = 0; c < characters.length; c++) {
                                        var characterWidth = this.context.measureText(characters[c]).width;
                                        if (characterWidth > spaceLeft) {
                                            result += "\n" + characters[c];
                                            spaceLeft = wordWrapWidth - characterWidth;
                                        }
                                        else {
                                            result += characters[c];
                                            spaceLeft -= characterWidth;
                                        }
                                    }
                                }
                                else if (this.withPrivateMembers()._style.breakWords) {
                                    result += words[k];
                                    spaceLeft -= wordWidth;
                                }
                                else {
                                    var paddedWordWidth = wordWidth + (k > 0 ? this.context.measureText(" ").width : 0);
                                    if (paddedWordWidth > spaceLeft) {
                                        if (!firstWordOfLine) {
                                            result += "\n";
                                        }
                                        result += words[k];
                                        spaceLeft = wordWrapWidth - wordWidth;
                                    }
                                    else {
                                        spaceLeft -= paddedWordWidth;
                                        if (k > 0) {
                                            result += " ";
                                        }
                                        result += words[k];
                                    }
                                }
                                firstWordOfLine = false;
                            }
                        }
                    }
                    if (i < lines.length - 1) {
                        result += "\n";
                    }
                }
                return result;
            };
            MultiText.prototype.updateTexture = function () {
                var texture = this.withPrivateMembers()._texture;
                var dropShadowPadding = this.getDropShadowPadding();
                texture.baseTexture.setRealSize(this.canvas.width, this.canvas.height, this.resolution);
                texture.trim.width = texture.frame.width = this.canvas.width / this.resolution;
                texture.trim.height = texture.frame.height = this.canvas.height / this.resolution;
                texture.trim.x = -this.withPrivateMembers()._style.padding - dropShadowPadding;
                texture.trim.y = -this.withPrivateMembers()._style.padding - dropShadowPadding;
                texture.orig.width = texture.frame.width - (this.withPrivateMembers()._style.padding + dropShadowPadding) * 2;
                texture.orig.height = texture.frame.height - (this.withPrivateMembers()._style.padding + dropShadowPadding) * 2;
                this.withPrivateMembers()._onTextureUpdate();
                texture.baseTexture.emit("update", texture.baseTexture);
                this.withPrivateMembers().dirty = false;
            };
            MultiText.prototype.assign = function (destination) {
                var sources = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    sources[_i - 1] = arguments[_i];
                }
                for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
                    var source = sources_1[_a];
                    for (var key in source) {
                        destination[key] = source[key];
                    }
                }
                return destination;
            };
            MultiText.prototype.setTextBounds = function (x, y, width, height) {
            };
            MultiText.DEFAULT_TAG_STYLE = {
                align: "left",
                breakWords: false,
                dropShadow: false,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "#000000",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: PIXI.TEXT_GRADIENT.LINEAR_VERTICAL,
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                valign: "baseline",
                wordWrap: false,
                wordWrapWidth: 100,
                tagStyle: "xml"
            };
            MultiText.debugOptions = {
                spans: {
                    enabled: false,
                    baseline: "#44BB44",
                    top: "#BB4444",
                    bottom: "#4444BB",
                    bounding: "rgba(255, 255, 255, 0.1)",
                    text: true
                },
                objects: {
                    enabled: false,
                    bounding: "rgba(255, 255, 255, 0.05)",
                    text: true
                }
            };
            return MultiText;
        }(bridge.Text));
        bridge.MultiText = MultiText;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Point = (function (_super) {
            __extends(Point, _super);
            function Point(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                return _super.call(this, x, y) || this;
            }
            Point.prototype.set = function (x, y) {
                this.x = x || 0;
                this.y = y || ((y !== 0) ? this.x : 0);
                return this;
            };
            Point.prototype.clone = function () {
                return bridge.clone(this);
            };
            Point.prototype.copyFrom = function (sourcePoint) {
                this.x = sourcePoint.x;
                this.y = sourcePoint.y;
                return this;
            };
            Point.distance = function (a, b, round) {
                var distance = bridge.Maths.distance(a.x, a.y, b.x, b.y);
                return round ? Math.round(distance) : distance;
            };
            return Point;
        }(bridge.EPoint));
        bridge.Point = Point;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Polygon = (function (_super) {
            __extends(Polygon, _super);
            function Polygon(points) {
                var _this = _super.call(this, points) || this;
                _this.points = points;
                return _this;
            }
            Polygon.prototype.clone = function () {
                return new Polygon(this.points.slice());
            };
            Polygon.prototype.contains = function (x, y) {
                return Polygon._contains(this, x, y);
            };
            Polygon._contains = function (a, x, y) {
                var length = a.points.length;
                var inside = false;
                for (var i = -1, j = length - 1; ++i < length; j = i) {
                    var ix = a.points[i][0];
                    var iy = a.points[i][1];
                    var jx = a.points[j][0];
                    var jy = a.points[j][1];
                    if (((iy <= y && y < jy) || (jy <= y && y < iy)) && (x < (jx - ix) * (y - iy) / (jy - iy) + ix)) {
                        inside = !inside;
                    }
                }
                return inside;
            };
            Polygon.prototype.setTo = function (points) {
                this.points = [];
                if (arguments.length > 0) {
                    if (!Array.isArray(points)) {
                        points = Array.prototype.slice.call(arguments);
                    }
                    var y0 = Number.MAX_VALUE;
                    var p = void 0;
                    for (var i = 0, len = points.length; i < len; i++) {
                        if (typeof points[i] === "number") {
                            p = new bridge.Point(points[i], points[i + 1]);
                            i++;
                        }
                        else if (Array.isArray(points[i])) {
                            p = new bridge.Point(points[i][0], points[i][1]);
                        }
                        else {
                            p = new bridge.Point(points[i].x, points[i].y);
                        }
                        this.points.push(p);
                        if (p.y < y0) {
                            y0 = p.y;
                        }
                    }
                }
                return this;
            };
            return Polygon;
        }(bridge.EPolygon));
        bridge.Polygon = Polygon;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Rectangle = (function (_super) {
            __extends(Rectangle, _super);
            function Rectangle(x, y, width, height) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                return _super.call(this, x, y, width, height) || this;
            }
            Object.defineProperty(Rectangle.prototype, "left", {
                get: function () {
                    return this._left || this.x;
                },
                set: function (value) {
                    this._left = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "right", {
                get: function () {
                    return this._right || this.x + this.width;
                },
                set: function (value) {
                    this._right = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "top", {
                get: function () {
                    return this._top || this.y;
                },
                set: function (value) {
                    this._top = value;
                },
                enumerable: true,
                configurable: true
            });
            Rectangle.sameDimensions = function (a, b) {
                return (a.width === b.width && a.height === b.height);
            };
            Object.defineProperty(Rectangle.prototype, "bottom", {
                get: function () {
                    return this._bottom || this.y + this.height;
                },
                set: function (value) {
                    this._bottom = value;
                },
                enumerable: true,
                configurable: true
            });
            Rectangle.clone = function (a, output) {
                if (output === undefined || output === null) {
                    output = new Rectangle(a.x, a.y, a.width, a.height);
                }
                else {
                    output.setTo(a.x, a.y, a.width, a.height);
                }
                return output;
            };
            Rectangle.prototype.contains = function (x, y) {
                return Rectangle._contains(this, x, y);
            };
            Rectangle._contains = function (a, x, y) {
                if (a.width <= 0 || a.height <= 0) {
                    return false;
                }
                return (x >= a.x && x < a.right && y >= a.y && y < a.bottom);
            };
            Rectangle.prototype.scale = function (x, y) {
                if (y === undefined) {
                    y = x;
                }
                this.width *= x;
                this.height *= y;
                return this;
            };
            Rectangle.prototype.setTo = function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                return this;
            };
            Rectangle.prototype.resize = function (width, height) {
                this.width = width;
                this.height = height;
                return this;
            };
            return Rectangle;
        }(bridge.ERectangle));
        bridge.Rectangle = Rectangle;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var RenderTexture = (function (_super) {
            __extends(RenderTexture, _super);
            function RenderTexture() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RenderTexture;
        }(bridge.ERenderTexture));
        bridge.RenderTexture = RenderTexture;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var RoundedRectangle = (function (_super) {
            __extends(RoundedRectangle, _super);
            function RoundedRectangle(x, y, width, height, radius) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                if (radius === void 0) { radius = 10; }
                return _super.call(this, x, y, width, height, radius) || this;
            }
            RoundedRectangle.prototype.clone = function () {
                return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
            };
            RoundedRectangle.prototype.contains = function (x, y) {
                return RoundedRectangle._contains(this, x, y);
            };
            RoundedRectangle._contains = function (a, x, y) {
                if (a.width <= 0 || a.height <= 0) {
                    return false;
                }
                var x1 = a.x;
                if (x >= x1 && x <= x1 + a.width) {
                    var y1 = a.y;
                    if (y >= y1 && y <= y1 + a.height) {
                        return true;
                    }
                }
                return false;
            };
            return RoundedRectangle;
        }(bridge.ERoundedRectangle));
        bridge.RoundedRectangle = RoundedRectangle;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var ScaleManager = (function () {
            function ScaleManager(game, width, height) {
                this.width = 0;
                this.height = 0;
                this.minWidth = 0;
                this.maxWidth = 0;
                this.minHeight = 0;
                this.maxHeight = 0;
                this.forceLandscape = false;
                this.forcePortrait = false;
                this.incorrectOrientation = false;
                this._pageAlignHorizontally = false;
                this._pageAlignVertically = false;
                this._createdFullScreenTarget = null;
                this.fullScreenTarget = null;
                this.aspectRatio = 0;
                this.offset = new bridge.Point();
                this.onOrientationChange = new bridge.Signal();
                this.enterIncorrectOrientation = new bridge.Signal();
                this.leaveIncorrectOrientation = new bridge.Signal();
                this.hasPixiSetFullScreen = false;
                this.onFullScreenInit = new bridge.Signal();
                this.onFullScreenChange = new bridge.Signal();
                this.onFullScreenError = new bridge.Signal();
                this.scaleFactor = new bridge.Point(1, 1);
                this.scaleFactorInversed = new bridge.Point(1, 1);
                this.compatibility = {
                    supportsFullScreen: false,
                    orientationFallback: "",
                    noMargins: false,
                    scrollTo: new bridge.Point(),
                    forceMinimumDocumentHeight: false,
                    canExpandParent: true,
                    clickTrampoline: ""
                };
                this.margin = {
                    left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0
                };
                this.bounds = new bridge.Rectangle();
                this.sourceAspectRatio = 0;
                this.event = null;
                this.windowConstraints = {
                    right: "layout",
                    bottom: ""
                };
                this.parentIsWindow = false;
                this.parentScaleFactor = new bridge.Point(1, 1);
                this.trackParentInterval = 2000;
                this.onSizeChange = new bridge.Signal();
                this.onResize = null;
                this.onResizeContext = null;
                this._pendingScaleMode = null;
                this._scaleMode = ScaleManager.NO_SCALE;
                this._fullScreenScaleMode = ScaleManager.NO_SCALE;
                this.parentNode = null;
                this._fullScreenRestore = null;
                this._gameSize = new bridge.Rectangle();
                this._userScaleFactor = new bridge.Point(1, 1);
                this._userScaleTrim = new bridge.Point(0, 0);
                this._lastUpdate = 0;
                this._updateThrottle = 0;
                this._updateThrottleReset = 0;
                this._parentBounds = new bridge.Rectangle();
                this._tempBounds = new bridge.Rectangle();
                this._lastReportedCanvasSize = new bridge.Rectangle();
                this._lastReportedGameSize = new bridge.Rectangle();
                this._booted = false;
                this.game = game;
                this.width = width;
                this.height = height;
                this.minWidth = null;
                this.maxWidth = null;
                this.minHeight = null;
                this.maxHeight = null;
                this.dom = new bridge.DOM();
                if (game.config) {
                    this.parseConfig(game.config);
                }
                this.setupScale(width, height);
            }
            ScaleManager.prototype._orientationChange = function (event) {
                return this.orientationChange(event);
            };
            ScaleManager.prototype._windowResize = function (event) {
                return this.windowResize(event);
            };
            ScaleManager.prototype._fullScreenChange = function (event) {
                return this.fullScreenChange(event);
            };
            ScaleManager.prototype._fullScreenError = function (event) {
                return this.fullScreenError(event);
            };
            Object.defineProperty(ScaleManager.prototype, "isFullScreen", {
                get: function () {
                    return !!(document["fullscreenElement"] ||
                        document["webkitFullscreenElement"] ||
                        document["mozFullScreenElement"] ||
                        document["msFullscreenElement"]);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "currentScaleMode", {
                get: function () {
                    return this.isFullScreen ? this._fullScreenScaleMode : this._scaleMode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "boundingParent", {
                get: function () {
                    if (this.parentIsWindow ||
                        (this.isFullScreen && !this._createdFullScreenTarget)) {
                        return null;
                    }
                    var parentNode = this.game.canvas && this.game.canvas.parentNode;
                    return parentNode || null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "isPortrait", {
                get: function () {
                    return this.classifyOrientation(this.screenOrientation) === "portrait";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "isLandscape", {
                get: function () {
                    return this.classifyOrientation(this.screenOrientation) === "landscape";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "scaleMode", {
                get: function () {
                    return this._scaleMode;
                },
                set: function (value) {
                    if (value !== this._scaleMode) {
                        if (!this.isFullScreen) {
                            this.updateDimensions(this._gameSize.width, this._gameSize.height, true);
                            this.queueUpdate(true);
                        }
                        this._scaleMode = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "fullScreenScaleMode", {
                get: function () {
                    return this._fullScreenScaleMode;
                },
                set: function (value) {
                    if (value !== this._fullScreenScaleMode) {
                        if (this.isFullScreen) {
                            this.prepScreenMode(false);
                            this._fullScreenScaleMode = value;
                            this.prepScreenMode(true);
                            this.queueUpdate(true);
                        }
                        else {
                            this._fullScreenScaleMode = value;
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "pageAlignHorizontally", {
                get: function () {
                    return this._pageAlignHorizontally;
                },
                set: function (value) {
                    if (value !== this._pageAlignHorizontally) {
                        this._pageAlignHorizontally = value;
                        this.queueUpdate(true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "pageAlignVertically", {
                get: function () {
                    return this._pageAlignVertically;
                },
                set: function (value) {
                    if (value !== this._pageAlignVertically) {
                        this._pageAlignVertically = value;
                        this.queueUpdate(true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "isGamePortrait", {
                get: function () {
                    return (this.height > this.width);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ScaleManager.prototype, "isGameLandscape", {
                get: function () {
                    return (this.width > this.height);
                },
                enumerable: true,
                configurable: true
            });
            ScaleManager.prototype.classifyOrientation = function (orientation) {
                if (orientation === "portrait-primary" || orientation === "portrait-secondary") {
                    return "portrait";
                }
                else if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
                    return "landscape";
                }
                else {
                    return null;
                }
            };
            ScaleManager.prototype.boot = function () {
                var compat = this.compatibility;
                compat.supportsFullScreen = this.game.device.fullscreen && !this.game.device.cocoonJS;
                if (!this.game.device.iPad && !this.game.device.webApp && !this.game.device.desktop && this.game.config.useWindowScrollTo) {
                    if (this.game.device.android && !this.game.device.chrome) {
                        compat.scrollTo = new bridge.Point(0, 1);
                    }
                    else {
                        compat.scrollTo = new bridge.Point(0, 0);
                    }
                }
                if (this.game.device.desktop) {
                    compat.orientationFallback = "screen";
                    compat.clickTrampoline = "when-not-mouse";
                }
                else {
                    compat.orientationFallback = "";
                    compat.clickTrampoline = "";
                }
                var _this = this;
                if (!this.game.config.useCustomOrientationchange) {
                    window.addEventListener("orientationchange", this._orientationChange.bind(this), false);
                }
                if (!this.game.config.useCustomResize) {
                    window.addEventListener("resize", this._windowResize.bind(this), false);
                }
                if (this.compatibility.supportsFullScreen) {
                    this._fullScreenChange = function (event) {
                        return _this.fullScreenChange(event);
                    };
                    this._fullScreenError = function (event) {
                        return _this.fullScreenError(event);
                    };
                    document.addEventListener("webkitfullscreenchange", this._fullScreenChange.bind(this), false);
                    document.addEventListener("mozfullscreenchange", this._fullScreenChange.bind(this), false);
                    document.addEventListener("MSFullscreenChange", this._fullScreenChange.bind(this), false);
                    document.addEventListener("fullscreenchange", this._fullScreenChange.bind(this), false);
                    document.addEventListener("webkitfullscreenerror", this._fullScreenError.bind(this), false);
                    document.addEventListener("mozfullscreenerror", this._fullScreenError.bind(this), false);
                    document.addEventListener("MSFullscreenError", this._fullScreenError.bind(this), false);
                    document.addEventListener("fullscreenerror", this._fullScreenError.bind(this), false);
                }
                this.game.onResume.add(this._gameResumed, this);
                this.dom.getOffset(this.game.canvas, this.offset);
                this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height);
                this.setGameSize(this.game.width, this.game.height);
                this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback);
                this._booted = true;
                if (this._pendingScaleMode !== null) {
                    this.scaleMode = this._pendingScaleMode;
                    this._pendingScaleMode = null;
                }
            };
            ScaleManager.prototype.parseConfig = function (config) {
                if (config["scaleMode"]) {
                    if (this._booted) {
                        this.scaleMode = config["scaleMode"];
                    }
                    else {
                        this._pendingScaleMode = config["scaleMode"];
                    }
                }
                if (config["fullScreenScaleMode"]) {
                    this.fullScreenScaleMode = config["fullScreenScaleMode"];
                }
                if (config["fullScreenTarget"]) {
                    this.fullScreenTarget = config["fullScreenTarget"];
                }
            };
            ScaleManager.prototype.setupScale = function (width, height) {
                var target;
                var rect = new bridge.Rectangle();
                if (this.game.parent !== undefined) {
                    if (typeof this.game.parent === "string") {
                        target = document.getElementById(this.game.parent);
                    }
                    else if (this.game.parent && this.game.parent.nodeType === 1) {
                        target = this.game.parent;
                    }
                }
                if (!target) {
                    this.parentNode = null;
                    this.parentIsWindow = true;
                    rect.width = bridge.DOM.visualBounds.width;
                    rect.height = bridge.DOM.visualBounds.height;
                    this.offset.set(0, 0);
                }
                else {
                    this.parentNode = target;
                    this.parentIsWindow = false;
                    this.getParentBounds(this._parentBounds);
                    rect.width = this._parentBounds.width;
                    rect.height = this._parentBounds.height;
                    this.offset.set(this._parentBounds.x, this._parentBounds.y);
                }
                var newWidth = 0;
                var newHeight = 0;
                if (typeof width === "number") {
                    newWidth = width;
                }
                else {
                    this.parentScaleFactor.x = parseInt(width, 10) / 100;
                    newWidth = rect.width * this.parentScaleFactor.x;
                }
                if (typeof height === "number") {
                    newHeight = height;
                }
                else {
                    this.parentScaleFactor.y = parseInt(height, 10) / 100;
                    newHeight = rect.height * this.parentScaleFactor.y;
                }
                this._gameSize.setTo(0, 0, newWidth, newHeight);
                this.updateDimensions(newWidth, newHeight, false);
            };
            ScaleManager.prototype.getParentBounds = function (target) {
                var bounds = target || new bridge.Rectangle();
                var parentNode = this.boundingParent;
                var visualBounds = bridge.DOM.visualBounds;
                var layoutBounds = bridge.DOM.layoutBounds;
                if (!parentNode) {
                    bounds.setTo(0, 0, visualBounds.width, visualBounds.height);
                }
                else {
                    var clientRect = parentNode.getBoundingClientRect();
                    var parentRect = (parentNode.offsetParent) ? parentNode.offsetParent.getBoundingClientRect() : parentNode.getBoundingClientRect();
                    bounds.setTo(clientRect.left - parentRect.left, clientRect.top - parentRect.top, clientRect.width, clientRect.height);
                    var wc = this.windowConstraints;
                    if (wc.right) {
                        var windowBounds = wc.right === "layout" ? layoutBounds : visualBounds;
                        bounds.right = Math.min(bounds.right, windowBounds.width);
                    }
                    if (wc.bottom) {
                        var windowBounds = wc.bottom === "layout" ? layoutBounds : visualBounds;
                        bounds.bottom = Math.min(bounds.bottom, windowBounds.height);
                    }
                }
                bounds.setTo(Math.round(bounds.x), Math.round(bounds.y), Math.round(bounds.width), Math.round(bounds.height));
                return bounds;
            };
            ScaleManager.prototype.setGameSize = function (width, height) {
                this._gameSize.setTo(0, 0, width, height);
                if (this.currentScaleMode !== ScaleManager.RESIZE) {
                    this.updateDimensions(width, height, true);
                }
                this.queueUpdate(true);
            };
            ScaleManager.prototype.setUserScale = function (hScale, vScale, hTrim, vTrim) {
                this._userScaleFactor.set(hScale, vScale);
                this._userScaleTrim.set(hTrim | 0, vTrim | 0);
                this.queueUpdate(true);
            };
            ScaleManager.prototype.setResizeCallback = function (callback, context) {
                this.onResize = callback;
                this.onResizeContext = context;
            };
            ScaleManager.prototype.signalSizeChange = function () {
                if (!bridge.Rectangle.sameDimensions(this, this._lastReportedCanvasSize) ||
                    !bridge.Rectangle.sameDimensions(this.game, this._lastReportedGameSize)) {
                    var width = this.width;
                    var height = this.height;
                    this._lastReportedCanvasSize.setTo(0, 0, width, height);
                    this._lastReportedGameSize.setTo(0, 0, this.game.width, this.game.height);
                    this.onSizeChange.dispatch(this, width, height);
                    if (this.currentScaleMode === ScaleManager.RESIZE) {
                        this.game.state.resize(width, height);
                        this.game.load.resize(width, height);
                    }
                }
            };
            ScaleManager.prototype.setMinMax = function (minWidth, minHeight, maxWidth, maxHeight) {
                this.minWidth = minWidth;
                this.minHeight = minHeight;
                if (typeof maxWidth !== "undefined") {
                    this.maxWidth = maxWidth;
                }
                if (typeof maxHeight !== "undefined") {
                    this.maxHeight = maxHeight;
                }
            };
            ScaleManager.prototype.preUpdate = function () {
                if (this.game.time.time < (this._lastUpdate + this._updateThrottle)) {
                    return;
                }
                var throttleCheckLimit = 400;
                var prevThrottle = this._updateThrottle;
                this._updateThrottleReset = prevThrottle >= throttleCheckLimit ? 0 : 100;
                this.dom.getOffset(this.game.canvas, this.offset);
                var prevWidth = this._parentBounds.width;
                var prevHeight = this._parentBounds.height;
                var bounds = this.getParentBounds(this._parentBounds);
                var boundsChanged = bounds.width !== prevWidth || bounds.height !== prevHeight;
                var orientationChanged = this.updateOrientationState();
                if (boundsChanged || orientationChanged) {
                    if (this.onResize) {
                        this.onResize.call(this.onResizeContext, this, bounds);
                    }
                    this.updateLayout();
                    this.signalSizeChange();
                }
                var throttle = this._updateThrottle * 2;
                if (this._updateThrottle < prevThrottle) {
                    throttle = Math.min(prevThrottle, this._updateThrottleReset);
                }
                this._updateThrottle = bridge.Maths.clamp(throttle, 25, this.trackParentInterval);
                this._lastUpdate = this.game.time.time;
            };
            ScaleManager.prototype.pauseUpdate = function () {
                this.preUpdate();
                this._updateThrottle = this.trackParentInterval;
            };
            ScaleManager.prototype.updateOrientationState = function () {
                var previousOrientation = this.screenOrientation;
                var previouslyIncorrect = this.incorrectOrientation;
                this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback);
                this.incorrectOrientation = (this.forceLandscape && !this.isLandscape) ||
                    (this.forcePortrait && !this.isPortrait);
                var changed = previousOrientation !== this.screenOrientation;
                var correctnessChanged = previouslyIncorrect !== this.incorrectOrientation;
                if (correctnessChanged) {
                    if (this.incorrectOrientation) {
                        this.enterIncorrectOrientation.dispatch();
                    }
                    else {
                        this.leaveIncorrectOrientation.dispatch();
                    }
                }
                if (changed || correctnessChanged) {
                    this.onOrientationChange.dispatch(this, previousOrientation, previouslyIncorrect);
                }
                return changed || correctnessChanged;
            };
            ScaleManager.prototype._gameResumed = function () {
                this.queueUpdate(true);
            };
            ScaleManager.prototype.orientationChange = function (event) {
                this.event = event;
                this.queueUpdate(true);
            };
            ScaleManager.prototype.queueUpdate = function (force) {
                if (force) {
                    this._parentBounds.width = 0;
                    this._parentBounds.height = 0;
                }
                this._updateThrottle = this._updateThrottleReset;
            };
            ScaleManager.prototype.windowResize = function (event) {
                this.event = event;
                this.queueUpdate(true);
            };
            ScaleManager.prototype.fullScreenError = function (event) {
                this.event = event;
                this.cleanupCreatedTarget();
                console.warn("ScaleManager: requestFullscreen failed or device does not support the Fullscreen API");
                this.onFullScreenError.dispatch(this);
            };
            ScaleManager.prototype.cleanupCreatedTarget = function () {
                var fsTarget = this._createdFullScreenTarget;
                if (fsTarget && fsTarget.parentNode) {
                    var parent_1 = fsTarget.parentNode;
                    parent_1.insertBefore(this.game.canvas, fsTarget);
                    parent_1.removeChild(fsTarget);
                }
                this._createdFullScreenTarget = null;
            };
            ScaleManager.prototype.fullScreenChange = function (event) {
                this.event = event;
                if (this.isFullScreen) {
                    this.prepScreenMode(true);
                    this.updateLayout();
                    this.queueUpdate(true);
                }
                else {
                    this.prepScreenMode(false);
                    this.cleanupCreatedTarget();
                    this.updateLayout();
                    this.queueUpdate(true);
                }
                this.onFullScreenChange.dispatch(this, this.width, this.height);
            };
            ScaleManager.prototype.prepScreenMode = function (enteringFullscreen) {
                var createdTarget = !!this._createdFullScreenTarget;
                var fsTarget = this._createdFullScreenTarget || this.fullScreenTarget;
                if (enteringFullscreen) {
                    if (createdTarget || this.fullScreenScaleMode === ScaleManager.EXACT_FIT) {
                        if (fsTarget !== this.game.canvas) {
                            this._fullScreenRestore = {
                                targetWidth: fsTarget.style.width,
                                targetHeight: fsTarget.style.height
                            };
                            fsTarget.style.width = "100%";
                            fsTarget.style.height = "100%";
                        }
                    }
                }
                else {
                    if (this._fullScreenRestore) {
                        fsTarget.style.width = this._fullScreenRestore.targetWidth;
                        fsTarget.style.height = this._fullScreenRestore.targetHeight;
                        this._fullScreenRestore = null;
                    }
                    this.updateDimensions(this._gameSize.width, this._gameSize.height, true);
                    this.resetCanvas();
                }
            };
            ScaleManager.prototype.updateDimensions = function (width, height, resize) {
                this.width = width * this.parentScaleFactor.x;
                this.height = height * this.parentScaleFactor.y;
                this.game.width = this.width;
                this.game.height = this.height;
                this.sourceAspectRatio = this.width / this.height;
                this.updateScalingAndBounds();
                if (resize) {
                    this.game.renderer.resize(this.width, this.height);
                }
            };
            ScaleManager.prototype.updateScalingAndBounds = function () {
                this.scaleFactor.x = this.game.width / this.width;
                this.scaleFactor.y = this.game.height / this.height;
                this.scaleFactorInversed.x = this.width / this.game.width;
                this.scaleFactorInversed.y = this.height / this.game.height;
                this.aspectRatio = this.width / this.height;
                if (this.game.canvas) {
                    this.dom.getOffset(this.game.canvas, this.offset);
                }
                this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height);
            };
            ScaleManager.prototype.forceOrientation = function (forceLandscape, forcePortrait) {
                if (forcePortrait === undefined) {
                    forcePortrait = false;
                }
                this.forceLandscape = forceLandscape;
                this.forcePortrait = forcePortrait;
                this.queueUpdate(true);
            };
            ScaleManager.prototype.resetCanvas = function (cssWidth, cssHeight) {
                if (cssWidth === undefined) {
                    cssWidth = this.width + "px";
                }
                if (cssHeight === undefined) {
                    cssHeight = this.height + "px";
                }
                var canvas = this.game.canvas;
                if (!this.compatibility.noMargins) {
                    canvas.style.marginLeft = "";
                    canvas.style.marginTop = "";
                    canvas.style.marginRight = "";
                    canvas.style.marginBottom = "";
                }
                if (this.game.config.useCSSDimensions) {
                    canvas.style.width = cssWidth;
                    canvas.style.height = cssHeight;
                }
            };
            ScaleManager.prototype.updateLayout = function () {
                var scaleMode = this.currentScaleMode;
                if (scaleMode === ScaleManager.RESIZE) {
                    this.reflowGame();
                    return;
                }
                this.scrollTop();
                if (this.compatibility.forceMinimumDocumentHeight) {
                    document.documentElement.style.minHeight = window.innerHeight + "px";
                }
                if (this.incorrectOrientation) {
                    this.setMaximum();
                }
                else {
                    if (scaleMode === ScaleManager.EXACT_FIT) {
                        this.setExactFit();
                    }
                    else if (scaleMode === ScaleManager.SHOW_ALL) {
                        if (!this.isFullScreen && this.boundingParent &&
                            this.compatibility.canExpandParent) {
                            this.setShowAll(true);
                            this.resetCanvas();
                            this.setShowAll();
                        }
                        else {
                            this.setShowAll();
                        }
                    }
                    else if (scaleMode === ScaleManager.NO_SCALE) {
                        this.width = this.game.width;
                        this.height = this.game.height;
                    }
                    else if (scaleMode === ScaleManager.USER_SCALE) {
                        this.width = (this.game.width * this._userScaleFactor.x) - this._userScaleTrim.x;
                        this.height = (this.game.height * this._userScaleFactor.y) - this._userScaleTrim.y;
                    }
                }
                if (!this.compatibility.canExpandParent &&
                    (scaleMode === ScaleManager.SHOW_ALL || scaleMode === ScaleManager.USER_SCALE)) {
                    var bounds = this.getParentBounds(this._tempBounds);
                    this.width = Math.min(this.width, bounds.width);
                    this.height = Math.min(this.height, bounds.height);
                }
                this.width = this.width | 0;
                this.height = this.height | 0;
                this.reflowCanvas();
            };
            ScaleManager.prototype.reflowGame = function () {
                this.resetCanvas("", "");
                var bounds = this.getParentBounds(this._tempBounds);
                this.updateDimensions(bounds.width, bounds.height, true);
            };
            ScaleManager.prototype.scrollTop = function () {
                var scrollTo = this.compatibility.scrollTo;
                if (scrollTo && this.game.config.useWindowScrollTo === true) {
                    window.scrollTo(scrollTo.x, scrollTo.y);
                }
            };
            ScaleManager.prototype.refresh = function () {
                this.scrollTop();
                this.queueUpdate(true);
            };
            ScaleManager.prototype.setMaximum = function () {
                this.width = bridge.DOM.visualBounds.width;
                this.height = bridge.DOM.visualBounds.height;
            };
            ScaleManager.prototype.setExactFit = function () {
                var bounds = this.getParentBounds(this._tempBounds);
                this.width = bounds.width;
                this.height = bounds.height;
                if (this.isFullScreen) {
                    return;
                }
                if (this.maxWidth) {
                    this.width = Math.min(this.width, this.maxWidth);
                }
                if (this.maxHeight) {
                    this.height = Math.min(this.height, this.maxHeight);
                }
            };
            ScaleManager.prototype.setShowAll = function (expanding) {
                var bounds = this.getParentBounds(this._tempBounds);
                var width = bounds.width;
                var height = bounds.height;
                var multiplier;
                if (expanding) {
                    multiplier = Math.max((height / this.game.height), (width / this.game.width));
                }
                else {
                    multiplier = Math.min((height / this.game.height), (width / this.game.width));
                }
                this.width = Math.round(this.game.width * multiplier);
                this.height = Math.round(this.game.height * multiplier);
            };
            ScaleManager.prototype.reflowCanvas = function () {
                if (!this.incorrectOrientation) {
                    this.width = bridge.Maths.clamp(this.width, this.minWidth || 0, this.maxWidth || this.width);
                    this.height = bridge.Maths.clamp(this.height, this.minHeight || 0, this.maxHeight || this.height);
                }
                this.resetCanvas();
                if (!this.compatibility.noMargins) {
                    if (this.isFullScreen && this._createdFullScreenTarget) {
                        this.alignCanvas(true, true);
                    }
                    else {
                        this.alignCanvas(this.pageAlignHorizontally, this.pageAlignVertically);
                    }
                }
                this.updateScalingAndBounds();
            };
            ScaleManager.prototype.alignCanvas = function (horizontal, vertical) {
                var parentBounds = this.getParentBounds(this._tempBounds);
                var canvas = this.game.canvas;
                var margin = this.margin;
                if (horizontal) {
                    margin.left = margin.right = 0;
                    var canvasBounds = canvas.getBoundingClientRect();
                    if (this.width < parentBounds.width && !this.incorrectOrientation) {
                        var currentEdge = canvasBounds.left - parentBounds.x;
                        var targetEdge = (parentBounds.width / 2) - (this.width / 2);
                        targetEdge = Math.max(targetEdge, 0);
                        var offset = targetEdge - currentEdge;
                        margin.left = Math.round(offset);
                    }
                    canvas.style.marginLeft = margin.left + "px";
                    if (margin.left !== 0) {
                        margin.right = -(parentBounds.width - canvasBounds.width - margin.left);
                        canvas.style.marginRight = margin.right + "px";
                    }
                }
                if (vertical) {
                    margin.top = margin.bottom = 0;
                    var canvasBounds = canvas.getBoundingClientRect();
                    if (this.height < parentBounds.height && !this.incorrectOrientation) {
                        var currentEdge = canvasBounds.top - parentBounds.y;
                        var targetEdge = (parentBounds.height / 2) - (this.height / 2);
                        targetEdge = Math.max(targetEdge, 0);
                        var offset = targetEdge - currentEdge;
                        margin.top = Math.round(offset);
                    }
                    canvas.style.marginTop = margin.top + "px";
                    if (margin.top !== 0) {
                        margin.bottom = -(parentBounds.height - canvasBounds.height - margin.top);
                        canvas.style.marginBottom = margin.bottom + "px";
                    }
                }
                margin.x = margin.left;
                margin.y = margin.top;
            };
            ScaleManager.prototype.createFullScreenTarget = function () {
                var fsTarget = document.createElement("div");
                fsTarget.style.margin = "0";
                fsTarget.style.padding = "0";
                fsTarget.style.background = "#000";
                return fsTarget;
            };
            ScaleManager.prototype.startFullScreen = function (antialias, allowTrampoline) {
                if (this.isFullScreen) {
                    return false;
                }
                if (!this.compatibility.supportsFullScreen) {
                    var _this_3 = this;
                    setTimeout(function () {
                        _this_3.fullScreenError();
                    }, 10);
                    return;
                }
                if (this.compatibility.clickTrampoline === "when-not-mouse") {
                }
                if (typeof antialias !== "undefined" && this.game.renderType === bridge.CANVAS) {
                    this.game.stage.smoothed = antialias;
                }
                var fsTarget = this.fullScreenTarget;
                if (!fsTarget) {
                    this.cleanupCreatedTarget();
                    this._createdFullScreenTarget = this.createFullScreenTarget();
                    fsTarget = this._createdFullScreenTarget;
                }
                var initData = {
                    targetElement: fsTarget
                };
                this.onFullScreenInit.dispatch(this, initData);
                if (this._createdFullScreenTarget) {
                    var canvas = this.game.canvas;
                    var parent_2 = canvas.parentNode;
                    parent_2.insertBefore(fsTarget, canvas);
                    fsTarget.appendChild(canvas);
                }
                if (this.game.device.fullscreenKeyboard) {
                }
                else {
                }
                return true;
            };
            ScaleManager.prototype.stopFullScreen = function () {
                if (!this.isFullScreen || !this.compatibility.supportsFullScreen) {
                    return false;
                }
                document[this.game.device.cancelFullscreen]();
                return true;
            };
            ScaleManager.prototype.scaleSprite = function (sprite, width, height, letterBox) {
                if (width === undefined) {
                    width = this.width;
                }
                if (height === undefined) {
                    height = this.height;
                }
                if (letterBox === undefined) {
                    letterBox = false;
                }
                if (!sprite || !sprite["scale"]) {
                    return sprite;
                }
                sprite.scale.x = 1;
                sprite.scale.y = 1;
                if ((sprite.width <= 0) || (sprite.height <= 0) || (width <= 0) || (height <= 0)) {
                    return sprite;
                }
                var scaleX1 = width;
                var scaleY1 = (sprite.height * width) / sprite.width;
                var scaleX2 = (sprite.width * height) / sprite.height;
                var scaleY2 = height;
                var scaleOnWidth = (scaleX2 > width);
                if (scaleOnWidth) {
                    scaleOnWidth = letterBox;
                }
                else {
                    scaleOnWidth = !letterBox;
                }
                if (scaleOnWidth) {
                    sprite.width = Math.floor(scaleX1);
                    sprite.height = Math.floor(scaleY1);
                }
                else {
                    sprite.width = Math.floor(scaleX2);
                    sprite.height = Math.floor(scaleY2);
                }
                return sprite;
            };
            ScaleManager.prototype.destroy = function () {
                this.game.onResume.remove(this._gameResumed, this);
                window.removeEventListener("orientationchange", this._orientationChange, false);
                window.removeEventListener("resize", this._windowResize, false);
                if (this.compatibility.supportsFullScreen) {
                    document.removeEventListener("webkitfullscreenchange", this._fullScreenChange, false);
                    document.removeEventListener("mozfullscreenchange", this._fullScreenChange, false);
                    document.removeEventListener("MSFullscreenChange", this._fullScreenChange, false);
                    document.removeEventListener("fullscreenchange", this._fullScreenChange, false);
                    document.removeEventListener("webkitfullscreenerror", this._fullScreenError, false);
                    document.removeEventListener("mozfullscreenerror", this._fullScreenError, false);
                    document.removeEventListener("MSFullscreenError", this._fullScreenError, false);
                    document.removeEventListener("fullscreenerror", this._fullScreenError, false);
                }
            };
            ScaleManager.EXACT_FIT = 0;
            ScaleManager.NO_SCALE = 1;
            ScaleManager.SHOW_ALL = 2;
            ScaleManager.RESIZE = 3;
            ScaleManager.USER_SCALE = 4;
            ScaleManager.MODES = [
                "EXACT_FIT",
                "NO_SCALE",
                "SHOW_ALL",
                "RESIZE",
                "USER_SCALE"
            ];
            return ScaleManager;
        }());
        bridge.ScaleManager = ScaleManager;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SimpleRopeTexture = (function () {
            function SimpleRopeTexture(lineTexture, points) {
                this.initialPoints = [];
                this.animate = true;
                this.movementStep = 0;
                this.animationFrame = 0;
                for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                    var point = points_1[_i];
                    this.initialPoints.push(point.clone());
                }
                this.stripPoints = points;
                this.applyNewPosition();
                this._strip = new bridge.ESimpleRope(lineTexture, this.stripPoints);
            }
            SimpleRopeTexture.prototype.animateStrip = function () {
                PIXI.ticker.shared.add(this.animationStep, this);
            };
            SimpleRopeTexture.prototype.resumeAnimation = function () {
                this.animate = true;
            };
            SimpleRopeTexture.prototype.pauseAnimation = function () {
                this.animate = false;
            };
            SimpleRopeTexture.prototype.applyNewPosition = function () {
                for (var i = 1; i < this.stripPoints.length - 1; i++) {
                    this.stripPoints[i].y = this.initialPoints[i].y + Math.sin((i * 0.5) + this.movementStep) * 5;
                }
            };
            SimpleRopeTexture.prototype.animationStep = function () {
                var startAnimationAfter = 24;
                var updateOnEveryNFrame = 4;
                if (!this.animate) {
                    return;
                }
                this.animationFrame++;
                if (this.animationFrame < startAnimationAfter || this.animationFrame % updateOnEveryNFrame !== 0) {
                    return;
                }
                this.movementStep += 0.06;
                this.applyNewPosition();
            };
            SimpleRopeTexture.prototype.lineXLength = function () {
                return Math.abs(this.stripPoints[this.stripPoints.length - 1].x - this.stripPoints[0].x);
            };
            Object.defineProperty(SimpleRopeTexture.prototype, "strip", {
                get: function () {
                    return this._strip;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SimpleRopeTexture.prototype, "points", {
                get: function () {
                    return this.stripPoints;
                },
                enumerable: true,
                configurable: true
            });
            SimpleRopeTexture.prototype.destroy = function () {
                PIXI.ticker.shared.remove(this.animateStrip, this);
                this._strip.destroy();
                this._strip.mask = null;
                this._strip = null;
                this.animate = false;
                for (var i = 0; i < this.stripPoints.length; i++) {
                    this.stripPoints[i] = null;
                    this.initialPoints[i] = null;
                }
                this.stripPoints = [];
                this.initialPoints = [];
            };
            return SimpleRopeTexture;
        }());
        bridge.SimpleRopeTexture = SimpleRopeTexture;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Sound = (function () {
            function Sound(howl, key) {
                this._volume = 1;
                this._muted = false;
                this._loop = false;
                this._rate = 1;
                this.howl = howl;
                this.key = key;
                this._volume = 1;
                this.onMarkerComplete = new bridge.Signal();
                this.onLoop = new bridge.Signal();
            }
            Object.defineProperty(Sound.prototype, "volume", {
                get: function () {
                    return this._volume;
                },
                set: function (value) {
                    if (this.playid) {
                        this.howl.volume(value, this.playid);
                    }
                    this._volume = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sound.prototype, "muted", {
                get: function () {
                    return this._muted;
                },
                set: function (value) {
                    this.playid && this.howl.mute(value, this.playid);
                    this._muted = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sound.prototype, "mute", {
                get: function () {
                    return this.muted;
                },
                set: function (value) {
                    this.muted = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sound.prototype, "soundPlaying", {
                get: function () {
                    if (this.playid) {
                        return this.howl.playing(this.playid);
                    }
                    else {
                        return false;
                    }
                },
                set: function (value) {
                    if (value) {
                        this.play();
                    }
                    else {
                        this.pause();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sound.prototype, "loop", {
                get: function () {
                    return this._loop;
                },
                set: function (value) {
                    if (this.playid) {
                        this.howl.loop(value, this.playid);
                    }
                    this._loop = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sound.prototype, "rate", {
                get: function () {
                    return this._rate;
                },
                set: function (value) {
                    if (this.playid) {
                        this.howl.rate(value, this.playid);
                    }
                    this._rate = value;
                },
                enumerable: true,
                configurable: true
            });
            Sound.prototype.play = function (loop) {
                if (this.playid) {
                    if (this.soundPlaying) {
                        this.howl.seek(0, this.playid);
                    }
                    else {
                        this.playid = this.howl.play(this.playid);
                    }
                }
                else {
                    this.playid = this.howl.play(this.key);
                    if (loop !== undefined) {
                        this._loop = loop;
                    }
                    else {
                        this._loop = this._loop;
                    }
                }
                this.howl.off("end", undefined, this.playid);
                this.howl.on("end", this.onSoundEnd.bind(this), this.playid);
                return this;
            };
            Sound.prototype.onSoundEnd = function (soundId) {
                if (this.loop) {
                    this.onLoop.dispatch(this);
                }
                else {
                    this.onMarkerComplete.dispatch(this);
                    this.playid = undefined;
                }
            };
            Sound.prototype.pause = function () {
                if (this.playid) {
                    this.howl.pause(this.playid);
                }
                return this;
            };
            Sound.prototype.stop = function () {
                if (this.playid) {
                    this.howl.stop(this.playid);
                    this.playid = undefined;
                }
                return this;
            };
            Sound.prototype.fade = function (toVolume, duration, tocallback) {
                if (this.playid) {
                    if (duration === undefined) {
                        duration = 0;
                    }
                    this.howl.fade(this._volume, this.mute ? 0 : toVolume, duration, this.playid);
                    if (tocallback !== undefined) {
                        this.howl.once("fade", tocallback, this.playid);
                    }
                    this._volume = toVolume;
                }
                else {
                    this._volume = toVolume;
                    console.warn("Sound with key - {this._key} is not p1111laying! You should not use fade", this);
                }
                return this;
            };
            return Sound;
        }());
        bridge.Sound = Sound;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SoundGroup = (function () {
            function SoundGroup() {
                this.sounds = new Array();
            }
            SoundGroup.prototype.add = function (sound) {
                this.sounds.push(sound);
                return this;
            };
            SoundGroup.prototype.muteGroup = function () {
                for (var _i = 0, _a = this.sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.muted = true;
                }
                return this;
            };
            SoundGroup.prototype.unmuteGroup = function () {
                for (var _i = 0, _a = this.sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.muted = false;
                }
                return this;
            };
            SoundGroup.prototype.stopGroup = function () {
                for (var _i = 0, _a = this.sounds; _i < _a.length; _i++) {
                    var sound = _a[_i];
                    sound.stop();
                }
                return this;
            };
            return SoundGroup;
        }());
        bridge.SoundGroup = SoundGroup;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SoundManager = (function () {
            function SoundManager(game) {
                this.noAudio = false;
                this.touchLocked = false;
                this.usingWebAudio = false;
                this.usingAudioTag = false;
                this.channels = 32;
                this.onLoadComplete = new bridge.Signal();
                this.onLoadError = new bridge.Signal();
                this._sounds = {};
                this._groups = {};
                this._enabled = true;
                this._muted = false;
                this._unlockSource = null;
                this.onTouchUnlock = new bridge.Signal();
                this.allowMultiple = false;
                this.game = game;
                this._howls = {};
                this._pausedSounds = new Array();
            }
            Object.defineProperty(SoundManager.prototype, "enabled", {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    this._enabled = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SoundManager.prototype, "muted", {
                get: function () {
                    return this._muted;
                },
                set: function (value) {
                    for (var sid in this._howls) {
                        if (this._howls.hasOwnProperty(sid)) {
                            if (this._howls[sid]) {
                                for (var asid in this._howls[sid].sounds) {
                                    if (this._howls[sid].sounds.hasOwnProperty(asid)) {
                                        this._howls[sid].sounds[asid].muted = value;
                                    }
                                }
                            }
                        }
                    }
                    this._muted = value;
                },
                enumerable: true,
                configurable: true
            });
            SoundManager.prototype.add = function (sound, key) {
                var _this_1 = this;
                this._sounds = [];
                var howl = null;
                if (typeof sound === "string") {
                    howl = new Howl({
                        src: [sound]
                    });
                    this._howls[key] = {};
                    this._howls[key].sprite = howl;
                    var soundId = sound.substr(0, sound.lastIndexOf(".") + 1);
                    this._sounds[soundId] = (new bridge.Sound(howl, soundId));
                }
                else if (Array.isArray(sound)) {
                    howl = new Howl({
                        src: sound
                    });
                    this._howls[key] = {};
                    this._howls[key].sprite = howl;
                    var soundId = sound[0].substr(0, sound.lastIndexOf(".") + 1);
                    this._sounds[soundId] = (new bridge.Sound(howl, soundId));
                }
                else if (typeof sound === "object") {
                    var src = sound.urls;
                    var sprites = sound.sprite;
                    howl = new Howl({
                        src: src,
                        sprite: sprites
                    });
                    this._howls[key] = {};
                    this._howls[key].sprite = howl;
                    if (!this.defaultKey) {
                        this.defaultKey = key;
                    }
                    for (var frame in sprites) {
                        var hs = new bridge.Sound(howl, frame);
                        this._sounds[frame] = hs;
                    }
                    this._howls[key].sounds = this._sounds;
                }
                howl && howl.once("load", function (id, msg) {
                    _this_1.onLoadComplete.dispatch(howl, id, msg);
                });
                howl && howl.once("loaderror", function (id, msg) {
                    _this_1.onLoadError.dispatch(howl, id, msg);
                });
                return this;
            };
            SoundManager.prototype.play = function (soundId, volume, loop, key) {
                if (key === void 0) { key = this.defaultKey; }
                var currentSound = this.getSoundByKey(soundId, key);
                currentSound.play(loop);
                (typeof volume === "number") && (currentSound.volume = volume);
                (typeof loop === "boolean") && (currentSound.loop = loop);
                return currentSound;
            };
            SoundManager.prototype.pause = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).pause();
            };
            SoundManager.prototype.resume = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).play();
            };
            SoundManager.prototype.isSoundPlaying = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                return this.getSoundByKey(soundId, key).soundPlaying;
            };
            SoundManager.prototype.stop = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).stop();
            };
            SoundManager.prototype.muteSound = function (value, soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).muted = value;
            };
            SoundManager.prototype.unmuteSound = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).muted = false;
            };
            SoundManager.prototype.setRate = function (value, soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                this.getSoundByKey(soundId, key).rate = value;
            };
            SoundManager.prototype.getRate = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                return this.getSoundByKey(soundId, key).rate;
            };
            SoundManager.prototype.isSoundMuted = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                return this.getSoundByKey(soundId, key).muted;
            };
            SoundManager.prototype.addSprite = function (sound) {
                return this;
            };
            SoundManager.prototype.getSoundByKey = function (soundId, key) {
                if (key === void 0) { key = this.defaultKey; }
                if (!this.enabled) {
                    return;
                }
                if (soundId in this._howls[key].sounds) {
                    return this._howls[key].sounds[soundId];
                }
                else {
                    return undefined;
                }
            };
            SoundManager.prototype.addGroup = function (groupId) {
                if (!(groupId in this._groups)) {
                    this._groups[groupId] = new bridge.SoundGroup();
                }
                return this._groups[groupId];
            };
            SoundManager.prototype.getGroup = function (groupId) {
                if (!this.enabled) {
                    return;
                }
                if (groupId in this._groups) {
                    return this._groups[groupId];
                }
                else {
                    return undefined;
                }
            };
            SoundManager.prototype.pauseAllSounds = function () {
                if (!this.enabled) {
                    return;
                }
                for (var sid in this._howls) {
                    if (this._howls.hasOwnProperty(sid)) {
                        if (this._howls[sid]) {
                            for (var asid in this._howls[sid].sounds) {
                                if (this._howls[sid].sounds.hasOwnProperty(asid)) {
                                    if (this._howls[sid].sounds[asid].soundPlaying) {
                                        this._howls[sid].sounds[asid].pause();
                                        this._pausedSounds.push(this._howls[sid].sounds[asid]);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            SoundManager.prototype.resumeAllSounds = function () {
                if (!this.enabled) {
                    return;
                }
                for (var _i = 0, _a = this._pausedSounds; _i < _a.length; _i++) {
                    var currentSound = _a[_i];
                    currentSound.play();
                }
                this._pausedSounds.length = 0;
            };
            SoundManager.prototype.stopAllSounds = function () {
                if (!this.enabled) {
                    return;
                }
                for (var sid in this._howls) {
                    if (this._howls.hasOwnProperty(sid)) {
                        if (this._howls[sid]) {
                            for (var asid in this._howls[sid].sounds) {
                                if (this._howls[sid].hasOwnProperty(asid)) {
                                    this._howls[sid].sounds[asid].stop();
                                }
                            }
                        }
                    }
                }
            };
            SoundManager.prototype.setMasterVolume = function (volume) {
                if (!this.enabled) {
                    return this;
                }
                Howler.volume(volume);
                return this;
            };
            SoundManager.prototype.getMasterVolume = function () {
                return Howler.volume();
            };
            Object.defineProperty(SoundManager.prototype, "volume", {
                get: function () {
                    return Howler.volume();
                },
                set: function (val) {
                    Howler.volume(val);
                },
                enumerable: true,
                configurable: true
            });
            SoundManager.prototype.destroy = function (key) {
                Howler.unload();
                delete this._howls[key];
            };
            SoundManager.prototype.boot = function () {
                var device = this.game.device;
                if (!this.noAudio) {
                    if (device.needsTouchUnlock()) {
                        this.setTouchLock();
                    }
                }
            };
            SoundManager.prototype.setTouchLock = function () {
                if (this.noAudio) {
                    return;
                }
                this.game.input.touch.addTouchLockCallback(this.unlock, this, true);
                this.touchLocked = true;
            };
            SoundManager.prototype.unlock = function () {
                if (this.noAudio || !this.touchLocked || this._unlockSource !== null) {
                    return true;
                }
                if (this.usingAudioTag) {
                    this.setTouchUnlock();
                }
                else if (this.usingWebAudio) {
                    var buffer = this.context.createBuffer(1, 1, 22050);
                    this._unlockSource = this.context.createBufferSource();
                    this._unlockSource.buffer = buffer;
                    this._unlockSource.connect(this.context.destination);
                    var _this_4 = this;
                    this._unlockSource.onended = function unlockSourceOnEndedHandler() {
                        _this_4.setTouchUnlock();
                        _this_4.resumeWebAudio();
                    };
                    if (this._unlockSource.start === undefined) {
                        this._unlockSource.noteOn(0);
                    }
                    else {
                        this._unlockSource.start(0);
                    }
                    this.resumeWebAudio();
                }
                return true;
            };
            SoundManager.prototype.setTouchUnlock = function () {
                this.touchLocked = false;
                this._unlockSource = null;
                this.onTouchUnlock.dispatch();
            };
            SoundManager.prototype.resumeWebAudio = function () {
                if (this.usingWebAudio && this.context.state === "suspended") {
                    return this.context.resume();
                }
            };
            return SoundManager;
        }());
        bridge.SoundManager = SoundManager;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        ingenuity.byPassMissingPluginError("PIXI.spine.Spine");
        var Spine = (function (_super) {
            __extends(Spine, _super);
            function Spine(game, x, y, key, premultipliedAlpha) {
                var _this = _super.call(this, Spine.fetchSpineData(game, key)) || this;
                _this.anchor = new bridge.Point(0, 0);
                _this.input = null;
                _this.onInputOver = new bridge.Signal();
                _this.onInputOut = new bridge.Signal();
                _this.onInputDown = new bridge.Signal();
                _this.onInputUp = new bridge.Signal();
                _this.game = game;
                _this.x = x || 0;
                _this.y = y || 0;
                var currentContext = _this;
                var _self = _this;
                _this.anchor.set = function (x, y) {
                    if (x > 1 || y > 1) {
                        currentContext.setPivot(x, y);
                    }
                    else {
                        currentContext.anchor.x = x;
                        currentContext.anchor.y = y;
                        var setter_x = x * currentContext.width;
                        var setter_y = (y === undefined) ? x * currentContext.height : y * currentContext.height;
                        currentContext.setPivot(setter_x, setter_y);
                    }
                    return _self.anchor;
                };
                _this.events = new bridge.Events(_this);
                _this.onEvent = new bridge.Signal();
                _this.onComplete = new bridge.Signal();
                _this.onEnd = new bridge.Signal();
                _this.onInterrupt = new bridge.Signal();
                _this.onStart = new bridge.Signal();
                _this.onDispose = new bridge.Signal();
                _this.state.addListener({
                    interrupt: _this.onInterrupt.dispatch.bind(_this.onInterrupt),
                    dispose: _this.onDispose.dispatch.bind(_this.onDispose),
                    event: _this.onEvent.dispatch.bind(_this.onEvent),
                    complete: _this.onComplete.dispatch.bind(_this.onComplete),
                    start: _this.onStart.dispatch.bind(_this.onStart),
                    end: _this.onEnd.dispatch.bind(_this.onEnd)
                });
                return _this;
            }
            Object.defineProperty(Spine.prototype, "angle", {
                get: function () {
                    return bridge.radToDeg(this.angle);
                },
                set: function (angle) {
                    this.rotation = bridge.degToRad(angle);
                },
                enumerable: true,
                configurable: true
            });
            Spine.prototype.setPivot = function (x, y) {
                this.pivot.x = x;
                this.pivot.y = y;
            };
            Spine.fetchSpineData = function (game, key) {
                var rawSpineData = game.cache.getSpine(key);
                var rawSpineJsonData = rawSpineData.json;
                var rawAtlasData = rawSpineData.atlas;
                var rawImageData = rawSpineData.images;
                var spineAtlas = new PIXI.spine.core.TextureAtlas(rawAtlasData, function (line, callback) {
                    callback(rawImageData.base);
                });
                var spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(spineAtlas);
                var spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);
                var spineData = spineJsonParser.readSkeletonData(rawSpineJsonData);
                return spineData;
            };
            Spine.prototype.setAnimationByName = function (trackIndex, animationName, loop) {
                this.state.timeScale = 1;
                return this.state.setAnimation(trackIndex, animationName, loop);
            };
            Spine.prototype.setToSetupPose = function () {
                this.skeleton.setSlotsToSetupPose();
            };
            Object.defineProperty(Spine.prototype, "inputEnabled", {
                get: function () {
                    return !!(this.input && this.input.enabled);
                },
                set: function (value) {
                    if (value) {
                        if (this.input === null) {
                            this.input = new bridge.InputHandler(this);
                            this.input.start();
                        }
                        else if (this.input && !this.input.enabled) {
                            this.input.start();
                        }
                    }
                    else {
                        if (this.input && this.input.enabled) {
                            this.input.stop();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            return Spine;
        }(PIXI.spine.Spine));
        bridge.Spine = Spine;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Spritesheet = (function (_super) {
            __extends(Spritesheet, _super);
            function Spritesheet(baseTexture, data, resolutionFilename) {
                var _this = _super.call(this, baseTexture, data, resolutionFilename) || this;
                var frameNames = [];
                for (var frameId in data.frames) {
                    if (Number(frameId) >= 0) {
                        frameNames.push(data.frames[frameId].filename);
                    }
                    else {
                        frameNames.push(frameId);
                    }
                }
                _this.frameKeysNames = frameNames;
                return _this;
            }
            Spritesheet.prototype._processFrames = function (initialFrameIndex) {
                var frameIndex = initialFrameIndex;
                var maxFrames = Spritesheet.BATCH_SIZE;
                var sourceScale = 1;
                while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length) {
                    var i = this._frameKeys[frameIndex];
                    var frameStr = this.frameKeysNames[frameIndex];
                    var data = this._frames[i];
                    var rect = data.frame;
                    if (rect) {
                        var frame = null;
                        var trim = null;
                        var sourceSize = data.trimmed !== false && data.sourceSize ? data.sourceSize : data.frame;
                        var orig = new bridge.Rectangle(0, 0, Math.floor(sourceSize.w * sourceScale) / this.resolution, Math.floor(sourceSize.h * sourceScale) / this.resolution);
                        if (data.rotated) {
                            frame = new bridge.Rectangle(Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution);
                        }
                        else {
                            frame = new bridge.Rectangle(Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
                        }
                        if (data.trimmed !== false && data.spriteSourceSize) {
                            trim = new bridge.Rectangle(Math.floor(data.spriteSourceSize.x * sourceScale) / this.resolution, Math.floor(data.spriteSourceSize.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
                        }
                        this.textures[i] = new bridge.ETexture(this.baseTexture, frame, orig, trim, data.rotated ? 2 : 0, data.anchor);
                        bridge.Texture.addToCache(this.textures[i], frameStr);
                    }
                    frameIndex++;
                }
            };
            return Spritesheet;
        }(bridge.ESpritesheet));
        bridge.Spritesheet = Spritesheet;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Stage = (function () {
            function Stage(game) {
                this.hiddenVar = "hidden";
                this._isPaused = false;
                this.game = game;
            }
            Object.defineProperty(Stage.prototype, "disableVisibilityChange", {
                get: function () {
                    return this.game.stage.disableVisibilityChange;
                },
                enumerable: true,
                configurable: true
            });
            Stage.prototype.boot = function () {
                this.checkVisibility();
                this.game.onPause.add(this.onPause, this);
                this.game.onResume.add(this.onResume, this);
            };
            Stage.prototype.onPause = function () {
                this._isPaused = true;
            };
            Stage.prototype.onResume = function () {
                this._isPaused = false;
            };
            Stage.prototype.add = function () {
            };
            Stage.prototype.preUpdate = function () {
            };
            Stage.prototype.update = function () {
                if (this._isPaused) {
                    return;
                }
                var i = this.game.stage.children.length;
                while (i--) {
                    if (this.game.stage.children[i] instanceof bridge.Container) {
                        this.game.stage.children[i].update();
                    }
                }
            };
            Stage.prototype.render = function () {
                var i = this.game.stage.children.length;
                while (i--) {
                    this.game.stage.children[i].render();
                }
            };
            Stage.prototype.postUpdate = function () {
            };
            Stage.prototype.updateTransform = function () {
            };
            Stage.prototype.checkVisibility = function () {
                if (document.hidden !== undefined) {
                    this.hiddenVar = "visibilitychange";
                }
                else {
                    this.hiddenVar = null;
                }
                if (this.hiddenVar) {
                    document.addEventListener(this.hiddenVar, this.onChange.bind(this), false);
                }
                window.onblur = this.onChange.bind(this);
                window.onfocus = this.onChange.bind(this);
                window.onpagehide = this.onChange.bind(this);
                window.onpageshow = this.onChange.bind(this);
                window.addEventListener("click", this.onClick.bind(this));
            };
            Stage.prototype.destroy = function () {
                if (this.hiddenVar) {
                    document.removeEventListener(this.hiddenVar, this.onChange.bind(this), false);
                }
                window.onpagehide = null;
                window.onpageshow = null;
                window.onblur = null;
                window.onfocus = null;
                window.removeEventListener("click", this.onClick.bind(this));
            };
            Stage.prototype.visibilityChange = function (event) {
                switch (event.type) {
                    case "blur":
                    case "pagehide":
                        return;
                    case "click":
                    case "focus":
                    case "pageshow":
                        this.game.focusGain(event);
                        return;
                }
                if (this.disableVisibilityChange) {
                    return;
                }
                if (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden || event.type === "pause") {
                    this.game.gamePaused(event);
                }
                else {
                    this.game.gameResumed(event);
                }
            };
            Stage.prototype.onChange = function (event) {
                return this.visibilityChange(event);
            };
            Stage.prototype.onClick = function (event) {
                if ((document.hasFocus !== undefined) && !document.hasFocus()) {
                    this.visibilityChange(event);
                }
            };
            return Stage;
        }());
        bridge.Stage = Stage;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        ingenuity.byPassMissingPluginError("PIXI.TextInput");
        ingenuity.byPassMissingPluginError("ingenuity.bridge.ETextInput");
        var TextInput = (function (_super) {
            __extends(TextInput, _super);
            function TextInput(json) {
                var _this = _super.call(this, json.style) || this;
                _this.placeholder = json.placeholder || "";
                _this.x = json.x || 0;
                _this.y = json.y || 0;
                _this.pivot.x = json.regX || 0;
                _this.pivot.y = json.regY || 0;
                _this.name = json.id;
                return _this;
            }
            return TextInput;
        }(bridge.ETextInput));
        bridge.TextInput = TextInput;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Texture = (function (_super) {
            __extends(Texture, _super);
            function Texture(baseTexture, frame, crop, trim) {
                var _this = _super.call(this, baseTexture, frame, undefined, trim, undefined, undefined) || this;
                _this.noFrame = false;
                _this.valid = false;
                _this.isTiling = false;
                _this.requiresUpdate = false;
                _this.requiresReTint = false;
                _this.crop = crop || new bridge.Rectangle(0, 0, 1, 1);
                return _this;
            }
            Object.defineProperty(Texture.prototype, "width", {
                set: function (val) {
                    this.orig.width = val || 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Texture.prototype, "height", {
                set: function (val) {
                    this.orig.height = val || 0;
                },
                enumerable: true,
                configurable: true
            });
            Texture.fromCanvas = function (canvas, scaleMode) {
                var baseTexture = Texture.fromCanvas(canvas, scaleMode);
                return new Texture(baseTexture);
            };
            Texture.prototype.onBaseTextureLoaded = function () {
                var baseTexture = this.baseTexture;
                if (this.noFrame) {
                    this.frame = new bridge.Rectangle(0, 0, baseTexture.width, baseTexture.height);
                }
                this.setFrame(this.frame);
                this.baseTexture.on("update", this.onBaseTextureUpdated, this);
                this.emit("update", this);
            };
            Texture.prototype.destroy = function (destroyBase) {
                if (destroyBase) {
                    this.baseTexture.destroy();
                }
                this.valid = false;
            };
            Texture.prototype.setFrame = function (frame) {
                this.noFrame = false;
                this.frame = frame;
                this.width = frame.width;
                this.height = frame.height;
                this.crop.x = frame.x;
                this.crop.y = frame.y;
                this.crop.width = frame.width;
                this.crop.height = frame.height;
                if (!this.trim && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height)) {
                    if (!Texture.TextureSilentFail) {
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                    }
                    this.valid = false;
                    return;
                }
                this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;
                if (this.trim) {
                    this.width = this.trim.width;
                    this.height = this.trim.height;
                    this.frame.width = this.trim.width;
                    this.frame.height = this.trim.height;
                }
                if (!this.trim && !this.rotate) {
                    this.orig = frame;
                    this.orig.x = 0;
                    this.orig.y = 0;
                }
                if (this.valid) {
                    this.updateUvs();
                }
            };
            Texture.TextureSilentFail = false;
            return Texture;
        }(bridge.ETexture));
        bridge.Texture = Texture;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Tilemap = (function () {
            function Tilemap() {
            }
            Tilemap.CSV = 0;
            Tilemap.TILED_JSON = 1;
            Tilemap.NORTH = 0;
            Tilemap.EAST = 1;
            Tilemap.SOUTH = 2;
            Tilemap.WEST = 3;
            return Tilemap;
        }());
        bridge.Tilemap = Tilemap;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Touch = (function () {
            function Touch(game) {
                this.touchLockCallbacks = [];
                this.preventDefault = false;
                this.enabled = true;
                this._onTouchStart = null;
                this._onTouchEnd = null;
                this._onTouchMove = null;
                this._onTouchEnter = null;
                this._onTouchLeave = null;
                this._onTouchCancel = null;
                this.touchMoveCallback = null;
                this.touchEnterCallback = null;
                this.touchLeaveCallback = null;
                this.touchCancelCallback = null;
                this.active = false;
                this.event = null;
                this.game = game;
                this.callbackContext = this.game;
            }
            Touch.prototype.start = function () {
                if (this._onTouchStart !== null) {
                    return;
                }
                var _this = this;
                if (this.game.device.touch) {
                    this._onTouchStart = function (event) {
                        return _this.onTouchStart(event);
                    };
                    this._onTouchEnd = function (event) {
                        return _this.onTouchEnd(event);
                    };
                    this._onTouchMove = function (event) {
                        return _this.onTouchMove(event);
                    };
                    this._onTouchEnter = function (event) {
                        return _this.onTouchEnter(event);
                    };
                    this._onTouchLeave = function (event) {
                        return _this.onTouchLeave(event);
                    };
                    this._onTouchCancel = function (event) {
                        return _this.onTouchCancel(event);
                    };
                    this.game.canvas.addEventListener("touchstart", this._onTouchStart, false);
                    this.game.canvas.addEventListener("touchend", this._onTouchEnd, false);
                    this.game.canvas.addEventListener("touchmove", this._onTouchMove, false);
                    this.game.canvas.addEventListener("touchcancel", this._onTouchCancel, false);
                    this.active = true;
                }
            };
            Touch.prototype.addTouchLockCallback = function (callback, context, onEnd) {
                if (onEnd === undefined) {
                    onEnd = false;
                }
                this.touchLockCallbacks.push({ callback: callback, context: context, onEnd: onEnd });
            };
            Touch.prototype.removeTouchLockCallback = function (callback, context) {
                var i = this.touchLockCallbacks.length;
                while (i--) {
                    if (this.touchLockCallbacks[i].callback === callback && this.touchLockCallbacks[i].context === context) {
                        this.touchLockCallbacks.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            Touch.prototype.onTouchMove = function (event) {
                this.event = event;
                if (this.touchMoveCallback) {
                    this.touchMoveCallback.call(this.callbackContext, event);
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
                for (var i = 0; i < event.changedTouches.length; i++) {
                    this.game.input.updatePointer(event.changedTouches[i]);
                }
            };
            Touch.prototype.onTouchLeave = function (event) {
                this.event = event;
                if (this.touchLeaveCallback) {
                    this.touchLeaveCallback.call(this.callbackContext, event);
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
            };
            Touch.prototype.onTouchStart = function (event) {
                var i = this.touchLockCallbacks.length;
                while (i--) {
                    var cb = this.touchLockCallbacks[i];
                    if (!cb.onEnd && cb.callback.call(cb.context, this, event)) {
                        this.touchLockCallbacks.splice(i, 1);
                    }
                }
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
                for (var i_1 = 0; i_1 < event.changedTouches.length; i_1++) {
                    this.game.input.startPointer(event.changedTouches[i_1]);
                }
            };
            Touch.prototype.onTouchEnd = function (event) {
                var i = this.touchLockCallbacks.length;
                while (i--) {
                    var cb = this.touchLockCallbacks[i];
                    if (cb.onEnd && cb.callback.call(cb.context, this, event)) {
                        this.touchLockCallbacks.splice(i, 1);
                    }
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
                for (var i_2 = 0; i_2 < event.changedTouches.length; i_2++) {
                    this.game.input.stopPointer(event.changedTouches[i_2]);
                }
            };
            Touch.prototype.onTouchEnter = function (event) {
                this.event = event;
                if (this.touchEnterCallback) {
                    this.touchEnterCallback.call(this.callbackContext, event);
                }
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
            };
            Touch.prototype.onTouchCancel = function (event) {
                this.event = event;
                if (this.touchCancelCallback) {
                    this.touchCancelCallback.call(this.callbackContext, event);
                }
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                if (this.preventDefault) {
                    event.preventDefault();
                }
                for (var i = 0; i < event.changedTouches.length; i++) {
                    this.game.input.stopPointer(event.changedTouches[i]);
                }
            };
            Touch.prototype.stop = function () {
                if (this.game.device.touch) {
                    this.game.canvas.removeEventListener("touchstart", this._onTouchStart);
                    this.game.canvas.removeEventListener("touchmove", this._onTouchMove);
                    this.game.canvas.removeEventListener("touchend", this._onTouchEnd);
                    this.game.canvas.removeEventListener("touchenter", this._onTouchEnter);
                    this.game.canvas.removeEventListener("touchleave", this._onTouchLeave);
                    this.game.canvas.removeEventListener("touchcancel", this._onTouchCancel);
                    this.active = false;
                }
            };
            return Touch;
        }());
        bridge.Touch = Touch;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Video = (function (_super) {
            __extends(Video, _super);
            function Video(game, key, url) {
                if (url === void 0) { url = null; }
                var _this = _super.call(this, bridge.Texture.EMPTY) || this;
                _this.baseTexture = null;
                _this.type = bridge.VIDEO;
                _this.disableTextureUpload = false;
                _this.touchLocked = false;
                _this.onPlay = new bridge.Signal();
                _this.onChangeSource = new bridge.Signal();
                _this.onComplete = new bridge.Signal();
                _this.onAccess = new bridge.Signal();
                _this.onError = new bridge.Signal();
                _this.onTimeout = new bridge.Signal();
                _this.timeout = 15000;
                _this._timeOutID = null;
                _this.videoStream = null;
                _this.isStreaming = false;
                _this.retryLimit = 20;
                _this.retry = 0;
                _this.retryInterval = 500;
                _this._retryID = null;
                _this._codeMuted = false;
                _this._muted = false;
                _this._codePaused = false;
                _this._paused = false;
                _this._autoplay = false;
                _this._endCallback = null;
                _this._playCallback = null;
                _this.game = game;
                _this.createVideoTexture(key, url);
                _this.createTextureFrame(key);
                return _this;
            }
            Object.defineProperty(Video.prototype, "playbackRate", {
                get: function () {
                    return (this.video) ? this.video.playbackRate : 1;
                },
                set: function (value) {
                    if (this.video) {
                        this.video.playbackRate = 1;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "loop", {
                get: function () {
                    return (this.video) ? this.video.loop : false;
                },
                set: function (value) {
                    if (this.video) {
                        this.video.loop = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "playing", {
                get: function () {
                    return !(this.video.paused && this.video.ended);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "paused", {
                get: function () {
                    return this._paused;
                },
                set: function (value) {
                    value = value || null;
                    if (this.touchLocked) {
                        return;
                    }
                    if (value) {
                        if (this._paused) {
                            return;
                        }
                        this._codePaused = true;
                        this.setPause();
                    }
                    else {
                        if (!this._paused) {
                            return;
                        }
                        this._codePaused = false;
                        this.setResume();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Video.prototype.setResume = function () {
                if (!this._paused || this._codePaused || this.touchLocked) {
                    return;
                }
                this._paused = false;
                if (!this.video.ended) {
                    this.video.play();
                }
            };
            Video.prototype.setPause = function () {
                if (this._paused || this.touchLocked) {
                    return;
                }
                this._paused = true;
                this.video.pause();
            };
            Object.defineProperty(Video.prototype, "currentTime", {
                get: function () {
                    return (this.video) ? this.video.currentTime : 0;
                },
                set: function (value) {
                    this.video.currentTime = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "duration", {
                get: function () {
                    return this.video ? this.video.duration : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "progress", {
                get: function () {
                    return (this.video) ? (this.video.currentTime / this.video.duration) : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Video.prototype, "mute", {
                get: function () {
                    return this._muted;
                },
                set: function (value) {
                    value = value || null;
                    if (value) {
                        if (this._muted) {
                            return;
                        }
                        this._codeMuted = true;
                        this.setMute();
                    }
                    else {
                        if (!this._muted) {
                            return;
                        }
                        this._codeMuted = false;
                        this.unsetMute();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Video.prototype.setMute = function () {
                if (this._muted) {
                    return;
                }
                this._muted = true;
                this.video.muted = true;
            };
            Video.prototype.unsetMute = function () {
                if (!this._muted || this._codeMuted) {
                    return;
                }
                this._muted = false;
                this.video.muted = false;
            };
            Object.defineProperty(Video.prototype, "volume", {
                get: function () {
                    return (this.video) ? this.video.volume : 1;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    }
                    else if (value > 1) {
                        value = 1;
                    }
                    if (this.video) {
                        this.video.volume = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Video.prototype.createTextureFrame = function (key) {
                this.textureFrame = new PIXI.Rectangle(0, 0, this.width, this.height);
                this.texture.noFrame = false;
                this.texture.frame = this.textureFrame;
                this.texture.valid = false;
                if (key != null && this.video) {
                    this.texture.valid = true;
                }
            };
            Video.prototype.connectToMediaStream = function (video, stream) {
                if (video && stream) {
                    this.video = video;
                    this.videoStream = stream;
                    this.isStreaming = true;
                    this.baseTexture.resource && (this.baseTexture.resource.source = this.video);
                    this.updateTexture(null, this.video.videoWidth, this.video.videoHeight);
                    this.onAccess.dispatch(this);
                }
                return this;
            };
            Video.prototype.startMediaStream = function (captureAudio, width, height) {
                if (captureAudio === undefined) {
                    captureAudio = false;
                }
                if (width === undefined) {
                    width = null;
                }
                if (height === undefined) {
                    height = null;
                }
                if (!this.game.device.getUserMedia) {
                    this.onError.dispatch(this, "No getUserMedia");
                    return false;
                }
                if (this.videoStream !== null) {
                    if (this.videoStream["active"]) {
                        this.videoStream.active = false;
                    }
                    else {
                        this.videoStream.stop();
                    }
                }
                this.removeVideoElement();
                this.video = document.createElement("video");
                this.video.setAttribute("autoplay", "autoplay");
                if (width !== null) {
                    this.video.width = width;
                }
                if (height !== null) {
                    this.video.height = height;
                }
                this._timeOutID = window.setTimeout(this.getUserMediaTimeout.bind(this), this.timeout);
                try {
                    navigator.getUserMedia({ audio: captureAudio, video: true }, this.getUserMediaSuccess.bind(this), this.getUserMediaError.bind(this));
                }
                catch (error) {
                    this.getUserMediaError(error);
                }
                return this;
            };
            Video.prototype.getUserMediaError = function (event) {
                clearTimeout(this._timeOutID);
                this.onError.dispatch(this, event);
            };
            Video.prototype.getUserMediaTimeout = function () {
                clearTimeout(this._timeOutID);
                this.onTimeout.dispatch(this);
            };
            Video.prototype.getUserMediaSuccess = function (stream) {
                clearTimeout(this._timeOutID);
                this.videoStream = stream;
                if (this.video.mozSrcObject !== undefined) {
                    this.video.mozSrcObject = stream;
                }
                else {
                    this.video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                }
                var self = this;
                this.video.onloadeddata = function (ev) {
                    var retry = 10;
                    var checkStream = function () {
                        if (retry > 0) {
                            if (self.video.videoWidth > 0) {
                                var width = self.video.videoWidth;
                                var height = self.video.videoHeight;
                                if (isNaN(self.video.videoHeight)) {
                                    height = width / (4 / 3);
                                }
                                self.video.play();
                                self.isStreaming = true;
                                self.baseTexture.resource.source = self.video;
                                self.updateTexture(null, width, height);
                                self.onAccess.dispatch(self);
                            }
                            else {
                                window.setTimeout(checkStream, 500);
                            }
                        }
                        else {
                            console.warn("Unable to connect to video stream. Webcam error?");
                        }
                        retry--;
                    };
                    checkStream();
                };
            };
            Video.prototype.createVideoTexture = function (key, url) {
                var _video;
                if (this.game.cache.checkVideoKey(key)) {
                    _video = this.game.cache.getVideo(key);
                    if (_video.isBlob) {
                        this.createVideoFromBlob(_video.data);
                    }
                    else {
                        this.video = _video.data;
                    }
                    this.width = this.video.videoWidth;
                    this.height = this.video.videoHeight;
                }
                if (url && !this.video) {
                    this.createVideoFromURL(url, false);
                }
                this.texture = PIXI.Texture.from(this.video, {
                    resourceOptions: {
                        autoPlay: false
                    }
                });
                this.baseTexture = this.texture.baseTexture;
                this.forceLoaded(this.width, this.height);
                if (!this.game.device.cocoonJS && (this.game.device.iOS || this.game.device.android)) {
                    this.setTouchLock();
                }
                else {
                    if (_video) {
                        _video.locked = false;
                    }
                }
            };
            Video.prototype.forceLoaded = function (width, height) {
                this.baseTexture.valid = true;
                this.baseTexture.setSize(width, height);
            };
            Video.prototype.unlock = function () {
                this.touchLocked = false;
                this.video.play();
                this.onPlay.dispatch(this, this.loop, this.playbackRate);
                if (this.key) {
                    var _video = this.game.cache.getVideo(this.key);
                    if (_video && !_video.isBlob) {
                        _video.locked = false;
                    }
                }
                return true;
            };
            Video.prototype.createVideoFromURL = function (url, autoplay) {
                if (autoplay === undefined) {
                    autoplay = false;
                }
                if (this.texture) {
                    this.texture.valid = false;
                }
                this.video = document.createElement("video");
                this.video.controls = false;
                if (autoplay) {
                    this.video.setAttribute("autoplay", "autoplay");
                }
                this.video.src = url;
                this.video.load();
                this.retry = this.retryLimit;
                this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
                this.key = url;
                return this;
            };
            Video.prototype.checkVideoProgress = function () {
                if (this.video.readyState === 4) {
                    this.updateTexture();
                }
                else {
                    this.retry--;
                    if (this.retry > 0) {
                        this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
                    }
                    else {
                        console.warn("Video: Unable to start downloading video in time", this.isStreaming);
                    }
                }
            };
            Video.prototype.createVideoFromBlob = function (blob) {
                var _this = this;
                this.video = document.createElement("video");
                this.video.controls = false;
                this.video.setAttribute("autoplay", "autoplay");
                this.video.addEventListener("loadeddata", function (event) {
                    _this.updateTexture(event);
                });
                this.video.src = window.URL.createObjectURL(blob);
                return this;
            };
            Video.prototype.setTouchLock = function () {
                this.game.input.touch.addTouchLockCallback(this.unlock, this);
                this.touchLocked = true;
            };
            Video.prototype.updateTexture = function (event, width, height) {
                var change = false;
                if (width === undefined || width === null) {
                    width = this.video.videoWidth;
                    change = true;
                }
                if (height === undefined || height === null) {
                    height = this.video.videoHeight;
                }
                if (this.baseTexture.resource.source !== this.video) {
                    this.baseTexture.resource.source = this.video;
                }
                this.forceLoaded(width, height);
                this.texture.frame.width = width;
                this.texture.frame.height = height;
                this.texture.valid = true;
                if (change && this.key !== null) {
                    this.onChangeSource.dispatch(this, width, height);
                    if (this._autoplay) {
                        this.video.play();
                        this.onPlay.dispatch(this, this.loop, this.playbackRate);
                    }
                }
            };
            Video.prototype.changeSource = function (src, autoplay) {
                if (autoplay === undefined) {
                    autoplay = true;
                }
                this.texture.valid = false;
                this.video.pause();
                this.retry = this.retryLimit;
                this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
                this.video.src = src;
                this.video.load();
                this._autoplay = autoplay;
                if (!autoplay) {
                    this.paused = true;
                }
                return this;
            };
            Video.prototype.complete = function () {
                this.onComplete.dispatch(this);
            };
            Video.prototype.play = function (loop, playbackRate) {
                if (loop === undefined) {
                    loop = false;
                }
                if (playbackRate === undefined) {
                    playbackRate = 1;
                }
                this.game.onPause.add(this.setPause, this);
                this.game.onResume.add(this.setResume, this);
                this._endCallback = this.complete.bind(this);
                this.video.addEventListener("ended", this._endCallback, true);
                this.video.addEventListener("webkitendfullscreen", this._endCallback, true);
                this.video.loop = loop;
                this.video.playbackRate = playbackRate;
                if (this.touchLocked) {
                }
                else {
                    if (this.key !== null) {
                        if (this.video.readyState !== 4) {
                            this.retry = this.retryLimit;
                            this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
                        }
                        else {
                            this._playCallback = this.playHandler.bind(this);
                            this.video.addEventListener("playing", this._playCallback, true);
                        }
                    }
                    this.video.play();
                    this.onPlay.dispatch(this, loop, playbackRate);
                }
                return this;
            };
            Video.prototype.playHandler = function () {
                this.video.removeEventListener("playing", this._playCallback, true);
                this.updateTexture();
            };
            Video.prototype.destroy = function () {
                this.stop();
                this.removeVideoElement();
                if (this.touchLocked) {
                    this.game.input.touch.removeTouchLockCallback(this.unlock, this);
                }
                if (this._retryID) {
                    window.clearTimeout(this._retryID);
                }
            };
            Video.prototype.removeVideoElement = function () {
                if (!this.video) {
                    return;
                }
                if (this.video.parentNode) {
                    this.video.parentNode.removeChild(this.video);
                }
                while (this.video.hasChildNodes()) {
                    this.video.removeChild(this.video.firstChild);
                }
                this.video.removeAttribute("autoplay");
                this.video.removeAttribute("src");
                this.video = null;
            };
            Video.prototype.stop = function () {
                this.game.onPause.remove(this.setPause, this);
                this.game.onResume.remove(this.setResume, this);
                if (this.isStreaming) {
                    if (this.video.mozSrcObject) {
                        this.video.mozSrcObject.stop();
                        this.video.src = null;
                    }
                    else {
                        this.video.src = "";
                        if (this.videoStream["active"]) {
                            this.videoStream.active = false;
                        }
                        else {
                            if (this.videoStream.getTracks) {
                                this.videoStream.getTracks().forEach(function (track) {
                                    track.stop();
                                });
                            }
                            else {
                                this.videoStream.stop();
                            }
                        }
                    }
                    this.videoStream = null;
                    this.isStreaming = false;
                }
                else {
                    this.video.removeEventListener("ended", this._endCallback, true);
                    this.video.removeEventListener("webkitendfullscreen", this._endCallback, true);
                    this.video.removeEventListener("playing", this._playCallback, true);
                    if (this.touchLocked) {
                    }
                    else {
                        this.video.pause();
                    }
                }
                return this;
            };
            return Video;
        }(PIXI.Sprite));
        bridge.Video = Video;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Easing;
        (function (Easing) {
            var Linear = (function () {
                function Linear() {
                }
                Linear.None = function (k) {
                    return k;
                };
                return Linear;
            }());
            Easing.Linear = Linear;
            var Quadratic = (function () {
                function Quadratic() {
                }
                Quadratic.In = function (k) {
                    return k * k;
                };
                Quadratic.Out = function (k) {
                    return k * (2 - k);
                };
                Quadratic.InOut = function (k) {
                    if ((k *= 2) < 1) {
                        return 0.5 * k * k;
                    }
                    return -0.5 * (--k * (k - 2) - 1);
                };
                return Quadratic;
            }());
            Easing.Quadratic = Quadratic;
            var Cubic = (function () {
                function Cubic() {
                }
                Cubic.In = function (k) {
                    return k * k * k;
                };
                Cubic.Out = function (k) {
                    return --k * k * k + 1;
                };
                Cubic.InOut = function (k) {
                    if ((k *= 2) < 1) {
                        return 0.5 * k * k * k;
                    }
                    return 0.5 * ((k -= 2) * k * k + 2);
                };
                return Cubic;
            }());
            Easing.Cubic = Cubic;
            var Quartic = (function () {
                function Quartic() {
                }
                Quartic.In = function (k) {
                    return k * k * k * k;
                };
                Quartic.Out = function (k) {
                    return 1 - (--k * k * k * k);
                };
                Quartic.InOut = function (k) {
                    if ((k *= 2) < 1) {
                        return 0.5 * k * k * k * k;
                    }
                    return -0.5 * ((k -= 2) * k * k * k - 2);
                };
                return Quartic;
            }());
            Easing.Quartic = Quartic;
            var Quintic = (function () {
                function Quintic() {
                }
                Quintic.In = function (k) {
                    return k * k * k * k * k;
                };
                Quintic.Out = function (k) {
                    return --k * k * k * k * k + 1;
                };
                Quintic.InOut = function (k) {
                    if ((k *= 2) < 1) {
                        return 0.5 * k * k * k * k * k;
                    }
                    return 0.5 * ((k -= 2) * k * k * k * k + 2);
                };
                return Quintic;
            }());
            Easing.Quintic = Quintic;
            var Sinusoidal = (function () {
                function Sinusoidal() {
                }
                Sinusoidal.In = function (k) {
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    return 1 - Math.cos(k * Math.PI / 2);
                };
                Sinusoidal.Out = function (k) {
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    return Math.sin(k * Math.PI / 2);
                };
                Sinusoidal.InOut = function (k) {
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    return 0.5 * (1 - Math.cos(Math.PI * k));
                };
                return Sinusoidal;
            }());
            Easing.Sinusoidal = Sinusoidal;
            var Exponential = (function () {
                function Exponential() {
                }
                Exponential.In = function (k) {
                    return k === 0 ? 0 : Math.pow(1024, k - 1);
                };
                Exponential.Out = function (k) {
                    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
                };
                Exponential.InOut = function (k) {
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    if ((k *= 2) < 1) {
                        return 0.5 * Math.pow(1024, k - 1);
                    }
                    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
                };
                return Exponential;
            }());
            Easing.Exponential = Exponential;
            var Circular = (function () {
                function Circular() {
                }
                Circular.In = function (k) {
                    return 1 - Math.sqrt(1 - k * k);
                };
                Circular.Out = function (k) {
                    return Math.sqrt(1 - (--k * k));
                };
                Circular.InOut = function (k) {
                    if ((k *= 2) < 1) {
                        return -0.5 * (Math.sqrt(1 - k * k) - 1);
                    }
                    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
                };
                return Circular;
            }());
            Easing.Circular = Circular;
            var Elastic = (function () {
                function Elastic() {
                }
                Elastic.In = function (k) {
                    var s, a = 0.1, p = 0.4;
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else {
                        s = p * Math.asin(1 / a) / (2 * Math.PI);
                    }
                    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                };
                Elastic.Out = function (k) {
                    var s, a = 0.1, p = 0.4;
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else {
                        s = p * Math.asin(1 / a) / (2 * Math.PI);
                    }
                    return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
                };
                Elastic.InOut = function (k) {
                    var s, a = 0.1, p = 0.4;
                    if (k === 0) {
                        return 0;
                    }
                    if (k === 1) {
                        return 1;
                    }
                    if (!a || a < 1) {
                        a = 1;
                        s = p / 4;
                    }
                    else {
                        s = p * Math.asin(1 / a) / (2 * Math.PI);
                    }
                    if ((k *= 2) < 1) {
                        return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                    }
                    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
                };
                return Elastic;
            }());
            Easing.Elastic = Elastic;
            var Back = (function () {
                function Back() {
                }
                Back.In = function (k) {
                    var s = 1.70158;
                    return k * k * ((s + 1) * k - s);
                };
                Back.Out = function (k) {
                    var s = 1.70158;
                    return --k * k * ((s + 1) * k + s) + 1;
                };
                Back.InOut = function (k) {
                    var s = 1.70158 * 1.525;
                    if ((k *= 2) < 1) {
                        return 0.5 * (k * k * ((s + 1) * k - s));
                    }
                    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
                };
                return Back;
            }());
            Easing.Back = Back;
            var CustomBack = (function () {
                function CustomBack() {
                }
                CustomBack.In = function (k) {
                    var s = this.OVESHOOT;
                    return k * k * ((s + 1) * k - s);
                };
                CustomBack.Out = function (k) {
                    var s = this.OVESHOOT;
                    return --k * k * ((s + 1) * k + s) + 1;
                };
                CustomBack.InOut = function (k) {
                    var s = this.OVESHOOT * this.MULT_FACTOR;
                    if ((k *= 2) < 1) {
                        return 0.5 * (k * k * ((s + 1) * k - s));
                    }
                    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
                };
                CustomBack.OVESHOOT = 1.70158;
                CustomBack.MULT_FACTOR = 1.525;
                return CustomBack;
            }());
            Easing.CustomBack = CustomBack;
            var Bounce = (function () {
                function Bounce() {
                }
                Bounce.In = function (k) {
                    return 1 - Easing.Bounce.Out(1 - k);
                };
                Bounce.Out = function (k) {
                    if (k < (1 / 2.75)) {
                        return 7.5625 * k * k;
                    }
                    else if (k < (2 / 2.75)) {
                        return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                    }
                    else if (k < (2.5 / 2.75)) {
                        return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                    }
                    else {
                        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
                    }
                };
                Bounce.InOut = function (k) {
                    if (k < 0.5) {
                        return Easing.Bounce.In(k * 2) * 0.5;
                    }
                    return Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
                };
                return Bounce;
            }());
            Easing.Bounce = Bounce;
            Easing.Default = Easing.Linear.None;
            Easing.Power0 = Easing.Linear.None;
            Easing.Power1 = Easing.Quadratic.Out;
            Easing.Power2 = Easing.Cubic.Out;
            Easing.Power3 = Easing.Quartic.Out;
            Easing.Power4 = Easing.Quintic.Out;
        })(Easing = bridge.Easing || (bridge.Easing = {}));
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Event = (function () {
            function Event(type, data) {
                this.type = type;
                this.data = (data === void 0) ? null : data;
                this.removed = false;
            }
            Event.prototype.remove = function () {
                this.removed = true;
            };
            Event.prototype.toString = function () {
                return "[Event (type=" + this.type + ", timeStamp=" + this.timeStamp + ")]";
            };
            return Event;
        }());
        bridge.Event = Event;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        bridge.EventConstants = {
            PLAY_SOUND: "PLAY_SOUND",
            STOP_SOUND: "STOP_SOUND",
            RESIZE: "RESIZE",
            METER_TICKUP_STARTED: "mtrTickStarted",
            METER_TICKUP_FINISHED: "mtrTickStopped",
            STOP_METER_TICKUP: "stopMtrTick",
            INFO_CLOSED: "infoClosed",
            SLIDER_VALUE_CHANGE: "sliderChange",
            BUTTON_PRESSED: "buttonPressed",
            BUTTON_RELESED: "buttonRelesed",
            SHOW_PAYTABLE: "showPaytable",
            INSUFFICIENT_FUNDS: "lowBalance",
            SOUND_PLAY_COMPLETE: "sndPlayComplete",
            SOUND_PLAY_FAILED: "sndPlayFailed",
            SOUND_PLAY_LOOP: "sndPlayLoop",
            ERROR_LOADING_SOUND: "errorSoundLoad",
            GAME_STAGE_CLICKED: "stageClicked",
            SHOW_ERROR: "showError",
            PRIORITIZE_LOADING_STAGE: "PRIORITIZE_LOADING_STAGE",
            BASEGAME_ASSETS_LOADED: "BASEGAME_ASSETS_LOADED",
            BASEGAME_POSTLOAD_ASSETS_LOADED: "BASEGAME_POSTLOAD_ASSETS_LOADED",
            FREEGAME_ASSETS_LOADED: "FREEGAME_ASSETS_LOADED",
            INFO_ASSETS_LOADED: "INFO_ASSETS_LOADED",
            BONUS_ASSETS_LOADED: "BONUS_ASSETS_LOADED",
            ALL_ASSETS_LOADED: "ALL_ASSETS_LOADED",
            UPDATE_LOADING_PROGRESS: "UPDATE_LOADING_PROGRESS",
            FILE_LOAD_ERROR: "FILE_LOAD_ERROR",
            STATE_LOADED: "STATE_LOADED",
            COMPONENT_CREATED: "COMPONENT_CREATED",
            LOAD_STATE: "LOAD_STATE",
            REMOVE_STATE_CACHE: "REMOVE_STATE_CACHE"
        };
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var EventDispatcher = (function () {
            function EventDispatcher() {
                this.subscribedEvents = {};
            }
            EventDispatcher.prototype.on = function (type, handler, scope, once, data, priority) {
                if (typeof type === "undefined") {
                    throw new Error("Please provide an Event Type");
                }
                if (typeof handler === "undefined") {
                    throw new Error("Please provide an Event Handler");
                }
                if (!this.subscribedEvents.hasOwnProperty(type)) {
                    this.subscribedEvents[type] = [];
                }
                this.subscribedEvents[type].push({
                    func: handler,
                    scope: scope,
                    once: once || false,
                    data: data || null,
                    priority: priority || this.subscribedEvents[type].length
                });
                this.subscribedEvents[type].sort(function (a, b) {
                    return a.priority - b.priority;
                });
                return handler;
            };
            EventDispatcher.prototype.off = function (type, handler, scope) {
                if (typeof type === "undefined") {
                    throw new Error("Please provide an Event Type");
                }
                if (!this.subscribedEvents.hasOwnProperty(type)) {
                    console.info("%c Event " + type + " is not available", "{background:blue,color:white}");
                    return;
                }
                var eventLen = this.subscribedEvents[type].length;
                var subscrEvent = this.subscribedEvents[type];
                var i;
                if (handler) {
                    if (eventLen === 1 && subscrEvent[0].func === handler) {
                        delete (this.subscribedEvents[type]);
                        return;
                    }
                    for (i = eventLen - 1; i > -1; i--) {
                        if (subscrEvent[i].func === handler) {
                            subscrEvent.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (scope) {
                    for (i = eventLen - 1; i > -1; i--) {
                        var eventObj = subscrEvent[i];
                        if (eventObj.scope === scope) {
                            subscrEvent.splice(i, 1);
                            break;
                        }
                    }
                }
                else {
                    delete (this.subscribedEvents[type]);
                }
            };
            EventDispatcher.prototype.offForScope = function (type, scope, handler) {
                if (!type || !scope) {
                    throw new Error("Please provide Event Type or/and Scope");
                }
                if (!this.subscribedEvents.hasOwnProperty(type)) {
                    console.info("%c Event " + type + " is not available", "{background:blue,color:white}");
                    return;
                }
                var eventLen = this.subscribedEvents[type].length;
                var subscrEvent = this.subscribedEvents[type];
                var i;
                if (handler) {
                    if (eventLen === 1 && subscrEvent[0].func === handler && subscrEvent[0].scope === scope) {
                        delete (this.subscribedEvents[type]);
                        return;
                    }
                    for (i = eventLen - 1; i > -1; i--) {
                        var eventObj = subscrEvent[i];
                        if (eventObj.func === handler && eventObj.scope === scope) {
                            subscrEvent.splice(i, 1);
                            break;
                        }
                    }
                }
                else {
                    for (i = eventLen - 1; i > -1; i--) {
                        var eventObj = subscrEvent[i];
                        if (eventObj.scope === scope) {
                            subscrEvent.splice(i, 1);
                            break;
                        }
                    }
                    if (!subscrEvent.length) {
                        delete (this.subscribedEvents[type]);
                    }
                }
            };
            EventDispatcher.prototype.hasEvent = function (type) {
                return !!(this.subscribedEvents.hasOwnProperty(type) && this.subscribedEvents[type].length);
            };
            EventDispatcher.prototype.fireEvent = function (type, data) {
                if (typeof type === "undefined") {
                    throw new Error("Please provide an Event Type");
                }
                var event = typeof type === "string" ? new bridge.Event(type, data) : type;
                if (this.subscribedEvents.hasOwnProperty(event.type)) {
                    var eventLen = this.subscribedEvents[event.type].length;
                    var i = void 0;
                    var eventObj = void 0;
                    if (eventLen) {
                        for (i = eventLen - 1; i > -1; i--) {
                            eventObj = this.subscribedEvents[event.type][i];
                            event.timeStamp = +new Date();
                            event.target = eventObj.scope || this;
                            eventObj.func.call(eventObj.scope, event, eventObj.data);
                            if (this.subscribedEvents[event.type] && (eventObj.once || event.removed)) {
                                if (this.subscribedEvents[event.type].length === 0) {
                                    delete (this.subscribedEvents[event.type]);
                                }
                                else {
                                    this.subscribedEvents[event.type].splice(i, 1);
                                }
                                event.removed = false;
                            }
                        }
                    }
                    else {
                        console.info("%c Event " + type + " is not subscribed now", "background:purple;color:white");
                    }
                    event = null;
                }
                else {
                    console.info("%c Event " + type + " is not subscribed anywhere", "background:purple;color:white");
                }
            };
            return EventDispatcher;
        }());
        bridge.EventDispatcher = EventDispatcher;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Game = (function () {
            function Game(config) {
                var _this = this;
                this.camera = new bridge.Camera(this, 0, 0, 0, 0, 0);
                this.add = null;
                this.device = bridge._Device;
                this.isBooted = false;
                this.defaultConfig = {
                    width: innerWidth,
                    height: innerHeight,
                    view: undefined,
                    forceCanvas: false,
                    roundPixels: false,
                    resolution: devicePixelRatio,
                    backgroundColor: 0x000000,
                    resizeTo: undefined,
                    useWindowScrollTo: true,
                    useCSSDimensions: true,
                    useCustomResize: false,
                    useCustomOrientationChange: false,
                    useOnlyLeftClick: true
                };
                this.isPause = false;
                this.codePaused = false;
                bridge.extendObj(config, this.defaultConfig, false);
                this.parseConfig(config);
                this.device.whenReady(this.boot, this, false);
                if (config.canvas instanceof HTMLCanvasElement) {
                    config.view = config.canvas;
                    delete config.canvas;
                }
                this.inputSigToContainer();
                // config.forceCanvas = (config.renderer === 2);
                config.forceCanvas = true;
                this.gameObj = new bridge.EApplication(config);
                if (!config.view) {
                    if (config.parent) {
                        if (config.parent instanceof HTMLDivElement) {
                            config.parent.appendChild(this.gameObj.view);
                        }
                        else {
                            document.getElementById(config.parent).appendChild(this.gameObj.view);
                        }
                    }
                    else {
                        document.body.appendChild(this.gameObj.view);
                    }
                }
                this.canvas = this.gameObj.renderer.view;
                this.renderer = this.gameObj.renderer;
                this.stage = this.gameObj.stage;
                this.stage.disableVisibilityChange = false;
                Object.defineProperty(this.stage, "_disableVisibilityChange", {
                    value: false,
                    configurable: true,
                    enumerable: true,
                    writable: true
                });
                Object.defineProperty(this.stage, "disableVisibilityChange", {
                    set: function (value) {
                        this._disableVisibilityChange = value;
                    },
                    get: function () {
                        return this._disableVisibilityChange;
                    }
                });
                this.cache = new bridge.Cache(this);
                this.load = new bridge.Loader(this);
                this.time = new bridge.Time(this);
                this.sound = new bridge.SoundManager(this);
                this.ticker = this.gameObj.ticker;
                this.deltaTime = this.ticker.deltaTime;
                this.rnd = new bridge.RandomDataGenerator([(Date.now() * Math.random()).toString()]);
                this.ticker.add(function (delta) {
                    _this.time.update(delta);
                    if (_this.isBooted) {
                        _this.scale.preUpdate();
                        _this.state.preUpdate();
                        _this.state.update();
                        _this.stageManager.update();
                        _this.state.render();
                        _this.tweens.update();
                    }
                }, this);
                return this;
            }
            Game.prototype.inputSigToContainer = function () {
                PIXI.Container.prototype.onChildInputUp = new bridge.Signal();
                PIXI.Container.prototype.onChildInputOver = new bridge.Signal();
                PIXI.Container.prototype.onChildInputDown = new bridge.Signal();
                PIXI.Container.prototype.onChildInputOut = new bridge.Signal();
            };
            Game.prototype.registerStates = function (loadState, initialState) {
                if (initialState === void 0) { initialState = "load"; }
                loadState && (this.loadStateObj = loadState);
                for (var state in this.loadStateObj) {
                    if (this.loadStateObj.hasOwnProperty(state)) {
                        this.state.add(state, this.loadStateObj[state]);
                    }
                }
                this.state.start(initialState, true, true, true);
            };
            Object.defineProperty(Game.prototype, "paused", {
                get: function () {
                    return this.isPause;
                },
                set: function (value) {
                    if (value === true) {
                        if (this.isPause === false) {
                            this.isPause = true;
                            this.time.gamePaused();
                            this.sound.pauseAllSounds();
                            this.onPause.dispatch(this);
                        }
                        this.codePaused = true;
                    }
                    else {
                        if (this.isPause) {
                            this.isPause = false;
                            this.time.gameResumed();
                            this.sound.resumeAllSounds();
                            this.onResume.dispatch(this);
                        }
                        this.codePaused = false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Game.prototype.boot = function (event) {
                if (this.isBooted) {
                    return;
                }
                this.onPause = new bridge.Signal();
                this.onResume = new bridge.Signal();
                this.onBlur = new bridge.Signal();
                this.onFocus = new bridge.Signal();
                this.scale = new bridge.ScaleManager(this, this.width, this.height);
                this.stageManager = new bridge.Stage(this);
                this.input = new bridge.Input(this);
                this.add = new bridge.GameObjectFactory(this);
                this.tweens = new bridge.TweenManager(this);
                this.input.boot();
                this.time.boot();
                this.scale.boot();
                this.stageManager.boot();
                this.state.boot();
                this.particles = new bridge.Particles(this);
                this.sound.boot();
                this.isBooted = true;
            };
            Game.prototype.gamePaused = function (event) {
                if (!this.isPause) {
                    this.isPause = true;
                    this.time.gamePaused();
                    this.sound.pauseAllSounds();
                    this.onPause.dispatch(event);
                }
            };
            Game.prototype.gameResumed = function (event) {
                if (this.isPause && !this.codePaused) {
                    this.isPause = false;
                    this.time.gameResumed();
                    this.sound.resumeAllSounds();
                    this.onResume.dispatch(event);
                }
            };
            Game.prototype.destroy = function () {
                this.state.destroy();
                this.scale.destroy();
                this.stageManager.destroy();
                this.state = null;
                this.scale = null;
                this.stageManager = null;
                this.sound = null;
                this.input = null;
                this.tweens = null;
                this.cache = null;
                this.load = null;
                this.time = null;
                this.isBooted = false;
                this.gameObj.destroy();
                this.gameObj = null;
                this.ticker = null;
                this.canvas = null;
                this.renderer = null;
                this.stage = null;
            };
            Game.prototype.focusLoss = function (event) {
                this.onBlur.dispatch(event);
                this.gamePaused(event);
            };
            Game.prototype.focusGain = function (event) {
                this.onFocus.dispatch(event);
                this.gameResumed(event);
            };
            Game.prototype.parseConfig = function (config) {
                this.config = config;
                if (typeof config.width === "number") {
                    this.width = config.width;
                }
                if (typeof config.height === "number") {
                    this.height = config.height;
                }
                if (config.parent) {
                    this.parent = config.parent;
                }
                if (config.transparent !== undefined) {
                    this.transparent = config.transparent;
                }
                if (config.antialias !== undefined) {
                    this.antialias = config.antialias;
                }
                if (config.clearBeforeRender !== undefined) {
                    this.clearBeforeRender = config.clearBeforeRender;
                }
                if (config.resolution) {
                    this.resolution = config.resolution;
                }
                var state = null;
                if (config.state) {
                    state = config.state;
                }
                this.state = new bridge.StateManager(this, state);
            };
            Object.defineProperty(Game.prototype, "renderType", {
                get: function () {
                    return this.renderer.type;
                },
                enumerable: true,
                configurable: true
            });
            return Game;
        }());
        bridge.Game = Game;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var GameObjectFactory = (function () {
            function GameObjectFactory(game) {
                this.game = game;
            }
            GameObjectFactory.prototype.tween = function (object) {
                return this.game.tweens.create(object);
            };
            GameObjectFactory.prototype.emitter = function (particleParent, emitterData, config) {
                return this.game.particles.createEmitter(particleParent, emitterData, config);
            };
            GameObjectFactory.prototype.audioSprite = function (key) {
                return this.game.sound.addSprite(key);
            };
            GameObjectFactory.prototype.text = function (x, y, text, style, canvas) {
                return new bridge.Text(this.game, x, y, text, style, canvas);
            };
            GameObjectFactory.prototype.filter = function (filterType) {
                var params = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    params[_i - 1] = arguments[_i];
                }
                switch (filterType) {
                    case 1:
                    case "AlphaFilter":
                    case "Alpha":
                    case "AlphaX":
                    case "AlphaY":
                        return new bridge.filters.AlphaFilter();
                    case 2:
                    case "BlurFilter":
                    case "Blur":
                    case "BlurX":
                    case "BlurY":
                        return new bridge.filters.BlurFilter();
                    case 3:
                    case "BlurFilterPass":
                        if (params.length === 4) {
                            return new bridge.filters.BlurFilterPass(params[0], params[1], params[2], params[3]);
                        }
                        else {
                            bridge.throwMissingParamsError("GameObjectFactory", "filter::BlurFilterPass");
                            return null;
                        }
                    case 4:
                    case "ColorMatrixFilter":
                        return new bridge.filters.ColorMatrixFilter();
                    case 5:
                    case "DisplacementFilter":
                        if (params.length && params[0] instanceof bridge.BitmapImage) {
                            return new bridge.filters.DisplacementFilter(params[0], params[1]);
                        }
                        else {
                            bridge.throwMissingParamsError("GameObjectFactory", "filter::DisplacementFilter", "sprite", "scale");
                            return null;
                        }
                    case 6:
                    case "FXAAFilter":
                        return new bridge.filters.FXAAFilter();
                    case 7:
                    case "NoiseFilter":
                        return new bridge.filters.NoiseFilter(params[0], params[1]);
                    default:
                        if (bridge.filters[filterType]) {
                            return new bridge.filters[filterType]();
                        }
                        else {
                            bridge.throwMissingClassError(filterType);
                            return null;
                        }
                }
            };
            return GameObjectFactory;
        }());
        bridge.GameObjectFactory = GameObjectFactory;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var ArraySet = (function () {
            function ArraySet(list) {
                this.position = 0;
                this.list = list || [];
            }
            Object.defineProperty(ArraySet.prototype, "total", {
                get: function () {
                    return this.list.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ArraySet.prototype, "first", {
                get: function () {
                    this.position = 0;
                    if (this.list.length > 0) {
                        return this.list[0];
                    }
                    else {
                        return null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ArraySet.prototype, "next", {
                get: function () {
                    if (this.position < this.list.length) {
                        this.position++;
                        return this.list[this.position];
                    }
                    else {
                        return null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            ArraySet.prototype.add = function (item) {
                if (!this.exists(item)) {
                    this.list.push(item);
                }
                return item;
            };
            ArraySet.prototype.getIndex = function (item) {
                return this.list.indexOf(item);
            };
            ArraySet.prototype.getByKey = function (property, value) {
                var i = this.list.length;
                while (i--) {
                    if (this.list[i][property] === value) {
                        return this.list[i];
                    }
                }
                return null;
            };
            ArraySet.prototype.exists = function (item) {
                return (this.list.indexOf(item) > -1);
            };
            ArraySet.prototype.reset = function () {
                this.list.length = 0;
            };
            ArraySet.prototype.remove = function (item) {
                var idx = this.list.indexOf(item);
                if (idx > -1) {
                    this.list.splice(idx, 1);
                    return item;
                }
            };
            ArraySet.prototype.setAll = function (key, value) {
                var i = this.list.length;
                while (i--) {
                    if (this.list[i]) {
                        this.list[i][key] = value;
                    }
                }
            };
            ArraySet.prototype.callAll = function (key) {
                var param = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    param[_i - 1] = arguments[_i];
                }
                var args = Array.prototype.slice.call(arguments, 1);
                var i = this.list.length;
                while (i--) {
                    if (this.list[i] && this.list[i][key]) {
                        this.list[i][key].apply(this.list[i], args);
                    }
                }
            };
            ArraySet.prototype.removeAll = function (destroy) {
                if (destroy === undefined) {
                    destroy = false;
                }
                var i = this.list.length;
                while (i--) {
                    if (this.list[i]) {
                        var item = this.remove(this.list[i]);
                        if (destroy) {
                            item.destroy();
                        }
                    }
                }
                this.position = 0;
                this.list = [];
            };
            return ArraySet;
        }());
        bridge.ArraySet = ArraySet;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var DeviceButton = (function () {
            function DeviceButton(parent, buttonCode) {
                this.event = null;
                this.isDown = false;
                this.isUp = true;
                this.timeDown = 0;
                this.timeUp = 0;
                this.repeats = 0;
                this.altKey = false;
                this.shiftKey = false;
                this.ctrlKey = false;
                this.value = 0;
                this.onDown = new bridge.Signal();
                this.onUp = new bridge.Signal();
                this.onFloat = new bridge.Signal();
                this.parent = parent;
                this.game = parent.game;
                this.buttonCode = buttonCode;
            }
            Object.defineProperty(DeviceButton.prototype, "duration", {
                get: function () {
                    if (this.isUp) {
                        return -1;
                    }
                    return this.game.time.time - this.timeDown;
                },
                enumerable: true,
                configurable: true
            });
            DeviceButton.prototype.start = function (event, value) {
                if (this.isDown) {
                    return;
                }
                this.isDown = true;
                this.isUp = false;
                this.timeDown = this.game.time.time;
                this.repeats = 0;
                this.event = event;
                this.value = value;
                if (event) {
                    this.altKey = event.altKey;
                    this.shiftKey = event.shiftKey;
                    this.ctrlKey = event.ctrlKey;
                }
                this.onDown.dispatch(this, value);
            };
            DeviceButton.prototype.stop = function (event, value) {
                if (this.isUp) {
                    return;
                }
                this.isDown = false;
                this.isUp = true;
                this.timeUp = this.game.time.time;
                this.event = event;
                this.value = value;
                if (event) {
                    this.altKey = event.altKey;
                    this.shiftKey = event.shiftKey;
                    this.ctrlKey = event.ctrlKey;
                }
                this.onUp.dispatch(this, value);
            };
            DeviceButton.prototype.padFloat = function (value) {
                this.value = value;
                this.onFloat.dispatch(this, value);
            };
            DeviceButton.prototype.justPressed = function (duration) {
                duration = duration || 250;
                return (this.isDown && (this.timeDown + duration) > this.game.time.time);
            };
            DeviceButton.prototype.justReleased = function (duration) {
                duration = duration || 250;
                return (this.isUp && (this.timeUp + duration) > this.game.time.time);
            };
            DeviceButton.prototype.reset = function () {
                this.isDown = false;
                this.isUp = true;
                this.timeDown = this.game.time.time;
                this.repeats = 0;
                this.altKey = false;
                this.shiftKey = false;
                this.ctrlKey = false;
            };
            DeviceButton.prototype.destroy = function () {
                this.onDown.dispose();
                this.onUp.dispose();
                this.onFloat.dispose();
                this.parent = null;
                this.game = null;
            };
            return DeviceButton;
        }());
        bridge.DeviceButton = DeviceButton;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var GestureController = (function () {
            function GestureController(game) {
                this.isDouble = false;
                this.game = game;
                this.swipeDispatched = false;
                this.holdDispatched = false;
                this.isTouching = false;
                this.isHolding = false;
                this.onSwipe = new bridge.Signal();
                this.onTap = new bridge.Signal();
                this.onHold = new bridge.Signal();
                this.onDoubleTap = new bridge.Signal();
            }
            GestureController.prototype.update = function () {
                var distance = bridge.Point.distance(this.game.input.activePointer.position, this.game.input.activePointer.positionDown);
                var duration = this.game.input.activePointer.duration;
                this.updateSwipe(distance, duration);
                this.updateTouch(distance, duration);
            };
            GestureController.prototype.updateSwipe = function (distance, duration) {
                var velocity = distance / duration;
                if (velocity < 0) {
                    this.swipeDispatched = false;
                }
                else if (!this.swipeDispatched && distance > GestureController.SwipeDefaults.threshold && velocity > GestureController.SwipeDefaults.velocity) {
                    var positionDown = this.game.input.activePointer.positionDown;
                    var position = this.game.input.activePointer.position;
                    var swapDirection = this.getSwipeDirection(position, positionDown);
                    this.onSwipe.dispatch(this, positionDown, position, swapDirection);
                    this.swipeDispatched = true;
                }
            };
            GestureController.prototype.onTapHandler = function (pointer, isDoubleClick) {
                if (!isDoubleClick) {
                    this.onTap.dispatch(this, pointer);
                    console.log("1 tap");
                }
                else {
                    this.onDoubleTap.dispatch(this, pointer);
                    console.log("2 tap");
                }
            };
            GestureController.prototype.onHoldHandler = function (pointer) {
                this.onHold.dispatch(this, pointer);
            };
            GestureController.prototype.updateTouch = function (distance, duration) {
                var positionDown = this.game.input.activePointer.positionDown;
                if (duration < 0) {
                    if (this.isTouching) {
                        this.checkDoubleTap(distance, positionDown);
                    }
                    this.isTouching = false;
                    this.isHolding = false;
                    this.holdDispatched = false;
                }
                else if (distance < GestureController.SwipeDefaults.threshold) {
                    if (duration < GestureController.HoldDefaults.time) {
                        this.isTouching = true;
                    }
                    else {
                        this.isTouching = false;
                        this.isHolding = true;
                        if (!this.holdDispatched) {
                            this.holdDispatched = true;
                            this.onHold.dispatch(this, positionDown);
                        }
                    }
                }
                else {
                    this.isTouching = false;
                    this.isHolding = false;
                }
            };
            GestureController.prototype.checkDoubleTap = function (duration, positionDown) {
                var _this = this;
                clearTimeout(this.tapTimeDelay);
                this.tapTimeDelay = setTimeout(function () {
                    _this.isDouble = false;
                    _this.onTap.dispatch(_this, positionDown);
                }, this.game.input.doubleTapRate);
                if (this.isDouble) {
                    clearTimeout(this.tapTimeDelay);
                    this.isDouble = false;
                    this.onDoubleTap.dispatch(this, positionDown);
                }
                else {
                    this.isDouble = true;
                }
            };
            GestureController.prototype.getSwipeDirection = function (pos, prevPos) {
                var xDiff = pos.x - prevPos.x;
                var yDiff = pos.y - prevPos.y;
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff < 0) {
                        return GestureController.SwipeDirection.LEFT;
                    }
                    else {
                        return GestureController.SwipeDirection.RIGHT;
                    }
                }
                else {
                    if (yDiff < 0) {
                        return GestureController.SwipeDirection.UP;
                    }
                    else {
                        return GestureController.SwipeDirection.DOWN;
                    }
                }
            };
            GestureController.SWIPE = 0;
            GestureController.TAP = 1;
            GestureController.HOLD = 2;
            GestureController.HoldDefaults = {
                time: 200
            };
            GestureController.SwipeDefaults = {
                velocity: 0.65,
                threshold: 10
            };
            GestureController.SwipeDirection = {
                UP: 1,
                DOWN: 2,
                LEFT: 3,
                RIGHT: 4
            };
            return GestureController;
        }());
        bridge.GestureController = GestureController;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Input = (function () {
            function Input(game) {
                this.moveCallbacks = [];
                this.customCandidateHandler = null;
                this.customCandidateHandlerContext = null;
                this.pollRate = 0;
                this.enabled = true;
                this.multiInputOverride = Input.MOUSE_TOUCH_COMBINE;
                this.position = null;
                this.speed = null;
                this.circle = null;
                this.scale = null;
                this.maxPointers = -1;
                this.tapRate = 200;
                this.doubleTapRate = 300;
                this.holdRate = 2000;
                this.justPressedRate = 200;
                this.justReleasedRate = 200;
                this.recordPointerHistory = false;
                this.recordRate = 100;
                this.recordLimit = 100;
                this.pointer1 = null;
                this.pointer2 = null;
                this.pointer3 = null;
                this.pointer4 = null;
                this.pointer5 = null;
                this.pointer6 = null;
                this.pointer7 = null;
                this.pointer8 = null;
                this.pointer9 = null;
                this.pointer10 = null;
                this.pointers = [];
                this.activePointer = null;
                this.mousePointer = null;
                this.mouse = null;
                this.keyboard = null;
                this.touch = null;
                this.mspointer = null;
                this.gamepad = null;
                this.resetLocked = false;
                this.onDown = null;
                this.onUp = null;
                this.onTap = null;
                this.onHold = null;
                this.minPriorityID = -1;
                this.interactiveItems = new bridge.ArraySet();
                this._onClickTrampoline = null;
                this._localPoint = new bridge.Point();
                this._pollCounter = 0;
                this._oldPosition = null;
                this._x = 0;
                this._y = 0;
                this.game = game;
            }
            Object.defineProperty(Input.prototype, "x", {
                get: function () {
                    return this._x;
                },
                set: function (value) {
                    this._x = Math.floor(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "y", {
                get: function () {
                    return this._y;
                },
                set: function (value) {
                    this._y = Math.floor(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "pollLocked", {
                get: function () {
                    return (this.pollRate > 0 && this._pollCounter < this.pollRate);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "totalInactivePointers", {
                get: function () {
                    return this.pointers.length - this.countActivePointers();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "totalActivePointers", {
                get: function () {
                    return this.countActivePointers();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "worldX", {
                get: function () {
                    return this.x;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Input.prototype, "worldY", {
                get: function () {
                    return this.y;
                },
                enumerable: true,
                configurable: true
            });
            Input.prototype.boot = function () {
                this.mousePointer = new bridge.Pointer(this.game, 0, bridge.PointerMode.CURSOR);
                this.addPointer();
                this.addPointer();
                this.mouse = new bridge.Mouse(this.game);
                this.touch = new bridge.Touch(this.game);
                this.mspointer = new bridge.MSPointer(this.game);
                if (bridge.Keyboard) {
                    this.keyboard = new bridge.Keyboard(this.game);
                }
                this.onDown = new bridge.Signal();
                this.onUp = new bridge.Signal();
                this.onTap = new bridge.Signal();
                this.onHold = new bridge.Signal();
                this.scale = new bridge.Point(1, 1);
                this.speed = new bridge.Point();
                this.position = new bridge.Point();
                this._oldPosition = new bridge.Point();
                this.circle = new bridge.Circle(0, 0, 44);
                this.activePointer = this.mousePointer;
                this.hitCanvas = bridge.CanvasPool.create(this, 1, 1);
                this.hitContext = this.hitCanvas.getContext("2d");
                this.mouse.start();
                if (!this.game.device.mspointer) {
                    this.touch.start();
                }
                this.mspointer.start();
                this.mousePointer.active = true;
                if (this.keyboard) {
                    this.keyboard.start();
                }
                var _this = this;
                this._onClickTrampoline = function (event) {
                    _this.onClickTrampoline(event);
                };
                this.game.canvas.addEventListener("click", this._onClickTrampoline, false);
            };
            Input.prototype.destroy = function () {
                this.mouse.stop();
                this.touch.stop();
                this.mspointer.stop();
                if (this.keyboard) {
                    this.keyboard.stop();
                }
                this.moveCallbacks = [];
                bridge.CanvasPool.remove(this);
                this.game.canvas.removeEventListener("click", this._onClickTrampoline);
            };
            Input.prototype.setInteractiveCandidateHandler = function (callback, context) {
                this.customCandidateHandler = callback;
                this.customCandidateHandlerContext = context;
            };
            Input.prototype.addMoveCallback = function (callback, context) {
                this.moveCallbacks.push({ callback: callback, context: context });
            };
            Input.prototype.deleteMoveCallback = function (callback, context) {
                var i = this.moveCallbacks.length;
                while (i--) {
                    if (this.moveCallbacks[i].callback === callback && this.moveCallbacks[i].context === context) {
                        this.moveCallbacks.splice(i, 1);
                        return;
                    }
                }
            };
            Input.prototype.addPointer = function () {
                if (this.pointers.length >= Input.MAX_POINTERS) {
                    console.warn("Input.addPointer: Maximum limit of " + Input.MAX_POINTERS + " pointers reached.");
                    return null;
                }
                var id = this.pointers.length + 1;
                var pointer = new bridge.Pointer(this.game, id, bridge.PointerMode.CONTACT);
                this.pointers.push(pointer);
                this["pointer" + id] = pointer;
                return pointer;
            };
            Input.prototype.update = function () {
                if (this.keyboard) {
                    this.keyboard.update();
                }
                if (this.pollRate > 0 && this._pollCounter < this.pollRate) {
                    this._pollCounter++;
                    return;
                }
                this.speed.x = this.position.x - this._oldPosition.x;
                this.speed.y = this.position.y - this._oldPosition.y;
                this._oldPosition.copyFrom(this.position);
                this.mousePointer.update();
                for (var i = 0; i < this.pointers.length; i++) {
                    this.pointers[i].update();
                }
                this._pollCounter = 0;
            };
            Input.prototype.reset = function (hard) {
                if (!this.game.isBooted || this.resetLocked) {
                    return;
                }
                if (hard === undefined) {
                    hard = false;
                }
                this.mousePointer.reset();
                if (this.keyboard) {
                    this.keyboard.reset(hard);
                }
                for (var i = 0; i < this.pointers.length; i++) {
                    this.pointers[i].reset();
                }
                if (this.game.canvas.style.cursor !== "none") {
                    this.game.canvas.style.cursor = "inherit";
                }
                if (hard) {
                    this.onDown.dispose();
                    this.onUp.dispose();
                    this.onTap.dispose();
                    this.onHold.dispose();
                    this.onDown = new bridge.Signal();
                    this.onUp = new bridge.Signal();
                    this.onTap = new bridge.Signal();
                    this.onHold = new bridge.Signal();
                    this.moveCallbacks = [];
                }
                this._pollCounter = 0;
            };
            Input.prototype.resetSpeed = function (x, y) {
                this._oldPosition.set(x, y);
                this.speed.set(0, 0);
            };
            Input.prototype.startPointer = function (event) {
                if (this.maxPointers >= 0 && this.countActivePointers(this.maxPointers) >= this.maxPointers) {
                    return null;
                }
                for (var i = 0; i < this.pointers.length; i++) {
                    this.pointers[i].reset();
                }
                if (!this.pointer1.active) {
                    return this.pointer1.start(event);
                }
                if (!this.pointer2.active) {
                    return this.pointer2.start(event);
                }
                for (var i = 2; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (!pointer.active) {
                        return pointer.start(event);
                    }
                }
                return null;
            };
            Input.prototype.updatePointer = function (event) {
                if (this.pointer1.active && this.pointer1.identifier === event.identifier) {
                    return this.pointer1.move(event);
                }
                if (this.pointer2.active && this.pointer2.identifier === event.identifier) {
                    return this.pointer2.move(event);
                }
                for (var i = 2; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.active && pointer.identifier === event.identifier) {
                        return pointer.move(event);
                    }
                }
                return null;
            };
            Input.prototype.stopPointer = function (event) {
                if (this.pointer1.active && this.pointer1.identifier === event.identifier) {
                    return this.pointer1.stop(event);
                }
                if (this.pointer2.active && this.pointer2.identifier === event.identifier) {
                    return this.pointer2.stop(event);
                }
                for (var i = 2; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.active && pointer.identifier === event.identifier) {
                        return pointer.stop(event);
                    }
                }
                return null;
            };
            Input.prototype.countActivePointers = function (limit) {
                if (limit === undefined) {
                    limit = this.pointers.length;
                }
                var count = limit;
                for (var i = 0; i < this.pointers.length && count > 0; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.active) {
                        count--;
                    }
                }
                return (limit - count);
            };
            Input.prototype.getPointer = function (isActive) {
                if (isActive === undefined) {
                    isActive = false;
                }
                for (var i = 0; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.active === isActive) {
                        return pointer;
                    }
                }
                return null;
            };
            Input.prototype.getPointerFromId = function (pointerId) {
                for (var i = 0; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.pointerId === pointerId) {
                        return pointer;
                    }
                }
                return null;
            };
            Input.prototype.getLocalPosition = function (displayObject, pointer, output) {
                if (output === undefined) {
                    output = new bridge.Point();
                }
                var wt = displayObject.worldTransform;
                var id = 1 / (wt.a * wt.d + wt.c * -wt.b);
                output.set(wt.d * id * pointer.x + -wt.c * id * pointer.y + (wt.ty * wt.c - wt.tx * wt.d) * id, wt.a * id * pointer.y + -wt.b * id * pointer.x + (-wt.ty * wt.a + wt.tx * wt.b) * id);
                return output;
            };
            Input.prototype.getPointerFromIdentifier = function (identifier) {
                for (var i = 0; i < this.pointers.length; i++) {
                    var pointer = this.pointers[i];
                    if (pointer.identifier === identifier) {
                        return pointer;
                    }
                }
                return null;
            };
            Input.prototype.hitTest = function (displayObject, pointer, localPoint) {
                if (!displayObject.worldVisible) {
                    return false;
                }
                this.getLocalPosition(displayObject, pointer, this._localPoint);
                localPoint.copyFrom(this._localPoint);
                if (displayObject.hitArea && displayObject.hitArea.contains) {
                    return (displayObject.hitArea.contains(this._localPoint.x, this._localPoint.y));
                }
                else if (displayObject instanceof PIXI.extras.TilingSprite) {
                    var width = displayObject.width;
                    var height = displayObject.height;
                    var x1 = -width * displayObject.anchor.x;
                    if (this._localPoint.x >= x1 && this._localPoint.x < x1 + width) {
                        var y1 = -height * displayObject.anchor.y;
                        if (this._localPoint.y >= y1 && this._localPoint.y < y1 + height) {
                            return true;
                        }
                    }
                }
                else if (displayObject instanceof PIXI.Sprite) {
                    var width = displayObject.texture.frame.width;
                    var height = displayObject.texture.frame.height;
                    var x1 = -width * displayObject.anchor.x;
                    if (this._localPoint.x >= x1 && this._localPoint.x < x1 + width) {
                        var y1 = -height * displayObject.anchor.y;
                        if (this._localPoint.y >= y1 && this._localPoint.y < y1 + height) {
                            return true;
                        }
                    }
                }
                else if (displayObject instanceof bridge.Graphics) {
                    for (var i = 0; i < displayObject.geometry.graphicsData.length; i++) {
                        var data = displayObject.geometry.graphicsData[i];
                        if (!data.fillStyle) {
                            continue;
                        }
                        if (data.shape && data.shape.contains(this._localPoint.x, this._localPoint.y)) {
                            return true;
                        }
                    }
                }
                for (var i = 0; i < displayObject.children.length; i++) {
                    if (this.hitTest(displayObject.children[i], pointer, localPoint)) {
                        return true;
                    }
                }
                return false;
            };
            Input.prototype.onClickTrampoline = function (event) {
                this.activePointer.processClickTrampolines();
            };
            Input.MAX_POINTERS = 10;
            Input.MOUSE_OVERRIDES_TOUCH = 0;
            Input.MOUSE_TOUCH_COMBINE = 2;
            Input.TOUCH_OVERRIDES_MOUSE = 1;
            return Input;
        }());
        bridge.Input = Input;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var InputHandler = (function () {
            function InputHandler(sprite) {
                this.enabled = false;
                this.checked = false;
                this.priorityID = 0;
                this.useHandCursor = false;
                this._draggedPointerID = 0;
                this._setHandCursor = false;
                this.isDragged = false;
                this.allowHorizontalDrag = false;
                this.allowVerticalDrag = false;
                this.bringToTop = false;
                this.snapOffset = null;
                this.snapOnDrag = false;
                this.snapOnRelease = false;
                this.snapX = 0;
                this.snapY = 0;
                this.snapOffsetX = 0;
                this.snapOffsetY = 0;
                this.pixelPerfectOver = false;
                this.pixelPerfectClick = false;
                this.pixelPerfectAlpha = 255;
                this.draggable = false;
                this.boundsRect = null;
                this.boundsSprite = null;
                this.scaleLayer = false;
                this.dragOffset = new bridge.Point();
                this.dragFromCenter = false;
                this.dragStopBlocksInputUp = false;
                this.dragStartPoint = new bridge.Point();
                this.dragDistanceThreshold = 0;
                this.dragTimeThreshold = 0;
                this.downPoint = new bridge.Point();
                this.snapPoint = new bridge.Point();
                this._dragPoint = new bridge.Point();
                this._dragPhase = false;
                this._pendingDrag = false;
                this._dragTimePass = false;
                this._dragDistancePass = false;
                this._wasEnabled = false;
                this._tempPoint = new bridge.Point();
                this._pointerData = [];
                this.sprite = sprite;
                this.game = sprite.game;
                this._pointerData.push({
                    id: 0,
                    x: 0,
                    y: 0,
                    camX: 0,
                    camY: 0,
                    isDown: false,
                    isUp: false,
                    isOver: false,
                    isOut: false,
                    timeOver: 0,
                    timeOut: 0,
                    timeDown: 0,
                    timeUp: 0,
                    downDuration: 0,
                    isDragged: false
                });
            }
            InputHandler.prototype.start = function (priority, useHandCursor) {
                priority = priority || 0;
                if (useHandCursor === undefined) {
                    useHandCursor = false;
                }
                if (this.enabled === false) {
                    this.game.input.interactiveItems.add(this);
                    this.useHandCursor = useHandCursor;
                    this.priorityID = priority;
                    for (var i = 0; i < 10; i++) {
                        this._pointerData[i] = {
                            id: i,
                            x: 0,
                            y: 0,
                            isDown: false,
                            isUp: false,
                            isOver: false,
                            isOut: false,
                            timeOver: 0,
                            timeOut: 0,
                            timeDown: 0,
                            timeUp: 0,
                            downDuration: 0,
                            isDragged: false
                        };
                    }
                    this.snapOffset = new bridge.Point();
                    this.enabled = true;
                    this._wasEnabled = true;
                }
                this.sprite.events.onAddedToGroup.add(this.addedToGroup, this);
                this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup, this);
                return this.sprite;
            };
            InputHandler.prototype.addedToGroup = function () {
                if (this._dragPhase) {
                    return;
                }
                if (this._wasEnabled && !this.enabled) {
                    this.start();
                }
            };
            InputHandler.prototype.removedFromGroup = function () {
                if (this._dragPhase) {
                    return;
                }
                if (this.enabled) {
                    this._wasEnabled = true;
                    this.stop();
                }
                else {
                    this._wasEnabled = false;
                }
            };
            InputHandler.prototype.reset = function () {
                this.enabled = false;
                for (var i = 0; i < 10; i++) {
                    this._pointerData[i] = {
                        id: i,
                        x: 0,
                        y: 0,
                        isDown: false,
                        isUp: false,
                        isOver: false,
                        isOut: false,
                        timeOver: 0,
                        timeOut: 0,
                        timeDown: 0,
                        timeUp: 0,
                        downDuration: 0,
                        isDragged: false
                    };
                }
            };
            InputHandler.prototype.stop = function () {
                if (this.enabled === false) {
                    return;
                }
                else {
                    this.enabled = false;
                    this.game.input.interactiveItems.remove(this);
                }
            };
            InputHandler.prototype.destroy = function () {
                if (this.sprite) {
                    if (this._setHandCursor) {
                        this.game.canvas.style.cursor = "default";
                        this._setHandCursor = false;
                    }
                    this.enabled = false;
                    this.game.input.interactiveItems.remove(this);
                    this._pointerData.length = 0;
                    this.boundsRect = null;
                    this.boundsSprite = null;
                    this.sprite = null;
                }
            };
            InputHandler.prototype.validForInput = function (highestID, highestRenderID, includePixelPerfect) {
                if (includePixelPerfect === undefined) {
                    includePixelPerfect = true;
                }
                if (!this.enabled ||
                    this.sprite.scale.x === 0 ||
                    this.sprite.scale.y === 0 ||
                    this.priorityID < this.game.input.minPriorityID ||
                    (this.sprite.parent && !this.sprite.parent.interactiveChildren)) {
                    return false;
                }
                if (!includePixelPerfect && (this.pixelPerfectClick || this.pixelPerfectOver)) {
                    return false;
                }
                if (this.priorityID > highestID || (this.priorityID === highestID)) {
                    return true;
                }
                return false;
            };
            InputHandler.prototype.isPixelPerfect = function () {
                return (this.pixelPerfectClick || this.pixelPerfectOver);
            };
            InputHandler.prototype.pointerX = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].x;
            };
            InputHandler.prototype.pointerY = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].y;
            };
            InputHandler.prototype.pointerDown = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].isDown;
            };
            InputHandler.prototype.pointerUp = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].isUp;
            };
            InputHandler.prototype.pointerTimeDown = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].timeDown;
            };
            InputHandler.prototype.pointerTimeUp = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].timeUp;
            };
            InputHandler.prototype.pointerOver = function (pointerId) {
                if (!this.enabled) {
                    return false;
                }
                if (pointerId === undefined) {
                    for (var i = 0; i < 10; i++) {
                        if (this._pointerData[i].isOver) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return this._pointerData[pointerId].isOver;
                }
            };
            InputHandler.prototype.pointerOut = function (pointerId) {
                if (!this.enabled) {
                    return false;
                }
                if (pointerId === undefined) {
                    for (var i = 0; i < 10; i++) {
                        if (this._pointerData[i].isOut) {
                            return true;
                        }
                    }
                }
                else {
                    return this._pointerData[pointerId].isOut;
                }
            };
            InputHandler.prototype.pointerTimeOver = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].timeOver;
            };
            InputHandler.prototype.pointerTimeOut = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].timeOut;
            };
            InputHandler.prototype.pointerDragged = function (pointerId) {
                pointerId = pointerId || 0;
                return this._pointerData[pointerId].isDragged;
            };
            InputHandler.prototype.checkPointerDown = function (pointer, fastTest) {
                if (!pointer.isDown ||
                    !this.enabled ||
                    !this.sprite ||
                    !this.sprite.parent ||
                    !this.sprite.visible ||
                    !this.sprite.parent.visible ||
                    this.sprite.worldTransform.a === 0 ||
                    this.sprite.worldTransform.d === 0) {
                    return false;
                }
                if (this.game.input.hitTest(this.sprite, pointer, this._tempPoint)) {
                    if (fastTest === undefined) {
                        fastTest = false;
                    }
                    if (!fastTest && this.pixelPerfectClick) {
                        return this.checkPixel(this._tempPoint.x, this._tempPoint.y);
                    }
                    else {
                        return true;
                    }
                }
                return false;
            };
            InputHandler.prototype.checkPointerOver = function (pointer, fastTest) {
                if (!this.enabled ||
                    !this.sprite ||
                    !this.sprite.parent ||
                    !this.sprite.visible ||
                    !this.sprite.parent.visible ||
                    this.sprite.worldTransform.a === 0 ||
                    this.sprite.worldTransform.d === 0) {
                    return false;
                }
                if (this.game.input.hitTest(this.sprite, pointer, this._tempPoint)) {
                    if (fastTest === undefined) {
                        fastTest = false;
                    }
                    if (!fastTest && this.pixelPerfectOver) {
                        return this.checkPixel(this._tempPoint.x, this._tempPoint.y);
                    }
                    else {
                        return true;
                    }
                }
                return false;
            };
            InputHandler.prototype.checkPixel = function (x, y, pointer) {
                if (this.sprite.texture.baseTexture.source) {
                    if (x === null && y === null) {
                        this.game.input.getLocalPosition(this.sprite, pointer, this._tempPoint);
                    }
                    if (this.sprite.anchor.x !== 0) {
                        x -= -this.sprite.texture.frame.width * this.sprite.anchor.x;
                    }
                    if (this.sprite.anchor.y !== 0) {
                        y -= -this.sprite.texture.frame.height * this.sprite.anchor.y;
                    }
                    x += this.sprite.texture.frame.x;
                    y += this.sprite.texture.frame.y;
                    if (this.sprite.texture.trim) {
                        x -= this.sprite.texture.trim.x;
                        y -= this.sprite.texture.trim.y;
                        if (x < this.sprite.texture.frame.x || x > this.sprite.texture.frame.right || y < this.sprite.texture.frame.y || y > this.sprite.texture.frame.bottom) {
                            return false;
                        }
                    }
                    this.game.input.hitContext.clearRect(0, 0, 1, 1);
                    this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, x, y, 1, 1, 0, 0, 1, 1);
                    var rgb = this.game.input.hitContext.getImageData(0, 0, 1, 1);
                    if (rgb.data[3] >= this.pixelPerfectAlpha) {
                        return true;
                    }
                }
                return false;
            };
            InputHandler.prototype.update = function (pointer) {
                if (this.sprite === null || this.sprite.parent === undefined) {
                    return;
                }
                if (!this.enabled || !this.sprite.visible || !this.sprite.parent.visible) {
                    this._pointerOutHandler(pointer);
                    return false;
                }
                if (this._pendingDrag) {
                    if (!this._dragDistancePass) {
                        this._dragDistancePass = (bridge.Maths.distance(pointer.x, pointer.y, this.downPoint.x, this.downPoint.y) >= this.dragDistanceThreshold);
                    }
                    if (this._dragDistancePass && this._dragTimePass) {
                        this.startDrag(pointer);
                    }
                    return true;
                }
                else if (this.draggable && this._draggedPointerID === pointer.id) {
                    return this.updateDrag(pointer, false);
                }
                else if (this._pointerData[pointer.id].isOver) {
                    if (this.checkPointerOver(pointer)) {
                        this._pointerData[pointer.id].x = pointer.x - this.sprite.x;
                        this._pointerData[pointer.id].y = pointer.y - this.sprite.y;
                        return true;
                    }
                    else {
                        this._pointerOutHandler(pointer);
                        return false;
                    }
                }
            };
            InputHandler.prototype._pointerOverHandler = function (pointer, silent) {
                if (this.sprite === null) {
                    return;
                }
                var data = this._pointerData[pointer.id];
                if (data.isOver === false || pointer.dirty) {
                    var sendEvent = (data.isOver === false);
                    data.isOver = true;
                    data.isOut = false;
                    data.timeOver = this.game.time.time;
                    data.x = pointer.x - this.sprite.x;
                    data.y = pointer.y - this.sprite.y;
                    if (this.useHandCursor && data.isDragged === false) {
                        this.game.canvas.style.cursor = "pointer";
                        this._setHandCursor = true;
                    }
                    if (!silent && sendEvent && this.sprite && this.sprite.events) {
                        this.sprite.events.onInputOver$dispatch(this.sprite, pointer);
                    }
                    if (this.sprite.parent) {
                        this.sprite.parent.__proto__.onChildInputOver.dispatch(this.sprite, pointer);
                    }
                }
            };
            InputHandler.prototype._pointerOutHandler = function (pointer, silent) {
                if (this.sprite === null) {
                    return;
                }
                var data = this._pointerData[pointer.id];
                data.isOver = false;
                data.isOut = true;
                data.timeOut = this.game.time.time;
                if (this.useHandCursor && data.isDragged === false) {
                    this.game.canvas.style.cursor = "default";
                    this._setHandCursor = false;
                }
                if (!silent && this.sprite && this.sprite.events) {
                    this.sprite.events.onInputOut$dispatch(this.sprite, pointer);
                    if (this.sprite && this.sprite.parent) {
                        this.sprite.parent.__proto__.onChildInputOut.dispatch(this.sprite, pointer);
                    }
                }
            };
            InputHandler.prototype._touchedHandler = function (pointer) {
                if (this.sprite === null) {
                    return;
                }
                var data = this._pointerData[pointer.id];
                if (!data.isDown && data.isOver) {
                    if (this.pixelPerfectClick && !this.checkPixel(null, null, pointer)) {
                        return;
                    }
                    data.isDown = true;
                    data.isUp = false;
                    data.timeDown = this.game.time.time;
                    this.downPoint.set(pointer.x, pointer.y);
                    pointer.dirty = true;
                    if (this.sprite && this.sprite.events) {
                        this.sprite.events.onInputDown$dispatch(this.sprite, pointer);
                        if (this.sprite && this.sprite.parent) {
                            this.sprite.parent.__proto__.onChildInputDown.dispatch(this.sprite, pointer);
                        }
                        if (this.sprite === null) {
                            return;
                        }
                    }
                    if (this.draggable && this.isDragged === false) {
                        if (this.dragTimeThreshold === 0 && this.dragDistanceThreshold === 0) {
                            this.startDrag(pointer);
                        }
                        else {
                            this._pendingDrag = true;
                            this._dragDistancePass = (this.dragDistanceThreshold === 0);
                            if (this.dragTimeThreshold > 0) {
                                this._dragTimePass = false;
                                this.game.time.events.add(this.dragTimeThreshold, this.dragTimeElapsed, this, pointer);
                            }
                            else {
                                this._dragTimePass = true;
                            }
                        }
                    }
                }
            };
            InputHandler.prototype.dragTimeElapsed = function (pointer) {
                this._dragTimePass = true;
                if (this._pendingDrag && this.sprite) {
                    if (this._dragDistancePass) {
                        this.startDrag(pointer);
                    }
                }
            };
            InputHandler.prototype._releasedHandler = function (pointer) {
                if (this.sprite === null) {
                    return;
                }
                var data = this._pointerData[pointer.id];
                if (data.isDown && pointer.isUp) {
                    data.isDown = false;
                    data.isUp = true;
                    data.timeUp = this.game.time.time;
                    data.downDuration = data.timeUp - data.timeDown;
                    var isOver = this.checkPointerOver(pointer);
                    if (this.sprite && this.sprite.events) {
                        if (!this.dragStopBlocksInputUp ||
                            this.dragStopBlocksInputUp && !(this.draggable && this.isDragged && this._draggedPointerID === pointer.id)) {
                            this.sprite.events.onInputUp$dispatch(this.sprite, pointer, isOver);
                        }
                        if (this.sprite && this.sprite.parent) {
                            this.sprite.parent.__proto__.onChildInputUp.dispatch(this.sprite, pointer, isOver);
                        }
                        if (isOver) {
                            isOver = this.checkPointerOver(pointer);
                        }
                    }
                    data.isOver = isOver;
                    if (!isOver && this.useHandCursor) {
                        this.game.canvas.style.cursor = "default";
                        this._setHandCursor = false;
                    }
                    pointer.dirty = true;
                    this._pendingDrag = false;
                    if (this.draggable && this.isDragged && this._draggedPointerID === pointer.id) {
                        this.stopDrag(pointer);
                    }
                }
            };
            InputHandler.prototype.updateDrag = function (pointer, fromStart) {
                if (fromStart === undefined) {
                    fromStart = false;
                }
                if (pointer.isUp) {
                    this.stopDrag(pointer);
                    return false;
                }
                var px = this.globalToLocalX(pointer.x) + this._dragPoint.x + this.dragOffset.x;
                var py = this.globalToLocalY(pointer.y) + this._dragPoint.y + this.dragOffset.y;
                if (this.sprite.fixedToCamera) {
                    if (this.allowHorizontalDrag) {
                        this.sprite.cameraOffset.x = px;
                    }
                    if (this.allowVerticalDrag) {
                        this.sprite.cameraOffset.y = py;
                    }
                    if (this.boundsRect) {
                        this.checkBoundsRect();
                    }
                    if (this.boundsSprite) {
                        this.checkBoundsSprite();
                    }
                    if (this.snapOnDrag) {
                        this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX);
                        this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY);
                        this.snapPoint.set(this.sprite.cameraOffset.x, this.sprite.cameraOffset.y);
                    }
                }
                else {
                    var cx = this.game.camera.x - this._pointerData[pointer.id].camX;
                    var cy = this.game.camera.y - this._pointerData[pointer.id].camY;
                    if (this.allowHorizontalDrag) {
                        this.sprite.x = px + cx;
                    }
                    if (this.allowVerticalDrag) {
                        this.sprite.y = py + cy;
                    }
                    if (this.boundsRect) {
                        this.checkBoundsRect();
                    }
                    if (this.boundsSprite) {
                        this.checkBoundsSprite();
                    }
                    if (this.snapOnDrag) {
                        this.sprite.x = Math.round((this.sprite.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX);
                        this.sprite.y = Math.round((this.sprite.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY);
                        this.snapPoint.set(this.sprite.x, this.sprite.y);
                    }
                }
                this.sprite.events.onDragUpdate.dispatch(this.sprite, pointer, px, py, this.snapPoint, fromStart);
                return true;
            };
            InputHandler.prototype.justOver = function (pointerId, delay) {
                pointerId = pointerId || 0;
                delay = delay || 500;
                return (this._pointerData[pointerId].isOver && this.overDuration(pointerId) < delay);
            };
            InputHandler.prototype.justOut = function (pointerId, delay) {
                pointerId = pointerId || 0;
                delay = delay || 500;
                return (this._pointerData[pointerId].isOut && (this.game.time.time - this._pointerData[pointerId].timeOut < delay));
            };
            InputHandler.prototype.justPressed = function (pointerId, delay) {
                pointerId = pointerId || 0;
                delay = delay || 500;
                return (this._pointerData[pointerId].isDown && this.downDuration(pointerId) < delay);
            };
            InputHandler.prototype.justReleased = function (pointerId, delay) {
                pointerId = pointerId || 0;
                delay = delay || 500;
                return (this._pointerData[pointerId].isUp && (this.game.time.time - this._pointerData[pointerId].timeUp < delay));
            };
            InputHandler.prototype.overDuration = function (pointerId) {
                pointerId = pointerId || 0;
                if (this._pointerData[pointerId].isOver) {
                    return this.game.time.time - this._pointerData[pointerId].timeOver;
                }
                return -1;
            };
            InputHandler.prototype.downDuration = function (pointerId) {
                pointerId = pointerId || 0;
                if (this._pointerData[pointerId].isDown) {
                    return this.game.time.time - this._pointerData[pointerId].timeDown;
                }
                return -1;
            };
            InputHandler.prototype.enableDrag = function (lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite) {
                if (lockCenter === undefined) {
                    lockCenter = false;
                }
                if (bringToTop === undefined) {
                    bringToTop = false;
                }
                if (pixelPerfect === undefined) {
                    pixelPerfect = false;
                }
                if (alphaThreshold === undefined) {
                    alphaThreshold = 255;
                }
                if (boundsRect === undefined) {
                    boundsRect = null;
                }
                if (boundsSprite === undefined) {
                    boundsSprite = null;
                }
                this._dragPoint = new bridge.Point();
                this.draggable = true;
                this.bringToTop = bringToTop;
                this.dragOffset = new bridge.Point();
                this.dragFromCenter = lockCenter;
                this.pixelPerfectClick = pixelPerfect;
                this.pixelPerfectAlpha = alphaThreshold;
                if (boundsRect) {
                    this.boundsRect = boundsRect;
                }
                if (boundsSprite) {
                    this.boundsSprite = boundsSprite;
                }
            };
            InputHandler.prototype.disableDrag = function () {
                if (this._pointerData) {
                    for (var i = 0; i < 10; i++) {
                        this._pointerData[i].isDragged = false;
                    }
                }
                this.draggable = false;
                this.isDragged = false;
                this._draggedPointerID = -1;
                this._pendingDrag = false;
            };
            InputHandler.prototype.startDrag = function (pointer) {
                var x = this.sprite.x;
                var y = this.sprite.y;
                this.isDragged = true;
                this._draggedPointerID = pointer.id;
                this._pointerData[pointer.id].camX = this.game.camera.x;
                this._pointerData[pointer.id].camY = this.game.camera.y;
                this._pointerData[pointer.id].isDragged = true;
                if (this.sprite.fixedToCamera) {
                    if (this.dragFromCenter) {
                        this.sprite.cameraOffset.x = this.globalToLocalX(pointer.x) + (this.sprite.cameraOffset.x - bridge.getCenterX(this.sprite));
                        this.sprite.cameraOffset.y = this.globalToLocalY(pointer.y) + (this.sprite.cameraOffset.y - bridge.getCenterY(this.sprite));
                    }
                    this._dragPoint.set(this.sprite.cameraOffset.x - pointer.x, this.sprite.cameraOffset.y - pointer.y);
                }
                else {
                    if (this.dragFromCenter) {
                        this.sprite.x = this.globalToLocalX(pointer.x) + (this.sprite.x - bridge.getCenterX(this.sprite));
                        this.sprite.y = this.globalToLocalY(pointer.y) + (this.sprite.y - bridge.getCenterY(this.sprite));
                    }
                    this._dragPoint.set(this.sprite.x - this.globalToLocalX(pointer.x), this.sprite.y - this.globalToLocalY(pointer.y));
                }
                this.updateDrag(pointer, true);
                this.dragStartPoint.set(x, y);
                this.sprite.events.onDragStart$dispatch(this.sprite, pointer, x, y);
                this._pendingDrag = false;
            };
            InputHandler.prototype.globalToLocalX = function (x) {
                return x;
            };
            InputHandler.prototype.globalToLocalY = function (y) {
                return y;
            };
            InputHandler.prototype.stopDrag = function (pointer) {
                this.isDragged = false;
                this._draggedPointerID = -1;
                this._pointerData[pointer.id].isDragged = false;
                this._dragPhase = false;
                this._pendingDrag = false;
                if (this.snapOnRelease) {
                    if (this.sprite.fixedToCamera) {
                        this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX);
                        this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY);
                    }
                    else {
                        this.sprite.x = Math.round((this.sprite.x - (this.snapOffsetX % this.snapX)) / this.snapX) * this.snapX + (this.snapOffsetX % this.snapX);
                        this.sprite.y = Math.round((this.sprite.y - (this.snapOffsetY % this.snapY)) / this.snapY) * this.snapY + (this.snapOffsetY % this.snapY);
                    }
                }
                this.sprite.events.onDragStop.dispatch(this.sprite, pointer);
                if (this.checkPointerOver(pointer) === false) {
                    this._pointerOutHandler(pointer);
                }
            };
            InputHandler.prototype.setDragLock = function (allowHorizontal, allowVertical) {
                if (allowHorizontal === undefined) {
                    allowHorizontal = true;
                }
                if (allowVertical === undefined) {
                    allowVertical = true;
                }
                this.allowHorizontalDrag = allowHorizontal;
                this.allowVerticalDrag = allowVertical;
            };
            InputHandler.prototype.enableSnap = function (snapX, snapY, onDrag, onRelease, snapOffsetX, snapOffsetY) {
                if (onDrag === undefined) {
                    onDrag = true;
                }
                if (onRelease === undefined) {
                    onRelease = false;
                }
                if (snapOffsetX === undefined) {
                    snapOffsetX = 0;
                }
                if (snapOffsetY === undefined) {
                    snapOffsetY = 0;
                }
                this.snapX = snapX;
                this.snapY = snapY;
                this.snapOffsetX = snapOffsetX;
                this.snapOffsetY = snapOffsetY;
                this.snapOnDrag = onDrag;
                this.snapOnRelease = onRelease;
            };
            InputHandler.prototype.disableSnap = function () {
                this.snapOnDrag = false;
                this.snapOnRelease = false;
            };
            InputHandler.prototype.checkBoundsRect = function () {
                if (this.sprite.fixedToCamera) {
                    if (this.sprite.cameraOffset.x < this.boundsRect.left) {
                        this.sprite.cameraOffset.x = this.boundsRect.left;
                    }
                    else if ((this.sprite.cameraOffset.x + this.sprite.width) > this.boundsRect.right) {
                        this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width;
                    }
                    if (this.sprite.cameraOffset.y < this.boundsRect.top) {
                        this.sprite.cameraOffset.y = this.boundsRect.top;
                    }
                    else if ((this.sprite.cameraOffset.y + this.sprite.height) > this.boundsRect.bottom) {
                        this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height;
                    }
                }
                else {
                    if (this.sprite.left < this.boundsRect.left) {
                        this.sprite.x = this.boundsRect.x + this.sprite.offsetX;
                    }
                    else if (this.sprite.right > this.boundsRect.right) {
                        this.sprite.x = this.boundsRect.right - (this.sprite.width - this.sprite.offsetX);
                    }
                    if (this.sprite.top < this.boundsRect.top) {
                        this.sprite.y = this.boundsRect.top + this.sprite.offsetY;
                    }
                    else if (this.sprite.bottom > this.boundsRect.bottom) {
                        this.sprite.y = this.boundsRect.bottom - (this.sprite.height - this.sprite.offsetY);
                    }
                }
            };
            InputHandler.prototype.checkBoundsSprite = function () {
                if (this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera) {
                    if (this.sprite.cameraOffset.x < this.boundsSprite.cameraOffset.x) {
                        this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x;
                    }
                    else if ((this.sprite.cameraOffset.x + this.sprite.width) > (this.boundsSprite.cameraOffset.x + this.boundsSprite.width)) {
                        this.sprite.cameraOffset.x = (this.boundsSprite.cameraOffset.x + this.boundsSprite.width) - this.sprite.width;
                    }
                    if (this.sprite.cameraOffset.y < this.boundsSprite.cameraOffset.y) {
                        this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y;
                    }
                    else if ((this.sprite.cameraOffset.y + this.sprite.height) > (this.boundsSprite.cameraOffset.y + this.boundsSprite.height)) {
                        this.sprite.cameraOffset.y = (this.boundsSprite.cameraOffset.y + this.boundsSprite.height) - this.sprite.height;
                    }
                }
                else {
                    if (this.sprite.left < this.boundsSprite.left) {
                        this.sprite.x = this.boundsSprite.left + this.sprite.offsetX;
                    }
                    else if (this.sprite.right > this.boundsSprite.right) {
                        this.sprite.x = this.boundsSprite.right - (this.sprite.width - this.sprite.offsetX);
                    }
                    if (this.sprite.top < this.boundsSprite.top) {
                        this.sprite.y = this.boundsSprite.top + this.sprite.offsetY;
                    }
                    else if (this.sprite.bottom > this.boundsSprite.bottom) {
                        this.sprite.y = this.boundsSprite.bottom - (this.sprite.height - this.sprite.offsetY);
                    }
                }
            };
            return InputHandler;
        }());
        bridge.InputHandler = InputHandler;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Key = (function () {
            function Key(game, keyCode) {
                this._enabled = true;
                this.event = null;
                this.isDown = false;
                this.isUp = true;
                this.altKey = false;
                this.ctrlKey = false;
                this.shiftKey = false;
                this.timeDown = 0;
                this.duration = 0;
                this.timeUp = -2500;
                this.repeats = 0;
                this.onDown = new bridge.Signal();
                this.onHoldCallback = null;
                this.onHoldContext = null;
                this.onUp = new bridge.Signal();
                this._justDown = false;
                this._justUp = false;
                this.game = game;
                this.keyCode = keyCode;
            }
            Object.defineProperty(Key.prototype, "justDown", {
                get: function () {
                    var current = this._justDown;
                    this._justDown = false;
                    return current;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Key.prototype, "justUp", {
                get: function () {
                    var current = this._justUp;
                    this._justUp = false;
                    return current;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Key.prototype, "enabled", {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    value = !!value;
                    if (value !== this._enabled) {
                        if (!value) {
                            this.reset(false);
                        }
                        this._enabled = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Key.prototype.update = function () {
                if (!this._enabled) {
                    return;
                }
                if (this.isDown) {
                    this.duration = this.game.time.time - this.timeDown;
                    this.repeats++;
                    if (this.onHoldCallback) {
                        this.onHoldCallback.call(this.onHoldContext, this);
                    }
                }
            };
            Key.prototype.processKeyDown = function (event) {
                if (!this._enabled) {
                    return;
                }
                this.event = event;
                if (this.isDown) {
                    return;
                }
                this.altKey = event.altKey;
                this.ctrlKey = event.ctrlKey;
                this.shiftKey = event.shiftKey;
                this.isDown = true;
                this.isUp = false;
                this.timeDown = this.game.time.time;
                this.duration = 0;
                this.repeats = 0;
                this._justDown = true;
                this.onDown.dispatch(this);
            };
            Key.prototype.processKeyUp = function (event) {
                if (!this._enabled) {
                    return;
                }
                this.event = event;
                if (this.isUp) {
                    return;
                }
                this.isDown = false;
                this.isUp = true;
                this.timeUp = this.game.time.time;
                this.duration = this.game.time.time - this.timeDown;
                this._justUp = true;
                this.onUp.dispatch(this);
            };
            Key.prototype.reset = function (hard) {
                if (hard === undefined) {
                    hard = true;
                }
                this.isDown = false;
                this.isUp = true;
                this.timeUp = this.game.time.time;
                this.duration = 0;
                this._enabled = true;
                this._justDown = false;
                this._justUp = false;
                if (hard) {
                    this.onDown.removeAll();
                    this.onUp.removeAll();
                    this.onHoldCallback = null;
                    this.onHoldContext = null;
                }
            };
            Key.prototype.downDuration = function (duration) {
                if (duration === undefined) {
                    duration = 50;
                }
                return (this.isDown && this.duration < duration);
            };
            Key.prototype.upDuration = function (duration) {
                if (duration === undefined) {
                    duration = 50;
                }
                return (!this.isDown && ((this.game.time.time - this.timeUp) < duration));
            };
            return Key;
        }());
        bridge.Key = Key;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Keyboard = (function () {
            function Keyboard(game) {
                this.enabled = true;
                this.event = null;
                this.pressEvent = null;
                this.callbackContext = this;
                this.onDownCallback = null;
                this.onPressCallback = null;
                this.onUpCallback = null;
                this._keys = [];
                this._capture = [];
                this._onKeyDown = null;
                this._onKeyPress = null;
                this._onKeyUp = null;
                this._i = 0;
                this._k = 0;
                this.game = game;
            }
            Object.defineProperty(Keyboard.prototype, "lastChar", {
                get: function () {
                    if (this.event.charCode === 32) {
                        return "";
                    }
                    else {
                        return String.fromCharCode(this.pressEvent.charCode);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Keyboard.prototype, "lastKey", {
                get: function () {
                    return this._keys[this._k];
                },
                enumerable: true,
                configurable: true
            });
            Keyboard.prototype.addCallbacks = function (context, onDown, onUp, onPress) {
                this.callbackContext = context;
                if (onDown !== undefined && onDown !== null) {
                    this.onDownCallback = onDown;
                }
                if (onUp !== undefined && onUp !== null) {
                    this.onUpCallback = onUp;
                }
                if (onPress !== undefined && onPress !== null) {
                    this.onPressCallback = onPress;
                }
            };
            Keyboard.prototype.addKey = function (keycode) {
                if (!this._keys[keycode]) {
                    this._keys[keycode] = new bridge.Key(this.game, keycode);
                    this.addKeyCapture(keycode);
                }
                return this._keys[keycode];
            };
            Keyboard.prototype.addKeys = function (keys) {
                var output = {};
                for (var key in keys) {
                    output[key] = this.addKey(keys[key]);
                }
                return output;
            };
            Keyboard.prototype.removeKey = function (keycode) {
                if (this._keys[keycode]) {
                    this._keys[keycode] = null;
                    this.removeKeyCapture(keycode);
                }
            };
            Keyboard.prototype.createCursorKeys = function () {
                return this.addKeys({ up: bridge.KeyCode.UP, down: bridge.KeyCode.DOWN, left: bridge.KeyCode.LEFT, right: bridge.KeyCode.RIGHT });
            };
            Keyboard.prototype.start = function () {
                if (this.game.device.cocoonJS) {
                    return;
                }
                if (this._onKeyDown !== null) {
                    return;
                }
                var _this = this;
                this._onKeyDown = function (event) {
                    return _this.processKeyDown(event);
                };
                this._onKeyUp = function (event) {
                    return _this.processKeyUp(event);
                };
                this._onKeyPress = function (event) {
                    return _this.processKeyPress(event);
                };
                window.addEventListener("keydown", this._onKeyDown, false);
                window.addEventListener("keyup", this._onKeyUp, false);
                window.addEventListener("keypress", this._onKeyPress, false);
            };
            Keyboard.prototype.stop = function () {
                window.removeEventListener("keydown", this._onKeyDown);
                window.removeEventListener("keyup", this._onKeyUp);
                window.removeEventListener("keypress", this._onKeyPress);
                this._onKeyDown = null;
                this._onKeyUp = null;
                this._onKeyPress = null;
            };
            Keyboard.prototype.destroy = function () {
                this.stop();
                this.clearCaptures();
                this._keys.length = 0;
                this._i = 0;
            };
            Keyboard.prototype.addKeyCapture = function (keycode) {
                if (typeof keycode === "object") {
                    for (var key in keycode) {
                        this._capture[keycode[key]] = true;
                    }
                }
                else {
                    this._capture[keycode] = true;
                }
            };
            Keyboard.prototype.removeKeyCapture = function (keycode) {
                delete this._capture[keycode];
            };
            Keyboard.prototype.clearCaptures = function () {
                this._capture = [];
            };
            Keyboard.prototype.update = function () {
                this._i = this._keys.length;
                while (this._i--) {
                    if (this._keys[this._i]) {
                        this._keys[this._i].update();
                    }
                }
            };
            Keyboard.prototype.processKeyDown = function (event) {
                this.event = event;
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                var key = event.keyCode;
                if (this._capture[key]) {
                    event.preventDefault();
                }
                if (!this._keys[key]) {
                    this._keys[key] = new bridge.Key(this.game, key);
                }
                this._keys[key].processKeyDown(event);
                this._k = key;
                if (this.onDownCallback) {
                    this.onDownCallback.call(this.callbackContext, event);
                }
            };
            Keyboard.prototype.processKeyPress = function (event) {
                this.pressEvent = event;
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                if (this.onPressCallback) {
                    this.onPressCallback.call(this.callbackContext, String.fromCharCode(event.charCode), event);
                }
            };
            Keyboard.prototype.processKeyUp = function (event) {
                this.event = event;
                if (!this.game.input.enabled || !this.enabled) {
                    return;
                }
                var key = event.keyCode;
                if (this._capture[key]) {
                    event.preventDefault();
                }
                if (!this._keys[key]) {
                    this._keys[key] = new bridge.Key(this.game, key);
                }
                this._keys[key].processKeyUp(event);
                if (this.onUpCallback) {
                    this.onUpCallback.call(this.callbackContext, event);
                }
            };
            Keyboard.prototype.reset = function (hard) {
                if (hard === undefined) {
                    hard = true;
                }
                this.event = null;
                var i = this._keys.length;
                while (i--) {
                    if (this._keys[i]) {
                        this._keys[i].reset(hard);
                    }
                }
            };
            Keyboard.prototype.downDuration = function (keycode, duration) {
                if (this._keys[keycode]) {
                    return this._keys[keycode].downDuration(duration);
                }
                else {
                    return null;
                }
            };
            Keyboard.prototype.upDuration = function (keycode, duration) {
                if (this._keys[keycode]) {
                    return this._keys[keycode].upDuration(duration);
                }
                else {
                    return null;
                }
            };
            Keyboard.prototype.isDown = function (keycode) {
                if (this._keys[keycode]) {
                    return this._keys[keycode].isDown;
                }
                else {
                    return null;
                }
            };
            return Keyboard;
        }());
        bridge.Keyboard = Keyboard;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Mouse = (function () {
            function Mouse(game) {
                this.mouseDownCallback = null;
                this.mouseUpCallback = null;
                this.mouseOutCallback = null;
                this.mouseOverCallback = null;
                this.mouseMoveCallback = null;
                this.mouseWheelCallback = null;
                this.capture = false;
                this.button = -1;
                this.wheelDelta = 0;
                this.enabled = true;
                this.locked = false;
                this.stopOnGameOut = false;
                this.pointerLock = new bridge.Signal();
                this.event = null;
                this._onMouseDown = null;
                this._onMouseMove = null;
                this._onMouseUp = null;
                this._onMouseOut = null;
                this._onMouseOver = null;
                this._onMouseWheel = null;
                this._onMouseUpGlobal = null;
                this._onMouseOutGlobal = null;
                this._wheelEvent = null;
                this._pointerLockChange = null;
                this.game = game;
                this.input = game.input;
                this.callbackContext = this.game;
            }
            Mouse.prototype.start = function () {
                if (this.game.device.android && this.game.device.chrome === false) {
                    return;
                }
                if (this._onMouseDown !== null) {
                    return;
                }
                var _this = this;
                this._onMouseDown = function (event) {
                    return _this.onMouseDown(event);
                };
                this._onMouseMove = function (event) {
                    return _this.onMouseMove(event);
                };
                this._onMouseUp = function (event) {
                    return _this.onMouseUp(event);
                };
                this._onMouseUpGlobal = function (event) {
                    return _this.onMouseUpGlobal(event);
                };
                this._onMouseOutGlobal = function (event) {
                    return _this.onMouseOutGlobal(event);
                };
                this._onMouseOut = function (event) {
                    return _this.onMouseOut(event);
                };
                this._onMouseOver = function (event) {
                    return _this.onMouseOver(event);
                };
                this._onMouseWheel = function (event) {
                    return _this.onMouseWheel(event);
                };
                var canvas = this.game.canvas;
                canvas.addEventListener("mousedown", this._onMouseDown, true);
                canvas.addEventListener("mousemove", this._onMouseMove, true);
                canvas.addEventListener("mouseup", this._onMouseUp, true);
                if (!this.game.device.cocoonJS) {
                    window.addEventListener("mouseup", this._onMouseUpGlobal, true);
                    window.addEventListener("mouseout", this._onMouseOutGlobal, true);
                    canvas.addEventListener("mouseover", this._onMouseOver, true);
                    canvas.addEventListener("mouseout", this._onMouseOut, true);
                }
                var wheelEvent = this.game.device.wheelEvent;
                if (wheelEvent) {
                    canvas.addEventListener(wheelEvent, this._onMouseWheel, true);
                    if (wheelEvent === "mousewheel") {
                        this._wheelEvent = new bridge.WheelEventProxy(-1 / 40, 1);
                    }
                    else if (wheelEvent === "DOMMouseScroll") {
                        this._wheelEvent = new bridge.WheelEventProxy(1, 1);
                    }
                }
            };
            Mouse.prototype.onMouseUp = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.mouseUpCallback) {
                    this.mouseUpCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                if (event) {
                    event["identifier"] = 0;
                }
                if (this.game.config.useOnlyLeftClick === true) {
                    if (event.which === 1) {
                        this.input.mousePointer.stop(event);
                    }
                }
                if (this.game.config.useOnlyLeftClick === false) {
                    this.input.mousePointer.stop(event);
                }
            };
            Mouse.prototype.onMouseDown = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.mouseDownCallback) {
                    this.mouseDownCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                if (event) {
                    event["identifier"] = 0;
                }
                if (this.game.config.useOnlyLeftClick === true) {
                    if (event.which === 1) {
                        this.input.mousePointer.start(event);
                    }
                }
                if (this.game.config.useOnlyLeftClick === false) {
                    this.input.mousePointer.start(event);
                }
            };
            Mouse.prototype.onMouseMove = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.mouseMoveCallback) {
                    this.mouseMoveCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                if (event) {
                    event["identifier"] = 0;
                }
                this.input.mousePointer.move(event);
            };
            Mouse.prototype.onMouseUpGlobal = function (event) {
                if (!this.input.mousePointer.withinGame) {
                    if (this.mouseUpCallback) {
                        this.mouseUpCallback.call(this.callbackContext, event);
                    }
                    if (event) {
                        event["identifier"] = 0;
                    }
                    this.input.mousePointer.stop(event);
                }
            };
            Mouse.prototype.onMouseOutGlobal = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                this.input.mousePointer.withinGame = false;
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                this.input.mousePointer.stop(event);
                this.input.mousePointer.leftButton.stop(event);
                this.input.mousePointer.rightButton.stop(event);
            };
            Mouse.prototype.onMouseOut = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                this.input.mousePointer.withinGame = false;
                if (this.mouseOutCallback) {
                    this.mouseOutCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                if (this.stopOnGameOut) {
                    if (event) {
                        event["identifier"] = 0;
                    }
                    this.input.mousePointer.stop(event);
                }
            };
            Mouse.prototype.onMouseOver = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                this.input.mousePointer.withinGame = true;
                if (this.mouseOverCallback) {
                    this.mouseOverCallback.call(this.callbackContext, event);
                }
            };
            Mouse.prototype.onMouseWheel = function (event) {
                if (this._wheelEvent) {
                    event = this._wheelEvent.bindEvent(event);
                }
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                this.wheelDelta = bridge.Maths.clamp(-event.deltaY, -1, 1);
                if (this.mouseWheelCallback) {
                    this.mouseWheelCallback.call(this.callbackContext, event);
                }
            };
            Mouse.prototype.requestPointerLock = function () {
                if (this.game.device.pointerLock) {
                    var element = this.game.canvas;
                    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
                    element.requestPointerLock();
                    var _this_5 = this;
                    this._pointerLockChange = function (event) {
                        return _this_5.pointerLockChange(event);
                    };
                    document.addEventListener("pointerlockchange", this._pointerLockChange, true);
                    document.addEventListener("mozpointerlockchange", this._pointerLockChange, true);
                    document.addEventListener("webkitpointerlockchange", this._pointerLockChange, true);
                }
            };
            Mouse.prototype.pointerLockChange = function (event) {
                var element = this.game.canvas;
                if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
                    this.locked = true;
                    this.pointerLock.dispatch(true, event);
                }
                else {
                    this.locked = false;
                    this.pointerLock.dispatch(false, event);
                }
            };
            Mouse.prototype.releasePointerLock = function () {
                document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
                document.exitPointerLock();
                document.removeEventListener("pointerlockchange", this._pointerLockChange, true);
                document.removeEventListener("mozpointerlockchange", this._pointerLockChange, true);
                document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, true);
            };
            Mouse.prototype.stop = function () {
                var canvas = this.game.canvas;
                canvas.removeEventListener("mousedown", this._onMouseDown, true);
                canvas.removeEventListener("mousemove", this._onMouseMove, true);
                canvas.removeEventListener("mouseup", this._onMouseUp, true);
                canvas.removeEventListener("mouseover", this._onMouseOver, true);
                canvas.removeEventListener("mouseout", this._onMouseOut, true);
                var wheelEvent = this.game.device.wheelEvent;
                if (wheelEvent) {
                    canvas.removeEventListener(wheelEvent, this._onMouseWheel, true);
                }
                window.removeEventListener("mouseup", this._onMouseUpGlobal, true);
                window.removeEventListener("mouseout", this._onMouseOutGlobal, true);
                document.removeEventListener("pointerlockchange", this._pointerLockChange, true);
                document.removeEventListener("mozpointerlockchange", this._pointerLockChange, true);
                document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, true);
            };
            Mouse.NO_BUTTON = -1;
            Mouse.LEFT_BUTTON = 0;
            Mouse.MIDDLE_BUTTON = 1;
            Mouse.RIGHT_BUTTON = 2;
            Mouse.BACK_BUTTON = 3;
            Mouse.FORWARD_BUTTON = 4;
            Mouse.WHEEL_UP = 1;
            Mouse.WHEEL_DOWN = -1;
            return Mouse;
        }());
        bridge.Mouse = Mouse;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var MSPointer = (function () {
            function MSPointer(game) {
                this.pointerDownCallback = null;
                this.pointerMoveCallback = null;
                this.pointerUpCallback = null;
                this.capture = false;
                this.button = -1;
                this.event = null;
                this.enabled = true;
                this._onMSPointerDown = null;
                this._onMSPointerMove = null;
                this._onMSPointerUp = null;
                this._onMSPointerUpGlobal = null;
                this._onMSPointerOut = null;
                this._onMSPointerOver = null;
                this.game = game;
                this.input = game.input;
                this.callbackContext = game;
            }
            MSPointer.prototype.start = function () {
                if (this._onMSPointerDown !== null) {
                    return;
                }
                var _this = this;
                if (this.game.device.mspointer) {
                    this._onMSPointerDown = function (event) {
                        return _this.onPointerDown(event);
                    };
                    this._onMSPointerMove = function (event) {
                        return _this.onPointerMove(event);
                    };
                    this._onMSPointerUp = function (event) {
                        return _this.onPointerUp(event);
                    };
                    this._onMSPointerUpGlobal = function (event) {
                        return _this.onPointerUpGlobal(event);
                    };
                    this._onMSPointerOut = function (event) {
                        return _this.onPointerOut(event);
                    };
                    this._onMSPointerOver = function (event) {
                        return _this.onPointerOver(event);
                    };
                    var canvas = this.game.canvas;
                    canvas.addEventListener("MSPointerDown", this._onMSPointerDown, false);
                    canvas.addEventListener("MSPointerMove", this._onMSPointerMove, false);
                    canvas.addEventListener("MSPointerUp", this._onMSPointerUp, false);
                    canvas.addEventListener("pointerdown", this._onMSPointerDown, false);
                    canvas.addEventListener("pointermove", this._onMSPointerMove, false);
                    canvas.addEventListener("pointerup", this._onMSPointerUp, false);
                    canvas.style["-ms-content-zooming"] = "none";
                    canvas.style["-ms-touch-action"] = "none";
                    if (!this.game.device.cocoonJS) {
                        window.addEventListener("MSPointerUp", this._onMSPointerUpGlobal, true);
                        canvas.addEventListener("MSPointerOver", this._onMSPointerOver, true);
                        canvas.addEventListener("MSPointerOut", this._onMSPointerOut, true);
                        window.addEventListener("pointerup", this._onMSPointerUpGlobal, true);
                        canvas.addEventListener("pointerover", this._onMSPointerOver, true);
                        canvas.addEventListener("pointerout", this._onMSPointerOut, true);
                    }
                }
            };
            MSPointer.prototype.onPointerDown = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.pointerDownCallback) {
                    this.pointerDownCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                event.identifier = event.pointerId;
                if (event.pointerType === "mouse" || event.pointerType === 0x00000004) {
                    if (this.game.config.useOnlyLeftClick === true) {
                        if (event.which === 1) {
                            this.input.mousePointer.start(event);
                        }
                    }
                    if (this.game.config.useOnlyLeftClick === false) {
                        this.input.mousePointer.start(event);
                    }
                }
                else {
                    this.input.startPointer(event);
                }
            };
            MSPointer.prototype.onPointerMove = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.pointerMoveCallback) {
                    this.pointerMoveCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                event.identifier = event.pointerId;
                if (event.pointerType === "mouse" || event.pointerType === 0x00000004) {
                    this.input.mousePointer.move(event);
                }
                else {
                    this.input.updatePointer(event);
                }
            };
            MSPointer.prototype.onPointerUp = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (this.pointerUpCallback) {
                    this.pointerUpCallback.call(this.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                event.identifier = event.pointerId;
                if (event.pointerType === "mouse" || event.pointerType === 0x00000004) {
                    if (this.game.config.useOnlyLeftClick === true) {
                        if (event.which === 1) {
                            this.input.mousePointer.stop(event);
                        }
                    }
                    if (this.game.config.useOnlyLeftClick === false) {
                        this.input.mousePointer.stop(event);
                    }
                }
                else {
                    this.input.stopPointer(event);
                }
            };
            MSPointer.prototype.onPointerUpGlobal = function (event) {
                if ((event.pointerType === "mouse" || event.pointerType === 0x00000004) && !this.input.mousePointer.withinGame) {
                    this.onPointerUp(event);
                }
                else {
                    var pointer = this.input.getPointerFromIdentifier(event.identifier);
                    if (pointer && pointer.withinGame) {
                        this.onPointerUp(event);
                    }
                }
            };
            MSPointer.prototype.onPointerOut = function (event) {
                this.event = event;
                var pointer;
                if (this.capture) {
                    event.preventDefault();
                }
                if (event.pointerType === "mouse" || event.pointerType === 0x00000004) {
                    this.input.mousePointer.withinGame = false;
                }
                else {
                    pointer = this.input.getPointerFromIdentifier(event.identifier);
                    if (pointer) {
                        pointer.withinGame = false;
                    }
                }
                if (this.input.mouse.mouseOutCallback) {
                    this.input.mouse.mouseOutCallback.call(this.input.mouse.callbackContext, event);
                }
                if (!this.input.enabled || !this.enabled) {
                    return;
                }
                if (this.input.mouse.stopOnGameOut) {
                    event["identifier"] = 0;
                    if (pointer) {
                        pointer.stop(event);
                    }
                    else {
                        this.input.mousePointer.stop(event);
                    }
                }
            };
            MSPointer.prototype.onPointerOver = function (event) {
                this.event = event;
                if (this.capture) {
                    event.preventDefault();
                }
                if (event.pointerType === "mouse" || event.pointerType === 0x00000004) {
                    this.input.mousePointer.withinGame = true;
                }
                else {
                    var pointer = this.input.getPointerFromIdentifier(event.identifier);
                    if (pointer) {
                        pointer.withinGame = true;
                    }
                }
                if (this.input.mouse.mouseOverCallback) {
                    this.input.mouse.mouseOverCallback.call(this.input.mouse.callbackContext, event);
                }
            };
            MSPointer.prototype.stop = function () {
                var canvas = this.game.canvas;
                canvas.removeEventListener("MSPointerDown", this._onMSPointerDown, false);
                canvas.removeEventListener("MSPointerMove", this._onMSPointerMove, false);
                canvas.removeEventListener("MSPointerUp", this._onMSPointerUp, false);
                canvas.removeEventListener("pointerdown", this._onMSPointerDown, false);
                canvas.removeEventListener("pointermove", this._onMSPointerMove, false);
                canvas.removeEventListener("pointerup", this._onMSPointerUp, false);
                window.removeEventListener("MSPointerUp", this._onMSPointerUpGlobal, true);
                canvas.removeEventListener("MSPointerOver", this._onMSPointerOver, true);
                canvas.removeEventListener("MSPointerOut", this._onMSPointerOut, true);
                window.removeEventListener("pointerup", this._onMSPointerUpGlobal, true);
                canvas.removeEventListener("pointerover", this._onMSPointerOver, true);
                canvas.removeEventListener("pointerout", this._onMSPointerOut, true);
            };
            return MSPointer;
        }());
        bridge.MSPointer = MSPointer;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Pointer = (function () {
            function Pointer(game, id, pointerMode) {
                this.type = bridge.POINTER;
                this.exists = true;
                this.identifier = 0;
                this.pointerId = null;
                this.target = null;
                this.button = null;
                this._holdSent = false;
                this._nextDrop = 0;
                this._stateReset = false;
                this.withinGame = false;
                this.clientX = -1;
                this.clientY = -1;
                this.pageX = -1;
                this.pageY = -1;
                this.screenX = -1;
                this.screenY = -1;
                this.rawMovementX = 0;
                this.rawMovementY = 0;
                this.movementX = 0;
                this.movementY = 0;
                this.x = -1;
                this.y = -1;
                this.isDown = false;
                this.isUp = true;
                this.timeDown = 0;
                this.timeUp = 0;
                this.previousTapTime = 0;
                this.totalTouches = 0;
                this.msSinceLastClick = Number.MAX_VALUE;
                this.targetObject = null;
                this.active = false;
                this.dirty = false;
                this.position = new bridge.Point();
                this.positionDown = new bridge.Point();
                this.positionUp = new bridge.Point();
                this.circle = new bridge.Circle(0, 0, 44);
                this._clickTrampolines = null;
                this._trampolineTargetObject = null;
                this.game = game;
                this.id = id;
                this.pointerMode = pointerMode || bridge.PointerMode.CONTACT || bridge.PointerMode.CURSOR;
                this.isMouse = (id === 0);
                this.leftButton = new bridge.DeviceButton(this, Pointer.LEFT_BUTTON);
                this.middleButton = new bridge.DeviceButton(this, Pointer.MIDDLE_BUTTON);
                this.rightButton = new bridge.DeviceButton(this, Pointer.RIGHT_BUTTON);
                this.backButton = new bridge.DeviceButton(this, Pointer.BACK_BUTTON);
                this.forwardButton = new bridge.DeviceButton(this, Pointer.FORWARD_BUTTON);
                this.eraserButton = new bridge.DeviceButton(this, Pointer.ERASER_BUTTON);
            }
            Object.defineProperty(Pointer.prototype, "duration", {
                get: function () {
                    if (this.isUp) {
                        return -1;
                    }
                    return this.game.time.time - this.timeDown;
                },
                enumerable: true,
                configurable: true
            });
            Pointer.prototype.resetButtons = function () {
                this.isDown = false;
                this.isUp = true;
                if (this.isMouse) {
                    this.leftButton.reset();
                    this.middleButton.reset();
                    this.rightButton.reset();
                    this.backButton.reset();
                    this.forwardButton.reset();
                    this.eraserButton.reset();
                }
            };
            Pointer.prototype.processButtonsDown = function (buttons, event) {
                if (Pointer.LEFT_BUTTON & buttons) {
                    this.leftButton.start(event);
                }
                if (Pointer.RIGHT_BUTTON & buttons) {
                    this.rightButton.start(event);
                }
                if (Pointer.MIDDLE_BUTTON & buttons) {
                    this.middleButton.start(event);
                }
                if (Pointer.BACK_BUTTON & buttons) {
                    this.backButton.start(event);
                }
                if (Pointer.FORWARD_BUTTON & buttons) {
                    this.forwardButton.start(event);
                }
                if (Pointer.ERASER_BUTTON & buttons) {
                    this.eraserButton.start(event);
                }
            };
            Pointer.prototype.processButtonsUp = function (button, event) {
                if (button === bridge.Mouse.LEFT_BUTTON) {
                    this.leftButton.stop(event);
                }
                if (button === bridge.Mouse.RIGHT_BUTTON) {
                    this.rightButton.stop(event);
                }
                if (button === bridge.Mouse.MIDDLE_BUTTON) {
                    this.middleButton.stop(event);
                }
                if (button === bridge.Mouse.BACK_BUTTON) {
                    this.backButton.stop(event);
                }
                if (button === bridge.Mouse.FORWARD_BUTTON) {
                    this.forwardButton.stop(event);
                }
                if (button === 5) {
                    this.eraserButton.stop(event);
                }
            };
            Pointer.prototype.updateButtons = function (event) {
                this.button = event.button;
                var down = (event.type.toLowerCase().substr(-4) === "down");
                if (event.buttons !== undefined) {
                    if (down) {
                        this.processButtonsDown(event.buttons, event);
                    }
                    else {
                        this.processButtonsUp(event.button, event);
                    }
                }
                else {
                    if (down) {
                        this.leftButton.start(event);
                    }
                    else {
                        this.leftButton.stop(event);
                        this.rightButton.stop(event);
                    }
                }
                if (event.buttons === 1 && event.ctrlKey && this.leftButton.isDown) {
                    this.leftButton.stop(event);
                    this.rightButton.start(event);
                }
                this.isUp = true;
                this.isDown = false;
                if (this.leftButton.isDown || this.rightButton.isDown || this.middleButton.isDown || this.backButton.isDown || this.forwardButton.isDown || this.eraserButton.isDown) {
                    this.isUp = false;
                    this.isDown = true;
                }
            };
            Pointer.prototype.start = function (event) {
                var input = this.game.input;
                if (event["pointerId"]) {
                    this.pointerId = event.pointerId;
                }
                this.identifier = event.identifier;
                this.target = event.target;
                if (this.isMouse) {
                    this.updateButtons(event);
                }
                else {
                    this.isDown = true;
                    this.isUp = false;
                }
                this.active = true;
                this.withinGame = true;
                this.dirty = false;
                this._history = [];
                this._clickTrampolines = null;
                this._trampolineTargetObject = null;
                this.msSinceLastClick = this.game.time.time - this.timeDown;
                this.timeDown = this.game.time.time;
                this._holdSent = false;
                this.move(event, true);
                this.positionDown.set(this.x, this.y);
                if (input.multiInputOverride === bridge.Input.MOUSE_OVERRIDES_TOUCH ||
                    input.multiInputOverride === bridge.Input.MOUSE_TOUCH_COMBINE ||
                    (input.multiInputOverride === bridge.Input.TOUCH_OVERRIDES_MOUSE && input.totalActivePointers === 0)) {
                    input.x = this.x;
                    input.y = this.y;
                    input.position.set(this.x, this.y);
                    input.onDown.dispatch(this, event);
                    input.resetSpeed(this.x, this.y);
                }
                this._stateReset = false;
                this.totalTouches++;
                if (this.targetObject !== null) {
                    this.targetObject._touchedHandler(this);
                }
                return this;
            };
            Pointer.prototype.update = function () {
                var input = this.game.input;
                if (this.active) {
                    if (this.dirty) {
                        if (input.interactiveItems.total > 0) {
                            this.processInteractiveObjects(false);
                        }
                        this.dirty = false;
                    }
                    if (this._holdSent === false && this.duration >= input.holdRate) {
                        if (input.multiInputOverride === bridge.Input.MOUSE_OVERRIDES_TOUCH ||
                            input.multiInputOverride === bridge.Input.MOUSE_TOUCH_COMBINE ||
                            (input.multiInputOverride === bridge.Input.TOUCH_OVERRIDES_MOUSE && input.totalActivePointers === 0)) {
                            input.onHold.dispatch(this);
                        }
                        this._holdSent = true;
                    }
                    if (input.recordPointerHistory && this.game.time.time >= this._nextDrop) {
                        this._nextDrop = this.game.time.time + input.recordRate;
                        this._history.push({
                            x: this.position.x,
                            y: this.position.y
                        });
                        if (this._history.length > input.recordLimit) {
                            this._history.shift();
                        }
                    }
                }
            };
            Pointer.prototype.move = function (event, fromClick) {
                var input = this.game.input;
                if (input.pollLocked) {
                    return;
                }
                if (fromClick === undefined) {
                    fromClick = false;
                }
                if (event.button !== undefined) {
                    this.button = event.button;
                }
                if (fromClick && this.isMouse) {
                    this.updateButtons(event);
                }
                this.clientX = event.clientX;
                this.clientY = event.clientY;
                this.pageX = event.pageX;
                this.pageY = event.pageY;
                this.screenX = event.screenX;
                this.screenY = event.screenY;
                if (this.isMouse && input.mouse.locked && !fromClick) {
                    this.rawMovementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
                    this.rawMovementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
                    this.movementX += this.rawMovementX;
                    this.movementY += this.rawMovementY;
                }
                this.x = (this.pageX - this.game.scale.offset.x) * input.scale.x;
                this.y = (this.pageY - this.game.scale.offset.y) * input.scale.y;
                this.position.set(this.x, this.y);
                this.circle.x = this.x;
                this.circle.y = this.y;
                if (input.multiInputOverride === bridge.Input.MOUSE_OVERRIDES_TOUCH ||
                    input.multiInputOverride === bridge.Input.MOUSE_TOUCH_COMBINE ||
                    (input.multiInputOverride === bridge.Input.TOUCH_OVERRIDES_MOUSE && input.totalActivePointers === 0)) {
                    input.activePointer = this;
                    input.x = this.x;
                    input.y = this.y;
                    input.position.set(input.x, input.y);
                    input.circle.x = input.x;
                    input.circle.y = input.y;
                }
                this.withinGame = this.game.scale.bounds.contains(this.pageX, this.pageY);
                if (this.game.paused) {
                    return this;
                }
                var i = input.moveCallbacks.length;
                while (i--) {
                    input.moveCallbacks[i].callback.call(input.moveCallbacks[i].context, this, this.x, this.y, fromClick);
                }
                if (this.targetObject !== null && this.targetObject.isDragged === true) {
                    if (this.targetObject.update(this) === false) {
                        this.targetObject = null;
                    }
                }
                else if (input.interactiveItems.total > 0) {
                    this.processInteractiveObjects(fromClick);
                }
                return this;
            };
            Pointer.prototype.processInteractiveObjects = function (fromClick) {
                var highestRenderOrderID = 0;
                var highestInputPriorityID = -1;
                var candidateTarget = null;
                var currentNode = this.game.input.interactiveItems.first;
                this.interactiveCandidates = [];
                while (currentNode) {
                    currentNode.checked = false;
                    if (currentNode.validForInput(highestInputPriorityID, highestRenderOrderID, false)) {
                        currentNode.checked = true;
                        if ((fromClick && currentNode.checkPointerDown(this, true)) ||
                            (!fromClick && currentNode.checkPointerOver(this, true))) {
                            highestRenderOrderID = currentNode.sprite.renderOrderID;
                            highestInputPriorityID = currentNode.priorityID;
                            candidateTarget = currentNode;
                            this.interactiveCandidates.push(currentNode);
                        }
                    }
                    currentNode = this.game.input.interactiveItems.next;
                }
                while (currentNode) {
                    currentNode.checked = false;
                    if (currentNode.validForInput(highestInputPriorityID, highestRenderOrderID, false)) {
                        currentNode.checked = true;
                        if ((fromClick && currentNode.checkPointerDown(this, true)) ||
                            (!fromClick && currentNode.checkPointerOver(this, true))) {
                            highestRenderOrderID = currentNode.sprite.renderOrderID;
                            highestInputPriorityID = currentNode.priorityID;
                            candidateTarget = currentNode;
                            this.interactiveCandidates.push(currentNode);
                        }
                    }
                    currentNode = this.game.input.interactiveItems.next;
                }
                currentNode = this.game.input.interactiveItems.first;
                while (currentNode) {
                    if (!currentNode.checked &&
                        currentNode.validForInput(highestInputPriorityID, highestRenderOrderID, true)) {
                        if ((fromClick && currentNode.checkPointerDown(this, false)) ||
                            (!fromClick && currentNode.checkPointerOver(this, false))) {
                            highestRenderOrderID = currentNode.sprite.renderOrderID;
                            highestInputPriorityID = currentNode.priorityID;
                            candidateTarget = currentNode;
                            this.interactiveCandidates.push(currentNode);
                        }
                    }
                    currentNode = this.game.input.interactiveItems.next;
                }
                if (this.game.input.customCandidateHandler) {
                    candidateTarget = this.game.input.customCandidateHandler.call(this.game.input.customCandidateHandlerContext, this, this.interactiveCandidates, candidateTarget);
                }
                this.swapTarget(candidateTarget, false);
                return (this.targetObject !== null);
            };
            Pointer.prototype.swapTarget = function (newTarget, silent) {
                if (silent === undefined) {
                    silent = false;
                }
                if (newTarget === null) {
                    if (this.targetObject) {
                        this.targetObject._pointerOutHandler(this, silent);
                        this.targetObject = null;
                    }
                }
                else {
                    if (this.targetObject === null) {
                        this.targetObject = newTarget;
                        newTarget._pointerOverHandler(this, silent);
                    }
                    else {
                        if (this.targetObject === newTarget) {
                            if (newTarget.update(this) === false) {
                                this.targetObject = null;
                            }
                        }
                        else {
                            this.targetObject._pointerOutHandler(this, silent);
                            this.targetObject = newTarget;
                            this.targetObject._pointerOverHandler(this, silent);
                        }
                    }
                }
            };
            Pointer.prototype.leave = function (event) {
                this.withinGame = false;
                this.move(event, false);
            };
            Pointer.prototype.stop = function (event) {
                var input = this.game.input;
                if (this._stateReset && this.withinGame) {
                    event.preventDefault();
                    return;
                }
                this.timeUp = this.game.time.time;
                if (input.multiInputOverride === bridge.Input.MOUSE_OVERRIDES_TOUCH ||
                    input.multiInputOverride === bridge.Input.MOUSE_TOUCH_COMBINE ||
                    (input.multiInputOverride === bridge.Input.TOUCH_OVERRIDES_MOUSE && input.totalActivePointers === 0)) {
                    input.onUp.dispatch(this, event);
                    if (this.duration >= 0 && this.duration <= input.tapRate) {
                        if (this.timeUp - this.previousTapTime < input.doubleTapRate) {
                            input.onTap.dispatch(this, true);
                        }
                        else {
                            input.onTap.dispatch(this, false);
                        }
                        this.previousTapTime = this.timeUp;
                    }
                }
                if (this.isMouse) {
                    this.updateButtons(event);
                }
                else {
                    this.isDown = false;
                    this.isUp = true;
                }
                if (this.id > 0) {
                    this.active = false;
                }
                this.withinGame = this.game.scale.bounds.contains(event.pageX, event.pageY);
                this.pointerId = null;
                this.identifier = null;
                this.positionUp.set(this.x, this.y);
                input.interactiveItems.callAll("_releasedHandler", this);
                if (this._clickTrampolines) {
                    this._trampolineTargetObject = this.targetObject;
                }
                this.targetObject = null;
                return this;
            };
            Pointer.prototype.justPressed = function (duration) {
                duration = duration || this.game.input.justPressedRate;
                return (this.isDown === true && (this.timeDown + duration) > this.game.time.time);
            };
            Pointer.prototype.justReleased = function (duration) {
                duration = duration || this.game.input.justReleasedRate;
                return (this.isUp && (this.timeUp + duration) > this.game.time.time);
            };
            Pointer.prototype.addClickTrampoline = function (name, callback, callbackContext, callbackArgs) {
                if (!this.isDown) {
                    return;
                }
                var trampolines = (this._clickTrampolines = this._clickTrampolines || []);
                for (var i = 0; i < trampolines.length; i++) {
                    if (trampolines[i].name === name) {
                        trampolines.splice(i, 1);
                        break;
                    }
                }
                trampolines.push({
                    name: name,
                    targetObject: this.targetObject,
                    callback: callback,
                    callbackContext: callbackContext,
                    callbackArgs: callbackArgs
                });
            };
            Pointer.prototype.processClickTrampolines = function () {
                var trampolines = this._clickTrampolines;
                if (!trampolines) {
                    return;
                }
                for (var i = 0; i < trampolines.length; i++) {
                    var trampoline = trampolines[i];
                    if (trampoline.targetObject === this._trampolineTargetObject) {
                        trampoline.callback.apply(trampoline.callbackContext, trampoline.callbackArgs);
                    }
                }
                this._clickTrampolines = null;
                this._trampolineTargetObject = null;
            };
            Pointer.prototype.reset = function () {
                if (this.isMouse === false) {
                    this.active = false;
                }
                this.pointerId = null;
                this.identifier = null;
                this.dirty = false;
                this.totalTouches = 0;
                this._holdSent = false;
                this._history && (this._history.length = 0);
                this._stateReset = true;
                this.resetButtons();
                if (this.targetObject) {
                    this.targetObject._releasedHandler(this);
                }
                this.targetObject = null;
            };
            Pointer.prototype.resetMovement = function () {
                this.movementX = 0;
                this.movementY = 0;
            };
            Pointer.NO_BUTTON = 0;
            Pointer.LEFT_BUTTON = 1;
            Pointer.RIGHT_BUTTON = 2;
            Pointer.MIDDLE_BUTTON = 4;
            Pointer.BACK_BUTTON = 8;
            Pointer.FORWARD_BUTTON = 16;
            Pointer.ERASER_BUTTON = 32;
            return Pointer;
        }());
        bridge.Pointer = Pointer;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SinglePad = (function () {
            function SinglePad(game, padParent) {
                this.index = null;
                this.connected = false;
                this.callbackContext = null;
                this.onConnectCallback = null;
                this.onDisconnectCallback = null;
                this.onDownCallback = null;
                this.onUpCallback = null;
                this.onAxisCallback = null;
                this.onFloatCallback = null;
                this.deadZone = 0.26;
                this._rawPad = null;
                this._prevTimestamp = null;
                this._buttons = [];
                this._buttonsLen = 0;
                this._axes = [];
                this._axesLen = 0;
                this.game = game;
                this._padParent = padParent;
            }
            SinglePad.prototype.addCallbacks = function (context, callbacks) {
                if (typeof callbacks !== "undefined") {
                    this.onConnectCallback = (typeof callbacks.onConnect === "function") ? callbacks.onConnect : this.onConnectCallback;
                    this.onDisconnectCallback = (typeof callbacks.onDisconnect === "function") ? callbacks.onDisconnect : this.onDisconnectCallback;
                    this.onDownCallback = (typeof callbacks.onDown === "function") ? callbacks.onDown : this.onDownCallback;
                    this.onUpCallback = (typeof callbacks.onUp === "function") ? callbacks.onUp : this.onUpCallback;
                    this.onAxisCallback = (typeof callbacks.onAxis === "function") ? callbacks.onAxis : this.onAxisCallback;
                    this.onFloatCallback = (typeof callbacks.onFloat === "function") ? callbacks.onFloat : this.onFloatCallback;
                    this.callbackContext = context;
                }
            };
            SinglePad.prototype.getButton = function (buttonCode) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode];
                }
                else {
                    return null;
                }
            };
            SinglePad.prototype.pollStatus = function () {
                if (!this.connected || !this.game.input.enabled || !this.game.input.gamepad.enabled ||
                    (this._rawPad.timestamp && (this._rawPad.timestamp === this._prevTimestamp))) {
                    return;
                }
                for (var i = 0; i < this._buttonsLen; i++) {
                    var rawButtonVal = isNaN(this._rawPad.buttons[i]) ? this._rawPad.buttons[i].value : this._rawPad.buttons[i];
                    if (rawButtonVal !== this._buttons[i].value) {
                        if (rawButtonVal === 1) {
                            this.processButtonDown(i, rawButtonVal);
                        }
                        else if (rawButtonVal === 0) {
                            this.processButtonUp(i, rawButtonVal);
                        }
                        else {
                            this.processButtonFloat(i, rawButtonVal);
                        }
                    }
                }
                for (var index = 0; index < this._axesLen; index++) {
                    var value = this._rawPad.axes[index];
                    if ((value > 0 && value > this.deadZone) || (value < 0 && value < -this.deadZone)) {
                        this.processAxisChange(index, value);
                    }
                    else {
                        this.processAxisChange(index, 0);
                    }
                }
                this._prevTimestamp = this._rawPad.timestamp;
            };
            SinglePad.prototype.connect = function (rawPad) {
                var triggerCallback = !this.connected;
                this.connected = true;
                this.index = rawPad.index;
                this._rawPad = rawPad;
                this._buttons = [];
                this._buttonsLen = rawPad.buttons.length;
                this._axes = [];
                this._axesLen = rawPad.axes.length;
                for (var a = 0; a < this._axesLen; a++) {
                    this._axes[a] = rawPad.axes[a];
                }
                var buttonCode;
                for (buttonCode in rawPad.buttons) {
                    buttonCode = parseInt(buttonCode, 10);
                    this._buttons[buttonCode] = new bridge.DeviceButton(this, buttonCode);
                }
                if (triggerCallback && this._padParent.onConnectCallback) {
                    this._padParent.onConnectCallback.call(this._padParent.callbackContext, this.index);
                }
                if (triggerCallback && this.onConnectCallback) {
                    this.onConnectCallback.call(this.callbackContext);
                }
            };
            SinglePad.prototype.disconnect = function () {
                var triggerCallback = this.connected;
                var disconnectingIndex = this.index;
                this.connected = false;
                this.index = null;
                this._rawPad = undefined;
                for (var i = 0; i < this._buttonsLen; i++) {
                    this._buttons[i].destroy();
                }
                this._buttons = [];
                this._buttonsLen = 0;
                this._axes = [];
                this._axesLen = 0;
                if (triggerCallback && this._padParent.onDisconnectCallback) {
                    this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, disconnectingIndex);
                }
                if (triggerCallback && this.onDisconnectCallback) {
                    this.onDisconnectCallback.call(this.callbackContext);
                }
            };
            SinglePad.prototype.destroy = function () {
                this._rawPad = undefined;
                for (var i = 0; i < this._buttonsLen; i++) {
                    this._buttons[i].destroy();
                }
                this._buttons = [];
                this._buttonsLen = 0;
                this._axes = [];
                this._axesLen = 0;
                this.onConnectCallback = null;
                this.onDisconnectCallback = null;
                this.onDownCallback = null;
                this.onUpCallback = null;
                this.onAxisCallback = null;
                this.onFloatCallback = null;
            };
            SinglePad.prototype.processAxisChange = function (index, value) {
                if (this._axes[index] === value) {
                    return;
                }
                this._axes[index] = value;
                if (this._padParent.onAxisCallback) {
                    this._padParent.onAxisCallback.call(this._padParent.callbackContext, this, index, value);
                }
                if (this.onAxisCallback) {
                    this.onAxisCallback.call(this.callbackContext, this, index, value);
                }
            };
            SinglePad.prototype.processButtonDown = function (buttonCode, value) {
                if (this._buttons[buttonCode]) {
                    this._buttons[buttonCode].start(null, value);
                }
                if (this._padParent.onDownCallback) {
                    this._padParent.onDownCallback.call(this._padParent.callbackContext, buttonCode, value, this.index);
                }
                if (this.onDownCallback) {
                    this.onDownCallback.call(this.callbackContext, buttonCode, value);
                }
            };
            SinglePad.prototype.processButtonUp = function (buttonCode, value) {
                if (this._padParent.onUpCallback) {
                    this._padParent.onUpCallback.call(this._padParent.callbackContext, buttonCode, value, this.index);
                }
                if (this.onUpCallback) {
                    this.onUpCallback.call(this.callbackContext, buttonCode, value);
                }
                if (this._buttons[buttonCode]) {
                    this._buttons[buttonCode].stop(null, value);
                }
            };
            SinglePad.prototype.processButtonFloat = function (buttonCode, value) {
                if (this._padParent.onFloatCallback) {
                    this._padParent.onFloatCallback.call(this._padParent.callbackContext, buttonCode, value, this.index);
                }
                if (this.onFloatCallback) {
                    this.onFloatCallback.call(this.callbackContext, buttonCode, value);
                }
                if (this._buttons[buttonCode]) {
                    this._buttons[buttonCode].padFloat(value);
                }
            };
            SinglePad.prototype.axis = function (axisCode) {
                if (this._axes[axisCode]) {
                    return this._axes[axisCode];
                }
                return false;
            };
            SinglePad.prototype.isDown = function (buttonCode) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode].isDown;
                }
                return false;
            };
            SinglePad.prototype.isUp = function (buttonCode) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode].isUp;
                }
                return false;
            };
            SinglePad.prototype.justReleased = function (buttonCode, duration) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode].justReleased(duration);
                }
            };
            SinglePad.prototype.justPressed = function (buttonCode, duration) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode].justPressed(duration);
                }
            };
            SinglePad.prototype.buttonValue = function (buttonCode) {
                if (this._buttons[buttonCode]) {
                    return this._buttons[buttonCode].value;
                }
                return null;
            };
            SinglePad.prototype.reset = function () {
                for (var j = 0; j < this._axes.length; j++) {
                    this._axes[j] = 0;
                }
            };
            return SinglePad;
        }());
        bridge.SinglePad = SinglePad;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var WheelEventProxy = (function () {
            function WheelEventProxy(scaleFactor, deltaMode) {
                this.originalEvent = null;
                this.type = "wheel";
                this.deltaZ = 0;
                this._scaleFactor = scaleFactor;
                this._deltaMode = deltaMode;
            }
            Object.defineProperty(WheelEventProxy.prototype, "deltaMode", {
                get: function () {
                    return this._deltaMode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WheelEventProxy.prototype, "deltaY", {
                get: function () {
                    return (this._scaleFactor * (this.originalEvent.wheelDelta || this.originalEvent.detail)) || 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WheelEventProxy.prototype, "deltaX", {
                get: function () {
                    return (this._scaleFactor * this.originalEvent.wheelDeltaX) || 0;
                },
                enumerable: true,
                configurable: true
            });
            WheelEventProxy.prototype.makeBinder = function (name) {
                return function () {
                    var v = this.originalEvent[name];
                    return typeof v !== "function" ? v : v.bind(this.originalEvent);
                };
            };
            WheelEventProxy.prototype.bindEvent = function (event) {
                var _this = this;
                if (!WheelEventProxy._stubsGenerated && event) {
                    for (var prop in event) {
                        if (!(prop in WheelEventProxy.prototype)) {
                            Object.defineProperty(WheelEventProxy.prototype, prop, {
                                get: _this.makeBinder(prop)
                            });
                        }
                    }
                    WheelEventProxy._stubsGenerated = true;
                }
                this.originalEvent = event;
                return this;
            };
            WheelEventProxy._stubsGenerated = false;
            return WheelEventProxy;
        }());
        bridge.WheelEventProxy = WheelEventProxy;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        ingenuity.byPassMissingPluginError("PIXI.particles.Emitter");
        var Emitter = (function (_super) {
            __extends(Emitter, _super);
            function Emitter(particleParent, particleImages, config, game) {
                var _this = _super.call(this, particleParent, particleImages, config) || this;
                _this._focusPaused = false;
                _this._emitterData = null;
                _this.currentImageIndex = -1;
                _this._pendingDestroy = false;
                _this.game = game;
                _this.game.particles.ID++;
                _this.name = "emitter_" + _this.game.particles.ID;
                return _this;
            }
            Emitter.prototype.focusPause = function () {
                if (!this._focusPaused && this.autoUpdate) {
                    this._focusPaused = true;
                    this.autoUpdate = false;
                }
                return this;
            };
            Emitter.prototype.focusResume = function () {
                if (this._focusPaused) {
                    this.autoUpdate = true;
                    this._focusPaused = false;
                }
                return this;
            };
            Emitter.prototype.getId = function () {
                return this.name;
            };
            Emitter.prototype.modifyTexture = function (emitterData) {
                emitterData = this.game.particles.initEmitterData(emitterData);
                var arts = [];
                switch (emitterData.emitterType) {
                    case bridge.IEmitterType.NORMAL:
                        arts = this.game.particles.generateFramesNormal(emitterData);
                        this.particleImages = PIXI.particles.Particle && PIXI.particles.Particle.parseArt(arts) || arts;
                        break;
                    case bridge.IEmitterType.ANIM:
                        arts = this.game.particles.generateFramesAnim(emitterData);
                        this.particleImages = PIXI.particles.AnimatedParticle && PIXI.particles.AnimatedParticle.parseArt(arts) || arts;
                        break;
                    case bridge.IEmitterType.PATH:
                        break;
                    default:
                        break;
                }
            };
            Emitter.prototype.isOn = function () {
                return this.autoUpdate && this.emit;
            };
            Emitter.prototype.pause = function () {
                if (this.emit) {
                    this._paused = true;
                    this.autoUpdate = false;
                }
                return this;
            };
            Emitter.prototype.resume = function () {
                if (this._paused) {
                    this._paused = false;
                    this.autoUpdate = true;
                }
                return this;
            };
            Emitter.prototype.start = function () {
                this.emit = true;
                this.autoUpdate = true;
                this._paused = false;
                return this;
            };
            Emitter.prototype.stop = function (stopUpdate, delay) {
                var _this = this;
                if (stopUpdate === void 0) { stopUpdate = false; }
                if (delay === void 0) { delay = 0; }
                this.emit = false;
                this._paused = false;
                var timerEvent = null;
                if (stopUpdate === true) {
                    if (delay > 0) {
                        timerEvent = this.game.time.events.add(delay, function () {
                            _this.autoUpdate = false;
                        }, this);
                    }
                    else {
                        this.autoUpdate = false;
                    }
                }
                return timerEvent;
            };
            Object.defineProperty(Emitter.prototype, "emitterData", {
                get: function () {
                    return this._emitterData;
                },
                set: function (val) {
                    this._emitterData = val;
                },
                enumerable: true,
                configurable: true
            });
            Emitter.prototype.destroy = function () {
                this._pendingDestroy = true;
                if (this.parent && this.parent instanceof PIXI.ParticleContainer && this.parent.name === bridge.Particles.EMITTER_QUICK_CONT_ID) {
                    var parent_3 = this.parent;
                    _super.prototype.destroy.call(this);
                    parent_3 && parent_3.destroy();
                }
                else {
                    _super.prototype.destroy.call(this);
                }
                this.focusPause = null;
                if (this.name && this.game.particles.getEmitterById(this.name)) {
                    this.game.particles.remove(this.name);
                }
                this.name = null;
                this.game = null;
                this._paused = null;
                this._emitterData = null;
                this.currentImageIndex = null;
            };
            Emitter.prototype.isPendingDestroy = function () {
                return this._pendingDestroy;
            };
            Object.defineProperty(Emitter.prototype, "customPathFunction", {
                get: function () {
                    if (this.particleConstructor === bridge.PathParticle) {
                        return (this.extraData && this.extraData.path) ? this.extraData.path : null;
                    }
                    return null;
                },
                set: function (funkyFunc) {
                    this.extraData = this.extraData || {};
                    this.extraData.path = funkyFunc;
                },
                enumerable: true,
                configurable: true
            });
            Emitter.prototype.update = function (delta) {
                if (this._autoUpdate) {
                    delta = delta / PIXI.settings.TARGET_FPMS / 1000;
                }
                if (!this._parent) {
                    return;
                }
                var i, particle, next;
                for (particle = this._activeParticlesFirst; particle; particle = next) {
                    next = particle.next;
                    particle.update(delta);
                }
                var prevX, prevY;
                if (this._prevPosIsValid) {
                    prevX = this._prevEmitterPos.x;
                    prevY = this._prevEmitterPos.y;
                }
                var curX = this.ownerPos.x + this.spawnPos.x;
                var curY = this.ownerPos.y + this.spawnPos.y;
                if (this._emit) {
                    this._spawnTimer -= delta < 0 ? 0 : delta;
                    while (this._spawnTimer <= 0) {
                        if (this._emitterLife > 0) {
                            this._emitterLife -= this._frequency;
                            if (this._emitterLife <= 0) {
                                this._spawnTimer = 0;
                                this._emitterLife = 0;
                                this.emit = false;
                                break;
                            }
                        }
                        if (this.particleCount >= this.maxParticles) {
                            this._spawnTimer += this._frequency;
                            continue;
                        }
                        var lifetime = void 0;
                        if (this.minLifetime === this.maxLifetime) {
                            lifetime = this.minLifetime;
                        }
                        else {
                            lifetime = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime;
                        }
                        if (-this._spawnTimer < lifetime) {
                            var emitPosX = void 0, emitPosY = void 0;
                            if (this._prevPosIsValid && this._posChanged) {
                                var lerp = 1 + this._spawnTimer / delta;
                                emitPosX = (curX - prevX) * lerp + prevX;
                                emitPosY = (curY - prevY) * lerp + prevY;
                            }
                            else {
                                emitPosX = curX;
                                emitPosY = curY;
                            }
                            i = 0;
                            for (var len = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount); i < len; ++i) {
                                if (this.spawnChance < 1 && Math.random() >= this.spawnChance) {
                                    continue;
                                }
                                var p = void 0;
                                if (this._poolFirst) {
                                    p = this._poolFirst;
                                    this._poolFirst = this._poolFirst.next;
                                    p.next = null;
                                }
                                else {
                                    p = new this.particleConstructor(this);
                                }
                                if (this.particleImages.length > 1) {
                                    if (this.emitterData && this.emitterData.inOrder) {
                                        this.currentImageIndex++;
                                        if (this.currentImageIndex < 0) {
                                            this.currentImageIndex = 0;
                                        }
                                        if (this.currentImageIndex >= this.particleImages.length) {
                                            this.currentImageIndex = 0;
                                        }
                                    }
                                    else {
                                        this.currentImageIndex = Math.floor(Math.random() * this.particleImages.length);
                                    }
                                    p.applyArt(this.particleImages[this.currentImageIndex]);
                                }
                                else {
                                    p.applyArt(this.particleImages[0]);
                                }
                                p.alphaList.reset(this.startAlpha);
                                if (this.minimumSpeedMultiplier !== 1) {
                                    p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier;
                                }
                                p.speedList.reset(this.startSpeed);
                                p.acceleration.x = this.acceleration.x;
                                p.acceleration.y = this.acceleration.y;
                                p.maxSpeed = this.maxSpeed;
                                if (this.minimumScaleMultiplier !== 1) {
                                    p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier;
                                }
                                p.scaleList.reset(this.startScale);
                                p.colorList.reset(this.startColor);
                                if (this.minRotationSpeed === this.maxRotationSpeed) {
                                    p.rotationSpeed = this.minRotationSpeed;
                                }
                                else {
                                    p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed;
                                }
                                p.rotationAcceleration = this.rotationAcceleration;
                                p.noRotation = this.noRotation;
                                p.maxLife = lifetime;
                                p.blendMode = this.particleBlendMode;
                                p.ease = this.customEase;
                                p.extraData = this.extraData;
                                this.applyAdditionalProperties(p);
                                this._spawnFunc(p, emitPosX, emitPosY, i);
                                p.init();
                                p.update(-this._spawnTimer);
                                if (!p.parent) {
                                    if (this.addAtBack) {
                                        this._parent.addChildAt(p, 0);
                                    }
                                    else {
                                        this._parent.addChild(p);
                                    }
                                }
                                else {
                                    var children = this._parent.children;
                                    if (children[0] === p) {
                                        children.shift();
                                    }
                                    else if (children[children.length - 1] === p) {
                                        children.pop();
                                    }
                                    else {
                                        var index = children.indexOf(p);
                                        children.splice(index, 1);
                                    }
                                    if (this.addAtBack) {
                                        children.unshift(p);
                                    }
                                    else {
                                        children.push(p);
                                    }
                                }
                                if (this._activeParticlesLast) {
                                    this._activeParticlesLast.next = p;
                                    p.prev = this._activeParticlesLast;
                                    this._activeParticlesLast = p;
                                }
                                else {
                                    this._activeParticlesLast = this._activeParticlesFirst = p;
                                }
                                ++this.particleCount;
                            }
                        }
                        this._spawnTimer += this._frequency;
                    }
                }
                if (this._posChanged) {
                    this._prevEmitterPos.x = curX;
                    this._prevEmitterPos.y = curY;
                    this._prevPosIsValid = true;
                    this._posChanged = false;
                }
                if (!this._emit && !this._activeParticlesFirst) {
                    if (this._completeCallback) {
                        var cb = this._completeCallback;
                        this._completeCallback = null;
                        cb();
                    }
                    if (this._destroyWhenComplete) {
                        this.destroy();
                    }
                }
            };
            return Emitter;
        }(PIXI.particles.Emitter));
        bridge.Emitter = Emitter;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var ParticleContainer = (function (_super) {
            __extends(ParticleContainer, _super);
            function ParticleContainer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ParticleContainer;
        }(bridge.EParticleContainer));
        bridge.ParticleContainer = ParticleContainer;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Particles = (function () {
            function Particles(game) {
                this.game = game;
                this.emitters = {};
                this.ID = 0;
                this._paused = false;
                this._focusPaused = false;
                this.game.onPause.add(this._focusPauseAll, this);
                this.game.onResume.add(this._focusResumeAll, this);
            }
            Particles.defaultCustomPathFunction = function (x) {
                return x;
            };
            Particles.prototype.add = function (emitter) {
                this.emitters[emitter.name] = emitter;
                return emitter;
            };
            Particles.prototype.createEmitter = function (particleParent, emitterData, config) {
                if (!(bridge.Emitter && PIXI.particles.Emitter)) {
                    console.error("Emitter Class not found. Please provide pixi-particles plugin.");
                    return null;
                }
                if (!particleParent) {
                    var id = Particles.EMITTER_CONT_ID + this.ID;
                    particleParent = new bridge.Container({ id: id }, this.game);
                }
                emitterData = this.initEmitterData(emitterData);
                var arts = [];
                switch (emitterData.emitterType) {
                    case bridge.IEmitterType.NORMAL:
                        arts = this.generateFramesNormal(emitterData);
                        break;
                    case bridge.IEmitterType.ANIM:
                        arts = this.generateFramesAnim(emitterData);
                        break;
                    case bridge.IEmitterType.PATH:
                        arts = this.generateFramesNormal(emitterData);
                        if (emitterData.path === "custom") {
                            config.extraData = { path: Particles.defaultCustomPathFunction };
                        }
                        else {
                            config.extraData = { path: emitterData.path };
                        }
                        break;
                    default:
                        break;
                }
                if (!arts.length) {
                    arts.push(bridge.Texture.EMPTY);
                }
                var newEmitter;
                if (emitterData.useParticleContainer) {
                    var quickContainer = new bridge.ParticleContainer();
                    quickContainer.setProperties({
                        scale: true,
                        position: true,
                        rotation: true,
                        uvs: true,
                        alpha: true
                    });
                    quickContainer.name = Particles.EMITTER_QUICK_CONT_ID;
                    particleParent.addChild(quickContainer);
                    newEmitter = new bridge.Emitter(quickContainer, arts, config, this.game);
                }
                else {
                    newEmitter = new bridge.Emitter(particleParent, arts, config, this.game);
                }
                newEmitter.emitterData = emitterData;
                if (emitterData.stepColors) {
                    newEmitter.startColor = PIXI.particles.ParticleUtils.createSteppedGradient(config.color.list, emitterData.stepColors);
                }
                if (emitterData.emitterType === bridge.IEmitterType.PATH) {
                    newEmitter.particleConstructor = bridge.PathParticle;
                }
                else if (emitterData.emitterType === bridge.IEmitterType.ANIM) {
                    newEmitter.particleConstructor = PIXI.particles.AnimatedParticle;
                }
                newEmitter.autoUpdate = !(emitterData.autoStart === false);
                newEmitter.name = (typeof emitterData.id === "string") ? emitterData.id : ("emitter_" + this.ID);
                this.add(newEmitter);
                return newEmitter;
            };
            Particles.prototype.generateFramesNormal = function (emitterData) {
                var _this = this;
                var arts = [];
                if (emitterData.generateFrames === undefined || emitterData.generateFrames === null) {
                    emitterData.generateFrames = false;
                }
                if (emitterData.image && !Array.isArray(emitterData.image)) {
                    emitterData.image = [emitterData.image];
                }
                emitterData.image.forEach(function (imgId, idx) {
                    if ((emitterData.frames === undefined || emitterData.frames === null) && !emitterData.generateFrames) {
                        if (_this.game.cache.getImage(imgId, true) && typeof _this.game.cache.getImage(imgId, true).url === "string") {
                            var url = _this.game.cache.getImage(imgId, true).url;
                            arts.push(bridge.Texture.from(url));
                        }
                        else {
                            arts.push(bridge.Texture.EMPTY);
                        }
                    }
                    else {
                        if (emitterData.generateFrames) {
                            if (emitterData.frames === undefined || emitterData.frames === null) {
                                var length_1 = _this.game.cache.getImage(imgId, true).frameData.frames.length;
                                emitterData.frames = [0, undefined, length_1];
                            }
                            emitterData.frames = bridge.Maths.getRange.apply(bridge.Maths, emitterData.frames);
                        }
                        if (!Array.isArray(emitterData.frames)) {
                            emitterData.frames = [emitterData.frames];
                        }
                        emitterData.frames.forEach(function (frameId, idx2) {
                            if (typeof frameId === "number") {
                                var img = _this.game.cache.getImage(imgId, true);
                                var frameName = img.frameData.frames[frameId].name;
                                arts.push(bridge.Texture.from(frameName));
                            }
                            else {
                                arts.push(bridge.Texture.from(frameId));
                            }
                        });
                    }
                });
                return arts;
            };
            Particles.prototype.generateFramesAnim = function (emitterData) {
                var _this = this;
                var dataArray = [];
                emitterData.animConfig.forEach(function (data, idx) {
                    if (data.framerate === undefined || data.framerate === null) {
                        data.framerate = "matchLife";
                    }
                    var textures = _this.generateFramesNormal(data);
                    dataArray.push({
                        framerate: data.framerate,
                        loop: (typeof data.loop === "boolean") ? data.loop : true,
                        textures: textures
                    });
                });
                return dataArray;
            };
            Particles.prototype._focusPauseAll = function () {
                for (var key in this.emitters) {
                    if (this.emitters.hasOwnProperty(key)) {
                        var emitter = this.emitters[key];
                        emitter && emitter.focusPause();
                    }
                }
                this._focusPaused = true;
            };
            Particles.prototype._focusResumeAll = function () {
                for (var key in this.emitters) {
                    if (this.emitters.hasOwnProperty(key)) {
                        var emitter = this.emitters[key];
                        emitter && emitter.focusResume();
                    }
                }
                this._focusPaused = false;
            };
            Particles.prototype.isPaused = function () { return this._focusPaused || this._paused; };
            Particles.prototype.pauseAll = function () {
                for (var key in this.emitters) {
                    if (this.emitters.hasOwnProperty(key)) {
                        var emitter = this.emitters[key];
                        emitter.autoUpdate = false;
                    }
                }
                this._paused = true;
            };
            Particles.prototype.resumeAll = function () {
                for (var key in this.emitters) {
                    if (this.emitters.hasOwnProperty(key)) {
                        var emitter = this.emitters[key];
                        emitter.autoUpdate = true;
                    }
                }
                this._paused = false;
            };
            Particles.prototype.remove = function (emitterId) {
                var targetEmitter = null;
                if (emitterId instanceof bridge.Emitter) {
                    targetEmitter = this.emitters[emitterId.name];
                    delete this.emitters[emitterId.name];
                }
                else if (typeof emitterId === "string") {
                    targetEmitter = this.emitters[emitterId];
                    delete this.emitters[emitterId];
                }
                else if (typeof emitterId === "number") {
                    targetEmitter = this.emitters["emitter_" + emitterId];
                    delete this.emitters["emitter_" + emitterId];
                }
                if (targetEmitter && !targetEmitter.isPendingDestroy()) {
                    targetEmitter.destroy();
                }
            };
            Particles.prototype.getEmitterById = function (id) {
                return this.emitters[id] || null;
            };
            Particles.prototype.initEmitterData = function (emitterData) {
                if (!emitterData) {
                    emitterData = { image: null };
                }
                if (emitterData.emitterType === undefined || emitterData.emitterType === null) {
                    emitterData.emitterType = bridge.IEmitterType.NORMAL;
                }
                if (emitterData.useParticleContainer === undefined || emitterData.useParticleContainer === null) {
                    emitterData.useParticleContainer = false;
                }
                if (emitterData.stepColors === undefined || emitterData.stepColors === null) {
                    emitterData.stepColors = 0;
                }
                if (typeof emitterData.lookAhead === undefined || emitterData.lookAhead === null) {
                    emitterData.lookAhead = false;
                }
                if ((emitterData.emitterType === bridge.IEmitterType.NORMAL || emitterData.emitterType === bridge.IEmitterType.PATH) &&
                    typeof emitterData.inOrder !== "boolean") {
                    emitterData.inOrder = false;
                }
                emitterData.extraData = emitterData.extraData || {};
                return emitterData;
            };
            Particles.EMITTER_CONT_ID = "emitterContainer_";
            Particles.EMITTER_QUICK_CONT_ID = "__emitterQuickContainer";
            return Particles;
        }());
        bridge.Particles = Particles;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        ingenuity.byPassMissingPluginError("PIXI.particles.PathParticle");
        var helperPoint = new bridge.Point();
        var PathParticle = (function (_super) {
            __extends(PathParticle, _super);
            function PathParticle() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PathParticle.prototype.update = function (delta) {
                var lerp = this.Particle_update(delta);
                if (lerp >= 0 && this.path) {
                    var speed = this.speedList.interpolate(lerp) * this.speedMultiplier;
                    this.movement += speed * delta;
                    var calculatedValue = this.path(this.movement);
                    if (typeof calculatedValue === "number") {
                        helperPoint.x = this.movement;
                        helperPoint.y = calculatedValue;
                    }
                    else if (typeof calculatedValue.x === "number" && typeof calculatedValue.y === "number") {
                        helperPoint.x = calculatedValue.x;
                        helperPoint.y = calculatedValue.y;
                    }
                    else {
                        throw new Error("PIXI.Particles :: Incorrect Function signation");
                    }
                    PIXI.particles.ParticleUtils.rotatePoint(this.initialRotation, helperPoint);
                    var oldX = this.position.x;
                    var oldY = this.position.y;
                    this.position.x = this.initialPosition.x + helperPoint.x;
                    this.position.y = this.initialPosition.y + helperPoint.y;
                    if (this.emitter && this.emitter.emitterData && this.emitter.emitterData.lookAhead) {
                        this.rotation = Math.atan2(this.position.y - oldY, this.position.x - oldX);
                    }
                }
                return lerp;
            };
            PathParticle.parseData = function (extraData) {
                var output = {};
                if (typeof extraData.path === "function") {
                    output.path = extraData.path;
                }
                else {
                    output = PIXI.particles.PathParticle.parseData(extraData);
                }
                return output;
            };
            return PathParticle;
        }(PIXI.particles.PathParticle));
        bridge.PathParticle = PathParticle;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var MatterBase = (function () {
            function MatterBase(game, config) {
                if (config === void 0) { config = {}; }
                this.data = {};
                this._origImageAnchor = null;
                this._origImagePos = null;
                this.game = game;
                this.config = config;
                (!this.config.canvasOptions) && (this.config.canvasOptions = {});
                this.init();
                this.initMatter();
                this.postInit();
            }
            MatterBase.prototype.init = function () {
                if (!(Matter && Matter.Engine && Matter.Render)) {
                    bridge.throwMissingClassError("Matter");
                }
                bridge.extendObj(this.config, MatterBase.DEFAULT_VALUES.matterBaseConfig, false);
                this.canvas = this.config.canvas || document.createElement("canvas");
                return this;
            };
            MatterBase.prototype.initMatter = function () {
                this.engine = Matter.Engine.create();
                this.world = this.engine.world;
                (typeof this.config.gravityX === "number") && (this.world.gravity.x = this.config.gravityX);
                (typeof this.config.gravityY === "number") && (this.world.gravity.y = this.config.gravityY);
                this.renderer = Matter.Render.create({
                    canvas: this.canvas,
                    engine: this.engine,
                    options: this.config.canvasOptions
                });
                this.canvas = this.renderer.canvas;
                if (this.config.autoStart) {
                    Matter.Engine.run(this.engine);
                    Matter.Render.run(this.renderer);
                }
                return this;
            };
            MatterBase.prototype.postInit = function () {
                if (this.config.image instanceof bridge.BitmapImage) {
                    this.image = this.config.image;
                    this.image.texture = bridge.Texture.from(this.canvas);
                }
                else {
                    this.image = new bridge.BitmapImage(this.game, undefined, undefined, undefined, undefined, bridge.Texture.from(this.canvas));
                }
                this.debugMode = this.config.debugMode;
                return this;
            };
            Object.defineProperty(MatterBase.prototype, "debugMode", {
                get: function () {
                    return this._debugMode;
                },
                set: function (val) {
                    if (!this.image) {
                        return;
                    }
                    this.image.visible = val;
                    if (val) {
                        this.game.ticker.add(this.update, this);
                        if (!(this.image.parent instanceof PIXI.Container)) {
                            this.game.stage.addChild(this.image);
                        }
                    }
                    else {
                        this.game.ticker.remove(this.update, this);
                        if (this.image.parent === this.game.stage) {
                            this.game.stage.removeChild(this.image);
                        }
                    }
                    this._debugMode = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MatterBase.prototype, "sprite", {
                get: function () {
                    return this.image;
                },
                enumerable: true,
                configurable: true
            });
            MatterBase.prototype.update = function (deltaTime) {
                this.image.texture.update();
            };
            MatterBase.prototype.destroy = function (destroyCanvas, destroyImage) {
                if (destroyCanvas === void 0) { destroyCanvas = true; }
                if (destroyImage === void 0) { destroyImage = true; }
                if (destroyCanvas) {
                    this.renderer && this.renderer.canvas && this.renderer.canvas.remove();
                }
                this.debugMode = false;
                this.renderer && Matter.Render.stop(this.renderer);
                this.world && Matter.World.clear(this.world, false);
                this.engine && Matter.Engine.clear(this.engine);
                this.renderer && (this.renderer.context = null);
                this.renderer && (this.renderer.textures = {});
                this.renderer = null;
                this.engine = null;
                this.world = null;
                this.game = null;
                this.canvas = null;
                if (destroyImage) {
                    this.image && (this.image = null);
                }
                this.config = null;
                this._debugMode = null;
                this.data = null;
                this._origImageAnchor = null;
                this._origImagePos = null;
            };
            MatterBase.parseArrayToVertices = function (verticesArray, multFactor) {
                if (multFactor === void 0) { multFactor = 1; }
                var str = "";
                if (Array.isArray(verticesArray)) {
                    verticesArray.forEach(function (element) {
                        var modd = element;
                        str += modd.toString() + " ";
                    });
                }
                else if (typeof verticesArray === "string") {
                    str = verticesArray;
                }
                else {
                    bridge.throwMissingParamsError("MatterBase", "parseArrayToVertices", "verticesArray");
                }
                var pathPattern = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig;
                var points = [];
                str.replace(pathPattern, function (match, x, y) {
                    points.push({ x: parseFloat(x) * multFactor, y: parseFloat(y) * multFactor });
                    return "";
                });
                return points;
            };
            MatterBase.DEFAULT_VALUES = {
                matterBaseConfig: {
                    gravityX: 0,
                    gravityY: 1,
                    autoStart: true,
                    debugMode: true,
                    canvasOptions: {
                        width: 1280,
                        height: 720,
                        background: "transparent",
                        wireframes: false
                    }
                }
            };
            return MatterBase;
        }());
        bridge.MatterBase = MatterBase;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        ingenuity.byPassNoClassError("THREE");
        var ThreeBase = (function () {
            function ThreeBase(game, config) {
                if (config === void 0) { config = {}; }
                this.data = {};
                this.game = game;
                this.config = config;
                this.init();
                this.initThree();
                this.addLight();
                this.addElements();
                this.setCameraPosition();
                this.postInit();
                this.addControl();
                this.draw();
            }
            ThreeBase.prototype.init = function () {
                if (!(bridge.EThree && bridge.EThree.WebGLRenderer && bridge.EThree.Scene)) {
                    bridge.throwMissingClassError("EThree");
                }
                bridge.extendObj(this.config, ThreeBase.DEFAULT_VALUES.threeBaseConfig, false);
                this.canvas = this.config.canvas || document.createElement("canvas");
                !this.config.rendererOptions && (this.config.rendererOptions = {});
                this.config.rendererOptions.canvas = this.canvas;
                return this;
            };
            ThreeBase.prototype.initThree = function () {
                this.renderer = new bridge.EThree.WebGLRenderer(this.config.rendererOptions);
                var camOpt = this.config.cameraOptions;
                switch (this.config.cameraType.toLowerCase()) {
                    case "orthographic":
                        this.camera = new bridge.EThree.OrthographicCamera(camOpt.left, camOpt.right, camOpt.top, camOpt.bottom, camOpt.near, camOpt.far);
                        break;
                    case "combined":
                        this.camera = new bridge.EThree.CombinedCamera(camOpt.width, camOpt.height, camOpt.fov, camOpt.near, camOpt.far, camOpt.orthoNear, camOpt.orthoFar);
                        break;
                    case "perspective":
                    default:
                        this.camera = new bridge.EThree.PerspectiveCamera(camOpt.fov, camOpt.aspect, camOpt.near, camOpt.far);
                        break;
                }
                this.scene = new bridge.EThree.Scene();
                return this;
            };
            ThreeBase.prototype.addLight = function () {
            };
            ThreeBase.prototype.addElements = function () {
            };
            ThreeBase.prototype.postInit = function () {
                if (this.config.image instanceof bridge.BitmapImage) {
                    this.image = this.config.image;
                    this.image.texture = bridge.Texture.from(this.renderer.domElement);
                }
                else {
                    this.image = new bridge.BitmapImage(this.game, undefined, undefined, undefined, undefined, bridge.Texture.from(this.renderer.domElement));
                }
                this.autoUpdate = this.config.autoUpdate;
                return this;
            };
            ThreeBase.prototype.addControl = function () {
            };
            ThreeBase.prototype.setCameraPosition = function () {
            };
            Object.defineProperty(ThreeBase.prototype, "autoUpdate", {
                get: function () {
                    return this._autoUpdate;
                },
                set: function (val) {
                    if (!this.image) {
                        return;
                    }
                    if (val) {
                        this.game.ticker.add(this.update, this);
                    }
                    else {
                        this.game.ticker.remove(this.update, this);
                    }
                    this._autoUpdate = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ThreeBase.prototype, "sprite", {
                get: function () {
                    return this.image;
                },
                enumerable: true,
                configurable: true
            });
            ThreeBase.prototype.update = function (deltaTime) {
                if (this.game.paused === false) {
                    this.controls && this.controls.update();
                    this.draw();
                    this.image.texture.update();
                }
            };
            ThreeBase.prototype.draw = function () {
                this.renderer.render(this.scene, this.camera);
            };
            ThreeBase.prototype.destroy = function (destroyCanvas, destroyImage) {
                if (destroyCanvas === void 0) { destroyCanvas = true; }
                if (destroyImage === void 0) { destroyImage = true; }
                if (destroyCanvas) {
                    this.canvas && this.canvas.remove();
                }
                this.autoUpdate = false;
                this.geometry && this.geometry.dispose();
                this.texture && this.texture.dispose();
                this.material && this.material.dispose();
                this.controls && this.controls.dispose();
                this.geometry = null;
                this.texture = null;
                this.material = null;
                this.camera = null;
                this.scene = null;
                this.canvas = null;
                this.game = null;
                this.renderer && (this.renderer.dispose());
                this.renderer && (this.renderer.clear());
                this.renderer = null;
                if (destroyImage && this.image) {
                    this.image.destroy();
                    this.image = null;
                }
                this.config = null;
                this._autoUpdate = null;
                this.data = null;
            };
            ThreeBase.DEFAULT_VALUES = {
                threeBaseConfig: {
                    autoUpdate: true,
                    rendererOptions: {
                        alpha: true,
                        antialias: false
                    },
                    cameraType: "PerspectiveCamera",
                    cameraOptions: {}
                }
            };
            return ThreeBase;
        }());
        bridge.ThreeBase = ThreeBase;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var BaseDragonBones = (function (_super) {
            __extends(BaseDragonBones, _super);
            function BaseDragonBones(json, game, parent, name, addToStage, enableBody, physicsBodyType) {
                var _this = _super.call(this, json, game, parent, name, addToStage, enableBody, physicsBodyType) || this;
                _this.json = json;
                _this.game = game;
                _this.init();
                return _this;
            }
            BaseDragonBones.prototype.init = function () {
                this.createArmature();
            };
            BaseDragonBones.prototype.createArmature = function () {
                var imgArr = [];
                var txtArr = [];
                for (var i = 0; i < this.json.images.length; i++) {
                    var im = this.game.cache.getImage(this.json.images[i], true);
                    imgArr.push(im);
                    txtArr.push(bridge.Texture.from(im.url));
                }
                var ske = this.game.cache.getJSON(this.json.skeleton);
                var atlasData = this.game.cache.getJSON(this.json.atlasData);
                var factory = dragonBones.PixiFactory.factory;
                factory.parseDragonBonesData(ske);
                if (atlasData) {
                    factory.parseTextureAtlasData(atlasData.data, txtArr[0]);
                }
                else {
                    factory.updateTextureAtlases(txtArr, this.json.id);
                }
                this.armatureDisplay = factory.buildArmatureDisplay(this.json.id);
                this.addChild(this.armatureDisplay);
            };
            BaseDragonBones.prototype.playAnim = function (anim) {
                this.armatureDisplay.animation.play(anim);
            };
            BaseDragonBones.prototype.stopAnim = function (anim) {
                this.armatureDisplay.animation.stop(anim);
            };
            BaseDragonBones.prototype.getArmatureObject = function () {
                return this.armatureDisplay;
            };
            return BaseDragonBones;
        }(bridge.Container));
        bridge.BaseDragonBones = BaseDragonBones;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Signal = (function () {
            function Signal() {
                this.memorize = false;
                this.active = true;
                this.boundDispatchVar = false;
                this.shouldPropagate = true;
                this.bindings = null;
                this.prevParams = null;
            }
            Object.defineProperty(Signal.prototype, "boundDispatch", {
                get: function () {
                    var _this = this;
                    return this.boundDispatchVar || (this.boundDispatchVar = function () {
                        return _this.dispatch.apply(_this, arguments);
                    });
                },
                enumerable: true,
                configurable: true
            });
            Signal.prototype.validateListener = function (listener, fnName) {
                if (typeof listener !== "function") {
                    throw new Error("Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName));
                }
            };
            Signal.prototype.has = function (listener, context) {
                return this.indexOfListener(listener, context) !== -1;
            };
            Signal.prototype.add = function (listener, listenerContext, priority, data) {
                this.validateListener(listener, "add");
                var args = [];
                if (arguments.length > 3) {
                    for (var i = 3; i < arguments.length; i++) {
                        args.push(arguments[i]);
                    }
                }
                return this.registerListener(listener, false, listenerContext, priority, args);
            };
            Signal.prototype.addOnce = function (listener, listenerContext, priority, data) {
                this.validateListener(listener, "addOnce");
                var args = [];
                if (arguments.length > 3) {
                    for (var i = 3; i < arguments.length; i++) {
                        args.push(arguments[i]);
                    }
                }
                return this.registerListener(listener, true, listenerContext, priority, args);
            };
            Signal.prototype.remove = function (listener, context) {
                this.validateListener(listener, "remove");
                var i = this.indexOfListener(listener, context);
                if (i !== -1) {
                    this.bindings[i].destroy();
                    this.bindings.splice(i, 1);
                }
                return listener;
            };
            Signal.prototype.removeAll = function (context) {
                if (context === undefined) {
                    context = null;
                }
                if (!this.bindings) {
                    return;
                }
                var n = this.bindings.length;
                while (n--) {
                    if (context) {
                        if (this.bindings[n].context === context) {
                            this.bindings[n].destroy();
                            this.bindings.splice(n, 1);
                        }
                    }
                    else {
                        this.bindings[n].destroy();
                    }
                }
                if (!context) {
                    this.bindings.length = 0;
                }
            };
            Signal.prototype.getNumListeners = function () {
                return this.bindings ? this.bindings.length : 0;
            };
            Signal.prototype.halt = function () {
                this.shouldPropagate = false;
            };
            Signal.prototype.dispatch = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                if (!this.active || (!this.bindings && !this.memorize)) {
                    return;
                }
                var paramsArr = Array.prototype.slice.call(arguments);
                if (this.memorize) {
                    this.prevParams = paramsArr;
                }
                var n = this.bindings ? this.bindings.length : 0;
                if (!n) {
                    return;
                }
                var bindings = this.bindings.slice();
                this.shouldPropagate = true;
                do {
                    n--;
                } while (bindings[n] && this.shouldPropagate && bindings[n].execute(paramsArr) !== false);
            };
            Signal.prototype.forget = function () {
                if (this.prevParams) {
                    this.prevParams = null;
                }
            };
            Signal.prototype.dispose = function () {
                this.removeAll();
                this.bindings = null;
                if (this.prevParams) {
                    this.prevParams = null;
                }
            };
            Signal.prototype.toString = function () {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
            };
            Signal.prototype.registerListener = function (listener, isOnce, listenerContext, priority, args) {
                var prevIndex = this.indexOfListener(listener, listenerContext);
                var binding;
                if (prevIndex !== -1) {
                    binding = this.bindings[prevIndex];
                    if (binding.isOnce() !== isOnce) {
                        throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (!isOnce ? "" : "Once") + "() the same listener without removing the relationship first.");
                    }
                }
                else {
                    binding = new bridge.SignalBinding(this, listener, isOnce, listenerContext, priority, args);
                    this.addBinding(binding);
                }
                if (this.memorize && this.prevParams) {
                    binding.execute(this.prevParams);
                }
                return binding;
            };
            Signal.prototype.addBinding = function (binding) {
                if (!this.bindings) {
                    this.bindings = [];
                }
                var n = this.bindings.length;
                do {
                    n--;
                } while (this.bindings[n] && binding._priority <= this.bindings[n]._priority);
                this.bindings.splice(n + 1, 0, binding);
            };
            Signal.prototype.indexOfListener = function (listener, context) {
                if (!this.bindings) {
                    return -1;
                }
                if (context === undefined) {
                    context = null;
                }
                var n = this.bindings.length;
                var cur;
                while (n--) {
                    cur = this.bindings[n];
                    if (cur.listener === listener && cur.context === context) {
                        return n;
                    }
                }
                return -1;
            };
            return Signal;
        }());
        bridge.Signal = Signal;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SignalBinding = (function () {
            function SignalBinding(signal, listener, isOnce, listenerContext, priority, args) {
                this.context = null;
                this.callCount = 0;
                this.active = true;
                this.params = null;
                this.isOnceVar = false;
                this.priority = 0;
                this.args = null;
                this.listener = listener;
                if (isOnce) {
                    this.isOnceVar = true;
                }
                if (listenerContext != null) {
                    this.context = listenerContext;
                }
                this.signal = signal;
                if (priority) {
                    this.priority = priority;
                }
                if (args && args.length) {
                    this.args = args;
                }
            }
            SignalBinding.prototype.execute = function (paramsArr) {
                var handlerReturn, params;
                if (this.active && !!this.listener) {
                    params = this.params ? this.params.concat(paramsArr) : paramsArr;
                    if (this.args) {
                        params = params.concat(this.args);
                    }
                    handlerReturn = this.listener.apply(this.context, params);
                    this.callCount++;
                    if (this.isOnce()) {
                        this.detach();
                    }
                }
                return handlerReturn;
            };
            SignalBinding.prototype.detach = function () {
                return this.isBound() ? this.signal.remove(this.listener, this.context) : null;
            };
            SignalBinding.prototype.isBound = function () {
                return (!!this.signal && !!this.listener);
            };
            SignalBinding.prototype.isOnce = function () {
                return this.isOnceVar;
            };
            SignalBinding.prototype.getListener = function () {
                return this.listener;
            };
            SignalBinding.prototype.getSignal = function () {
                return this.signal;
            };
            SignalBinding.prototype.toString = function () {
                return "[SignalBinding isOnce:" + this.isOnceVar + ", isBound:" + this.isBound() + ", active:" + this.active + "]";
            };
            SignalBinding.prototype.destroy = function () {
                delete this.signal;
                delete this.listener;
                delete this.context;
            };
            return SignalBinding;
        }());
        bridge.SignalBinding = SignalBinding;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var StateBase = (function () {
            function StateBase(game) {
                this.game = null;
                this.key = "";
                this.add = null;
                this.camera = null;
                this.cache = null;
                this.input = null;
                this.load = null;
                this.math = null;
                this.sound = null;
                this.scale = null;
                this.stage = null;
                this.state = null;
                this.time = null;
                this.tweens = null;
                this.particles = null;
                this.rnd = null;
                (game) && (this.game = game);
            }
            StateBase.prototype.create = function (game) {
            };
            StateBase.prototype.init = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
            };
            StateBase.prototype.loadRender = function (game) {
            };
            StateBase.prototype.loadUpdate = function (game) {
            };
            StateBase.prototype.paused = function (game) {
            };
            StateBase.prototype.pauseUpdate = function (game) {
            };
            StateBase.prototype.preload = function (game) {
            };
            StateBase.prototype.preRender = function (game, elapsedTime) {
            };
            StateBase.prototype.render = function (game) {
            };
            StateBase.prototype.resize = function (width, height) {
            };
            StateBase.prototype.resumed = function (game) {
            };
            StateBase.prototype.shutdown = function (game) {
            };
            StateBase.prototype.update = function (game) {
            };
            return StateBase;
        }());
        bridge.StateBase = StateBase;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var StateManager = (function () {
            function StateManager(game, pendingState) {
                this.states = {};
                this.onInitCallback = null;
                this.onPreloadCallback = null;
                this.onCreateCallback = null;
                this.onUpdateCallback = null;
                this.onRenderCallback = null;
                this.onResizeCallback = null;
                this.onPreRenderCallback = null;
                this.onLoadUpdateCallback = null;
                this.onLoadRenderCallback = null;
                this.onPausedCallback = null;
                this.onResumedCallback = null;
                this.onPauseUpdateCallback = null;
                this.onShutDownCallback = null;
                this.pendingState = null;
                this.clearWorld = false;
                this.clearCache = false;
                this.args = [];
                this.callbackContext = null;
                this.onStateChange = new bridge.Signal();
                this.created = false;
                this.game = game;
                if (typeof pendingState !== "undefined" && pendingState !== null) {
                    this.pendingState = pendingState;
                }
            }
            StateManager.prototype.link = function (key) {
                this.states[key].game = this.game;
                this.states[key].add = this.game.add;
                this.states[key].camera = this.game.camera;
                this.states[key].cache = this.game.cache;
                this.states[key].input = this.game.input;
                this.states[key].load = this.game.load;
                this.states[key].math = this.game.math;
                this.states[key].sound = this.game.sound;
                this.states[key].scale = this.game.scale;
                this.states[key].state = this;
                this.states[key].stage = this.game.stage;
                this.states[key].time = this.game.time;
                this.states[key].tweens = this.game.tweens;
                this.states[key].particles = this.game.particles;
                this.states[key].rnd = this.game.rnd;
                this.states[key].key = key;
            };
            StateManager.prototype.unlink = function (key) {
                if (this.states[key]) {
                    this.states[key].game = null;
                    this.states[key].add = null;
                    this.states[key].camera = null;
                    this.states[key].cache = null;
                    this.states[key].input = null;
                    this.states[key].load = null;
                    this.states[key].math = null;
                    this.states[key].sound = null;
                    this.states[key].scale = null;
                    this.states[key].state = null;
                    this.states[key].stage = null;
                    this.states[key].time = null;
                    this.states[key].tweens = null;
                    this.states[key].particles = null;
                    this.states[key].rnd = null;
                }
            };
            StateManager.prototype.getCurrentState = function () {
                return this.states[this.current];
            };
            StateManager.prototype.setCurrentState = function (key) {
                this.callbackContext = this.states[key];
                this.link(key);
                this.onInitCallback = this.states[key].init || this.dummy;
                this.onPreloadCallback = this.states[key].preload || null;
                this.onLoadRenderCallback = this.states[key].loadRender || null;
                this.onLoadUpdateCallback = this.states[key].loadUpdate || null;
                this.onCreateCallback = this.states[key].create || null;
                this.onUpdateCallback = this.states[key].update || null;
                this.onPreRenderCallback = this.states[key].preRender || null;
                this.onRenderCallback = this.states[key].render || null;
                this.onResizeCallback = this.states[key].resize || null;
                this.onPausedCallback = this.states[key].paused || null;
                this.onResumedCallback = this.states[key].resumed || null;
                this.onPauseUpdateCallback = this.states[key].pauseUpdate || null;
                this.onShutDownCallback = this.states[key].shutdown || this.dummy;
                if (this.current !== "") {
                }
                this.current = key;
                this.created = false;
                this.onInitCallback.apply(this.callbackContext, this.args);
                if (key === this.pendingState) {
                    this.args = [];
                }
            };
            StateManager.prototype.pauseUpdate = function () {
                if (this.created) {
                    if (this.onPauseUpdateCallback) {
                        this.onPauseUpdateCallback.call(this.callbackContext, this.game);
                    }
                }
                else {
                    if (this.onLoadUpdateCallback) {
                        this.onLoadUpdateCallback.call(this.callbackContext, this.game);
                    }
                }
            };
            StateManager.prototype.boot = function () {
                this.game.onPause.add(this.pause, this);
                this.game.onResume.add(this.resume, this);
                if (this.pendingState !== null && typeof this.pendingState !== "string") {
                    this.add("default", this.pendingState, true);
                }
            };
            StateManager.prototype.pause = function () {
            };
            StateManager.prototype.add = function (key, state, autoStart) {
                if (autoStart === undefined) {
                    autoStart = false;
                }
                var newState;
                if (state instanceof bridge.StateBase) {
                    newState = state;
                }
                else if (typeof state === "object") {
                    newState = state;
                    newState.game = this.game;
                }
                else if (typeof state === "function") {
                    newState = new state(this.game);
                }
                this.states[key] = newState;
                if (autoStart) {
                    if (this.game.isBooted) {
                        this.start(key);
                    }
                    else {
                        this.pendingState = key;
                    }
                }
                return newState;
            };
            StateManager.prototype.checkState = function (key) {
                if (this.states[key]) {
                    if (this.states[key].preload || this.states[key].create || this.states[key].update || this.states[key].render) {
                        return true;
                    }
                    else {
                        console.warn("Invalid State object given. Must contain at least a one of the required functions: preload, create, update or render");
                        return false;
                    }
                }
                else {
                    console.warn("StateManager - No state found with the key: " + key);
                    return false;
                }
            };
            StateManager.prototype.clearCurrentState = function () {
                if (this.current) {
                    if (this.onShutDownCallback) {
                        this.onShutDownCallback.call(this.callbackContext, this.game);
                    }
                }
            };
            StateManager.prototype.destroy = function () {
                this.clearWorld = true;
                this.clearCache = true;
                this.clearCurrentState();
                this.callbackContext = null;
                this.onInitCallback = null;
                this.onShutDownCallback = null;
                this.onPreloadCallback = null;
                this.onLoadRenderCallback = null;
                this.onLoadUpdateCallback = null;
                this.onCreateCallback = null;
                this.onUpdateCallback = null;
                this.onRenderCallback = null;
                this.onPausedCallback = null;
                this.onResumedCallback = null;
                this.onPauseUpdateCallback = null;
                this.game = null;
                this.states = {};
                this.pendingState = null;
                this.current = "";
            };
            StateManager.prototype.loadComplete = function () {
                if (this.created === false && this.onLoadUpdateCallback) {
                    this.onLoadUpdateCallback.call(this.callbackContext, this.game);
                }
                if (this.created === false && this.onCreateCallback) {
                    this.created = true;
                    this.onCreateCallback.call(this.callbackContext, this.game);
                }
                else {
                    this.created = true;
                }
            };
            StateManager.prototype.preRender = function (elapsedTime) {
                if (this.created && this.onPreRenderCallback) {
                    this.onPreRenderCallback.call(this.callbackContext, this.game, elapsedTime);
                }
            };
            StateManager.prototype.preUpdate = function () {
                if (this.pendingState && this.game.isBooted) {
                    var previousStateKey = this.current;
                    this.clearCurrentState();
                    this.setCurrentState(this.pendingState);
                    this.onStateChange.dispatch(this.current, previousStateKey);
                    if (this.current !== this.pendingState) {
                        return;
                    }
                    else {
                        this.pendingState = null;
                    }
                    if (this.onPreloadCallback) {
                        this.onPreloadCallback.call(this.callbackContext, this.game);
                        if (this.game.load.totalQueuedFiles() === 0 && this.game.load.totalQueuedPacks() === 0) {
                            this.loadComplete();
                        }
                        else {
                            this.game.load.start();
                        }
                    }
                    else {
                        this.loadComplete();
                    }
                }
            };
            StateManager.prototype.render = function () {
                if (this.created) {
                    if (this.onRenderCallback) {
                        if (this.game.renderer instanceof PIXI.CanvasRenderer) {
                            this.onRenderCallback.call(this.callbackContext, this.game);
                        }
                        else {
                            this.onRenderCallback.call(this.callbackContext, this.game);
                        }
                    }
                }
                else {
                    if (this.onLoadRenderCallback) {
                        this.onLoadRenderCallback.call(this.callbackContext, this.game);
                    }
                }
            };
            StateManager.prototype.remove = function (key) {
                if (this.current === key) {
                    this.callbackContext = null;
                    this.onInitCallback = null;
                    this.onShutDownCallback = null;
                    this.onPreloadCallback = null;
                    this.onLoadRenderCallback = null;
                    this.onLoadUpdateCallback = null;
                    this.onCreateCallback = null;
                    this.onUpdateCallback = null;
                    this.onPreRenderCallback = null;
                    this.onRenderCallback = null;
                    this.onResizeCallback = null;
                    this.onPausedCallback = null;
                    this.onResumedCallback = null;
                    this.onPauseUpdateCallback = null;
                }
                delete this.states[key];
            };
            StateManager.prototype.resume = function () {
                if (this.created && this.onResumedCallback) {
                    this.onResumedCallback.call(this.callbackContext, this.game);
                }
            };
            StateManager.prototype.restart = function (clearWorld, clearCache) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
            };
            StateManager.prototype.resize = function (width, height) {
                if (this.onResizeCallback) {
                    this.onResizeCallback.call(this.callbackContext, width, height);
                }
            };
            StateManager.prototype.start = function (key, clearWorld, clearCache) {
                var args = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    args[_i - 3] = arguments[_i];
                }
                if (clearWorld === undefined) {
                    clearWorld = true;
                }
                if (clearCache === undefined) {
                    clearCache = false;
                }
                if (this.checkState(key)) {
                    this.pendingState = key;
                    this.clearWorld = clearWorld;
                    this.clearCache = clearCache;
                    if (arguments.length > 3) {
                        this.args = Array.prototype.splice.call(arguments, 3);
                    }
                }
            };
            StateManager.prototype.update = function () {
                if (this.created) {
                    if (this.onUpdateCallback) {
                        this.onUpdateCallback.call(this.callbackContext, this.game);
                    }
                }
                else {
                    if (this.onLoadUpdateCallback) {
                        this.onLoadUpdateCallback.call(this.callbackContext, this.game);
                    }
                }
            };
            StateManager.prototype.dummy = function () {
            };
            StateManager.prototype.loadUpdate = function () {
                if (this.created === false && this.onLoadUpdateCallback) {
                    this.onLoadUpdateCallback.call(this.callbackContext, this.game);
                }
            };
            return StateManager;
        }());
        bridge.StateManager = StateManager;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Time = (function () {
            function Time(game) {
                this.frameCount = 0;
                this.elapsedAccumulator = 0;
                this.started = 0;
                this.timeLastSecond = 0;
                this.pauseStarted = 0;
                this.justResumed = false;
                this.timers = [];
                this.game = game;
                this.time = 0;
                this.prevTime = 0;
                this.now = 0;
                this.elapsed = 0;
                this.elapsedMS = 0;
                this.physicsElapsed = 1 / 60;
                this.physicsElapsedMS = (1 / 60) * 1000;
                this.desiredFpsMult = 1.0 / 60;
                this.desiredFpsObj = 60;
                this.suggestedFps = this.desiredFps;
                this.slowMotion = 1.0;
                this.advancedTiming = false;
                this.frames = 0;
                this.updates = 0;
                this.renders = 0;
                this.fps = 0;
                this.ups = 0;
                this.rps = 0;
                this.fpsMin = 1000;
                this.fpsMax = 0;
                this.msMin = 1000;
                this.msMax = 0;
                this.pauseDuration = 0;
                this.timeToCall = 0;
                this.timeExpected = 0;
                this.events = new bridge.Timer(this.game, false);
                this.frameCount = 0;
                this.elapsedAccumulator = 0;
                this.started = 0;
                this.timeLastSecond = 0;
                this.pauseStarted = 0;
                this.justResumed = false;
                this.timers = [];
            }
            Time.prototype.boot = function () {
                this.started = Date.now();
                this.time = Date.now();
                this.events.start();
                this.timeExpected = this.time;
            };
            Time.prototype.add = function (timer) {
                this.timers.push(timer);
                return timer;
            };
            Time.prototype.create = function (autoDestroy) {
                if (autoDestroy === undefined) {
                    autoDestroy = true;
                }
                var timer = new bridge.Timer(this.game, autoDestroy);
                this.timers.push(timer);
                return timer;
            };
            Time.prototype.removeAll = function () {
                for (var i = 0; i < this.timers.length; i++) {
                    this.timers[i].destroy();
                }
                this.timers = [];
                this.events.removeAll();
            };
            Time.prototype.refresh = function () {
                var previousDateNow = this.time;
                this.time = Date.now();
                this.elapsedMS = this.time - previousDateNow;
            };
            Time.prototype.update = function (time) {
                var previousDateNow = this.time;
                this.time = Date.now();
                this.elapsedMS = this.time - previousDateNow;
                this.prevTime = this.now;
                this.now = time;
                this.elapsed = this.now - this.prevTime;
                if (this.advancedTiming) {
                    this.updateAdvancedTiming();
                }
                if (!this.game.paused) {
                    this.events.update(this.time);
                    if (this.timers.length) {
                        this.updateTimers();
                    }
                }
            };
            Time.prototype.updateTimers = function () {
                var i = 0;
                var len = this.timers.length;
                while (i < len) {
                    if (this.timers[i].update(this.time)) {
                        i++;
                    }
                    else {
                        this.timers.splice(i, 1);
                        len--;
                    }
                }
            };
            Time.prototype.updateAdvancedTiming = function () {
                this.frameCount++;
                this.elapsedAccumulator += this.elapsed;
                if (this.frameCount >= this.desiredFpsObj * 2) {
                    this.suggestedFps = Math.floor(200 / (this.elapsedAccumulator / this.frameCount)) * 5;
                    this.frameCount = 0;
                    this.elapsedAccumulator = 0;
                }
                this.msMin = Math.min(this.msMin, this.elapsed);
                this.msMax = Math.max(this.msMax, this.elapsed);
                this.frames++;
                var interval = this.now - this.timeLastSecond;
                this.fps = Math.round((this.frames * 1000) / interval);
                this.ups = Math.round((this.updates * 1000) / interval);
                this.rps = Math.round((this.renders * 1000) / interval);
                this.fpsMin = Math.min(this.fpsMin, this.fps);
                this.fpsMax = Math.max(this.fpsMax, this.fps);
                this.timeLastSecond = this.now;
                this.frames = 0;
                this.updates = 0;
                this.renders = 0;
            };
            Time.prototype.countUpdate = function () {
                if (this.advancedTiming) {
                    this.updates++;
                }
            };
            Time.prototype.countRender = function () {
                if (this.advancedTiming) {
                    this.renders++;
                }
            };
            Time.prototype.gamePaused = function () {
                this.pauseStarted = Date.now();
                this.events.pause();
                var i = this.timers.length;
                while (i--) {
                    this.timers[i]._pause();
                }
            };
            Time.prototype.gameResumed = function () {
                this.time = Date.now();
                this.pauseDuration = this.time - this.pauseStarted;
                this.events.resume();
                var i = this.timers.length;
                while (i--) {
                    this.timers[i]._resume();
                }
            };
            Time.prototype.totalElapsedSeconds = function () {
                return (this.time - this.started) * 0.001;
            };
            Time.prototype.elapsedSince = function (since) {
                return this.time - since;
            };
            Time.prototype.elapsedSecondsSince = function (since) {
                return (this.time - since) * 0.001;
            };
            Time.prototype.reset = function () {
                this.started = this.time;
                this.removeAll();
            };
            Object.defineProperty(Time.prototype, "desiredFps", {
                get: function () {
                    return this.desiredFpsObj;
                },
                set: function (value) {
                    this.desiredFpsObj = value;
                    this.physicsElapsed = 1 / value;
                    this.physicsElapsedMS = this.physicsElapsed * 1000;
                    this.desiredFpsMult = 1.0 / value;
                },
                enumerable: true,
                configurable: true
            });
            return Time;
        }());
        bridge.Time = Time;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Timer = (function () {
            function Timer(game, autoDestroy) {
                if (autoDestroy === undefined) {
                    autoDestroy = true;
                }
                this.game = game;
                this.running = false;
                this.autoDestroy = autoDestroy;
                this.expired = false;
                this.elapsed = 0;
                this.events = [];
                this.onComplete = new bridge.Signal();
                this.nextTick = 0;
                this.timeCap = 1000;
                this.paused = false;
                this.codePaused = false;
                this.started = 0;
                this.pauseStarted = 0;
                this.pauseTotal = 0;
                this.now = Date.now();
                this.len = 0;
                this.marked = 0;
                this.i = 0;
                this.newTick = 0;
                Timer.MINUTE = 60000;
                Timer.SECOND = 1000;
                Timer.HALF = 500;
                Timer.QUARTER = 250;
            }
            Timer.prototype.create = function (delay, loop, repeatCount, callback, callbackContext, args) {
                delay = Math.round(delay);
                var tick = delay;
                if (this.now === 0) {
                    tick += this.game.time.time;
                }
                else {
                    tick += this.now;
                }
                var event = new bridge.TimerEvent(this, delay, tick, repeatCount, loop, callback, callbackContext, args);
                this.events.push(event);
                this.order();
                this.expired = false;
                return event;
            };
            Timer.prototype.add = function (delay, callback, callbackContext) {
                var args = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    args[_i - 3] = arguments[_i];
                }
                return this.create(delay, false, 0, callback, callbackContext, Array.prototype.slice.call(arguments, 3));
            };
            Timer.prototype.repeat = function (delay, repeatCount, callback, callbackContext) {
                var args = [];
                for (var _i = 4; _i < arguments.length; _i++) {
                    args[_i - 4] = arguments[_i];
                }
                return this.create(delay, false, repeatCount, callback, callbackContext, Array.prototype.slice.call(arguments, 4));
            };
            Timer.prototype.loop = function (delay, callback, callbackContext) {
                var args = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    args[_i - 3] = arguments[_i];
                }
                return this.create(delay, true, 0, callback, callbackContext, Array.prototype.slice.call(arguments, 3));
            };
            Timer.prototype.start = function (delay) {
                if (this.running) {
                    return;
                }
                this.started = this.game.time.time + (delay || 0);
                this.running = true;
                for (var i = 0; i < this.events.length; i++) {
                    this.events[i].tick = this.events[i].delay + this.started;
                }
            };
            Timer.prototype.stop = function (clearEvents) {
                this.running = false;
                if (clearEvents === undefined) {
                    clearEvents = true;
                }
                if (clearEvents) {
                    this.events.length = 0;
                }
            };
            Timer.prototype.remove = function (event) {
                for (var i = 0; i < this.events.length; i++) {
                    if (this.events[i] === event) {
                        this.events[i].pendingDelete = true;
                        return true;
                    }
                }
                return false;
            };
            Timer.prototype.order = function () {
                if (this.events.length > 0) {
                    this.events.sort(this.sortHandler);
                    this.nextTick = this.events[0].tick;
                }
            };
            Timer.prototype.sortHandler = function (a, b) {
                if (a.tick < b.tick) {
                    return -1;
                }
                else if (a.tick > b.tick) {
                    return 1;
                }
                return 0;
            };
            Timer.prototype.clearPendingEvents = function () {
                this.i = this.events.length;
                while (this.i--) {
                    if (this.events[this.i].pendingDelete) {
                        this.events.splice(this.i, 1);
                    }
                }
                this.len = this.events.length;
                this.i = 0;
            };
            Timer.prototype.update = function (time) {
                if (this.paused) {
                    return true;
                }
                this.elapsed = time - this.now;
                this.now = time;
                if (this.elapsed > this.timeCap) {
                    this.adjustEvents(time - this.elapsed);
                }
                this.marked = 0;
                this.clearPendingEvents();
                if (this.running && this.now >= this.nextTick && this.len > 0) {
                    while (this.i < this.len && this.running) {
                        var event_1 = this.events[this.i];
                        if (this.now >= event_1.tick && !event_1.pendingDelete) {
                            this.newTick = (this.now + event_1.delay) - (this.now - event_1.tick);
                            if (this.newTick < 0) {
                                this.newTick = this.now + event_1.delay;
                            }
                            if (event_1.loop === true) {
                                event_1.tick = this.newTick;
                                event_1.callback.apply(event_1.callbackContext, event_1.args);
                            }
                            else if (event_1.repeatCount > 0) {
                                event_1.repeatCount--;
                                event_1.tick = this.newTick;
                                event_1.callback.apply(event_1.callbackContext, event_1.args);
                            }
                            else {
                                this.marked++;
                                event_1.pendingDelete = true;
                                event_1.callback.apply(event_1.callbackContext, event_1.args);
                            }
                            this.i++;
                        }
                        else {
                            break;
                        }
                    }
                    if (this.events.length > this.marked) {
                        this.order();
                    }
                    else {
                        this.expired = true;
                        this.onComplete.dispatch(this);
                    }
                }
                if (this.expired && this.autoDestroy) {
                    return false;
                }
                else {
                    return true;
                }
            };
            Timer.prototype.pause = function () {
                if (!this.running) {
                    return;
                }
                this.codePaused = true;
                if (this.paused) {
                    return;
                }
                this.pauseStarted = this.game.time.time;
                this.paused = true;
            };
            Timer.prototype._pause = function () {
                this.pause();
            };
            Timer.prototype.adjustEvents = function (baseTime) {
                for (var i = 0; i < this.events.length; i++) {
                    if (!this.events[i].pendingDelete) {
                        var t = this.events[i].tick - baseTime;
                        if (t < 0) {
                            t = 0;
                        }
                        this.events[i].tick = this.now + t;
                    }
                }
                var d = this.nextTick - baseTime;
                if (d < 0) {
                    this.nextTick = this.now;
                }
                else {
                    this.nextTick = this.now + d;
                }
            };
            Timer.prototype.resume = function () {
                if (!this.paused) {
                    return;
                }
                var now = this.game.time.time;
                this.pauseTotal += now - this.now;
                this.now = now;
                this.adjustEvents(this.pauseStarted);
                this.paused = false;
                this.codePaused = false;
            };
            Timer.prototype._resume = function () {
                if (this.codePaused) {
                    return;
                }
                else {
                    this.resume();
                }
            };
            Timer.prototype.removeAll = function () {
                this.onComplete.removeAll();
                this.events.length = 0;
                this.len = 0;
                this.i = 0;
            };
            Timer.prototype.destroy = function () {
                this.onComplete.removeAll();
                this.running = false;
                this.expired = true;
                this.events = [];
                this.len = 0;
                this.i = 0;
            };
            Object.defineProperty(Timer.prototype, "next", {
                get: function () {
                    return this.nextTick;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Timer.prototype, "duration", {
                get: function () {
                    if (this.running && this.nextTick > this.now) {
                        return this.nextTick - this.now;
                    }
                    else {
                        return 0;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Timer.prototype, "length", {
                get: function () {
                    return this.events.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Timer.prototype, "ms", {
                get: function () {
                    if (this.running) {
                        return this.now - this.started - this.pauseTotal;
                    }
                    else {
                        return 0;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Timer.prototype, "seconds", {
                get: function () {
                    if (this.running) {
                        return this.ms * 0.001;
                    }
                    else {
                        return 0;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return Timer;
        }());
        bridge.Timer = Timer;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var TimerEvent = (function () {
            function TimerEvent(timer, delay, tick, repeatCount, loop, callback, callbackContext) {
                var args = [];
                for (var _i = 7; _i < arguments.length; _i++) {
                    args[_i - 7] = arguments[_i];
                }
                this.timer = timer;
                this.delay = delay;
                this.tick = tick;
                this.repeatCount = repeatCount - 1;
                this.loop = loop;
                this.callback = callback;
                this.callbackContext = callbackContext;
                this.args = args;
                this.pendingDelete = false;
            }
            return TimerEvent;
        }());
        bridge.TimerEvent = TimerEvent;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Tween = (function () {
            function Tween(target, game, manager) {
                this.chainedTween = null;
                this.current = 0;
                this.isRunning = false;
                this.isPaused = false;
                this.onChildComplete = new bridge.Signal();
                this.onComplete = new bridge.Signal();
                this.onLoop = new bridge.Signal();
                this.onRepeat = new bridge.Signal();
                this.onStart = new bridge.Signal();
                this.pendingDelete = false;
                this.properties = {};
                this.repeatCounter = 0;
                this.reverse = false;
                this.timeline = new Array();
                this.timeScale = 1;
                this._onUpdateCallback = null;
                this._onUpdateCallbackContext = null;
                this._pausedTime = 0;
                this._codePaused = false;
                this._hasStarted = false;
                this.target = target;
                this.game = game;
                this.manager = manager;
            }
            Object.defineProperty(Tween.prototype, "totalDuration", {
                get: function () {
                    var total = 0;
                    this.timeline.forEach(function (tweenData) {
                        total += tweenData.duration;
                    });
                    return total;
                },
                enumerable: true,
                configurable: true
            });
            Tween.prototype.to = function (properties, duration, ease, autoStart, delay, repeat, yoyo) {
                if (duration === undefined || duration <= 0) {
                    duration = 1000;
                }
                if (ease === undefined || ease === null) {
                    ease = bridge.Easing.Default;
                }
                if (autoStart === undefined) {
                    autoStart = false;
                }
                if (delay === undefined) {
                    delay = 0;
                }
                if (repeat === undefined) {
                    repeat = 0;
                }
                if (yoyo === undefined) {
                    yoyo = false;
                }
                if (typeof ease === "string" && this.manager.easeMap[ease]) {
                    ease = this.manager.easeMap[ease];
                }
                if (this.isRunning) {
                    console.warn("Tween.to cannot be called after Tween.start");
                    return this;
                }
                this.timeline.push(new bridge.TweenData(this).to(properties, duration, ease, delay, repeat, yoyo));
                if (autoStart) {
                    this.start();
                }
                return this;
            };
            Tween.prototype.from = function (properties, duration, ease, autoStart, delay, repeat, yoyo) {
                if (duration === undefined) {
                    duration = 1000;
                }
                if (ease === undefined || ease === null) {
                    ease = bridge.Easing.Default;
                }
                if (autoStart === undefined) {
                    autoStart = false;
                }
                if (delay === undefined) {
                    delay = 0;
                }
                if (repeat === undefined) {
                    repeat = 0;
                }
                if (yoyo === undefined) {
                    yoyo = false;
                }
                if (typeof ease === "string" && this.manager.easeMap[ease]) {
                    ease = this.manager.easeMap[ease];
                }
                if (this.isRunning) {
                    console.warn("Tween.from cannot be called after Tween.start");
                    return this;
                }
                this.timeline.push(new bridge.TweenData(this).from(properties, duration, ease, delay, repeat, yoyo));
                if (autoStart) {
                    this.start();
                }
                return this;
            };
            Tween.prototype.start = function (index) {
                if (index === undefined) {
                    index = 0;
                }
                if (this.game === null || this.target === null || this.timeline.length === 0 || this.isRunning) {
                    return this;
                }
                for (var i = 0; i < this.timeline.length; i++) {
                    for (var property in this.timeline[i].vEnd) {
                        this.properties[property] = this.target[property] || 0;
                        if (!Array.isArray(this.properties[property])) {
                            this.properties[property] *= 1.0;
                        }
                    }
                }
                for (var i = 0; i < this.timeline.length; i++) {
                    this.timeline[i].loadValues();
                }
                this.manager.add(this);
                this.isRunning = true;
                if (index < 0 || index > this.timeline.length - 1) {
                    index = 0;
                }
                this.current = index;
                this.timeline[this.current].start();
                return this;
            };
            Tween.prototype.stop = function (complete) {
                if (complete === void 0) { complete = false; }
                this.isRunning = false;
                this._onUpdateCallback = null;
                this._onUpdateCallbackContext = null;
                if (complete) {
                    this.onComplete.dispatch(this.target, this);
                    this._hasStarted = false;
                    if (this.chainedTween) {
                        this.chainedTween.start();
                    }
                }
                this.manager.remove(this);
                return this;
            };
            Tween.prototype.updateTweenData = function (property, value, index) {
                if (index === void 0) { index = 0; }
                if (this.timeline.length === 0) {
                    return this;
                }
                if (index === -1) {
                    for (var i = 0; i < this.timeline.length; i++) {
                        this.timeline[i][property] = value;
                    }
                }
                else {
                    this.timeline[index][property] = value;
                }
                return this;
            };
            Tween.prototype.delay = function (duration, index) {
                return this.updateTweenData("delay", duration, index);
            };
            Tween.prototype.repeat = function (total, repeatDelay, index) {
                if (repeatDelay === undefined) {
                    repeatDelay = 0;
                }
                this.updateTweenData("repeatCounter", total, index);
                return this.updateTweenData("repeatDelay", repeatDelay, index);
            };
            Tween.prototype.repeatDelay = function (duration, index) {
                if (index === void 0) { index = 0; }
                return this.updateTweenData("repeatDelay", duration, index);
            };
            Tween.prototype.yoyo = function (enable, yoyoDelay, index) {
                if (yoyoDelay === void 0) { yoyoDelay = 0; }
                if (index === void 0) { index = 0; }
                this.updateTweenData("yoyo", enable, index);
                return this.updateTweenData("yoyoDelay", yoyoDelay, index);
            };
            Tween.prototype.yoyoDelay = function (duration, index) {
                if (index === void 0) { index = 0; }
                return this.updateTweenData("yoyoDelay", duration, index);
            };
            Tween.prototype.easing = function (ease, index) {
                if (index === void 0) { index = 0; }
                if (typeof ease === "string" && this.manager.easeMap[ease]) {
                    ease = this.manager.easeMap[ease];
                }
                return this.updateTweenData("easingFunction", ease, index);
            };
            Tween.prototype.interpolation = function (interpolation, context, index) {
                if (context === undefined) {
                    context = bridge.Maths;
                }
                this.updateTweenData("interpolationFunction", interpolation, index);
                return this.updateTweenData("interpolationContext", context, index);
            };
            Tween.prototype.repeatAll = function (total) {
                if (total === undefined) {
                    total = 0;
                }
                this.repeatCounter = total;
                return this;
            };
            Tween.prototype.chain = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var i = arguments.length;
                while (i--) {
                    if (i > 0) {
                        arguments[i - 1].chainedTween = arguments[i];
                    }
                    else {
                        this.chainedTween = arguments[i];
                    }
                }
                return this;
            };
            Tween.prototype.loop = function (value) {
                if (value === undefined) {
                    value = true;
                }
                this.repeatCounter = (value) ? -1 : 0;
                return this;
            };
            Tween.prototype.onUpdateCallback = function (callback, callbackContext) {
                this._onUpdateCallback = callback;
                this._onUpdateCallbackContext = callbackContext;
                return this;
            };
            Tween.prototype.pause = function () {
                this.isPaused = true;
                this._codePaused = true;
                this._pausedTime = this.game.time.time;
            };
            Tween.prototype._pause = function () {
                if (!this._codePaused) {
                    this.isPaused = true;
                    this._pausedTime = this.game.time.time;
                }
            };
            Tween.prototype.resume = function () {
                if (this.isPaused) {
                    this.isPaused = false;
                    this._codePaused = false;
                    for (var i = 0; i < this.timeline.length; i++) {
                        if (!this.timeline[i].isRunning) {
                            this.timeline[i].startTime += (this.game.time.time - this._pausedTime);
                        }
                    }
                }
            };
            Tween.prototype._resume = function () {
                if (this._codePaused) {
                    return;
                }
                else {
                    this.resume();
                }
            };
            Tween.prototype.update = function (time) {
                if (this.pendingDelete || !this.target) {
                    return false;
                }
                if (this.isPaused) {
                    return true;
                }
                var status = this.timeline[this.current].update(time);
                if (status === bridge.TweenData.PENDING) {
                    return true;
                }
                else if (status === bridge.TweenData.RUNNING) {
                    if (!this._hasStarted) {
                        this.onStart.dispatch(this.target, this);
                        this._hasStarted = true;
                    }
                    if (this._onUpdateCallback !== null) {
                        this._onUpdateCallback.call(this._onUpdateCallbackContext, this, this.timeline[this.current].value, this.timeline[this.current]);
                    }
                    return this.isRunning;
                }
                else if (status === bridge.TweenData.LOOPED) {
                    if (this.timeline[this.current].repeatCounter === -1) {
                        this.onLoop.dispatch(this.target, this);
                    }
                    else {
                        this.onRepeat.dispatch(this.target, this);
                    }
                    return true;
                }
                else if (status === bridge.TweenData.COMPLETE) {
                    var complete = false;
                    if (this.reverse) {
                        this.current--;
                        if (this.current < 0) {
                            this.current = this.timeline.length - 1;
                            complete = true;
                        }
                    }
                    else {
                        this.current++;
                        if (this.current === this.timeline.length) {
                            this.current = 0;
                            complete = true;
                        }
                    }
                    if (complete) {
                        if (this.repeatCounter === -1) {
                            this.timeline[this.current].start();
                            this.onLoop.dispatch(this.target, this);
                            return true;
                        }
                        else if (this.repeatCounter > 0) {
                            this.repeatCounter--;
                            this.timeline[this.current].start();
                            this.onRepeat.dispatch(this.target, this);
                            return true;
                        }
                        else {
                            this.isRunning = false;
                            this.onComplete.dispatch(this.target, this);
                            this._hasStarted = false;
                            if (this.chainedTween) {
                                this.chainedTween.start();
                            }
                            return false;
                        }
                    }
                    else {
                        this.onChildComplete.dispatch(this.target, this);
                        this.timeline[this.current].start();
                        return true;
                    }
                }
            };
            Tween.prototype.generateData = function (frameRate, data) {
                if (this.game === null || this.target === null) {
                    return null;
                }
                if (frameRate === undefined) {
                    frameRate = 60;
                }
                if (data === undefined) {
                    data = [];
                }
                for (var i = 0; i < this.timeline.length; i++) {
                    for (var property in this.timeline[i].vEnd) {
                        this.properties[property] = this.target[property] || 0;
                        if (!Array.isArray(this.properties[property])) {
                            this.properties[property] *= 1.0;
                        }
                    }
                }
                for (var i = 0; i < this.timeline.length; i++) {
                    this.timeline[i].loadValues();
                }
                for (var i = 0; i < this.timeline.length; i++) {
                    data = data.concat(this.timeline[i].generateData(frameRate));
                }
                return data;
            };
            return Tween;
        }());
        bridge.Tween = Tween;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var TweenData = (function () {
            function TweenData(parent) {
                this.repeatTotal = 0;
                this.vStart = {};
                this.vStartCache = {};
                this.vEnd = {};
                this.vEndCache = {};
                this.duration = 1000;
                this.percent = 0;
                this.value = 0;
                this.repeatCounter = 0;
                this.repeatDelay = 0;
                this.interpolate = false;
                this.yoyo = false;
                this.yoyoDelay = 0;
                this.inReverse = false;
                this.delay = 0;
                this.dt = 0;
                this.startTime = null;
                this.easingFunction = bridge.Easing.Default;
                this.interpolationFunction = bridge.Maths.linearInterpolation;
                this.interpolationContext = bridge.Maths;
                this.isRunning = false;
                this.isFrom = false;
                this.yoyoCounter = 0;
                this.parent = parent;
                this.game = parent.game;
            }
            TweenData.prototype.to = function (properties, duration, ease, delay, repeat, yoyo) {
                this.vEnd = properties;
                this.duration = duration;
                this.easingFunction = ease;
                this.delay = delay;
                this.repeatTotal = repeat;
                this.yoyo = yoyo;
                this.isFrom = false;
                return this;
            };
            TweenData.prototype.from = function (properties, duration, ease, delay, repeat, yoyo) {
                this.vEnd = properties;
                this.duration = duration;
                this.easingFunction = ease;
                this.delay = delay;
                this.repeatTotal = repeat;
                this.yoyo = yoyo;
                this.isFrom = true;
                return this;
            };
            TweenData.prototype.start = function () {
                this.startTime = this.game.time.time + this.delay;
                if (this.parent.reverse) {
                    this.dt = this.duration;
                }
                else {
                    this.dt = 0;
                }
                if (this.delay > 0) {
                    this.isRunning = false;
                }
                else {
                    this.isRunning = true;
                }
                if (this.isFrom) {
                    for (var property in this.vStartCache) {
                        this.vStart[property] = this.vEndCache[property];
                        this.vEnd[property] = this.vStartCache[property];
                        this.parent.target[property] = this.vStart[property];
                    }
                }
                this.value = 0;
                this.yoyoCounter = 0;
                this.repeatCounter = this.repeatTotal;
                return this;
            };
            TweenData.prototype.loadValues = function () {
                for (var property in this.parent.properties) {
                    this.vStart[property] = this.parent.properties[property];
                    if (Array.isArray(this.vEnd[property])) {
                        if (this.vEnd[property].length === 0) {
                            continue;
                        }
                        if (this.percent === 0) {
                            this.vEnd[property] = [this.vStart[property]].concat(this.vEnd[property]);
                        }
                    }
                    if (typeof this.vEnd[property] !== "undefined") {
                        if (typeof this.vEnd[property] === "string") {
                            this.vEnd[property] = this.vStart[property] + parseFloat(this.vEnd[property]);
                        }
                        this.parent.properties[property] = this.vEnd[property];
                    }
                    else {
                        this.vEnd[property] = this.vStart[property];
                    }
                    this.vStartCache[property] = this.vStart[property];
                    this.vEndCache[property] = this.vEnd[property];
                }
                return this;
            };
            TweenData.prototype.update = function (time) {
                if (!this.isRunning) {
                    if (time >= this.startTime) {
                        this.isRunning = true;
                    }
                    else {
                        return TweenData.PENDING;
                    }
                }
                else {
                    if (time < this.startTime) {
                        return TweenData.RUNNING;
                    }
                }
                var ms = (this.parent.frameBased) ? this.game.time.physicsElapsedMS : this.game.time.elapsedMS;
                if (this.parent.reverse) {
                    this.dt -= ms * this.parent.timeScale;
                    this.dt = Math.max(this.dt, 0);
                }
                else {
                    this.dt += ms * this.parent.timeScale;
                    this.dt = Math.min(this.dt, this.duration);
                }
                this.percent = this.dt / this.duration;
                this.value = this.easingFunction(this.percent);
                for (var property in this.vEnd) {
                    var start = this.vStart[property];
                    var end = this.vEnd[property];
                    if (Array.isArray(end)) {
                        this.parent.target[property] = this.interpolationFunction.call(this.interpolationContext, end, this.value);
                    }
                    else {
                        this.parent.target[property] = start + ((end - start) * this.value);
                    }
                }
                if ((!this.parent.reverse && this.percent === 1) || (this.parent.reverse && this.percent === 0)) {
                    return this.repeat();
                }
                return TweenData.RUNNING;
            };
            TweenData.prototype.generateData = function (frameRate) {
                if (this.parent.reverse) {
                    this.dt = this.duration;
                }
                else {
                    this.dt = 0;
                }
                var data = [];
                var complete = false;
                var fps = (1 / frameRate) * 1000;
                do {
                    if (this.parent.reverse) {
                        this.dt -= fps;
                        this.dt = Math.max(this.dt, 0);
                    }
                    else {
                        this.dt += fps;
                        this.dt = Math.min(this.dt, this.duration);
                    }
                    this.percent = this.dt / this.duration;
                    this.value = this.easingFunction(this.percent);
                    var blob = {};
                    for (var property in this.vEnd) {
                        var start = this.vStart[property];
                        var end = this.vEnd[property];
                        if (Array.isArray(end)) {
                            blob[property] = this.interpolationFunction(end, this.value);
                        }
                        else {
                            blob[property] = start + ((end - start) * this.value);
                        }
                    }
                    data.push(blob);
                    if ((!this.parent.reverse && this.percent === 1) || (this.parent.reverse && this.percent === 0)) {
                        complete = true;
                    }
                } while (!complete);
                if (this.yoyo) {
                    var reversed = data.slice();
                    reversed.reverse();
                    data = data.concat(reversed);
                }
                return data;
            };
            TweenData.prototype.repeat = function () {
                if (this.yoyo) {
                    if (this.inReverse && this.repeatCounter === 0) {
                        return TweenData.COMPLETE;
                    }
                    this.inReverse = !this.inReverse;
                }
                else {
                    if (this.repeatCounter === 0) {
                        return TweenData.COMPLETE;
                    }
                }
                if (this.inReverse) {
                    for (var property in this.vStartCache) {
                        this.vStart[property] = this.vEndCache[property];
                        this.vEnd[property] = this.vStartCache[property];
                    }
                }
                else {
                    for (var property in this.vStartCache) {
                        this.vStart[property] = this.vStartCache[property];
                        this.vEnd[property] = this.vEndCache[property];
                    }
                    if (this.repeatCounter > 0) {
                        this.repeatCounter--;
                    }
                }
                this.startTime = this.game.time.time;
                if (this.yoyo && this.inReverse) {
                    this.startTime += this.yoyoDelay;
                }
                else if (!this.inReverse) {
                    this.startTime += this.repeatDelay;
                }
                if (this.parent.reverse) {
                    this.dt = this.duration;
                }
                else {
                    this.dt = 0;
                }
                return TweenData.LOOPED;
            };
            TweenData.PENDING = 0;
            TweenData.RUNNING = 1;
            TweenData.LOOPED = 2;
            TweenData.COMPLETE = 3;
            return TweenData;
        }());
        bridge.TweenData = TweenData;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var TweenManager = (function () {
            function TweenManager(game) {
                this.frameBase = false;
                this._tweens = [];
                this._add = [];
                this.easeMap = null;
                this.game = game;
                this.easeMap = {
                    Power0: bridge.Easing.Power0,
                    Power1: bridge.Easing.Power1,
                    Power2: bridge.Easing.Power2,
                    Power3: bridge.Easing.Power3,
                    Power4: bridge.Easing.Power4,
                    "Linear": bridge.Easing.Linear.None,
                    "Quad": bridge.Easing.Quadratic.Out,
                    "Cubic": bridge.Easing.Cubic.Out,
                    "Quart": bridge.Easing.Quartic.Out,
                    "Quint": bridge.Easing.Quintic.Out,
                    "Sine": bridge.Easing.Sinusoidal.Out,
                    "Expo": bridge.Easing.Exponential.Out,
                    "Circ": bridge.Easing.Circular.Out,
                    "Elastic": bridge.Easing.Elastic.Out,
                    "Back": bridge.Easing.Back.Out,
                    "Bounce": bridge.Easing.Bounce.Out,
                    "Quad.easeIn": bridge.Easing.Quadratic.In,
                    "Cubic.easeIn": bridge.Easing.Cubic.In,
                    "Quart.easeIn": bridge.Easing.Quartic.In,
                    "Quint.easeIn": bridge.Easing.Quintic.In,
                    "Sine.easeIn": bridge.Easing.Sinusoidal.In,
                    "Expo.easeIn": bridge.Easing.Exponential.In,
                    "Circ.easeIn": bridge.Easing.Circular.In,
                    "Elastic.easeIn": bridge.Easing.Elastic.In,
                    "Back.easeIn": bridge.Easing.Back.In,
                    "Bounce.easeIn": bridge.Easing.Bounce.In,
                    "Quad.easeOut": bridge.Easing.Quadratic.Out,
                    "Cubic.easeOut": bridge.Easing.Cubic.Out,
                    "Quart.easeOut": bridge.Easing.Quartic.Out,
                    "Quint.easeOut": bridge.Easing.Quintic.Out,
                    "Sine.easeOut": bridge.Easing.Sinusoidal.Out,
                    "Expo.easeOut": bridge.Easing.Exponential.Out,
                    "Circ.easeOut": bridge.Easing.Circular.Out,
                    "Elastic.easeOut": bridge.Easing.Elastic.Out,
                    "Back.easeOut": bridge.Easing.Back.Out,
                    "Bounce.easeOut": bridge.Easing.Bounce.Out,
                    "Quad.easeInOut": bridge.Easing.Quadratic.InOut,
                    "Cubic.easeInOut": bridge.Easing.Cubic.InOut,
                    "Quart.easeInOut": bridge.Easing.Quartic.InOut,
                    "Quint.easeInOut": bridge.Easing.Quintic.InOut,
                    "Sine.easeInOut": bridge.Easing.Sinusoidal.InOut,
                    "Expo.easeInOut": bridge.Easing.Exponential.InOut,
                    "Circ.easeInOut": bridge.Easing.Circular.InOut,
                    "Elastic.easeInOut": bridge.Easing.Elastic.InOut,
                    "Back.easeInOut": bridge.Easing.Back.InOut,
                    "Bounce.easeInOut": bridge.Easing.Bounce.InOut
                };
                this.game.onPause.add(this._pauseAll, this);
                this.game.onResume.add(this._resumeAll, this);
            }
            TweenManager.prototype.getAll = function () {
                return this._tweens;
            };
            TweenManager.prototype.removeAll = function () {
                this._tweens.forEach(function (tween) {
                    tween.pendingDelete = true;
                });
                this._add = [];
            };
            TweenManager.prototype.removeFrom = function (obj, children) {
                if (children === undefined) {
                    children = true;
                }
                var i;
                var len;
                if (Array.isArray(obj)) {
                    for (i = 0, len = obj.length; i < len; i++) {
                        this.removeFrom(obj[i]);
                    }
                }
                else if (obj.type === bridge.GROUP && children) {
                    for (i = 0, len = obj.children.length; i < len; i++) {
                        this.removeFrom(obj.children[i]);
                    }
                }
                else {
                    for (i = 0, len = this._tweens.length; i < len; i++) {
                        if (obj === this._tweens[i].target) {
                            this.remove(this._tweens[i]);
                        }
                    }
                    for (i = 0, len = this._add.length; i < len; i++) {
                        if (obj === this._add[i].target) {
                            this.remove(this._add[i]);
                        }
                    }
                }
            };
            TweenManager.prototype.add = function (tween) {
                tween.manager = this;
                this._add.push(tween);
                return tween;
            };
            TweenManager.prototype.create = function (object) {
                return new bridge.Tween(object, this.game, this);
            };
            TweenManager.prototype.remove = function (tween) {
                var i = this._tweens.indexOf(tween);
                if (i !== -1) {
                    this._tweens[i].pendingDelete = true;
                }
                else {
                    i = this._add.indexOf(tween);
                    if (i !== -1) {
                        this._add[i].pendingDelete = true;
                    }
                }
                return tween;
            };
            TweenManager.prototype.update = function () {
                var addTweens = this._add.length;
                var numTweens = this._tweens.length;
                if (numTweens === 0 && addTweens === 0) {
                    return false;
                }
                var i = 0;
                while (i < numTweens) {
                    if (this._tweens[i].update(this.game.time.time)) {
                        i++;
                    }
                    else {
                        this._tweens.splice(i, 1);
                        numTweens--;
                    }
                }
                if (addTweens > 0) {
                    this._tweens = this._tweens.concat(this._add);
                    this._add.length = 0;
                }
                return true;
            };
            TweenManager.prototype.isTweening = function (object) {
                return this._tweens.some(function (tween) {
                    return tween.target === object;
                });
            };
            TweenManager.prototype._pauseAll = function () {
                for (var i = this._tweens.length - 1; i >= 0; i--) {
                    this._tweens[i].pause();
                }
            };
            TweenManager.prototype._resumeAll = function () {
                for (var i = this._tweens.length - 1; i >= 0; i--) {
                    this._tweens[i].resume();
                }
            };
            TweenManager.prototype.pauseAll = function () {
                for (var i = this._tweens.length - 1; i >= 0; i--) {
                    this._tweens[i].pause();
                }
            };
            TweenManager.prototype.resumeAll = function () {
                for (var i = this._tweens.length - 1; i >= 0; i--) {
                    this._tweens[i].resume();
                }
            };
            return TweenManager;
        }());
        bridge.TweenManager = TweenManager;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Color = (function () {
            function Color() {
            }
            Color.packPixel = function (r, g, b, a) {
                if (bridge.Device.LITTLE_ENDIAN) {
                    return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
                }
                else {
                    return ((r << 24) | (g << 16) | (b << 8) | a) >>> 0;
                }
            };
            Color.unpackPixel = function (rgba, out, hsl, hsv) {
                if (out === undefined || out === null) {
                    out = Color.createColor();
                }
                if (hsl === undefined || hsl === null) {
                    hsl = false;
                }
                if (hsv === undefined || hsv === null) {
                    hsv = false;
                }
                if (bridge.Device.LITTLE_ENDIAN) {
                    out.a = ((rgba & 0xff000000) >>> 24);
                    out.b = ((rgba & 0x00ff0000) >>> 16);
                    out.g = ((rgba & 0x0000ff00) >>> 8);
                    out.r = ((rgba & 0x000000ff));
                }
                else {
                    out.r = ((rgba & 0xff000000) >>> 24);
                    out.g = ((rgba & 0x00ff0000) >>> 16);
                    out.b = ((rgba & 0x0000ff00) >>> 8);
                    out.a = ((rgba & 0x000000ff));
                }
                out.color = rgba;
                out.rgba = "rgba(" + out.r + "," + out.g + "," + out.b + "," + (out.a / 255) + ")";
                if (hsl) {
                    Color.RGBtoHSL(out.r, out.g, out.b, out);
                }
                if (hsv) {
                    Color.RGBtoHSV(out.r, out.g, out.b, out);
                }
                return out;
            };
            Color.fromRGBA = function (rgba, out) {
                if (!out) {
                    out = Color.createColor();
                }
                out.r = ((rgba & 0xff000000) >>> 24);
                out.g = ((rgba & 0x00ff0000) >>> 16);
                out.b = ((rgba & 0x0000ff00) >>> 8);
                out.a = ((rgba & 0x000000ff));
                out.rgba = "rgba(" + out.r + "," + out.g + "," + out.b + "," + out.a + ")";
                return out;
            };
            Color.toRGBA = function (r, g, b, a) {
                return (r << 24) | (g << 16) | (b << 8) | a;
            };
            Color.toABGR = function (r, g, b, a) {
                return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
            };
            Color.RGBtoHSL = function (r, g, b, out) {
                if (!out) {
                    out = Color.createColor(r, g, b, 1);
                }
                r /= 255;
                g /= 255;
                b /= 255;
                var min = Math.min(r, g, b);
                var max = Math.max(r, g, b);
                out.h = 0;
                out.s = 0;
                out.l = (max + min) / 2;
                if (max !== min) {
                    var d = max - min;
                    out.s = out.l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    if (max === r) {
                        out.h = (g - b) / d + (g < b ? 6 : 0);
                    }
                    else if (max === g) {
                        out.h = (b - r) / d + 2;
                    }
                    else if (max === b) {
                        out.h = (r - g) / d + 4;
                    }
                    out.h /= 6;
                }
                return out;
            };
            Color.HSLtoRGB = function (h, s, l, out) {
                if (!out) {
                    out = Color.createColor(l, l, l);
                }
                else {
                    out.r = l;
                    out.g = l;
                    out.b = l;
                }
                if (s !== 0) {
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    out.r = Color.hueToColor(p, q, h + 1 / 3);
                    out.g = Color.hueToColor(p, q, h);
                    out.b = Color.hueToColor(p, q, h - 1 / 3);
                }
                out.r = Math.floor((out.r * 255 | 0));
                out.g = Math.floor((out.g * 255 | 0));
                out.b = Math.floor((out.b * 255 | 0));
                Color.updateColor(out);
                return out;
            };
            Color.RGBtoHSV = function (r, g, b, out) {
                if (!out) {
                    out = Color.createColor(r, g, b, 255);
                }
                r /= 255;
                g /= 255;
                b /= 255;
                var min = Math.min(r, g, b);
                var max = Math.max(r, g, b);
                var d = max - min;
                out.h = 0;
                out.s = max === 0 ? 0 : d / max;
                out.v = max;
                if (max !== min) {
                    if (max === r) {
                        out.h = (g - b) / d + (g < b ? 6 : 0);
                    }
                    else if (max === g) {
                        out.h = (b - r) / d + 2;
                    }
                    else if (max === b) {
                        out.h = (r - g) / d + 4;
                    }
                    out.h /= 6;
                }
                return out;
            };
            Color.HSVtoRGB = function (h, s, v, out) {
                if (out === undefined) {
                    out = Color.createColor(0, 0, 0, 1, h, s, 0, v);
                }
                var r;
                var g;
                var b;
                var i = Math.floor(h * 6);
                var f = h * 6 - i;
                var p = v * (1 - s);
                var q = v * (1 - f * s);
                var t = v * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                }
                out.r = Math.floor(r * 255);
                out.g = Math.floor(g * 255);
                out.b = Math.floor(b * 255);
                Color.updateColor(out);
                return out;
            };
            Color.hueToColor = function (p, q, t) {
                if (t < 0) {
                    t += 1;
                }
                if (t > 1) {
                    t -= 1;
                }
                if (t < 1 / 6) {
                    return p + (q - p) * 6 * t;
                }
                if (t < 1 / 2) {
                    return q;
                }
                if (t < 2 / 3) {
                    return p + (q - p) * (2 / 3 - t) * 6;
                }
                return p;
            };
            Color.createColor = function (r, g, b, a, h, s, l, v) {
                var out = {
                    r: r || 0,
                    g: g || 0,
                    b: b || 0,
                    a: a || 1,
                    h: h || 0,
                    s: s || 0,
                    l: l || 0,
                    v: v || 0,
                    color: 0,
                    color32: 0,
                    rgba: ""
                };
                return Color.updateColor(out);
            };
            Color.updateColor = function (out) {
                out.rgba = "rgba(" + out.r.toString() + "," + out.g.toString() + "," + out.b.toString() + "," + out.a.toString() + ")";
                out.color = Color.getColor(out.r, out.g, out.b);
                out.color32 = Color.getColor32(out.a * 255, out.r, out.g, out.b);
                return out;
            };
            Color.getColor32 = function (a, r, g, b) {
                return a << 24 | r << 16 | g << 8 | b;
            };
            Color.getColor = function (r, g, b) {
                return r << 16 | g << 8 | b;
            };
            Color.RGBtoString = function (r, g, b, a, prefix) {
                if (a === undefined) {
                    a = 255;
                }
                if (prefix === undefined) {
                    prefix = "#";
                }
                if (prefix === "#") {
                    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                }
                else {
                    return "0x" + Color.componentToHex(a) + Color.componentToHex(r) + Color.componentToHex(g) + Color.componentToHex(b);
                }
            };
            Color.hexToRGB = function (hex) {
                var rgb = Color.hexToColor(hex);
                if (rgb) {
                    return Color.getColor32(rgb.a, rgb.r, rgb.g, rgb.b);
                }
            };
            Color.hexToColor = function (hex, out) {
                hex = hex.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });
                var result = /^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                if (result) {
                    var r = parseInt(result[1], 16);
                    var g = parseInt(result[2], 16);
                    var b = parseInt(result[3], 16);
                    if (!out) {
                        out = Color.createColor(r, g, b);
                    }
                    else {
                        out.r = r;
                        out.g = g;
                        out.b = b;
                    }
                }
                return out;
            };
            Color.webToColor = function (web, out) {
                if (!out) {
                    out = Color.createColor();
                }
                var result = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(web);
                if (result) {
                    out.r = parseInt(result[1], 10);
                    out.g = parseInt(result[2], 10);
                    out.b = parseInt(result[3], 10);
                    out.a = result[4] !== undefined ? parseFloat(result[4]) : 1;
                    Color.updateColor(out);
                }
                return out;
            };
            Color.valueToColor = function (value, out) {
                if (!out) {
                    out = Color.createColor();
                }
                if (typeof value === "string") {
                    if (value.indexOf("rgb") === 0) {
                        return Color.webToColor(value, out);
                    }
                    else {
                        out.a = 1;
                        return Color.hexToColor(value, out);
                    }
                }
                else if (typeof value === "number") {
                    var tempColor = Color.getRGB(value);
                    out.r = tempColor.r;
                    out.g = tempColor.g;
                    out.b = tempColor.b;
                    out.a = tempColor.a / 255;
                    return out;
                }
                else {
                    return out;
                }
            };
            Color.componentToHex = function (color) {
                var hex = color.toString(16);
                return (hex.length === 1) ? "0" + hex : hex;
            };
            Color.HSVColorWheel = function (s, v) {
                if (s === undefined) {
                    s = 1.0;
                }
                if (v === undefined) {
                    v = 1.0;
                }
                var colors = [];
                for (var c = 0; c <= 359; c++) {
                    colors.push(Color.HSVtoRGB(c / 359, s, v));
                }
                return colors;
            };
            Color.HSLColorWheel = function (s, l) {
                if (s === undefined) {
                    s = 0.5;
                }
                if (l === undefined) {
                    l = 0.5;
                }
                var colors = [];
                for (var c = 0; c <= 359; c++) {
                    colors.push(Color.HSLtoRGB(c / 359, s, l));
                }
                return colors;
            };
            Color.interpolateColor = function (color1, color2, steps, currentStep, alpha) {
                if (alpha === undefined) {
                    alpha = 255;
                }
                var src1 = Color.getRGB(color1);
                var src2 = Color.getRGB(color2);
                var r = (((src2.red - src1.red) * currentStep) / steps) + src1.red;
                var g = (((src2.green - src1.green) * currentStep) / steps) + src1.green;
                var b = (((src2.blue - src1.blue) * currentStep) / steps) + src1.blue;
                return Color.getColor32(alpha, r, g, b);
            };
            Color.interpolateColorWithRGB = function (color, r, g, b, steps, currentStep) {
                var src = Color.getRGB(color);
                var or = (((r - src.red) * currentStep) / steps) + src.red;
                var og = (((g - src.green) * currentStep) / steps) + src.green;
                var ob = (((b - src.blue) * currentStep) / steps) + src.blue;
                return Color.getColor(or, og, ob);
            };
            Color.interpolateRGB = function (r1, g1, b1, r2, g2, b2, steps, currentStep) {
                var r = (((r2 - r1) * currentStep) / steps) + r1;
                var g = (((g2 - g1) * currentStep) / steps) + g1;
                var b = (((b2 - b1) * currentStep) / steps) + b1;
                return Color.getColor(r, g, b);
            };
            Color.getRandomColor = function (min, max, alpha) {
                if (min === undefined) {
                    min = 0;
                }
                if (max === undefined) {
                    max = 255;
                }
                if (alpha === undefined) {
                    alpha = 255;
                }
                if (max > 255 || min > max) {
                    return Color.getColor(255, 255, 255);
                }
                var red = min + Math.round(Math.random() * (max - min));
                var green = min + Math.round(Math.random() * (max - min));
                var blue = min + Math.round(Math.random() * (max - min));
                return Color.getColor32(alpha, red, green, blue);
            };
            Color.getRGB = function (color) {
                if (color > 16777215) {
                    return {
                        alpha: color >>> 24,
                        red: color >> 16 & 0xFF,
                        green: color >> 8 & 0xFF,
                        blue: color & 0xFF,
                        a: color >>> 24,
                        r: color >> 16 & 0xFF,
                        g: color >> 8 & 0xFF,
                        b: color & 0xFF
                    };
                }
                else {
                    return {
                        alpha: 255,
                        red: color >> 16 & 0xFF,
                        green: color >> 8 & 0xFF,
                        blue: color & 0xFF,
                        a: 255,
                        r: color >> 16 & 0xFF,
                        g: color >> 8 & 0xFF,
                        b: color & 0xFF
                    };
                }
            };
            Color.getWebRGB = function (color) {
                if (typeof color === "object") {
                    return "rgba(" + color.r.toString() + "," + color.g.toString() + "," + color.b.toString() + "," + (color.a / 255).toString() + ")";
                }
                else {
                    var rgb = Color.getRGB(color);
                    return "rgba(" + rgb.r.toString() + "," + rgb.g.toString() + "," + rgb.b.toString() + "," + (rgb.a / 255).toString() + ")";
                }
            };
            Color.getAlpha = function (color) {
                return color >>> 24;
            };
            Color.getAlphaFloat = function (color) {
                return (color >>> 24) / 255;
            };
            Color.getRed = function (color) {
                return color >> 16 & 0xFF;
            };
            Color.getGreen = function (color) {
                return color >> 8 & 0xFF;
            };
            Color.getBlue = function (color) {
                return color & 0xFF;
            };
            Color.blendNormal = function (a) {
                return a;
            };
            Color.blendLighten = function (a, b) {
                return (b > a) ? b : a;
            };
            Color.blendDarken = function (a, b) {
                return (b > a) ? a : b;
            };
            Color.blendMultiply = function (a, b) {
                return (a * b) / 255;
            };
            Color.blendAverage = function (a, b) {
                return (a + b) / 2;
            };
            Color.blendAdd = function (a, b) {
                return Math.min(255, a + b);
            };
            Color.blendSubtract = function (a, b) {
                return Math.max(0, a + b - 255);
            };
            Color.blendDifference = function (a, b) {
                return Math.abs(a - b);
            };
            Color.blendNegation = function (a, b) {
                return 255 - Math.abs(255 - a - b);
            };
            Color.blendScreen = function (a, b) {
                return 255 - (((255 - a) * (255 - b)) >> 8);
            };
            Color.blendExclusion = function (a, b) {
                return a + b - 2 * a * b / 255;
            };
            Color.blendOverlay = function (a, b) {
                return b < 128 ? (2 * a * b / 255) : (255 - 2 * (255 - a) * (255 - b) / 255);
            };
            Color.blendSoftLight = function (a, b) {
                return b < 128 ? (2 * ((a >> 1) + 64)) * (b / 255) : 255 - (2 * (255 - ((a >> 1) + 64)) * (255 - b) / 255);
            };
            Color.blendHardLight = function (a, b) {
                return Color.blendOverlay(b, a);
            };
            Color.blendColorDodge = function (a, b) {
                return b === 255 ? b : Math.min(255, ((a << 8) / (255 - b)));
            };
            Color.blendColorBurn = function (a, b) {
                return b === 0 ? b : Math.max(0, (255 - ((255 - a) << 8) / b));
            };
            Color.blendLinearDodge = function (a, b) {
                return Color.blendAdd(a, b);
            };
            Color.blendLinearBurn = function (a, b) {
                return Color.blendSubtract(a, b);
            };
            Color.blendLinearLight = function (a, b) {
                return b < 128 ? Color.blendLinearBurn(a, 2 * b) : Color.blendLinearDodge(a, (2 * (b - 128)));
            };
            Color.blendVividLight = function (a, b) {
                return b < 128 ? Color.blendColorBurn(a, 2 * b) : Color.blendColorDodge(a, (2 * (b - 128)));
            };
            Color.blendPinLight = function (a, b) {
                return b < 128 ? Color.blendDarken(a, 2 * b) : Color.blendLighten(a, (2 * (b - 128)));
            };
            Color.blendHardMix = function (a, b) {
                return Color.blendVividLight(a, b) < 128 ? 0 : 255;
            };
            Color.blendReflect = function (a, b) {
                return b === 255 ? b : Math.min(255, (a * a / (255 - b)));
            };
            Color.blendGlow = function (a, b) {
                return Color.blendReflect(b, a);
            };
            Color.blendPhoenix = function (a, b) {
                return Math.min(a, b) - Math.max(a, b) + 255;
            };
            return Color;
        }());
        bridge.Color = Color;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Device = (function () {
            function Device() {
                this.onInitialized = new bridge.Signal();
                this.deviceReadyAt = 0;
                this.initialized = false;
                this.desktop = false;
                this.iOS = false;
                this.iOSVersion = 0;
                this.cocoonJS = false;
                this.cordova = false;
                this.ejecta = false;
                this.crosswalk = false;
                this.android = false;
                this.chromeOS = false;
                this.linux = false;
                this.macOS = false;
                this.windows = false;
                this.windowsPhone = false;
                this.canvas = false;
                this.canvasBitBltShift = false;
                this.webGL = false;
                this.file = false;
                this.fileSystem = false;
                this.worker = false;
                this.css3D = false;
                this.pointerLock = false;
                this.typedArray = false;
                this.vibration = false;
                this.getUserMedia = true;
                this.quirksMode = false;
                this.touch = false;
                this.mspointer = false;
                this.wheelEvent = null;
                this.arora = false;
                this.chrome = false;
                this.chromeVersion = 0;
                this.epiphany = false;
                this.firefox = false;
                this.firefoxVersion = 0;
                this.ie = false;
                this.ieVersion = 0;
                this.trident = false;
                this.tridentVersion = 0;
                this.edge = false;
                this.mobileSafari = false;
                this.midori = false;
                this.opera = false;
                this.safari = false;
                this.safariVersion = 0;
                this.webApp = false;
                this.silk = false;
                this.audioData = false;
                this.webAudio = false;
                this.ogg = false;
                this.opus = false;
                this.mp3 = false;
                this.wav = false;
                this.m4a = false;
                this.webm = false;
                this.dolby = false;
                this.oggVideo = false;
                this.h264Video = false;
                this.mp4Video = false;
                this.webmVideo = false;
                this.vp9Video = false;
                this.hlsVideo = false;
                this.iPhone = false;
                this.iPhone4 = false;
                this.iPad = false;
                this.pixelRatio = 0;
                this.littleEndian = false;
                this.support32bit = false;
                this.fullscreen = false;
                this.requestFullscreen = "";
                this.cancelFullscreen = "";
                this.fullscreenKeyboard = false;
                this.vita = false;
                this.kindle = false;
            }
            Device.prototype.whenReady = function (callback, context, nonPrimer) {
                var readyCheck = this.readyCheck;
                if (this.deviceReadyAt || !readyCheck) {
                    callback.call(context, this);
                }
                else if (readyCheck._monitor || nonPrimer) {
                    readyCheck._queue = readyCheck._queue || [];
                    readyCheck._queue.push([callback, context]);
                }
                else {
                    readyCheck._monitor = readyCheck.bind(this);
                    readyCheck._queue = readyCheck._queue || [];
                    readyCheck._queue.push([callback, context]);
                    var cordova = typeof window.cordova !== "undefined";
                    var cocoonJS = navigator.isCocoonJS;
                    if (document.readyState === "complete" || document.readyState === "interactive") {
                        window.setTimeout(readyCheck._monitor, 0);
                    }
                    else if (cordova && !cocoonJS) {
                        document.addEventListener("deviceready", readyCheck._monitor, false);
                    }
                    else {
                        document.addEventListener("DOMContentLoaded", readyCheck._monitor, false);
                        window.addEventListener("load", readyCheck._monitor, false);
                    }
                }
            };
            Device.prototype.readyCheck = function () {
                var readyCheck = this.readyCheck;
                if (!document.body) {
                    window.setTimeout(readyCheck._monitor, 20);
                }
                else if (!this.deviceReadyAt) {
                    this.deviceReadyAt = Date.now();
                    document.removeEventListener("deviceready", readyCheck._monitor);
                    document.removeEventListener("DOMContentLoaded", readyCheck._monitor);
                    window.removeEventListener("load", readyCheck._monitor);
                    this.initialize();
                    this.initialized = true;
                    this.onInitialized.dispatch(this);
                    var item = void 0;
                    while ((item = readyCheck._queue.shift())) {
                        var callback = item[0];
                        var context = item[1];
                        callback.call(context, this);
                    }
                    this.readyCheck = null;
                    this.initialize = null;
                    this.onInitialized = null;
                }
            };
            Device.prototype.checkOS = function () {
                var ua = navigator.userAgent;
                if (/ Playstation Vita /.test(ua)) {
                    this.vita = true;
                }
                else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
                    this.kindle = true;
                }
                else if (/Android/.test(ua)) {
                    this.android = true;
                }
                else if (/CrOS/.test(ua)) {
                    this.chromeOS = true;
                }
                else if (/iP[ao]d|iPhone/i.test(ua)) {
                    this.iOS = true;
                    (navigator.appVersion).match(/OS (\d+)/);
                    this.iOSVersion = parseInt(RegExp.$1, 10);
                }
                else if (/Linux/.test(ua)) {
                    this.linux = true;
                }
                else if (/Mac OS/.test(ua)) {
                    this.macOS = true;
                }
                else if (/Windows/.test(ua)) {
                    this.windows = true;
                }
                if (/Windows Phone/i.test(ua) || /IEMobile/i.test(ua)) {
                    this.android = false;
                    this.iOS = false;
                    this.macOS = false;
                    this.windows = true;
                    this.windowsPhone = true;
                }
                var silk = /Silk/.test(ua);
                if (this.windows || this.macOS || (this.linux && !silk) || this.chromeOS) {
                    this.desktop = true;
                }
                if (this.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua)))) {
                    this.desktop = false;
                }
            };
            Device.prototype.checkFeatures = function () {
                this.canvas = !!window.CanvasRenderingContext2D || this.cocoonJS;
                this.file = !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob;
                this.fileSystem = !!window.requestFileSystem;
                this.webGL = (function () {
                    try {
                        var canvas = document.createElement("canvas");
                        canvas.screencanvas = false;
                        return !!window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
                    }
                    catch (e) {
                        return false;
                    }
                })();
                this.webGL = !!this.webGL;
                this.worker = !!window.Worker;
                this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
                this.quirksMode = (document.compatMode === "CSS1Compat") ? false : true;
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
                window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
                this.getUserMedia = this.getUserMedia && !!navigator.getUserMedia && !!window.URL;
                if (this.firefox && this.firefoxVersion < 21) {
                    this.getUserMedia = false;
                }
                if (!this.iOS && (this.ie || this.firefox || this.chrome)) {
                    this.canvasBitBltShift = true;
                }
                if (this.safari || this.mobileSafari) {
                    this.canvasBitBltShift = false;
                }
            };
            Device.prototype.checkInput = function () {
                if ("ontouchstart" in document.documentElement || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1)) {
                    this.touch = true;
                }
                if (window.PointerEvent || window.MSPOinterEvent || window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
                    this.mspointer = true;
                }
                if (!this.cocoonJS) {
                    if ("onwheel" in window || (this.ie && "WheelEvent" in window)) {
                        this.wheelEvent = "wheel";
                    }
                    else if ("onmousewheel" in window) {
                        this.wheelEvent = "mousewheel";
                    }
                    else if (this.firefox && "MouseScrollEvent" in window) {
                        this.wheelEvent = "DOMMouseScroll";
                    }
                }
            };
            Device.prototype.checkFullScreenSupport = function () {
                var fs = [
                    "requestFullscreen",
                    "requestFullScreen",
                    "webkitRequestFullscreen",
                    "webkitRequestFullScreen",
                    "msRequestFullscreen",
                    "msRequestFullScreen",
                    "mozRequestFullScreen",
                    "mozRequestFullscreen"
                ];
                var element = document.createElement("div");
                for (var i = 0; i < fs.length; i++) {
                    if (element[fs[i]]) {
                        this.fullscreen = true;
                        this.requestFullscreen = fs[i];
                        break;
                    }
                }
                var cfs = [
                    "cancelFullScreen",
                    "exitFullscreen",
                    "webkitCancelFullScreen",
                    "webkitExitFullscreen",
                    "msCancelFullScreen",
                    "msExitFullscreen",
                    "mozCancelFullScreen",
                    "mozExitFullscreen"
                ];
                if (this.fullscreen) {
                    for (var i = 0; i < cfs.length; i++) {
                        if (document[cfs[i]]) {
                            this.cancelFullscreen = cfs[i];
                            break;
                        }
                    }
                }
            };
            Device.prototype.checkBrowser = function () {
                var ua = navigator.userAgent;
                if (/ Arora /.test(ua)) {
                    this.arora = true;
                }
                else if (/Edge\/\d+/.test(ua)) {
                    this.edge = true;
                }
                else if (/Chrome\/(\d+)/.test(ua) && !this.windowsPhone) {
                    this.chrome = true;
                    this.chromeVersion = parseInt(RegExp.$1, 10);
                }
                else if (/Epiphany/.test(ua)) {
                    this.epiphany = true;
                }
                else if (/Firefox\D+(\d+)/.test(ua)) {
                    this.firefox = true;
                    this.firefoxVersion = parseInt(RegExp.$1, 10);
                }
                else if (/AppleWebKit/.test(ua) && this.iOS) {
                    this.mobileSafari = true;
                }
                else if (/MSIE (\d+\.\d+);/.test(ua)) {
                    this.ie = true;
                    this.ieVersion = parseInt(RegExp.$1, 10);
                }
                else if (/Midori/.test(ua)) {
                    this.midori = true;
                }
                else if (/Opera/.test(ua)) {
                    this.opera = true;
                }
                else if (/Safari\/(\d+)/.test(ua) && !this.windowsPhone) {
                    this.safari = true;
                    if (/Version\/(\d+)\./.test(ua)) {
                        this.safariVersion = parseInt(RegExp.$1, 10);
                    }
                }
                else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(ua)) {
                    this.ie = true;
                    this.trident = true;
                    this.tridentVersion = parseInt(RegExp.$1, 10);
                    this.ieVersion = parseInt(RegExp.$3, 10);
                }
                if (/Silk/.test(ua)) {
                    this.silk = true;
                }
                if (navigator.standalone) {
                    this.webApp = true;
                }
                if (typeof window.cordova !== "undefined") {
                    this.cordova = true;
                }
                if (navigator.isCocoonJS) {
                    this.cocoonJS = true;
                }
                if (typeof window.ejecta !== "undefined") {
                    this.ejecta = true;
                }
                if (/Crosswalk/.test(ua)) {
                    this.crosswalk = true;
                }
            };
            Device.prototype.checkVideo = function () {
                var videoElement = document.createElement("video");
                try {
                    if (!!videoElement.canPlayType) {
                        if (videoElement.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")) {
                            this.oggVideo = true;
                        }
                        if (videoElement.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")) {
                            this.h264Video = true;
                            this.mp4Video = true;
                        }
                        if (videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")) {
                            this.webmVideo = true;
                        }
                        if (videoElement.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")) {
                            this.vp9Video = true;
                        }
                        if (videoElement.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")) {
                            this.hlsVideo = true;
                        }
                    }
                }
                catch (e) {
                }
            };
            Device.prototype.checkAudio = function () {
                this.audioData = !!(window.Audio);
                this.webAudio = !!(window.AudioContext || window.webkitAudioContext);
                var audioElement = document.createElement("audio");
                try {
                    if (!!audioElement.canPlayType) {
                        if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")) {
                            this.ogg = true;
                        }
                        if (audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") || audioElement.canPlayType("audio/opus;").replace(/^no$/, "")) {
                            this.opus = true;
                        }
                        if (audioElement.canPlayType("audio/mpeg;").replace(/^no$/, "")) {
                            this.mp3 = true;
                        }
                        if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")) {
                            this.wav = true;
                        }
                        if (audioElement.canPlayType("audio/x-m4a;") || audioElement.canPlayType("audio/aac;").replace(/^no$/, "")) {
                            this.m4a = true;
                        }
                        if (audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")) {
                            this.webm = true;
                        }
                        if (audioElement.canPlayType('audio/mp4;codecs="ec-3"') !== "") {
                            if (this.edge) {
                                this.dolby = true;
                            }
                            else if (this.safari && this.safariVersion >= 9) {
                                if (/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)) {
                                    var major = parseInt(RegExp.$1, 10);
                                    var minor = parseInt(RegExp.$2, 10);
                                    if ((major === 10 && minor >= 11) || major > 10) {
                                        this.dolby = true;
                                    }
                                }
                            }
                        }
                    }
                }
                catch (e) {
                }
            };
            Device.prototype.checkIsLittleEndian = function () {
                var a = new ArrayBuffer(4);
                var b = new Uint8Array(a);
                var c = new Uint32Array(a);
                b[0] = 0xa1;
                b[1] = 0xb2;
                b[2] = 0xc3;
                b[3] = 0xd4;
                if (c[0] === 0xd4c3b2a1) {
                    return true;
                }
                if (c[0] === 0xa1b2c3d4) {
                    return false;
                }
                else {
                    return null;
                }
            };
            Device.prototype.checkIsUint8ClampedImageData = function () {
                if (Uint8ClampedArray === undefined) {
                    return false;
                }
                var elem = bridge.CanvasPool.create(this, 1, 1);
                var ctx = elem.getContext("2d");
                if (!ctx) {
                    return false;
                }
                var image = ctx.createImageData(1, 1);
                bridge.CanvasPool.remove(this);
                return image.data instanceof Uint8ClampedArray;
            };
            Device.prototype.checkDevice = function () {
                this.pixelRatio = window.devicePixelRatio || 1;
                this.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1;
                this.iPhone4 = (this.pixelRatio === 2 && this.iPhone);
                this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1;
                if (typeof Int8Array !== "undefined") {
                    this.typedArray = true;
                }
                else {
                    this.typedArray = false;
                }
                if (typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint32Array !== "undefined") {
                    this.littleEndian = this.checkIsLittleEndian();
                    Device.LITTLE_ENDIAN = this.littleEndian;
                }
                this.support32bit = (typeof ArrayBuffer !== "undefined" && typeof Uint8ClampedArray !== "undefined" && typeof Int32Array !== "undefined" && this.littleEndian !== null && this.checkIsUint8ClampedImageData());
                navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                if (navigator.vibrate) {
                    this.vibration = true;
                }
            };
            Device.prototype.checkCSS3D = function () {
                var el = document.createElement("p");
                var has3d;
                var transforms = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.insertBefore(el, null);
                for (var t in transforms) {
                    if (el.style[t] !== undefined) {
                        el.style[t] = "translate3d(1px,1px,1px)";
                        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                    }
                }
                document.body.removeChild(el);
                this.css3D = (has3d !== undefined && has3d.length > 0 && has3d !== "none");
            };
            Device.prototype.initialize = function () {
                this.checkOS();
                this.checkBrowser();
                this.checkAudio();
                this.checkVideo();
                this.checkCSS3D();
                this.checkDevice();
                this.checkFeatures();
                this.checkFullScreenSupport();
                this.checkInput();
            };
            Device.prototype.canPlayAudio = function (type) {
                if (type === "mp3" && this.mp3) {
                    return true;
                }
                else if (type === "ogg" && (this.ogg || this.opus)) {
                    return true;
                }
                else if (type === "m4a" && this.m4a) {
                    return true;
                }
                else if (type === "opus" && this.opus) {
                    return true;
                }
                else if (type === "wav" && this.wav) {
                    return true;
                }
                else if (type === "webm" && this.webm) {
                    return true;
                }
                else if (type === "mp4" && this.dolby) {
                    return true;
                }
                return false;
            };
            Device.prototype.canPlayVideo = function (type) {
                if (type === "webm" && (this.webmVideo || this.vp9Video)) {
                    return true;
                }
                else if (type === "mp4" && (this.mp4Video || this.h264Video)) {
                    return true;
                }
                else if ((type === "ogg" || type === "ogv") && this.oggVideo) {
                    return true;
                }
                else if (type === "mpeg" && this.hlsVideo) {
                    return true;
                }
                return false;
            };
            Device.prototype.isConsoleOpen = function () {
                if (window.console && window.console.firebug) {
                    return true;
                }
                if (window.console) {
                    console.profile();
                    console.profileEnd();
                    if (console.clear) {
                        console.clear();
                    }
                    if (console.profile) {
                        return console.profile.length > 0;
                    }
                }
                return false;
            };
            Device.prototype.isAndroidStockBrowser = function () {
                return false;
            };
            Device.prototype.needsTouchUnlock = function () {
                return !!(!this.cocoonJS && (this.iOS || this.android));
            };
            Device.LITTLE_ENDIAN = false;
            return Device;
        }());
        bridge.Device = Device;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        bridge._Device = new bridge.Device();
        var DOM = (function () {
            function DOM() {
            }
            DOM.prototype.getOffset = function (element, point) {
                var _point = point || new bridge.Point();
                var box = element.getBoundingClientRect();
                var scrollTop = DOM.scrollY;
                var scrollLeft = DOM.scrollX;
                var clientTop = document.documentElement.clientTop;
                var clientLeft = document.documentElement.clientLeft;
                _point.x = box.left + scrollLeft - clientLeft;
                _point.y = box.top + scrollTop - clientTop;
                return _point;
            };
            DOM.prototype.getBounds = function (element, cushion) {
                if (cushion === undefined) {
                    cushion = 0;
                }
                var _element = element && !element.nodeType ? element[0] : element;
                if (!_element || _element.nodeType !== 1) {
                    return false;
                }
                else {
                    return this.calibrate(_element.getBoundingClientRect(), cushion);
                }
            };
            DOM.prototype.calibrate = function (coords, cushion) {
                var _cushion = cushion || 0;
                var output = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 };
                output.width = (output.right = coords.right + _cushion) - (output.left = coords.left - _cushion);
                output.height = (output.bottom = coords.bottom + _cushion) - (output.top = coords.top - _cushion);
                return output;
            };
            DOM.prototype.getAspectRatio = function (object) {
                object = null == object ? DOM.visualBounds : 1 === object.nodeType ? this.getBounds(object) : object;
                var w = object.width;
                var h = object.width;
                if (typeof w === "function") {
                    w = w.call(object);
                }
                if (typeof h === "function") {
                    h = h.call(object);
                }
                return w / h;
            };
            DOM.prototype.inLayoutViewport = function (element, cushion) {
                var r = this.getBounds(element, cushion);
                return !!r && r.bottom >= 0 && r.right >= 0 && r.top <= DOM.layoutBounds.width && r.left <= DOM.layoutBounds.height;
            };
            DOM.prototype.getScreenOrientation = function (primaryFallback) {
                var screen = window.screen;
                var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
                if (orientation && typeof orientation.type === "string") {
                    return orientation.type;
                }
                else if (typeof orientation === "string") {
                    return orientation;
                }
                var PORTRAIT = "portrait-primary";
                var LANDSCAPE = "landscape-primary";
                if (primaryFallback === "screen") {
                    return (screen.height > screen.width) ? PORTRAIT : LANDSCAPE;
                }
                else if (primaryFallback === "viewport") {
                    return (DOM.visualBounds.height > DOM.visualBounds.width) ? PORTRAIT : LANDSCAPE;
                }
                else if (primaryFallback === "window.orientation" && typeof window.orientation === "number") {
                    return (window.orientation === 0 || window.orientation === 180) ? PORTRAIT : LANDSCAPE;
                }
                else if (window.matchMedia) {
                    if (window.matchMedia("(orientation: portrait)").matches) {
                        return PORTRAIT;
                    }
                    else if (window.matchMedia("(orientation: landscape)").matches) {
                        return LANDSCAPE;
                    }
                }
                return (DOM.visualBounds.height > DOM.visualBounds.width) ? PORTRAIT : LANDSCAPE;
            };
            DOM.documentBounds = new bridge.Rectangle();
            DOM.layoutBounds = new bridge.Rectangle();
            DOM.visualBounds = new bridge.Rectangle();
            DOM.scrollX = 0;
            DOM.scrollY = 0;
            return DOM;
        }());
        bridge.DOM = DOM;
        bridge._Device.whenReady(function (device) {
            var scrollX = window && ("pageXOffset" in window) ? window.pageXOffset : document.documentElement.scrollLeft;
            var scrollY = window && ("pageYOffset" in window) ?
                window.pageYOffset : document.documentElement.scrollTop;
            DOM.scrollX = scrollX;
            DOM.scrollY = scrollY;
            DOM.visualBounds.x = scrollX;
            DOM.visualBounds.y = scrollY;
            DOM.layoutBounds.x = 0;
            DOM.layoutBounds.y = 0;
            var treatAsDesktop = device.desktop &&
                (document.documentElement.clientWidth <= window.innerWidth) &&
                (document.documentElement.clientHeight <= window.innerHeight);
            if (treatAsDesktop) {
                var clientWidth = function () {
                    return Math.max(window.innerWidth, document.documentElement.clientWidth);
                };
                var clientHeight = function () {
                    return Math.max(window.innerHeight, document.documentElement.clientHeight);
                };
                DOM.visualBounds.width = clientWidth();
                DOM.visualBounds.height = clientHeight();
                DOM.layoutBounds.width = clientWidth();
                DOM.layoutBounds.height = clientHeight();
            }
            else {
                DOM.visualBounds.width = window.innerWidth;
                DOM.visualBounds.height = window.innerHeight;
                var windowWidth = function () {
                    var a = document.documentElement.clientWidth;
                    var b = window.innerWidth;
                    return a < b ? b : a;
                };
                DOM.layoutBounds.width = windowWidth();
                var windowHeight = function () {
                    var a = document.documentElement.clientHeight;
                    var b = window.innerHeight;
                    return a < b ? b : a;
                };
                DOM.layoutBounds.height = windowHeight();
            }
            Object.defineProperty(DOM.documentBounds, "x", {
                value: 0
            });
            DOM.documentBounds.x = 0;
            Object.defineProperty(DOM.documentBounds, "y", {
                value: 0
            });
            DOM.documentBounds.y = 0;
            Object.defineProperty(DOM.documentBounds, "width", {
                get: function () {
                    var d = document.documentElement;
                    return Math.max(d.clientWidth, d.offsetWidth, d.scrollWidth);
                }
            });
            Object.defineProperty(DOM.documentBounds, "height", {
                get: function () {
                    var d = document.documentElement;
                    return Math.max(d.clientHeight, d.offsetHeight, d.scrollHeight);
                }
            });
        }, null, true);
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Filter = (function (_super) {
            __extends(Filter, _super);
            function Filter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Filter;
        }(PIXI.Filter));
        bridge.Filter = Filter;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var filters;
        (function (filters) {
            var AlphaFilter = (function (_super) {
                __extends(AlphaFilter, _super);
                function AlphaFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return AlphaFilter;
            }(PIXI.filters.AlphaFilter));
            filters.AlphaFilter = AlphaFilter;
            var BlurFilter = (function (_super) {
                __extends(BlurFilter, _super);
                function BlurFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return BlurFilter;
            }(PIXI.filters.BlurFilter));
            filters.BlurFilter = BlurFilter;
            var BlurFilterPass = (function (_super) {
                __extends(BlurFilterPass, _super);
                function BlurFilterPass() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return BlurFilterPass;
            }(PIXI.filters.BlurFilterPass));
            filters.BlurFilterPass = BlurFilterPass;
            var ColorMatrixFilter = (function (_super) {
                __extends(ColorMatrixFilter, _super);
                function ColorMatrixFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return ColorMatrixFilter;
            }(PIXI.filters.ColorMatrixFilter));
            filters.ColorMatrixFilter = ColorMatrixFilter;
            var DisplacementFilter = (function (_super) {
                __extends(DisplacementFilter, _super);
                function DisplacementFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return DisplacementFilter;
            }(PIXI.filters.DisplacementFilter));
            filters.DisplacementFilter = DisplacementFilter;
            var FXAAFilter = (function (_super) {
                __extends(FXAAFilter, _super);
                function FXAAFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return FXAAFilter;
            }(PIXI.filters.FXAAFilter));
            filters.FXAAFilter = FXAAFilter;
            var NoiseFilter = (function (_super) {
                __extends(NoiseFilter, _super);
                function NoiseFilter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return NoiseFilter;
            }(PIXI.filters.NoiseFilter));
            filters.NoiseFilter = NoiseFilter;
        })(filters = bridge.filters || (bridge.filters = {}));
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Maths = (function () {
            function Maths() {
            }
            Maths.getHalf = function (value) {
                return value * this.HALF;
            };
            Maths.getDouble = function (value) {
                return value * this.TWO;
            };
            Maths.clamp = function (v, min, max) {
                if (v < min) {
                    return min;
                }
                else if (max < v) {
                    return max;
                }
                else {
                    return v;
                }
            };
            Maths.linearInterpolation = function (v, k) {
                var m = v.length - 1;
                var f = m * k;
                var i = Math.floor(f);
                if (k < 0) {
                    return this.linear(v[0], v[1], f);
                }
                if (k > 1) {
                    return this.linear(v[m], v[m - 1], m - f);
                }
                return this.linear(v[i], v[i + 1 > m ? m : i + 1], f - i);
            };
            Maths.bezierInterpolation = function (v, k) {
                var b = 0, n = v.length - 1;
                for (var i = 0; i <= n; i++) {
                    b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * this.bernstein(n, i);
                }
                return b;
            };
            Maths.catmullRomInterpolation = function (v, k) {
                var m = v.length - 1, f = m * k, i = Math.floor(f);
                if (v[0] === v[m]) {
                    if (k < 0) {
                        i = Math.floor(f = m * (1 + k));
                    }
                    return this.catmullRom(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
                }
                else {
                    if (k < 0) {
                        return v[0] - (this.catmullRom(v[0], v[0], v[1], v[1], -f) - v[0]);
                    }
                    if (k > 1) {
                        return v[m] - (this.catmullRom(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
                    }
                    return this.catmullRom(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
                }
            };
            Maths.linear = function (p0, p1, t) {
                return (p1 - p0) * t + p0;
            };
            Maths.bernstein = function (n, i) {
                return this.factorial(n) / this.factorial(i) / this.factorial(n - i);
            };
            Maths.factorial = function (value) {
                if (value === 0) {
                    return 1;
                }
                var res = value;
                while (--value) {
                    res *= value;
                }
                return res;
            };
            Maths.catmullRom = function (p0, p1, p2, p3, t) {
                var v0 = (p2 - p0) * 0.5;
                var v1 = (p3 - p1) * 0.5;
                var t2 = t * t;
                var t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            };
            Maths.distance = function (x1, y1, x2, y2) {
                var dx = x1 - x2;
                var dy = y1 - y2;
                return Math.sqrt(dx * dx + dy * dy);
            };
            Maths.getRange = function (start, finish, length, step) {
                var final = [];
                if (start === undefined || start === null) {
                    start = 0;
                }
                if (step === undefined || step === null) {
                    step = 1;
                }
                if (step < 0) {
                    step = Math.abs(step);
                }
                if (finish === undefined || finish === null) {
                    if (length === undefined || length === null) {
                        return [start];
                    }
                    final[0] = start;
                    for (var i = 1; i < Math.abs(length); i++) {
                        final[i] = final[i - 1] + ((length < 0) ? -step : step);
                    }
                    return final;
                }
                if (finish < start) {
                    for (var i = start; i >= finish; i -= step) {
                        final.push(i);
                    }
                }
                else {
                    for (var i = start; i <= finish; i += step) {
                        final.push(i);
                    }
                }
                return final;
            };
            Maths.angleBetween = function (x1, y1, x2, y2) {
                return Math.atan2(y2 - y1, x2 - x1);
            };
            Maths.angleBetweenPoints = function (point1, point2) {
                return Math.atan2(point2.y - point1.y, point2.x - point1.x);
            };
            Maths.HALF = 0.5;
            Maths.TWO = 2;
            return Maths;
        }());
        bridge.Maths = Maths;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var Matrix = (function (_super) {
            __extends(Matrix, _super);
            function Matrix() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Matrix;
        }(bridge.EMatrix));
        bridge.Matrix = Matrix;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var RandomDataGenerator = (function () {
            function RandomDataGenerator(seeds) {
                if (seeds === undefined) {
                    seeds = [];
                }
                this.c = 1;
                this.s0 = 0;
                this.s1 = 0;
                this.s2 = 0;
                (typeof seeds === "string") ? this.state(seeds) : this.sow(seeds);
            }
            RandomDataGenerator.prototype.rnd = function () {
                var t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10;
                this.c = t | 0;
                this.s0 = this.s1;
                this.s1 = this.s2;
                this.s2 = t - this.c;
                return this.s2;
            };
            RandomDataGenerator.prototype.sow = function (seeds) {
                this.s0 = this.hash(" ");
                this.s1 = this.hash(this.s0);
                this.s2 = this.hash(this.s1);
                this.c = 1;
                if (!seeds) {
                    return;
                }
                for (var i = 0; i < seeds.length && (seeds[i] != null); i++) {
                    var seed = seeds[i];
                    this.s0 -= this.hash(seed);
                    this.s0 += ~~(this.s0 < 0);
                    this.s1 -= this.hash(seed);
                    this.s1 += ~~(this.s1 < 0);
                    this.s2 -= this.hash(seed);
                    this.s2 += ~~(this.s2 < 0);
                }
            };
            RandomDataGenerator.prototype.hash = function (data) {
                var h;
                var n = 0xefc8249d;
                data = data.toString();
                for (var i = 0; i < data.length; i++) {
                    n += data.charCodeAt(i);
                    h = 0.02519603282416938 * n;
                    n = h >>> 0;
                    h -= n;
                    h *= n;
                    n = h >>> 0;
                    h -= n;
                    n += h * 0x100000000;
                }
                return (n >>> 0) * 2.3283064365386963e-10;
            };
            RandomDataGenerator.prototype.integer = function () {
                return this.rnd.apply(this) * 0x100000000;
            };
            RandomDataGenerator.prototype.frac = function () {
                return this.rnd.apply(this) + (this.rnd.apply(this) * 0x200000 | 0) * 1.1102230246251565e-16;
            };
            RandomDataGenerator.prototype.real = function () {
                return this.integer() + this.frac();
            };
            RandomDataGenerator.prototype.integerInRange = function (min, max) {
                return Math.floor(this.realInRange(0, max - min + 1) + min);
            };
            RandomDataGenerator.prototype.between = function (min, max) {
                return this.integerInRange(min, max);
            };
            RandomDataGenerator.prototype.realInRange = function (min, max) {
                return this.frac() * (max - min) + min;
            };
            RandomDataGenerator.prototype.normal = function () {
                return 1 - 2 * this.frac();
            };
            RandomDataGenerator.prototype.uuid = function () {
                var a = "";
                var b = "";
                for (b = a = ""; a++ < 36; b += ~a % 5 | a * 3 & 4 ? (a ^ 15 ? 8 ^ this.frac() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") { }
                return b;
            };
            RandomDataGenerator.prototype.pick = function (ary) {
                return ary[this.integerInRange(0, ary.length - 1)];
            };
            RandomDataGenerator.prototype.weightedPick = function (ary) {
                return ary[~~(Math.pow(this.frac(), 2) * (ary.length - 1) + 0.5)];
            };
            RandomDataGenerator.prototype.timestamp = function (min, max) {
                return this.realInRange(min || 946684800000, max || 1577862000000);
            };
            RandomDataGenerator.prototype.angle = function () {
                return this.integerInRange(-180, 180);
            };
            RandomDataGenerator.prototype.state = function (state) {
                if (typeof state === "string" && state.match(/^!rnd/)) {
                    var stateArr = state.split(",");
                    this.c = parseFloat(stateArr[1]);
                    this.s0 = parseFloat(stateArr[2]);
                    this.s1 = parseFloat(stateArr[3]);
                    this.s2 = parseFloat(stateArr[4]);
                }
                return ["!rnd", this.c, this.s0, this.s1, this.s2].join(",");
            };
            return RandomDataGenerator;
        }());
        bridge.RandomDataGenerator = RandomDataGenerator;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        var SplinePoints = (function () {
            function SplinePoints() {
            }
            SplinePoints.prototype.getPoints = function (coords, params) {
                if (params === void 0) { params = {}; }
                var controlPoints = this.findAllControlPoints(coords);
                var points = [];
                var lastPoint;
                for (var i = 0; i < coords.length; i++) {
                    if (coords[i] && coords[i + 1]) {
                        var controlPointsInSection = this.getPointsBetween(coords[i].x, coords[i + 1].x, controlPoints);
                        var dotsInSection = 10;
                        if (params.splinePointsInSection && params.splinePointsInSection[i]) {
                            dotsInSection = params.splinePointsInSection[i];
                        }
                        var pointsInSection = this.drawSpline(coords[i], coords[i + 1], controlPointsInSection, dotsInSection);
                        for (var pointIndex = 0; pointIndex < pointsInSection.length; pointIndex++) {
                            if (!lastPoint || lastPoint.x !== pointsInSection[pointIndex].x) {
                                points.push(pointsInSection[pointIndex]);
                            }
                            lastPoint = pointsInSection[pointIndex];
                        }
                    }
                }
                return points;
            };
            SplinePoints.prototype.quadraticBezier = function (t, p0, p1, p2) {
                var x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
                var y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
                return new bridge.Point(x, y);
            };
            SplinePoints.prototype.cubicBezier = function (t, p0, p1, p2, p3) {
                var cX = 3 * (p1.x - p0.x), bX = 3 * (p2.x - p1.x) - cX, aX = p3.x - p0.x - cX - bX;
                var cY = 3 * (p1.y - p0.y), bY = 3 * (p2.y - p1.y) - cY, aY = p3.y - p0.y - cY - bY;
                var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
                var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
                return new bridge.Point(x, y);
            };
            SplinePoints.prototype.controlPoints = function (p0, p1, p2, t) {
                var d01 = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));
                var d12 = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                var fa = t * d01 / (d01 + d12);
                var fb = t * d12 / (d01 + d12);
                var p1x = p1.x - fa * (p2.x - p0.x);
                var p1y = p1.y - fa * (p2.y - p0.y);
                var p2x = p1.x + fb * (p2.x - p0.x);
                var p2y = p1.y + fb * (p2.y - p0.y);
                return [new bridge.Point(p1x, p1y), new bridge.Point(p2x, p2y)];
            };
            SplinePoints.prototype.findAllControlPoints = function (coords) {
                var controlPoints = [];
                for (var i = 0; i < coords.length - 2; i++) {
                    var _controlPoints = this.controlPoints(coords[i], coords[i + 1], coords[i + 2], 0.43);
                    for (var j = 0; j < _controlPoints.length; j++) {
                        controlPoints.push(_controlPoints[j]);
                    }
                }
                return controlPoints;
            };
            SplinePoints.prototype.getPointsBetween = function (x1, x2, points) {
                var pointsBetween = [];
                for (var j = 0; j < points.length; j++) {
                    if (points[j].x > x1 && points[j].x < x2) {
                        pointsBetween.push(points[j]);
                    }
                }
                return pointsBetween;
            };
            SplinePoints.prototype.drawSpline = function (startCoord, endCoord, controlPoints, pointsInSection) {
                var accuracy = 1 / pointsInSection;
                var points = [];
                if (controlPoints.length === 1) {
                    for (var i = 0; i < 1; i += accuracy) {
                        var p = this.quadraticBezier(i, startCoord, controlPoints[0], endCoord);
                        points.push(p);
                    }
                }
                else if (controlPoints.length === 2) {
                    for (var i = 0; i < 1; i += accuracy) {
                        var p = this.cubicBezier(i, startCoord, controlPoints[0], controlPoints[1], endCoord);
                        points.push(p);
                    }
                }
                return points;
            };
            return SplinePoints;
        }());
        bridge.SplinePoints = SplinePoints;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
var ingenuity;
(function (ingenuity) {
    var bridge;
    (function (bridge) {
        function extendObj(objA, objB, overwrite) {
            if (overwrite === void 0) { overwrite = false; }
            for (var index in objB) {
                if (objB.hasOwnProperty(index)) {
                    if (overwrite) {
                        objA[index] = objB[index];
                    }
                    else if (!objA.hasOwnProperty(index)) {
                        objA[index] = objB[index];
                    }
                    else if (typeof objB[index] === "object") {
                        extendObj(objA[index], objB[index], overwrite);
                    }
                }
            }
            return objA;
        }
        bridge.extendObj = extendObj;
        function clone(args) {
            var rtnObj;
            var i;
            if (arguments.length !== 1) {
                console.error("Only one argument can be passes");
                return;
            }
            if (Array.isArray(arguments[0])) {
                rtnObj = [];
                for (i = arguments[0].length - 1; i > -1; i--) {
                    if (Array.isArray(arguments[0][i]) || typeof arguments[0][i] === "object") {
                        rtnObj[i] = clone(arguments[0][i]);
                    }
                    else {
                        rtnObj[i] = arguments[0][i];
                    }
                }
            }
            else if (arguments[0] instanceof HTMLElement) {
                rtnObj = arguments[0];
            }
            else if (typeof arguments[0] === "object") {
                rtnObj = {};
                for (i in arguments[0]) {
                    if (arguments[0].hasOwnProperty(i)) {
                        if (Array.isArray(arguments[0][i]) || typeof arguments[0][i] === "object") {
                            rtnObj[i] = clone(arguments[0][i]);
                        }
                        else {
                            rtnObj[i] = arguments[0][i];
                        }
                    }
                }
            }
            else {
                rtnObj = arguments[0];
            }
            return rtnObj;
        }
        bridge.clone = clone;
        function getCenterX(sprite) {
            var bounds = sprite.getBounds();
            var boundOffsetX = sprite.width * sprite.anchor.x;
            return (sprite.x - boundOffsetX) + (bounds.width / 2);
        }
        bridge.getCenterX = getCenterX;
        function getCenterY(sprite) {
            var bounds = sprite.getBounds();
            var boundOffsetY = sprite.height * sprite.anchor.y;
            return (sprite.y - boundOffsetY) + (bounds.height / 2);
        }
        bridge.getCenterY = getCenterY;
        function mixinPrototype(target, mixin, replace) {
            if (replace === undefined) {
                replace = false;
            }
            var mixinKeys = Object.keys(mixin);
            for (var i = 0; i < mixinKeys.length; i++) {
                var key = mixinKeys[i];
                var value = mixin[key];
                if (!replace && (key in target)) {
                    continue;
                }
                else if (value &&
                    (typeof value.get === "function" || typeof value.set === "function")) {
                    if (typeof value.clone === "function") {
                        target[key] = value.clone();
                    }
                    else {
                        Object.defineProperty(target, key, value);
                    }
                }
                else {
                    target[key] = value;
                }
            }
        }
        bridge.mixinPrototype = mixinPrototype;
        function degToRad(degAngle, roundOpts) {
            if (roundOpts === void 0) { roundOpts = 4; }
            return Number((degAngle * (Math.PI / 180)).toFixed(roundOpts));
        }
        bridge.degToRad = degToRad;
        function radToDeg(radAngle, roundOpts) {
            if (roundOpts === void 0) { roundOpts = 4; }
            return Number((radAngle * (180 / Math.PI)).toFixed(roundOpts));
        }
        bridge.radToDeg = radToDeg;
        function distance(x1, y1, x2, y2) {
            var dx = x1 - x2;
            var dy = y1 - y2;
            return Math.sqrt(dx * dx + dy * dy);
        }
        bridge.distance = distance;
        function clamp(v, min, max) {
            if (v < min) {
                return min;
            }
            else if (max < v) {
                return max;
            }
            else {
                return v;
            }
        }
        bridge.clamp = clamp;
        function pad(str, len, padding, dir) {
            if (len === undefined) {
                len = 0;
            }
            if (padding === undefined) {
                padding = " ";
            }
            if (dir === undefined) {
                dir = 3;
            }
            str = str.toString();
            var padlen = 0;
            if (len + 1 >= str.length) {
                switch (dir) {
                    case 1:
                        str = new Array(len + 1 - str.length).join(padding) + str;
                        break;
                    case 3:
                        var right = Math.ceil((padlen = len - str.length) / 2);
                        var left = padlen - right;
                        str = new Array(left + 1).join(padding) + str + new Array(right + 1).join(padding);
                        break;
                    default:
                        str = str + new Array(len + 1 - str.length).join(padding);
                        break;
                }
            }
            return str;
        }
        bridge.pad = pad;
        function wrap(value, min, max) {
            var range = max - min;
            if (range <= 0) {
                return 0;
            }
            var result = (value - min) % range;
            if (result < 0) {
                result += range;
            }
            return result + min;
        }
        bridge.wrap = wrap;
        function getSign(x) {
            if (x > 0) {
                return 1;
            }
            else if (x < 0) {
                return -1;
            }
            else {
                return 0;
            }
        }
        bridge.getSign = getSign;
        function throwMissingClassError(className) {
            throw new Error("Bridge :: Class not found :: bridge." + className);
        }
        bridge.throwMissingClassError = throwMissingClassError;
        function throwMissingParamsError(cls, func) {
            if (cls === void 0) { cls = ""; }
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            if (params.length) {
                var allParams_1 = "";
                params.forEach(function (pr) {
                    if (allParams_1.length) {
                        allParams_1 += ", ";
                    }
                    allParams_1 += pr;
                });
                throw new Error("Bridge :: Missing Parameters :: [" + allParams_1 + "] :: at :: " + cls + " :: " + func + "()");
            }
            else {
                throw new Error("Bridge :: Incorrect Number of parameters at :: " + cls + " :: " + func + "()");
            }
        }
        bridge.throwMissingParamsError = throwMissingParamsError;
        function getExtension(filePath) {
            var aList = filePath.split(".");
            return aList[aList.length - 1].toLocaleLowerCase();
        }
        bridge.getExtension = getExtension;
    })(bridge = ingenuity.bridge || (ingenuity.bridge = {}));
})(ingenuity || (ingenuity = {}));
