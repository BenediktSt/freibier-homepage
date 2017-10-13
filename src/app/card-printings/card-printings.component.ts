import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { MagicApiService } from '../magic-api/magic-api.service';

@Component({
  selector: 'app-card-printings',
  templateUrl: './card-printings.component.html',
  styleUrls: ['../app.component.css'],
  providers: [MagicApiService]
})
export class CardPrintingsComponent {

  @Input() cardsJSON: any;

}
