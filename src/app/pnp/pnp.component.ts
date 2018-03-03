import {Component, OnInit} from '@angular/core';
import {Adventurer} from './adventurer.model';
import {data} from './adventurers-data';

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.css']
})
export class PnpComponent implements OnInit {

  public adventurers: Adventurer[];

  constructor() {
    this.adventurers = data;
  }

  ngOnInit() {
  }

}
