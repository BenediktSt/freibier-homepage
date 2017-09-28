import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'show-printings',
  templateUrl: './show-printings.component.html',
  styleUrls: ['./app.component.css']
})
export class ShowPrintingsComponent implements OnChanges {
  title = 'Api Response';
  private apiUrl = 'https://api.magicthegathering.io/v1/cards';
  data : any = {};

  @Input() cardName : string;

  constructor(private http : Http) { }

  getData() {
    return this.http.get(this.apiUrl, {
      params : { name : this.cardName }
    }).map((res : Response) => res.json())
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;} )
  }

  ngOnChanges(changes : SimpleChanges) {
    this.getContacts();
    this.getData();
  }


}
