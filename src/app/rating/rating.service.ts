import { Injectable } from '@angular/core';

@Injectable()
export class RatingService {

  private ratings: Array<any> = [];

  constructor() { }

  getAll() {
    return this.ratings;
  }

  set(cardName: string, rating: number) {

    console.log(cardName);
    const index = this.ratings.findIndex(x => x.name === cardName);

    if (index === -1) {
      this.ratings.push({ name: cardName, rating: rating, totalRatings: 1 });
    } else {
      this.ratings[index].rating += rating;
      this.ratings[index].totalRatings += 1;
    }

    console.log(this.getAll());
  }

}
