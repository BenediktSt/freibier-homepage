import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { MagicApiService } from '../magic-api/magic-api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
  providers: [MagicApiService]
})
export class CardDetailsComponent implements OnInit, OnChanges {

  @Input() cardName: string;

  cardsJSON: any = { };

  constructor(private magicApiService: MagicApiService) { }

  getObservable() {
    return this.magicApiService.getCards({
      params : { name : `"${this.cardName}"` }
    });
  }

  getData() {
    this.getObservable().subscribe(data => {
      console.log(data);
      this.cardsJSON = data; } );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getData();
  }

  ngOnInit() {
  }

}
