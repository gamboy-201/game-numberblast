namespace surya_1 {
    export class MatterBox{
        public body: any;
        public w: number;
        public h: number;
        constructor(x:number,y:number,w:number,h:number,options:any) {
            this.body = Bodies.rectangle(x,y,w,h,options);
            this.w = w;
            this.h = h;
            World.add(WorldObject,this.body);
        }
        public show(){
           
        }
    }
}