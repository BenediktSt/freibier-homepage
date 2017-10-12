import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { MagicApiService } from '../magic-api/magic-api.service';

@Component({
  selector: 'app-show-printings',
  templateUrl: './show-printings.component.html',
  styleUrls: ['../app.component.css'],
  providers: [MagicApiService]
})
export class ShowPrintingsComponent implements OnChanges {

  data: any = {};

  @Input() cardName: string;

  constructor(private magicApiService: MagicApiService) { }

  getData() {
    return this.magicApiService.getCards({
      params : { name : this.cardName }
    });
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data; } );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getContacts();
  }


}
