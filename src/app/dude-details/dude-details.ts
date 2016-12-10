export class Dude {
    cool: boolean;

    constructor(public name: string, public coolness: number) {
        this.coolnessReached();
    }

    coolnessReached() {
        this.cool = this.coolness > 10;
    }
}
