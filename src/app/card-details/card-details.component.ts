import { Component, OnInit, Input } from '@angular/core';

import { MagicCard } from '../magic-card/magic-card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() cards: MagicCard[];

  ngOnInit() {
  }

}
