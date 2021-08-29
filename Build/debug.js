"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path = "../DTS/pixi.d.ts"/>
/// <reference path = "../DTS/matter.d.ts"/>
var surya_1;
/// <reference path = "../DTS/pixi.d.ts"/>
/// <reference path = "../DTS/matter.d.ts"/>
(function (surya_1) {
    surya_1.Texture = PIXI.utils.TextureCache, surya_1.Sprite = PIXI.Sprite, surya_1.loader = PIXI.Loader.shared, surya_1.tickerShared = PIXI.Ticker.shared, surya_1.Engine = Matter.Engine, surya_1.World = Matter.World, surya_1.Bodies = Matter.Bodies, surya_1.Body = Matter.Body, surya_1.WorldObject = {}, surya_1.score = 0;
})(surya_1 || (surya_1 = {}));
var surya_1;
(function (surya_1) {
    var CollisionShape = /** @class */ (function (_super) {
        __extends(CollisionShape, _super);
        function CollisionShape(rigidBodyReq, type, x, y, w, h, options) {
            var _this = _super.call(this) || this;
            _this.MovementVector = { x: 0, y: 0 };
            _this.NormalVector = { x: 0, y: 0 };
            _this.RespondToCollision = false;
            _this.collisionActive = true;
            _this.MovementActive = false;
            _this.hasCollided = false;
            _this.bodyRemoved = false;
            _this.options = options;
            _this.type = type;
            _this.bodyRemoved = true;
            // this.position.set(x,y);
            if (rigidBodyReq) {
                _this.bodyRemoved = false;
                switch (type) {
                    case "rect":
                        _this.body = surya_1.Bodies.rectangle(x + w / 2, y + h / 2, w, h, options);
                        _this.w = w;
                        _this.h = h;
                        break;
                    case "circle":
                        _this.body = surya_1.Bodies.circle(x, y, w, options);
                        _this.w = w;
                        _this.h = w;
                        break;
                    default: break;
                }
                surya_1.World.add(surya_1.WorldObject, _this.body);
            }
            return _this;
        }
        CollisionShape.prototype.CheckForCollision = function (withElement) {
            var isCollision = false;
            if (withElement) {
                isCollision = ((this.x + this.width) >= withElement.x - 5) &&
                    (this.x < (withElement.x + withElement.width) + 5) &&
                    ((this.y + this.height) >= withElement.y - 5) &&
                    (this.y < (withElement.y + withElement.height) + 5);
            }
            var that = this;
            if (isCollision) {
                this.collisionActive = false;
                this.hasCollided = true;
                withElement.hasCollided = true;
            }
            return isCollision;
        };
        CollisionShape.prototype.justRemoveBody = function () {
            this.bodyRemoved = true;
            surya_1.World.remove(surya_1.WorldObject, this.body);
        };
        CollisionShape.prototype.removeAndAddNewBody = function (x, y, w, h) {
            surya_1.World.remove(surya_1.WorldObject, this.body);
            if (this.body.circleRadius) {
                this.body = surya_1.Bodies.circle(x, y, w, this.options);
            }
            else {
                this.body = surya_1.Bodies.rectangle(x + w / 2, y + h / 2, w, h, this.options);
            }
            this.bodyRemoved = false;
            surya_1.World.add(surya_1.WorldObject, this.body);
        };
        CollisionShape.prototype.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
            this.body.position.x = x;
            this.body.position.y = y;
        };
        CollisionShape.prototype.setMovementVector = function (x, y) {
            // let magnitude = Math.sqrt(x * x + y * y);
            // this.MovementVector.x = x;
            // this.MovementVector.y = y;
            surya_1.Body.applyForce(this.body, { x: this.body.position.x, y: this.body.position.y }, { x: x * surya_1.ForceMultiplier, y: y * surya_1.ForceMultiplier });
        };
        CollisionShape.prototype.getMovementVector = function () {
            return this.MovementVector;
        };
        CollisionShape.prototype.setPositionAccordingToBody = function (hasContainer) {
            var pos = this.body.position;
            var angle = this.body.angle;
            if (this.type !== "circle") {
                if (hasContainer) {
                    this.position.set(pos.x - this.parent.x - this.width / 2, pos.y - this.parent.y - this.height / 2);
                }
                else {
                    this.position.set(pos.x - this.width / 2, pos.y - this.height / 2);
                }
            }
            else {
                this.position.set(pos.x, pos.y);
            }
            this.rotation = angle;
        };
        return CollisionShape;
    }(PIXI.Graphics));
    surya_1.CollisionShape = CollisionShape;
})(surya_1 || (surya_1 = {}));
var surya_1;
(function (surya_1) {
    surya_1.style = {
        fontFamily: 'Arial',
        fontSize: 40,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'],
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }, surya_1.styleScore = {
        fontFamily: 'Arial',
        fontSize: 25,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'],
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }, surya_1.styleValue = {
        fontFamily: 'Arial',
        fontSize: 25,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffff00'],
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }, surya_1.styleScoreFinal = {
        fontFamily: 'Arial',
        fontSize: 50,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffffff'],
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }, surya_1.styleValueFinal = {
        fontFamily: 'Arial',
        fontSize: 50,
        fontStyle: '',
        fontWeight: 'bold',
        fill: ['#ffff00'],
        align: 'center',
        horizontalAlign: 'center',
        wordWrap: true,
        wordWrapWidth: 400,
    }, surya_1.assetList = ["hand"], surya_1.assetListJPEG = ["backgroundStars", "backgroundShader"], surya_1.borderList = [["borderleft", -50, 0, 50, 600, 5, 600], ["borderright", 400, 0, 50, 600, 5, 600], ["bordertop", 0, 0, 400, 50, 400, 5], ["borderbottom", 0, 600, 400, 50, 400, 5]], surya_1.playerList = [["ball", "ball0"]], surya_1.ticker = surya_1.tickerShared, surya_1.MovementSpeed = 20, surya_1.BallMovementSpeed = 4, surya_1.Viscocity = 0.002, surya_1.Acceleration = 2, surya_1.ForceMultiplier = 5, surya_1.ParticleJsonDestroy = {
        acceleration: { x: 0, y: 0 },
        addAtBack: true,
        alpha: { start: 1, end: 0 },
        blendMode: "normal",
        color: { start: "#e4f9ff", end: "#3fcbff" },
        emitterLifetime: 0.1,
        frequency: 0.01,
        lifetime: { min: 0.1, max: 0.1 },
        maxParticles: 300,
        maxSpeed: 0,
        noRotation: false,
        pos: { x: 0, y: 0 },
        rotationSpeed: { min: 0, max: 0 },
        scale: { start: 0.2, end: 0.15, minimumScaleMultiplier: 1 },
        spawnType: "point",
        speed: { start: 1500, end: 750, minimumSpeedMultiplier: 1 },
        startRotation: { min: 0, max: 360 }
    }, surya_1.ParticleJson = {
        acceleration: { x: 0, y: 0 },
        addAtBack: false,
        alpha: { start: 1, end: 1 },
        blendMode: "normal",
        color: { start: "#e4f9ff", end: "#3fcbff" },
        emitterLifetime: -1,
        frequency: 0.2,
        lifetime: { min: 2, max: 2 },
        maxParticles: 500,
        maxSpeed: 0,
        noRotation: false,
        pos: { x: 0, y: 0 },
        rotationSpeed: { min: 0, max: 0 },
        scale: { start: 0.2, end: 0.2, minimumScaleMultiplier: 1 },
        spawnType: "point",
        speed: { start: 200, end: 50, minimumSpeedMultiplier: 1 },
        startRotation: { min: 0, max: 0 }
    };
})(surya_1 || (surya_1 = {}));
var surya_1;
(function (surya_1) {
    var Keyboard = /** @class */ (function () {
        function Keyboard(value, isAxisButton) {
            this.key = {};
            this.value = value;
            this.isDown = false;
            this.isUp = true;
            this.isAxisButton = isAxisButton;
            this.subscribeEvents();
        }
        Keyboard.prototype.subscribeEvents = function () {
            window.addEventListener("keydown", this.downHandler.bind(this));
            window.addEventListener("keyup", this.upHandler.bind(this));
        };
        Keyboard.prototype.unSubscribeEvents = function () {
            window.removeEventListener("keydown", this.downHandler.bind(this));
            window.removeEventListener("keyup", this.upHandler.bind(this));
        };
        Keyboard.prototype.downHandler = function (event) {
            if (event.key === this.value) {
                // if (!this.isAxisButton) {
                //     if (this.isUp) { this.press(); }
                //     this.isDown = true;
                //     this.isUp = false;
                // }
                // else {
                //     this.isDown = true;
                //     this.isUp = false;
                //     this.press();
                // }
                this.press();
                event.preventDefault();
            }
        };
        Keyboard.prototype.upHandler = function (event) {
            if (event.key === this.value) {
                // if (!this.isAxisButton) {
                //     if (this.isDown) { this.release(); }
                //     this.isDown = false;
                //     this.isUp = true;
                // }
                // else {
                //     this.isDown = false;
                //     this.isUp = true;
                //     if (this.isUp) { this.release(); }
                // }
                this.release();
                event.preventDefault();
            }
        };
        Keyboard.prototype.press = function () {
        };
        Keyboard.prototype.release = function () {
        };
        return Keyboard;
    }());
    surya_1.Keyboard = Keyboard;
})(surya_1 || (surya_1 = {}));
var surya_1;
(function (surya_1) {
    var MatterBox = /** @class */ (function () {
        function MatterBox(x, y, w, h, options) {
            this.body = surya_1.Bodies.rectangle(x, y, w, h, options);
            this.w = w;
            this.h = h;
            surya_1.World.add(surya_1.WorldObject, this.body);
        }
        MatterBox.prototype.show = function () {
        };
        return MatterBox;
    }());
    surya_1.MatterBox = MatterBox;
})(surya_1 || (surya_1 = {}));
var surya_1;
(function (surya_1) {
    var MovementSprite = /** @class */ (function (_super) {
        __extends(MovementSprite, _super);
        function MovementSprite(texture) {
            var _this = _super.call(this, texture) || this;
            _this.MovementVector = { x: 0, y: 0 };
            _this.NormalVector = { x: 0, y: 0 };
            _this.RespondToCollision = false;
            _this.collisionActive = true;
            _this.MovementActive = false;
            _this.MovementVector.x = 0;
            _this.MovementVector.y = 0;
            return _this;
        }
        MovementSprite.prototype.CheckForCollision = function (withElement) {
            var isCollision = false;
            if (withElement) {
                isCollision = ((this.x + this.width) >= withElement.x) &&
                    (this.x < (withElement.x + withElement.width)) &&
                    ((this.y + this.height) >= withElement.y) &&
                    (this.y < (withElement.y + withElement.height));
            }
            var that = this;
            if (isCollision) {
                this.collisionActive = false;
                setTimeout(function () { that.collisionActive = true; }, 100);
            }
            return isCollision;
        };
        MovementSprite.prototype.setMovementVectorAfterCollision = function (collidedElement) {
            var firstDirection = { x: this.MovementVector.x, y: this.MovementVector.y };
            var dotProduct = firstDirection.x * collidedElement.NormalVector.x + firstDirection.y * collidedElement.NormalVector.y;
            var determinant = firstDirection.x * collidedElement.NormalVector.y - firstDirection.y * collidedElement.NormalVector.x;
            var angleInBetween = 0;
            var alpha = 0;
            alpha = Math.atan2(determinant, dotProduct);
            angleInBetween = (alpha * 180) / 3.14;
            if (angleInBetween < 0) {
                angleInBetween += 90;
            }
            else if (angleInBetween > 0) {
                angleInBetween = 180 - angleInBetween;
            }
            alpha = (angleInBetween * 3.14) / 180;
            this.MovementVector.x = collidedElement.NormalVector.x * (Math.cos(alpha)) + collidedElement.NormalVector.y * Math.sin(alpha);
            this.MovementVector.y = -collidedElement.NormalVector.x * Math.sin(alpha) + collidedElement.NormalVector.y * (Math.cos(alpha));
            // let x = Math.abs(this.MovementVector.x);
            // let y= Math.abs(this.MovementVector.y);
            // if(this.MovementVector.x<0){
            //     this.MovementVector.x = -y;
            // }
            // else{
            //     this.MovementVector.x = y;
            // }
            // if(this.MovementVector.y<0){
            //     this.MovementVector.y = -x;
            // }
            // else{
            //     this.MovementVector.y = x;
            // }
            // if(firstDirection.x == -this.MovementVector.x && firstDirection.y == -this.MovementVector.y){
            //     angleInBetween = 180-angleInBetween;
            //     alpha = (angleInBetween*3.14)/180;
            // }
            // this.MovementVector.x = collidedElement.NormalVector.x*(Math.cos(alpha)) + collidedElement.NormalVector.y*Math.sin(alpha);
            // this.MovementVector.y = -collidedElement.NormalVector.x*Math.sin(alpha) + collidedElement.NormalVector.y*(Math.cos(alpha));
            if (angleInBetween == 0) {
                this.MovementVector.x = collidedElement.NormalVector.x;
                this.MovementVector.y = collidedElement.NormalVector.y;
            }
            // this.MovementVector.x*= Acceleration;
            // this.MovementVector.y*= Acceleration;
        };
        MovementSprite.prototype.setMovementVector = function (x, y) {
            var magnitude = Math.sqrt(x * x + y * y);
            this.MovementVector.x = x;
            this.MovementVector.y = y;
        };
        MovementSprite.prototype.getMovementVector = function () {
            return this.MovementVector;
        };
        MovementSprite.prototype.setNormalVector = function (x, y) {
            this.NormalVector.x = x;
            this.NormalVector.y = y;
        };
        MovementSprite.prototype.getNormalVector = function () {
            return this.NormalVector;
        };
        MovementSprite.prototype.setRespondToCollision = function (value) {
            this.RespondToCollision = value;
        };
        MovementSprite.prototype.getRespondToCollision = function () {
            return this.RespondToCollision;
        };
        return MovementSprite;
    }(PIXI.Sprite));
    surya_1.MovementSprite = MovementSprite;
})(surya_1 || (surya_1 = {}));
/// <reference path="./Alias.ts" />
/// <reference path="./Constants.ts"/>
/// <reference path="./MovementSprite.ts"/>
/// <reference path="./Keyboard.ts"/>
/// <reference path="./MatterBox.ts"/>
var surya_1;
/// <reference path="./Alias.ts" />
/// <reference path="./Constants.ts"/>
/// <reference path="./MovementSprite.ts"/>
/// <reference path="./Keyboard.ts"/>
/// <reference path="./MatterBox.ts"/>
(function (surya_1) {
    var Main = /** @class */ (function () {
        function Main() {
            this.spriteArray = {};
            this.playerArray = {};
            this.containerArray = {};
            this.ParticleEmitters = {};
            this.left = new surya_1.Keyboard("ArrowLeft", true);
            this.up = new surya_1.Keyboard("ArrowUp", true);
            this.right = new surya_1.Keyboard("ArrowRight", true);
            this.down = new surya_1.Keyboard("ArrowDown", true);
            // protected mousedown = new Keyboard("mousedown", true);
            this.destructibleCubeArray = {};
            this.destructibleCubeArrayText = {};
            this.destructibleCubeArrayNumber = {};
            this.destructibleCubeArrayInside = {};
            this.fakePlayerArray = {};
            this.blockContainerArray = [];
            this.pointerDown = false;
            this.movementVectorPlayer = { x: 0, y: 0 };
            this.playerNum = 0;
            this.blockCouter = 0;
            this.blockCount = 0;
            this.collisionDetected = false;
            this.tweeningTween = false;
            this.ballMoving = false;
            this.playersDroppedDown = 0;
            this.currentlyPlayingPlayers = 0;
            this.boundedFunctionArray = [];
            this.playingInitialAnim = true;
            //PIXI.settings.RESOLUTION = window.devicePixelRatio;
            // PIXI.settings.ANISOTROPIC_LEVEL=16
            surya_1.app = new PIXI.Application({
                resizeTo: window, backgroundColor: 0x000000, antialias: true,
                resolution: 1
            });
            surya_1.app.stage.interactive = true;
            document.body.appendChild(surya_1.app.view);
            this.mainContainer = new PIXI.Container();
            surya_1.EngineObj = surya_1.Engine.create();
            surya_1.WorldObject = surya_1.EngineObj.world;
            this.fakePlayerArray = {};
            surya_1.WorldObject.gravity.y = 0;
            surya_1.WorldObject.gravity.x = 0;
            // Engine.run(EngineObj);
            this.loadAllImages();
            this.playingInitialAnim = true;
            window.onresize = this.resize.bind(this);
        }
        Main.prototype.drawBaseLineAndScoreText = function () {
            var baseLine = new surya_1.CollisionShape(false);
            baseLine.beginFill(0x800080, 1).drawRect(0, 0, 400, 2).endFill();
            baseLine.x = 0;
            baseLine.y = 485;
            var baseLineUpper = new PIXI.Graphics();
            baseLineUpper.beginFill(0x800080, 1).drawRect(0, 0, 400, 52).endFill();
            baseLineUpper.x = 0;
            baseLineUpper.y = 0;
            this.innerContainer.addChild(baseLine);
            this.middleContainer.addChild(baseLineUpper);
            this.scoreText = new PIXI.Text("Score:", surya_1.styleScore);
            this.middleContainer.addChild(this.scoreText);
            this.scoreText.x = 10;
            this.scoreText.y = 10;
            this.scoreValue = new PIXI.Text("", surya_1.styleValue);
            this.middleContainer.addChild(this.scoreValue);
            this.scoreValue.x = 100;
            this.scoreValue.y = 10;
            this.scoreValue.text = "0";
        };
        Main.prototype.drawBlockShapes = function (i) {
            var fakeplayerNum = 0;
            this.blockContainerArray[i] = new PIXI.Container();
            this.destructibleCubeArray[i] = {};
            this.destructibleCubeArrayText[i] = {};
            this.destructibleCubeArrayNumber[i] = {};
            this.destructibleCubeArrayInside[i] = {};
            this.fakePlayerArray[i] = {};
            for (var j = 0; j < 8; j++) {
                var randomValue = Math.round(Math.random() * 1);
                if (randomValue == 0) {
                    this.destructibleCubeArrayNumber[i][this.blockCount] = i + 1;
                    this.destructibleCubeArray[i][this.blockCount] = new surya_1.CollisionShape(true, "rect", j * 50, i * 50, 50, 50, { isStatic: true, friction: 0, restitution: 1 });
                    this.destructibleCubeArray[i][this.blockCount].beginFill(0x800080, 1).drawRect(0, 0, 45, 45).endFill();
                    this.destructibleCubeArray[i][this.blockCount].x = j * 50;
                    this.destructibleCubeArray[i][this.blockCount].y = 0;
                    this.destructibleCubeArrayInside[i][this.blockCount] = new surya_1.CollisionShape(false);
                    //World.add(WorldObject,this.destructibleBoxArray[i][this.blockCount]);
                    this.destructibleCubeArrayInside[i][this.blockCount].beginFill(0x000000, 1).drawRect(0, 0, 40, 40).endFill();
                    var style_1 = new PIXI.TextStyle({
                        fill: "white", align: 'center'
                    });
                    this.destructibleCubeArrayText[i][this.blockCount] = new PIXI.Text('1', style_1);
                    this.destructibleCubeArrayInside[i][this.blockCount].addChild(this.destructibleCubeArrayText[i][this.blockCount]);
                    this.destructibleCubeArrayText[i][this.blockCount].anchor.set(0.5);
                    this.destructibleCubeArrayText[i][this.blockCount].position.set(20, 20);
                    this.destructibleCubeArrayText[i][this.blockCount].text = this.destructibleCubeArrayNumber[i][this.blockCount];
                    this.blockContainerArray[i].addChild(this.destructibleCubeArray[i][this.blockCount]);
                    this.blockContainerArray[i].addChild(this.destructibleCubeArrayInside[i][this.blockCount]);
                    this.destructibleCubeArrayInside[i][this.blockCount].x = j * 50 + 2.5;
                    this.destructibleCubeArrayInside[i][this.blockCount].y = 2.5;
                    this.destructibleCubeArray[i][this.blockCount].name = "destructibleCube[" + i + "," + j + "]";
                    this.destructibleCubeArrayInside[i][this.blockCount].name = "destructibleCubeArrayInside[" + i + "," + j + "]";
                    this.destructibleCubeArrayText[i][this.blockCount].name = "destructibleCubeArrayText[" + i + "," + j + "]";
                    this.blockCount++;
                }
                else {
                    randomValue = Math.round(Math.random() * 8);
                    if (randomValue === 1) {
                        var newSprite = new surya_1.CollisionShape(false);
                        newSprite.beginFill(0xffffff, 1).drawCircle(0, 0, 10).endFill();
                        this.fakePlayerArray[i][fakeplayerNum] = this.innerContainer.addChild(newSprite);
                        this.fakePlayerArray[i][fakeplayerNum].x = j * 50 + 25;
                        this.fakePlayerArray[i][fakeplayerNum].y = 30;
                        fakeplayerNum++;
                    }
                }
            }
            this.innerContainer.addChild(this.blockContainerArray[i]);
            this.TweenBlockDown(i, 1);
        };
        Main.prototype.TweenBlockDown = function (value, duration) {
            var ctr = value;
            var _this = this;
            this.tweeningTween = true;
            if (!(typeof (duration) == "number")) {
                duration = 1;
            }
            for (var i = 0; i <= value; i++) {
                //setTimeout(() => {
                var timeLineTween = new TimelineMax({
                    onComplete: this.UpdateBodyPositionAfterTimeline.bind(this, i, value, (i + 1) * 50 + 5),
                });
                timeLineTween.to(this.blockContainerArray[ctr], { duration: duration, y: (i + 1) * 50 + 5 });
                for (var fakePlayerIndex in this.fakePlayerArray[ctr]) {
                    gsap.to(this.fakePlayerArray[ctr][fakePlayerIndex], { y: (i + 1) * 50 + 5 + 25, duration: duration });
                }
                ctr--;
                //}, i * 500);
            }
        };
        Main.prototype.UpdateBodyPositionAfterTimeline = function (i, value, positionValue) {
            if (i == value) {
                this.tweeningTween = false;
            }
            for (var j in this.destructibleCubeArray[i]) {
                if (this.destructibleCubeArray[i].hasOwnProperty(j)) {
                    var xval = this.destructibleCubeArray[i][j].x;
                    var yval = this.destructibleCubeArray[i][j].parent.y;
                    var wval = this.destructibleCubeArray[i][j].width;
                    var hval = this.destructibleCubeArray[i][j].height;
                    this.destructibleCubeArray[i][j].removeAndAddNewBody(xval, yval, wval, hval);
                }
            }
        };
        Main.prototype.loadAllImages = function () {
            for (var imageid in surya_1.assetList) {
                surya_1.loader.add(surya_1.assetList[imageid], "Assets/" + surya_1.assetList[imageid] + ".png");
            }
            for (var imageid in surya_1.assetListJPEG) {
                surya_1.loader.add(surya_1.assetListJPEG[imageid], "Assets/" + surya_1.assetListJPEG[imageid] + ".jpg");
            }
            surya_1.loader.load(this.DrawEnvironmentAndPlayer.bind(this));
        };
        Main.prototype.AddBackgroundImage = function (resources) {
            for (var _i = 0, assetListJPEG_1 = surya_1.assetListJPEG; _i < assetListJPEG_1.length; _i++) {
                var key_1 = assetListJPEG_1[_i];
                var resource_1 = resources[key_1];
                var newSprite = new surya_1.Sprite(resource_1.texture);
                this.spriteArray[key_1] = this.mainContainer.addChild(new surya_1.Sprite(resource_1.texture));
            }
            this.innerContainer = new PIXI.Container();
            this.mainContainer.addChild(this.innerContainer);
            this.middleContainer = new PIXI.Container();
            this.mainContainer.addChild(this.middleContainer);
            this.finalScoreContainer = new PIXI.Container();
            this.mainContainer.addChild(this.finalScoreContainer);
            this.spriteArray["backgroundShader"].alpha = 0.85;
            this.maskObj = new PIXI.Graphics();
            this.maskObj.beginFill(0x800080, 1).drawRect(0, 0, 400, 600).endFill();
            this.mainContainer.addChild(this.maskObj);
            this.spriteArray["backgroundShader"].mask = this.maskObj;
            var key = "hand";
            var resource = resources[key];
            this.spriteArray[key] = this.innerContainer.addChild(new surya_1.Sprite(resource.texture));
            this.innerContainer.addChild(this.spriteArray["hand"]);
            this.spriteArray["hand"].scale.set(0.5);
            this.spriteArray["hand"].scaleX = 0.5;
            this.spriteArray["hand"].anchor.set(0.5);
            this.spriteArray["hand"].x = 200;
            this.spriteArray["hand"].y = 275;
            this.ShowBlinkingText();
            this.AnimateHandImage();
            this.resize();
            this.drawBaseLineAndScoreText();
        };
        Main.prototype.ShowBlinkingText = function () {
            this.circleFade = new PIXI.Graphics();
            this.circleFade.beginFill(0xFFFF00, 1).drawCircle(0, 0, 10).endFill();
            this.innerContainer.addChild(this.circleFade);
            this.initText = new PIXI.Text("Drag And Shoot", surya_1.style);
            this.innerContainer.addChild(this.initText);
            this.initText.x = 50;
            this.initText.y = 150;
            this.circleFade.x = 200;
            this.circleFade.y = 240;
            this.circleFade.alpha = 0;
            var booleanVal = false;
            var alphaToSet = 0;
            var _this = this;
            // let ctr=0;
            this.intervalObject = setInterval(function () {
                booleanVal = !booleanVal;
                if (booleanVal) {
                    alphaToSet = 0;
                }
                else {
                    alphaToSet = 1;
                }
                gsap.to(_this.initText, { alpha: alphaToSet, duration: 1 });
                // if(ctr%4==0){
                //     let newAlpha = 0;
                //     if(alphaToSet==0){
                //         newAlpha = 1;
                //     }
                //     gsap.to(_this.circleFade, { alpha: newAlpha, duration: 1 });
                // }
                // ctr++;
            }, 1000);
        };
        Main.prototype.AnimateHandImage = function () {
            if (this.playingInitialAnim) {
                this.destroyPlayerDirection();
                var timeLineTween = new TimelineMax({
                    onComplete: this.AnimateHandImage.bind(this)
                });
                var timeLineTweenNew = new TimelineMax({});
                var _this_1 = this;
                this.timeOutPlayerDirection = setTimeout(function () {
                    _this_1.CreatePlayerDirection();
                }, 2000);
                this.circleFade.alpha = 0;
                this.circleFade.scale.set(1);
                this.circleFade.visible = true;
                timeLineTweenNew.to(this.circleFade, { alpha: 1, duration: 1 });
                timeLineTweenNew.to(this.circleFade, { alpha: 0, duration: 1 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 1, scaleX: 0.4 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 1, scaleX: 0.5 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 0.5, y: 325 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 0.5, x: 100, y: 325 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 0.5, x: 300, y: 325 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 0.5, x: 200, y: 325 });
                timeLineTween.to(this.spriteArray["hand"], { duration: 0.5, x: 200, y: 275 });
            }
        };
        Main.prototype.DrawEnvironmentAndPlayer = function (loader, resources) {
            this.AddBackgroundImage(resources);
            surya_1.app.stage.addChild(this.mainContainer);
            this.globalResources = resources;
            for (var _i = 0, borderList_1 = surya_1.borderList; _i < borderList_1.length; _i++) {
                var imageid = borderList_1[_i];
                var resource = resources[imageid[0]];
                var newSprite = new surya_1.CollisionShape(true, "rect", imageid[1], imageid[2], imageid[3], imageid[4], { isStatic: true, friction: 0, restitution: 1 });
                // newSprite.beginFill(0x800080, 1).drawRect(0, 0, imageid[5], imageid[6]).endFill();
                newSprite.x = imageid[1];
                newSprite.y = imageid[2];
                this.spriteArray[imageid[0]] = this.innerContainer.addChild(newSprite);
                this.spriteArray[imageid[0]].name = imageid[0];
            }
            for (var _a = 0, playerList_1 = surya_1.playerList; _a < playerList_1.length; _a++) {
                var imageid = playerList_1[_a];
                var resource = resources[imageid[0]];
                var newSprite = new surya_1.CollisionShape(true, "circle", 200, 485, 10, 10, { isStatic: false, friction: 0, restitution: 1, inertia: Infinity, frictionAir: 0, frictionStatic: 0 });
                //newSprite.justRemoveBody();
                newSprite.beginFill(0xffff00, 1).drawCircle(0, 0, 10).endFill();
                this.playerArray[imageid[1]] = this.innerContainer.addChild(newSprite);
                this.playerArray[imageid[1]].name = imageid[1];
            }
            this.StartGame();
        };
        Main.prototype.CreatePlayerDirection = function (e) {
            var container = new PIXI.Container();
            container.name = "EmitterContainer";
            this.ParticleEmitters["directionEmitter"] = new PIXI.particles.Emitter(container, [PIXI.Texture.fromImage('Assets/ball.png')], surya_1.ParticleJson);
            this.ParticleEmitters["directionEmitter"].emit = true;
            console.log(this.ParticleEmitters["directionEmitter"]);
            this.ParticleEmitters["directionEmitter"].autoUpdate = true;
            this.containerArray["EmitterContainer"] = this.innerContainer.addChild(container);
            this.containerArray["EmitterContainer"].position.set(this.playerArray["ball0"].x, this.playerArray["ball0"].y);
            if (!this.playingInitialAnim) {
                this.pointerDown = true;
            }
            else {
                this.pointerDown = false;
            }
        };
        Main.prototype.SetPlayerDirection = function (e) {
            if (this.pointerDown && !this.playingInitialAnim) {
                var pos = e.data.global;
                var firstDirection = { x: 1, y: 0 };
                var secondDirection = { x: this.containerArray["EmitterContainer"].worldTransform.tx - pos.x, y: this.containerArray["EmitterContainer"].worldTransform.ty - pos.y };
                this.movementVectorPlayer.x = secondDirection.x;
                this.movementVectorPlayer.y = secondDirection.y;
                var dotProduct = firstDirection.x * secondDirection.x + firstDirection.y * secondDirection.y;
                var determinant = firstDirection.x * secondDirection.y - firstDirection.y * secondDirection.x;
                var angleInBetween = 0;
                var alpha = 0;
                alpha = Math.atan2(determinant, dotProduct);
                angleInBetween = (alpha * 180) / 3.14;
                this.containerArray["EmitterContainer"].rotation = alpha;
            }
        };
        Main.prototype.SetPointerDirectionInitial = function () {
            if (this.playingInitialAnim) {
                if (this.containerArray["EmitterContainer"]) {
                    if (this.containerArray["EmitterContainer"].parent) {
                        var pos = { x: this.spriteArray["hand"].worldTransform.tx, y: this.spriteArray["hand"].worldTransform.ty };
                        var firstDirection = { x: 1, y: 0 };
                        var secondDirection = { x: this.containerArray["EmitterContainer"].worldTransform.tx - pos.x, y: this.containerArray["EmitterContainer"].worldTransform.ty - pos.y };
                        this.movementVectorPlayer.x = secondDirection.x;
                        this.movementVectorPlayer.y = secondDirection.y;
                        var dotProduct = firstDirection.x * secondDirection.x + firstDirection.y * secondDirection.y;
                        var determinant = firstDirection.x * secondDirection.y - firstDirection.y * secondDirection.x;
                        var angleInBetween = 0;
                        var alpha = 0;
                        alpha = Math.atan2(determinant, dotProduct);
                        angleInBetween = (alpha * 180) / 3.14;
                        if (angleInBetween >= 0 && angleInBetween <= 180) {
                            alpha = -alpha;
                        }
                        this.containerArray["EmitterContainer"].rotation = alpha;
                    }
                }
            }
        };
        Main.prototype.SetPlayerMovementVector = function (e) {
            var ctr = 0;
            var _this = this;
            var _loop_1 = function (playerId) {
                setTimeout(function () {
                    var squareRoot = Math.sqrt(_this.movementVectorPlayer.x * _this.movementVectorPlayer.x + _this.movementVectorPlayer.y * _this.movementVectorPlayer.y);
                    _this.movementVectorPlayer.x = _this.movementVectorPlayer.x / squareRoot;
                    _this.movementVectorPlayer.y = _this.movementVectorPlayer.y / squareRoot;
                    _this.playerArray[playerId].removeAndAddNewBody(_this.playerArray[playerId].x, _this.playerArray[playerId].y, 10);
                    _this.playerArray[playerId].setMovementVector(_this.movementVectorPlayer.x, _this.movementVectorPlayer.y);
                    _this.ballMoving = true;
                    _this.currentlyPlayingPlayers++;
                    _this.playerArray[playerId].collisionActive = true;
                    _this.playerArray[playerId].MovementActive = true;
                }, 50 * ctr);
                ctr++;
            };
            for (var playerId in this.playerArray) {
                _loop_1(playerId);
            }
            this.pointerDown = false;
            this.destroyPlayerDirection();
            surya_1.app.stage.off("pointermove", this.boundedFunctionArray[0]);
            window.removeEventListener("mousedown", this.boundedFunctionArray[1]);
            window.removeEventListener("mouseup", this.boundedFunctionArray[2]);
        };
        Main.prototype.destroyPlayerDirection = function () {
            if (this.ParticleEmitters["directionEmitter"]) {
                this.ParticleEmitters["directionEmitter"].emit = false;
                this.ParticleEmitters["directionEmitter"].destroy();
                this.containerArray["EmitterContainer"].removeChildren();
                this.containerArray["EmitterContainer"].destroy();
            }
        };
        Main.prototype.StartGame = function () {
            this.PositionSprites();
            surya_1.ticker.start();
            surya_1.ticker.add(this.play.bind(this));
            this.HideInitialAnimObj = this.HideInitialAnim.bind(this);
            window.addEventListener("mousedown", this.HideInitialAnimObj, true);
        };
        Main.prototype.HideInitialAnim = function () {
            this.playingInitialAnim = false;
            window.removeEventListener("mousedown", this.HideInitialAnimObj, true);
            clearTimeout(this.timeOutPlayerDirection);
            clearInterval(this.intervalObject);
            this.spriteArray["hand"].visible = false;
            gsap.killTweensOf(this.spriteArray["hand"]);
            gsap.killTweensOf(this.circleFade);
            this.initText.visible = false;
            this.circleFade.visible = false;
            this.destroyPlayerDirection();
            this.drawBlockShapes(0);
            var _this = this;
            setTimeout(function () {
                _this.BindDirectionVectors();
            }, 500);
        };
        Main.prototype.BindDirectionVectors = function () {
            this.boundedFunctionArray[0] = this.SetPlayerDirection.bind(this);
            this.boundedFunctionArray[1] = this.CreatePlayerDirection.bind(this);
            this.boundedFunctionArray[2] = this.SetPlayerMovementVector.bind(this);
            surya_1.app.stage.on("pointermove", this.boundedFunctionArray[0]);
            window.addEventListener("mousedown", this.boundedFunctionArray[1]);
            window.addEventListener("mouseup", this.boundedFunctionArray[2]);
        };
        Main.prototype.PositionSprites = function () {
            // this.spriteArray["borderright"].x = 400 - this.spriteArray["borderright"].width;
            // this.spriteArray["borderbottom"].y = 600 - this.spriteArray["borderbottom"].height;
        };
        Main.prototype.play = function (delta) {
            this.MovementLogic(delta);
            this.CheckForCollision(delta);
            this.spriteArray["hand"].scaleX && this.spriteArray["hand"].scale.set(this.spriteArray["hand"].scaleX);
            this.SetPointerDirectionInitial();
            surya_1.Engine.update(surya_1.EngineObj, delta);
        };
        Main.prototype.MovementLogic = function (delta) {
            if (!this.tweeningTween) {
                for (var containers in this.destructibleCubeArray) {
                    if (this.destructibleCubeArray.hasOwnProperty(containers)) {
                        for (var cube in this.destructibleCubeArray[containers]) {
                            this.destructibleCubeArray[containers][cube].setPositionAccordingToBody(true);
                        }
                    }
                }
            }
            //if (this.ballMoving) {
            for (var player in this.playerArray) {
                if (this.playerArray.hasOwnProperty(player)) {
                    if (!this.playerArray[player].bodyRemoved) {
                        this.playerArray[player].setPositionAccordingToBody(false);
                    }
                }
            }
            //}
        };
        Main.prototype.CheckForCollision = function (delta) {
            if (!this.tweeningTween) {
                for (var containers in this.destructibleCubeArray) {
                    if (this.destructibleCubeArray.hasOwnProperty(containers)) {
                        for (var cube in this.destructibleCubeArray[containers]) {
                            for (var player in this.playerArray) {
                                if (this.playerArray.hasOwnProperty(player)) {
                                    if (Matter.Detector.collisions([[this.playerArray[player].body, this.destructibleCubeArray[containers][cube].body]], surya_1.EngineObj).length > 0) {
                                        //console.log("collision Happened" +cube);
                                        if (this.destructibleCubeArrayNumber[containers][cube] > 1) {
                                            this.destructibleCubeArrayNumber[containers][cube]--;
                                            ++surya_1.score;
                                            this.scoreValue.text = surya_1.score + "";
                                            this.destructibleCubeArrayText[containers][cube].text = this.destructibleCubeArrayNumber[containers][cube];
                                        }
                                        else {
                                            ++surya_1.score;
                                            this.scoreValue.text = surya_1.score + "";
                                            this.DestroyAllBlocks(containers, cube, 50);
                                        }
                                    }
                                    for (var index in this.fakePlayerArray) {
                                        if (this.fakePlayerArray.hasOwnProperty(index)) {
                                            for (var fakePlayer in this.fakePlayerArray[index]) {
                                                if (this.fakePlayerArray[index].hasOwnProperty(fakePlayer)) {
                                                    if (!this.fakePlayerArray[index][fakePlayer].hasCollided) {
                                                        if (this.playerArray[player].CheckForCollision(this.fakePlayerArray[index][fakePlayer])) {
                                                            this.TweenFakePlayerDown(index, fakePlayer);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.ballMoving) {
                var _loop_2 = function (player) {
                    if (this_1.playerArray.hasOwnProperty(player)) {
                        var _this_2 = this_1;
                        if (this_1.playerArray[player].y > 500 && !this_1.playerArray[player].bodyRemoved) {
                            this_1.playersDroppedDown++;
                            _this_2.playerArray[player].justRemoveBody();
                            _this_2.playerArray[player].y = 485;
                            if (this_1.playersDroppedDown == this_1.currentlyPlayingPlayers) {
                                this_1.currentlyPlayingPlayers = 0;
                                _this_2.ballMoving = false;
                                this_1.playersDroppedDown = 0;
                                if (this_1.blockCouter * 50 > 300 && Object.keys(this_1.destructibleCubeArray[this_1.blockCouter]).length > 0) {
                                    _this_2.MoveDownAndDestroyAll();
                                }
                                else {
                                    setTimeout(function () {
                                        _this_2.drawBlockShapes(++_this_2.blockCouter);
                                        _this_2.MoveAllPlayersToOriginalPos();
                                    }, 500);
                                }
                            }
                        }
                    }
                };
                var this_1 = this;
                for (var player in this.playerArray) {
                    _loop_2(player);
                }
            }
        };
        Main.prototype.TweenFakePlayerDown = function (index, fakePlayer) {
            var timeLineTween = new TimelineMax({
                onComplete: this.CreateNewPlayer.bind(this, this.fakePlayerArray[index][fakePlayer].x, 485, index, fakePlayer),
            });
            timeLineTween.to(this.fakePlayerArray[index][fakePlayer], { duration: 0.5, x: this.fakePlayerArray[index][fakePlayer].x, y: 485 });
            // gsap.to(toTweenBlock, { x: toTweenBlock.x, y: 485, duration: 0.25 });
        };
        Main.prototype.CreateNewPlayer = function (x, y, index, fakePlayer) {
            var toDestroy = this.fakePlayerArray[index][fakePlayer];
            delete this.fakePlayerArray[index][fakePlayer];
            toDestroy.destroy();
            this.playerNum++;
            var newSprite = new surya_1.CollisionShape(true, "circle", x, y, 10, 10, { isStatic: false, friction: 0, restitution: 1, inertia: Infinity, frictionAir: 0, frictionStatic: 0 });
            newSprite.justRemoveBody();
            newSprite.beginFill(0xffff00, 1).drawCircle(0, 0, 10).endFill();
            this.playerArray["ball" + this.playerNum] = this.innerContainer.addChild(newSprite);
            this.playerArray["ball" + this.playerNum].name = "ball" + this.playerNum;
            this.playerArray["ball" + this.playerNum].x = x;
            this.playerArray["ball" + this.playerNum].y = y;
        };
        Main.prototype.MoveAllPlayersToOriginalPos = function () {
            for (var player in this.playerArray) {
                if (this.playerArray.hasOwnProperty(player)) {
                    gsap.to(this.playerArray[player], { x: this.playerArray["ball0"].x, y: 485, duration: 0.5 });
                }
            }
            var _this = this;
            setTimeout(function () {
                _this.BindDirectionVectors();
            }, 500);
        };
        Main.prototype.MoveDownAndDestroyAll = function () {
            var _loop_3 = function (ctr) {
                var _this = this_2;
                for (var fakePlayerIndex in this_2.fakePlayerArray[ctr]) {
                    this_2.fakePlayerArray[ctr][fakePlayerIndex].destroy();
                }
                setTimeout(function () {
                    _this.TweenBlockDownToBottom(ctr, 0.5);
                }, ctr * 500);
            };
            var this_2 = this;
            for (var ctr = 0; ctr <= this.blockCouter; ctr++) {
                _loop_3(ctr);
            }
        };
        Main.prototype.ShowFinalContainer = function () {
            this.innerContainer.visible = false;
            this.middleContainer.visible = false;
            this.finalScoreContainer.visible = true;
            var gameOverText = new PIXI.Text("Game Over", surya_1.styleScoreFinal);
            gameOverText.text = "Game Over";
            this.finalScoreContainer.addChild(gameOverText);
            gameOverText.x = (400 - gameOverText.width) / 2;
            gameOverText.y = 100;
            var finalScoreText = new PIXI.Text("Your score is:", surya_1.styleScoreFinal);
            finalScoreText.text = "Your score is:";
            this.finalScoreContainer.addChild(finalScoreText);
            finalScoreText.x = (400 - finalScoreText.width) / 2;
            finalScoreText.y = 200;
            var scoreValue = new PIXI.Text("", surya_1.styleValueFinal);
            this.finalScoreContainer.addChild(scoreValue);
            scoreValue.text = surya_1.score + "";
            scoreValue.x = (400 - scoreValue.width) / 2;
            scoreValue.y = 300;
        };
        Main.prototype.TweenBlockDownToBottom = function (value, duration) {
            var ctr = value;
            this.tweeningTween = true;
            if (!(typeof (duration) == "number")) {
                duration = 1;
            }
            var _this = this;
            if (value == this.blockCouter) {
                setTimeout(function () {
                    _this.ShowFinalContainer();
                }, 500);
            }
            for (var i in this.destructibleCubeArray[value]) {
                if (this.destructibleCubeArray[value].hasOwnProperty(i)) {
                    this.destructibleCubeArray[ctr][i].justRemoveBody();
                    var timeLineTween = new TimelineMax({
                        onComplete: this.DestroyAllBlocks.bind(this, ctr, i, 0),
                    });
                    timeLineTween.to(this.blockContainerArray[ctr], { duration: duration, y: 435 });
                }
            }
        };
        Main.prototype.DestroyAllBlocks = function (containers, cube, delay) {
            var _this = this;
            setTimeout(function () {
                if (_this.destructibleCubeArray[containers][cube]) {
                    var container = new PIXI.Container();
                    container.name = "EmitterContainer" + containers + "" + cube;
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube] = new PIXI.particles.Emitter(container, [PIXI.Texture.fromImage('Assets/ball.png')], surya_1.ParticleJsonDestroy);
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube].emit = true;
                    console.log(_this.ParticleEmitters["directionEmitter" + containers + "" + cube]);
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube].autoUpdate = true;
                    _this.containerArray["EmitterContainer" + containers + "" + cube] = _this.innerContainer.addChild(container);
                    _this.containerArray["EmitterContainer" + containers + "" + cube].x = _this.destructibleCubeArray[containers][cube].x + 25;
                    _this.containerArray["EmitterContainer" + containers + "" + cube].y = _this.destructibleCubeArray[containers][cube].parent.y + 25;
                    //_this.containerArray["EmitterContainer"+containers+cube].playOnceAndDestroy()
                    _this.destructibleCubeArray[containers][cube].justRemoveBody();
                    var x = _this.destructibleCubeArray[containers][cube];
                    var y = _this.destructibleCubeArrayText[containers][cube];
                    var z = _this.destructibleCubeArrayInside[containers][cube];
                    var p = _this.destructibleCubeArrayNumber[containers][cube];
                    delete _this.destructibleCubeArray[containers][cube];
                    delete _this.destructibleCubeArrayText[containers][cube];
                    delete _this.destructibleCubeArrayInside[containers][cube];
                    delete _this.destructibleCubeArrayNumber[containers][cube];
                    x.destroy();
                    y.destroy();
                    z.destroy();
                    setTimeout(function () {
                        if (_this.ParticleEmitters["directionEmitter" + containers + "" + cube]) {
                            _this.ParticleEmitters["directionEmitter" + containers + "" + cube].emit = false;
                            _this.ParticleEmitters["directionEmitter" + containers + "" + cube].destroy();
                            _this.containerArray["EmitterContainer" + containers + "" + cube].removeChildren();
                            _this.containerArray["EmitterContainer" + containers + "" + cube].destroy();
                        }
                    }, 110);
                }
            }, delay);
        };
        Main.prototype.resize = function () {
            var scale = Math.min(window.innerWidth / 400, window.innerHeight / 600);
            this.mainContainer.pivot.set(640, 360);
            this.mainContainer.x = (window.innerWidth) / 2;
            this.mainContainer.y = (window.innerHeight) / 2;
            // this.innerContainer.height=600;
            // this.innerContainer.width=400;
            this.innerContainer.x = (1280 - 400) / 2;
            this.innerContainer.y = (720 - 600) / 2;
            this.finalScoreContainer.x = (1280 - 400) / 2;
            this.finalScoreContainer.y = (720 - 600) / 2;
            this.middleContainer.x = (1280 - 400) / 2;
            this.middleContainer.y = (720 - 600) / 2;
            this.spriteArray["backgroundShader"].mask = null;
            this.maskObj.x = (1280 - 400) / 2;
            this.maskObj.y = (720 - 600) / 2;
            this.spriteArray["backgroundShader"].mask = this.maskObj;
            this.mainContainer.scale.set(scale);
        };
        return Main;
    }());
    surya_1.Main = Main;
})(surya_1 || (surya_1 = {}));
/// <reference path="main.ts" />
var surya_1;
/// <reference path="main.ts" />
(function (surya_1) {
    var instance = new surya_1.Main();
})(surya_1 || (surya_1 = {}));
