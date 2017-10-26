import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { MagicApiService } from '../magic-api/magic-api.service';
import { MagicCardParserService } from '../magic-card-parser/magic-card-parser.service';
import { MagicCard } from '../magic-card/magic-card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
  providers: [MagicApiService, MagicCardParserService]
})
export class CardDetailsComponent implements OnInit, OnChanges {

  @Input() cardName: string;

  cards: MagicCard[];

  constructor(private magicApiService: MagicApiService,
              private magicCardParserService: MagicCardParserService) { }

  getObservable() {
    return this.magicApiService.getCards({
      params : { name : `"${this.cardName}"` }
    });
  }

  getData() {
    this.getObservable().subscribe(data => {
      console.log(data);
      this.cards = this.magicCardParserService.parseCards(data);
      console.log(this.cards);
      } );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getData();
  }

  ngOnInit() {
  }

}
