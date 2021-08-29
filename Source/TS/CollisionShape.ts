namespace surya_1 {
    export class CollisionShape extends PIXI.Graphics {

        private MovementVector: any = { x: 0, y: 0 };
        public NormalVector: any = { x: 0, y: 0 };
        private RespondToCollision: boolean = false;
        public collisionActive: boolean = true;
        public MovementActive: boolean = false;
        public body: any;
        public w: number | undefined;
        public h: number | undefined;
        protected options: any;
        public hasCollided:boolean=false;
        protected type: any;
        protected bodyRemoved:boolean=false;
        constructor(rigidBodyReq: boolean, type?: string, x?: number, y?: number, w?: number, h?: number, options?: any) {
            super();
            this.options = options;
            this.type = type;
            this.bodyRemoved=true;
            // this.position.set(x,y);
            if (rigidBodyReq) {
                this.bodyRemoved=false;
                switch (type) {
                    case "rect": this.body = Bodies.rectangle(x + w / 2, y + h / 2, w, h, options);
                        this.w = w;
                        this.h = h; break;
                    case "circle": this.body = Bodies.circle(x, y, w, options);
                        this.w = w;
                        this.h = w; break;
                    default: break;
                }
                World.add(WorldObject, this.body);
            }
        }


        public CheckForCollision(withElement:MovementSprite|CollisionShape):boolean{
            let isCollision:boolean = false;
            if(withElement){
            isCollision = ((this.x +this.width) >= withElement.x-5) && 
                   (this.x<(withElement.x+withElement.width)+5) && 
                   ((this.y +this.height) >= withElement.y-5) && 
                   (this.y<(withElement.y+withElement.height)+5);
            }
            var that = this;
            if(isCollision){
                this.collisionActive = false;
                this.hasCollided = true;
                withElement.hasCollided = true;
            }
            return isCollision;
        }

        public justRemoveBody():void{
            this.bodyRemoved=true;
            World.remove(WorldObject, this.body);
        }

        public removeAndAddNewBody(x: number, y: number, w: number, h: number) {
            World.remove(WorldObject, this.body);
            if(this.body.circleRadius){
                this.body = Bodies.circle(x, y , w, this.options);
            }
            else{
                this.body = Bodies.rectangle(x+w/2, y + h / 2, w, h, this.options);
            }
            this.bodyRemoved=false;
            World.add(WorldObject, this.body);
        }

        public setPosition(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.body.position.x = x;
            this.body.position.y = y;
        }

        public setMovementVector(x: number, y: number): void {
            // let magnitude = Math.sqrt(x * x + y * y);
            // this.MovementVector.x = x;
            // this.MovementVector.y = y;
            Body.applyForce(this.body, { x: this.body.position.x, y: this.body.position.y }, { x: x * ForceMultiplier, y: y * ForceMultiplier });
        }
        public getMovementVector(): any {
            return this.MovementVector;
        }

        public setPositionAccordingToBody(hasContainer: boolean): void {
            let pos = this.body.position;
            let angle = this.body.angle;
            if (this.type !== "circle") {
                if (hasContainer) {
                    this.position.set(pos.x - this.parent.x- this.width / 2, pos.y - this.parent.y- this.height / 2);
                }
                else{
                    this.position.set(pos.x - this.width / 2, pos.y - this.height / 2);
                }
            }
            else {
                this.position.set(pos.x, pos.y);
            }
            this.rotation = angle;
        }

    }
}