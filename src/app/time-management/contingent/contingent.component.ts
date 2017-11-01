import {Component, EventEmitter, OnInit} from '@angular/core';
import { mockdata } from './contingent.mock';
import {Contingent} from './contingent.model';
import {MdSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-contingent',
  templateUrl: './contingent.component.html',
  styleUrls: ['./contingent.component.css']
})
export class ContingentComponent implements OnInit {

  contingents: Array<Contingent>;
  currentContingent: Contingent;

  constructor() {
    this.contingents = mockdata;
  }

  ngOnInit() {
  }

  selectContingent(contingent) {
    this.currentContingent = contingent;
  }

  filterContingentList(event: EventEmitter<MdSlideToggleChange>) {
    if (event['checked']) {
      this.contingents = mockdata.filter(
        (contingent) => {
          const currentDate = new Date();
          return contingent.from < currentDate && contingent.to > currentDate;
        });
    } else {
      this.contingents = mockdata;
    }
  }

  saveContingentEntry(event: Contingent) {
    this.currentContingent = null;
  }

  addNewContingent() {

    let counter = 1;
    for (const element of this.contingents) {
      // Dieser Check muss evtl angepasst werden
      if (element.name.indexOf('Neues Kontingent') !== -1) {
        counter ++;
      }
    }

    this.contingents.push(new Contingent({
      name: 'Neues Kontingent ' + counter,
      from: new Date(),
      to: new Date()
    }));
  }

  // TODO: Verwendung eines Services
}
