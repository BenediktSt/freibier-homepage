<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Updated to newest angular version for angular materials
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> refactored and added card rating

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.css']
})
export class CardRatingComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  @Input() cardName: string;

=======
>>>>>>> Updated to newest angular version for angular materials
=======
  @Input() cardName: string;

>>>>>>> refactored and added card rating
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> refactored and added card rating
  rated(rating: number) {
    console.log(rating);
  }



<<<<<<< HEAD
=======
>>>>>>> Updated to newest angular version for angular materials
=======
>>>>>>> refactored and added card rating
}
