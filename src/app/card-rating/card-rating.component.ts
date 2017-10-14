
import { Component, OnInit, Input } from '@angular/core';

import { RatingService } from '../rating/rating.service';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.css'],
  providers: [RatingService]
})
export class CardRatingComponent implements OnInit {


  @Input() cardName: string;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
  }

  rated(rating: number) {
    this.ratingService.set(this.cardName, rating);
  }

}
