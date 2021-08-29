namespace surya_1 {
    export class Keyboard {
        public key: any = {};
        public value: any;
        public isDown: boolean;
        public isUp: boolean;
        public isAxisButton: boolean;
        constructor(value: any, isAxisButton: boolean) {
            this.value = value;
            this.isDown = false;
            this.isUp = true;
            this.isAxisButton = isAxisButton;
            this.subscribeEvents();
        }
        public subscribeEvents(): void {
            window.addEventListener("keydown", this.downHandler.bind(this));
            window.addEventListener("keyup", this.upHandler.bind(this));
        }
        public unSubscribeEvents(): void {
            window.removeEventListener("keydown", this.downHandler.bind(this));
            window.removeEventListener("keyup", this.upHandler.bind(this));
        }
        public downHandler(event: any): void {
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
        }
        public upHandler(event: any): void {
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
        }
        public press(): void {

        }
        public release(): void {

        }
    }
}