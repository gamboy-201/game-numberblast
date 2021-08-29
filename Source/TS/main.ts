/// <reference path="./Alias.ts" />
/// <reference path="./Constants.ts"/>
/// <reference path="./MovementSprite.ts"/>
/// <reference path="./Keyboard.ts"/>
/// <reference path="./MatterBox.ts"/>


namespace surya_1 {
    interface ObjectArray {
        [index: number]: any;
    }
    interface Object2DArray {
        [index: number]: ObjectArray;
    }
    export class Main {
        private spriteArray: any = {};
        protected playerArray: any = {};
        protected containerArray: any = {};
        protected ParticleEmitters: any = {};
        protected left: Keyboard = new Keyboard("ArrowLeft", true);
        protected up = new Keyboard("ArrowUp", true);
        protected right = new Keyboard("ArrowRight", true);
        protected down = new Keyboard("ArrowDown", true);
        // protected mousedown = new Keyboard("mousedown", true);
        protected destructibleCubeArray: Object2DArray = {};
        protected destructibleCubeArrayText: Object2DArray = {};
        protected destructibleCubeArrayNumber: Object2DArray = {};
        protected destructibleCubeArrayInside: Object2DArray = {};
        protected fakePlayerArray: Object2DArray = {};
        protected blockContainerArray: any[] = [];
        protected pointerDown: boolean = false;
        protected movementVectorPlayer: any = { x: 0, y: 0 };
        protected globalResources: any;
        protected playerNum: number = 0;
        protected blockCouter: number = 0;
        protected blockCount: number = 0;
        protected collisionDetected: boolean = false;
        protected engine: any;
        protected world: any;
        protected tweeningTween: boolean = false;
        private ballMoving: boolean = false;
        private playersDroppedDown: number = 0;
        private currentlyPlayingPlayers: number = 0;
        protected boundedFunctionArray: any = [];
        private mainContainer: any;
        private innerContainer: any;
        private middleContainer: any;
        private finalScoreContainer: any;
        private maskObj: PIXI.Graphics;
        private playingInitialAnim: boolean = true;
        private intervalObject: any;
        private timeOutPlayerDirection: any;
        private initText: any;
        private HideInitialAnimObj:any;
        private circleFade:any;
        private scoreText:PIXI.Text;
        private scoreValue:PIXI.Text;
        constructor() {
            //PIXI.settings.RESOLUTION = window.devicePixelRatio;
            // PIXI.settings.ANISOTROPIC_LEVEL=16
            app = new PIXI.Application({
                resizeTo: window, backgroundColor: 0x000000, antialias: true,  // ADDED!!!
                resolution: 1
            });
            app.stage.interactive = true;
            document.body.appendChild(app.view);
            this.mainContainer = new PIXI.Container();
            EngineObj = Engine.create();
            WorldObject = EngineObj.world;
            this.fakePlayerArray = {};
            WorldObject.gravity.y = 0;
            WorldObject.gravity.x = 0;
            // Engine.run(EngineObj);

            this.loadAllImages();
            this.playingInitialAnim = true;
            window.onresize = this.resize.bind(this);
        }


        private drawBaseLineAndScoreText(): void {
            let baseLine: CollisionShape = new CollisionShape(false);
            baseLine.beginFill(0x800080, 1).drawRect(0, 0, 400, 2).endFill();
            baseLine.x = 0;
            baseLine.y = 485;
            let baseLineUpper: PIXI.Graphics = new PIXI.Graphics();
            baseLineUpper.beginFill(0x800080, 1).drawRect(0, 0, 400, 52).endFill();
            baseLineUpper.x = 0;
            baseLineUpper.y = 0;
            this.innerContainer.addChild(baseLine);
            this.middleContainer.addChild(baseLineUpper);
            this.scoreText = new PIXI.Text("Score:", styleScore);
            this.middleContainer.addChild(this.scoreText);
            this.scoreText.x = 10;
            this.scoreText.y = 10;
            this.scoreValue = new PIXI.Text("", styleValue);
            this.middleContainer.addChild(this.scoreValue);
            this.scoreValue.x = 100;
            this.scoreValue.y = 10;
            this.scoreValue.text="0";
        }


        private drawBlockShapes(i: number): void {
            let fakeplayerNum: number = 0;
            this.blockContainerArray[i] = new PIXI.Container();
            this.destructibleCubeArray[i] = {};
            this.destructibleCubeArrayText[i] = {};
            this.destructibleCubeArrayNumber[i] = {};
            this.destructibleCubeArrayInside[i] = {};
            this.fakePlayerArray[i] = {};
            for (let j = 0; j < 8; j++) {
                let randomValue = Math.round(Math.random() * 1);
                if (randomValue == 0) {
                    this.destructibleCubeArrayNumber[i][this.blockCount] = i + 1;
                    this.destructibleCubeArray[i][this.blockCount] = new CollisionShape(true, "rect", j * 50, i * 50, 50, 50, { isStatic: true, friction: 0, restitution: 1 });
                    this.destructibleCubeArray[i][this.blockCount].beginFill(0x800080, 1).drawRect(0, 0, 45, 45).endFill();
                    this.destructibleCubeArray[i][this.blockCount].x = j * 50;
                    this.destructibleCubeArray[i][this.blockCount].y = 0;
                    this.destructibleCubeArrayInside[i][this.blockCount] = new CollisionShape(false);

                    //World.add(WorldObject,this.destructibleBoxArray[i][this.blockCount]);


                    this.destructibleCubeArrayInside[i][this.blockCount].beginFill(0x000000, 1).drawRect(0, 0, 40, 40).endFill();
                    const style = new PIXI.TextStyle({
                        fill: "white", align: 'center'
                    });
                    this.destructibleCubeArrayText[i][this.blockCount] = new PIXI.Text('1', style);
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
                } else {
                    randomValue = Math.round(Math.random() * 8);
                    if (randomValue === 1) {
                        let newSprite: CollisionShape = new CollisionShape(false);
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
        }

        protected TweenBlockDown(value: number, duration?: number): void {
            let ctr = value;
            let _this = this;
            this.tweeningTween = true;
            if (!(typeof (duration) == "number")) {
                duration = 1;
            }
            for (let i = 0; i <= value; i++) {
                //setTimeout(() => {
                let timeLineTween = new TimelineMax({
                    onComplete: this.UpdateBodyPositionAfterTimeline.bind(this, i, value, (i + 1) * 50 + 5),
                });
                timeLineTween.to(this.blockContainerArray[ctr], { duration: duration, y: (i + 1) * 50 + 5 });
                for (let fakePlayerIndex in this.fakePlayerArray[ctr]) {
                    gsap.to(this.fakePlayerArray[ctr][fakePlayerIndex], { y: (i + 1) * 50 + 5 + 25, duration: duration });
                }
                ctr--;
                //}, i * 500);
            }
        }

        protected UpdateBodyPositionAfterTimeline(i: number, value: number, positionValue: number): void {
            if (i == value) {
                this.tweeningTween = false;
            }
            for (let j in this.destructibleCubeArray[i]) {
                if (this.destructibleCubeArray[i].hasOwnProperty(j)) {
                    let xval = this.destructibleCubeArray[i][j].x;
                    let yval = this.destructibleCubeArray[i][j].parent.y;
                    let wval = this.destructibleCubeArray[i][j].width;
                    let hval = this.destructibleCubeArray[i][j].height;
                    this.destructibleCubeArray[i][j].removeAndAddNewBody(xval, yval, wval, hval);
                }
            }
        }



        private loadAllImages(): void {
            for (let imageid in assetList) {
                loader.add(assetList[imageid], "Assets/" + assetList[imageid] + ".png");
            }
            for (let imageid in assetListJPEG) {
                loader.add(assetListJPEG[imageid], "Assets/" + assetListJPEG[imageid] + ".jpg");
            }
            loader.load(this.DrawEnvironmentAndPlayer.bind(this));
        }

        protected AddBackgroundImage(resources: any) {
            for (let key of assetListJPEG) {
                let resource = resources[key];
                let newSprite: PIXI.Sprite = new Sprite(resource.texture);
                this.spriteArray[key] = this.mainContainer.addChild(new Sprite(resource.texture));
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

            let key = "hand";
            let resource = resources[key];
            this.spriteArray[key] = this.innerContainer.addChild(new Sprite(resource.texture));
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
        }

        private ShowBlinkingText(): void {
            this.circleFade = new PIXI.Graphics();
            this.circleFade.beginFill(0xFFFF00, 1).drawCircle(0, 0, 10).endFill();
            this.innerContainer.addChild(this.circleFade);
            this.initText = new PIXI.Text("Drag And Shoot", style);
            this.innerContainer.addChild(this.initText);
            this.initText.x = 50;
            this.initText.y = 150;
            this.circleFade.x = 200;
            this.circleFade.y = 240;
            this.circleFade.alpha = 0;
            let booleanVal = false;
            let alphaToSet = 0;
            let _this = this;
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
        }

        private AnimateHandImage(): void {
            if (this.playingInitialAnim) {
                this.destroyPlayerDirection();
                let timeLineTween = new TimelineMax({
                    onComplete: this.AnimateHandImage.bind(this)
                });
                let timeLineTweenNew = new TimelineMax({
                });
                let _this = this;
                this.timeOutPlayerDirection = setTimeout(function () {
                    _this.CreatePlayerDirection();
                }, 2000);
                this.circleFade.alpha=0;
                this.circleFade.scale.set(1);
                this.circleFade.visible=true;
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
        }

        private DrawEnvironmentAndPlayer(loader: any, resources: any): void {
            this.AddBackgroundImage(resources);
            app.stage.addChild(this.mainContainer);
            this.globalResources = resources;
            for (let imageid of borderList) {
                let resource = resources[imageid[0]];
                let newSprite: CollisionShape = new CollisionShape(true, "rect", imageid[1], imageid[2], imageid[3], imageid[4], { isStatic: true, friction: 0, restitution: 1 });
                // newSprite.beginFill(0x800080, 1).drawRect(0, 0, imageid[5], imageid[6]).endFill();
                newSprite.x = imageid[1];
                newSprite.y = imageid[2];
                this.spriteArray[imageid[0]] = this.innerContainer.addChild(newSprite);
                this.spriteArray[imageid[0]].name = imageid[0];
            }
            for (let imageid of playerList) {
                let resource = resources[imageid[0]];
                let newSprite: CollisionShape = new CollisionShape(true, "circle", 200, 485, 10, 10, { isStatic: false, friction: 0, restitution: 1, inertia: Infinity, frictionAir: 0, frictionStatic: 0 });
                //newSprite.justRemoveBody();
                newSprite.beginFill(0xffff00, 1).drawCircle(0, 0, 10).endFill();
                this.playerArray[imageid[1]] = this.innerContainer.addChild(newSprite);
                this.playerArray[imageid[1]].name = imageid[1];
            }
            this.StartGame();
        }

        private CreatePlayerDirection(e?: any): void {
            let container = new PIXI.Container();
            container.name = "EmitterContainer";
            this.ParticleEmitters["directionEmitter"] = new PIXI.particles.Emitter(container, [PIXI.Texture.fromImage('Assets/ball.png')], ParticleJson);
            this.ParticleEmitters["directionEmitter"].emit = true;
            console.log(this.ParticleEmitters["directionEmitter"]);
            this.ParticleEmitters["directionEmitter"].autoUpdate = true;
            this.containerArray["EmitterContainer"] = this.innerContainer.addChild(container);
            this.containerArray["EmitterContainer"].position.set(this.playerArray["ball0"].x, this.playerArray["ball0"].y);
            if(!this.playingInitialAnim){
                this.pointerDown = true;
            }
            else{
                this.pointerDown = false;
            }
        }

        private SetPlayerDirection(e?: any): void {
            if (this.pointerDown && !this.playingInitialAnim) {
                let pos = e.data.global;
                let firstDirection = { x: 1, y: 0 };
                let secondDirection = { x: this.containerArray["EmitterContainer"].worldTransform.tx - pos.x, y: this.containerArray["EmitterContainer"].worldTransform.ty - pos.y };
                this.movementVectorPlayer.x = secondDirection.x;
                this.movementVectorPlayer.y = secondDirection.y;
                let dotProduct = firstDirection.x * secondDirection.x + firstDirection.y * secondDirection.y;
                let determinant = firstDirection.x * secondDirection.y - firstDirection.y * secondDirection.x;
                let angleInBetween = 0;
                let alpha = 0;
                alpha = Math.atan2(determinant, dotProduct);
                angleInBetween = (alpha * 180) / 3.14;
                this.containerArray["EmitterContainer"].rotation = alpha;
            }
        }

        private SetPointerDirectionInitial(): void {
            if (this.playingInitialAnim) {
                if (this.containerArray["EmitterContainer"]) {
                    if (this.containerArray["EmitterContainer"].parent) {
                        let pos = { x: this.spriteArray["hand"].worldTransform.tx, y: this.spriteArray["hand"].worldTransform.ty };
                        let firstDirection = { x: 1, y: 0 };
                        let secondDirection = { x: this.containerArray["EmitterContainer"].worldTransform.tx - pos.x, y: this.containerArray["EmitterContainer"].worldTransform.ty - pos.y };
                        this.movementVectorPlayer.x = secondDirection.x;
                        this.movementVectorPlayer.y = secondDirection.y;
                        let dotProduct = firstDirection.x * secondDirection.x + firstDirection.y * secondDirection.y;
                        let determinant = firstDirection.x * secondDirection.y - firstDirection.y * secondDirection.x;
                        let angleInBetween = 0;
                        let alpha = 0;
                        alpha = Math.atan2(determinant, dotProduct);
                        angleInBetween = (alpha * 180) / 3.14;
                        if (angleInBetween >= 0 && angleInBetween <= 180) {
                            alpha = -alpha;
                        }
                        this.containerArray["EmitterContainer"].rotation = alpha;
                    }
                }
            }
        }

        private SetPlayerMovementVector(e: any): void {
            let ctr = 0;
            let _this = this;
            for (let playerId in this.playerArray) {
                setTimeout(function () {
                    let squareRoot = Math.sqrt(_this.movementVectorPlayer.x * _this.movementVectorPlayer.x + _this.movementVectorPlayer.y * _this.movementVectorPlayer.y);
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
            }
            this.pointerDown = false;
            this.destroyPlayerDirection();
            app.stage.off("pointermove", this.boundedFunctionArray[0]);
            window.removeEventListener("mousedown", this.boundedFunctionArray[1]);
            window.removeEventListener("mouseup", this.boundedFunctionArray[2]);
        }

        private destroyPlayerDirection(): void {
            if (this.ParticleEmitters["directionEmitter"]) {
                this.ParticleEmitters["directionEmitter"].emit = false;
                this.ParticleEmitters["directionEmitter"].destroy();
                this.containerArray["EmitterContainer"].removeChildren();
                this.containerArray["EmitterContainer"].destroy();
            }
        }

        private StartGame(): void {
            this.PositionSprites();
            ticker.start();
            ticker.add(this.play.bind(this));
            this.HideInitialAnimObj = this.HideInitialAnim.bind(this);
            window.addEventListener("mousedown",  this.HideInitialAnimObj,true);
        }

        private HideInitialAnim(): void {
            this.playingInitialAnim = false;
            window.removeEventListener("mousedown",  this.HideInitialAnimObj,true);
            clearTimeout(this.timeOutPlayerDirection);
            clearInterval(this.intervalObject);
            this.spriteArray["hand"].visible = false;
            gsap.killTweensOf(this.spriteArray["hand"]);
            gsap.killTweensOf(this.circleFade);
            this.initText.visible = false;
            this.circleFade.visible = false;
            this.destroyPlayerDirection();
            this.drawBlockShapes(0);
            let _this=this;
            setTimeout(function(){
                _this.BindDirectionVectors();
            },500);
        }

        private BindDirectionVectors(): void {
            this.boundedFunctionArray[0] = this.SetPlayerDirection.bind(this);
            this.boundedFunctionArray[1] = this.CreatePlayerDirection.bind(this);
            this.boundedFunctionArray[2] = this.SetPlayerMovementVector.bind(this);
            app.stage.on("pointermove", this.boundedFunctionArray[0]);
            window.addEventListener("mousedown", this.boundedFunctionArray[1]);
            window.addEventListener("mouseup", this.boundedFunctionArray[2]);
        }

        private PositionSprites(): void {
            // this.spriteArray["borderright"].x = 400 - this.spriteArray["borderright"].width;
            // this.spriteArray["borderbottom"].y = 600 - this.spriteArray["borderbottom"].height;
        }



        private play(delta: number): void {
            this.MovementLogic(delta);
            this.CheckForCollision(delta);
            this.spriteArray["hand"].scaleX && this.spriteArray["hand"].scale.set(this.spriteArray["hand"].scaleX);
            this.SetPointerDirectionInitial();
            Engine.update(EngineObj, delta);
        }

        private MovementLogic(delta: number) {
            if (!this.tweeningTween) {
                for (let containers in this.destructibleCubeArray) {
                    if (this.destructibleCubeArray.hasOwnProperty(containers)) {
                        for (let cube in this.destructibleCubeArray[containers]) {
                            this.destructibleCubeArray[containers][cube].setPositionAccordingToBody(true);
                        }
                    }
                }
            }
            //if (this.ballMoving) {
            for (let player in this.playerArray) {
                if (this.playerArray.hasOwnProperty(player)) {
                    if (!this.playerArray[player].bodyRemoved) {
                        this.playerArray[player].setPositionAccordingToBody(false);
                    }
                }
            }
            //}
        }

        private CheckForCollision(delta: number) {
            if (!this.tweeningTween) {
                for (let containers in this.destructibleCubeArray) {
                    if (this.destructibleCubeArray.hasOwnProperty(containers)) {
                        for (let cube in this.destructibleCubeArray[containers]) {
                            for (let player in this.playerArray) {
                                if (this.playerArray.hasOwnProperty(player)) {
                                    if (Matter.Detector.collisions([[this.playerArray[player].body, this.destructibleCubeArray[containers][cube].body]], surya_1.EngineObj).length > 0) {
                                        //console.log("collision Happened" +cube);
                                        if (this.destructibleCubeArrayNumber[containers][cube] > 1) {
                                            this.destructibleCubeArrayNumber[containers][cube]--;
                                            ++score;
                                            this.scoreValue.text=score + "";
                                            this.destructibleCubeArrayText[containers][cube].text = this.destructibleCubeArrayNumber[containers][cube];
                                        }
                                        else {
                                            ++score;
                                            this.scoreValue.text=score + "";
                                            this.DestroyAllBlocks(containers, cube, 50);
                                        }
                                    }
                                    for (let index in this.fakePlayerArray) {
                                        if (this.fakePlayerArray.hasOwnProperty(index)) {
                                            for (let fakePlayer in this.fakePlayerArray[index]) {
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
                for (let player in this.playerArray) {
                    if (this.playerArray.hasOwnProperty(player)) {
                        let _this = this;
                        if (this.playerArray[player].y > 500 && !this.playerArray[player].bodyRemoved) {
                            this.playersDroppedDown++;
                            _this.playerArray[player].justRemoveBody();
                            _this.playerArray[player].y = 485;
                            if (this.playersDroppedDown == this.currentlyPlayingPlayers) {
                                this.currentlyPlayingPlayers = 0;
                                _this.ballMoving = false;
                                this.playersDroppedDown = 0;
                                if (this.blockCouter * 50 > 300 && Object.keys(this.destructibleCubeArray[this.blockCouter]).length > 0) {
                                    _this.MoveDownAndDestroyAll();
                                }
                                else {
                                    setTimeout(function () {
                                        _this.drawBlockShapes(++_this.blockCouter);
                                        _this.MoveAllPlayersToOriginalPos();
                                    }, 500);
                                }
                            }
                        }
                    }
                }
            }

        }

        protected TweenFakePlayerDown(index: any, fakePlayer: any): void {
            let timeLineTween = new TimelineMax({
                onComplete: this.CreateNewPlayer.bind(this, this.fakePlayerArray[index][fakePlayer].x, 485, index, fakePlayer),
            });
            timeLineTween.to(this.fakePlayerArray[index][fakePlayer], { duration: 0.5, x: this.fakePlayerArray[index][fakePlayer].x, y: 485 });
            // gsap.to(toTweenBlock, { x: toTweenBlock.x, y: 485, duration: 0.25 });
        }


        protected CreateNewPlayer(x: number, y: number, index: any, fakePlayer: any): void {
            let toDestroy = this.fakePlayerArray[index][fakePlayer];
            delete this.fakePlayerArray[index][fakePlayer];
            toDestroy.destroy();
            this.playerNum++;
            let newSprite: CollisionShape = new CollisionShape(true, "circle", x, y, 10, 10, { isStatic: false, friction: 0, restitution: 1, inertia: Infinity, frictionAir: 0, frictionStatic: 0 });
            newSprite.justRemoveBody();
            newSprite.beginFill(0xffff00, 1).drawCircle(0, 0, 10).endFill();
            this.playerArray["ball" + this.playerNum] = this.innerContainer.addChild(newSprite);
            this.playerArray["ball" + this.playerNum].name = "ball" + this.playerNum;
            this.playerArray["ball" + this.playerNum].x = x;
            this.playerArray["ball" + this.playerNum].y = y;
        }

        protected MoveAllPlayersToOriginalPos(): void {
            for (let player in this.playerArray) {
                if (this.playerArray.hasOwnProperty(player)) {
                    gsap.to(this.playerArray[player], { x: this.playerArray["ball0"].x, y: 485, duration: 0.5 });
                }
            }
            let _this = this;
            setTimeout(function () {
                _this.BindDirectionVectors();
            }, 500);
        }

        protected MoveDownAndDestroyAll(): void {
            for (let ctr = 0; ctr <= this.blockCouter; ctr++) {
                let _this = this;
                for (let fakePlayerIndex in this.fakePlayerArray[ctr]) {
                    this.fakePlayerArray[ctr][fakePlayerIndex].destroy();
                }
                setTimeout(function () {
                    _this.TweenBlockDownToBottom(ctr, 0.5);
                }, ctr * 500);
            }
        }

        protected ShowFinalContainer():void{
            this.innerContainer.visible=false;
            this.middleContainer.visible=false;
            this.finalScoreContainer.visible=true;
            let gameOverText = new PIXI.Text("Game Over", styleScoreFinal);
            gameOverText.text="Game Over";
            this.finalScoreContainer.addChild(gameOverText);
            gameOverText.x = (400-gameOverText.width)/2;
            gameOverText.y = 100;
            let finalScoreText = new PIXI.Text("Your score is:", styleScoreFinal);
            finalScoreText.text="Your score is:";
            this.finalScoreContainer.addChild(finalScoreText);
            finalScoreText.x = (400-finalScoreText.width)/2;
            finalScoreText.y = 200;
            let scoreValue = new PIXI.Text("", styleValueFinal);
            this.finalScoreContainer.addChild(scoreValue);
            scoreValue.text=score+"";
            scoreValue.x = (400-scoreValue.width)/2;
            scoreValue.y = 300;
        }

        protected TweenBlockDownToBottom(value: number, duration?: number): void {
            let ctr = value;
            this.tweeningTween = true;
            if (!(typeof (duration) == "number")) {
                duration = 1;
            }
            let _this=this;
            if(value==this.blockCouter){
                setTimeout(function () {
                    _this.ShowFinalContainer();
                },500);
            }
            for (let i in this.destructibleCubeArray[value]) {
                if (this.destructibleCubeArray[value].hasOwnProperty(i)) {
                    this.destructibleCubeArray[ctr][i].justRemoveBody();
                    let timeLineTween = new TimelineMax({
                        onComplete: this.DestroyAllBlocks.bind(this, ctr, i, 0),
                    });
                    timeLineTween.to(this.blockContainerArray[ctr], { duration: duration, y: 435 });
                }
            }
        }

        protected DestroyAllBlocks(containers: any, cube: any, delay: number) {
            let _this = this;
            setTimeout(function () {
                if (_this.destructibleCubeArray[containers][cube]) {
                    let container = new PIXI.Container();
                    container.name = "EmitterContainer" + containers + "" + cube;
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube] = new PIXI.particles.Emitter(container, [PIXI.Texture.fromImage('Assets/ball.png')], ParticleJsonDestroy);
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube].emit = true;
                    console.log(_this.ParticleEmitters["directionEmitter" + containers + "" + cube]);
                    _this.ParticleEmitters["directionEmitter" + containers + "" + cube].autoUpdate = true;
                    _this.containerArray["EmitterContainer" + containers + "" + cube] = _this.innerContainer.addChild(container);
                    _this.containerArray["EmitterContainer" + containers + "" + cube].x = _this.destructibleCubeArray[containers][cube].x + 25;
                    _this.containerArray["EmitterContainer" + containers + "" + cube].y = _this.destructibleCubeArray[containers][cube].parent.y + 25;
                    //_this.containerArray["EmitterContainer"+containers+cube].playOnceAndDestroy()
                    _this.destructibleCubeArray[containers][cube].justRemoveBody();
                    let x = _this.destructibleCubeArray[containers][cube];
                    let y = _this.destructibleCubeArrayText[containers][cube];
                    let z = _this.destructibleCubeArrayInside[containers][cube];
                    let p = _this.destructibleCubeArrayNumber[containers][cube];

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
        }

        protected resize(): void {
            let scale = Math.min(window.innerWidth / 400, window.innerHeight / 600);
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
        }
    }
}
