import { Component, OnInit } from '@angular/core';

import { MagicCard } from '../magic-card/magic-card';

@Component({
  selector: 'app-stefan',
  templateUrl: './stefan.component.html',
  styleUrls: ['./stefan.component.css']
})
export class StefanComponent implements OnInit {

  cards: MagicCard[];

  updateCards(event) {
    this.cards = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
