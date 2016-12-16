export class Dude {
    cool: boolean;
    imageBase: string = '';

    imagePath: string = '../assets/images/default_avatar.png';

    constructor(public name: string, public coolness: number, imagePath?: string) {
        this.coolnessReached();
        this.imageBase = '../assets/images/';
        if (typeof imagePath !== 'undefined') {
            this.imagePath = this.imageBase + imagePath;
        }
    }

    coolnessReached() {
        this.cool = this.coolness > 10;
    }

    addImage(imagePath: string){
        this.imagePath = this.imageBase + imagePath;
    }
}
