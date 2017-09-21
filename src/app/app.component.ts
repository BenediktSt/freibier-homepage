import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
=======
  title = 'Api Response';
  private apiUrl = 'https://api.magicthegathering.io/v1/cards';
  data : any = {};

  constructor(private http : Http) {
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl, {
      params : { name : 'Elvish Mystic' }
    }).map((res : Response) => res.json())
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;} )
  }


>>>>>>> Elvish mystic component
}
