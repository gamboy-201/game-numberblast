namespace surya_1 {
    export class MovementSprite extends PIXI.Sprite {
        private MovementVector: any = { x: 0, y: 0 };
        public NormalVector:any = {x:0,y:0};
        private RespondToCollision:boolean=false;
        public collisionActive:boolean = true;
        public MovementActive:boolean = false;
        constructor(texture: any) {
            super(texture);
            this.MovementVector.x = 0;
            this.MovementVector.y = 0;
        }

        public CheckForCollision(withElement:MovementSprite|CollisionShape):boolean{
            let isCollision:boolean = false;
            if(withElement){
            isCollision = ((this.x +this.width) >= withElement.x) && 
                   (this.x<(withElement.x+withElement.width)) && 
                   ((this.y +this.height) >= withElement.y) && 
                   (this.y<(withElement.y+withElement.height));
            }
            var that = this;
            if(isCollision){
                this.collisionActive = false;
                setTimeout(function(){that.collisionActive = true},100);
            }
            return isCollision;
        }
        public setMovementVectorAfterCollision(collidedElement:MovementSprite|CollisionShape):void{
            let firstDirection = {x: this.MovementVector.x,y:this.MovementVector.y};
            let dotProduct = firstDirection.x*collidedElement.NormalVector.x+firstDirection.y*collidedElement.NormalVector.y;
            let determinant = firstDirection.x*collidedElement.NormalVector.y-firstDirection.y*collidedElement.NormalVector.x;
            let angleInBetween = 0;
            let alpha = 0;
            alpha = Math.atan2(determinant, dotProduct);
            angleInBetween = (alpha *180)/3.14;
            if(angleInBetween<0){
                angleInBetween+=90;
            }
            else if(angleInBetween>0){
                angleInBetween = 180-angleInBetween;
            }
            alpha = (angleInBetween*3.14)/180;
            this.MovementVector.x = collidedElement.NormalVector.x*(Math.cos(alpha)) + collidedElement.NormalVector.y*Math.sin(alpha);
            this.MovementVector.y = -collidedElement.NormalVector.x*Math.sin(alpha) + collidedElement.NormalVector.y*(Math.cos(alpha));
            
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
            if(angleInBetween == 0){
                this.MovementVector.x = collidedElement.NormalVector.x;
                this.MovementVector.y = collidedElement.NormalVector.y;
            }
            // this.MovementVector.x*= Acceleration;
            // this.MovementVector.y*= Acceleration;
        }

        public setMovementVector(x:number,y:number):void{
            let magnitude = Math.sqrt(x*x+y*y);
            this.MovementVector.x =x;
            this.MovementVector.y=y;
        }
        public getMovementVector():any{
            return this.MovementVector;
        }

        public setNormalVector(x:number,y:number):void{
            this.NormalVector.x =x;
            this.NormalVector.y=y;
        }
        public getNormalVector():any{
            return this.NormalVector;
        }

        public setRespondToCollision(value:boolean):void{
            this.RespondToCollision = value;
        }
        public getRespondToCollision():any{
            return this.RespondToCollision;
        }
    }
}