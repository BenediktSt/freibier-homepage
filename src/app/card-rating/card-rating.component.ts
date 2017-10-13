import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.css']
})
export class CardRatingComponent implements OnInit {

  @Input() cardName: string;

  constructor() { }

  ngOnInit() {
  }

  rated(rating: number) {
    console.log(rating);
  }



}
