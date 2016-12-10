export class Dude {
    cool: boolean;

    imagePath: string = '../assets/images/default_avatar.png';

    constructor(public name: string, public coolness: number, imagePath?: string) {
        this.coolnessReached();
        if (typeof imagePath !== 'undefined') {
            this.imagePath = '../assets/images/' + imagePath;
        }
    }

    coolnessReached() {
        this.cool = this.coolness > 10;
    }
}
