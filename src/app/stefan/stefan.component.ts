import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stefan',
  templateUrl: './stefan.component.html',
  styleUrls: ['./stefan.component.css']
})
export class StefanComponent implements OnInit {

  cardName: string;

  updateName(event) {
    this.cardName = event;
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
