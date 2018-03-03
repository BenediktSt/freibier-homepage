import {Component, EventEmitter, OnInit} from '@angular/core';
import {Contingent} from '../../../models/time-management/contingent.model';
import {MdSlideToggleChange} from '@angular/material';
import {ContingentService} from '../../../services/time-management/contingent.service';

@Component({
  selector: 'app-contingent',
  templateUrl: './contingent.component.html',
  styleUrls: ['./contingent.component.css'],
  providers: [ ContingentService ]
})
export class ContingentComponent implements OnInit {

  contingents: Array<Contingent>;
  currentContingent: Contingent;

  constructor(private contingentService: ContingentService) {
  }

  ngOnInit() {
    this.contingentService.getAllContingents()
      .then((conts) => {
      console.log('init krams');
      console.log(conts.length);
      console.log(conts[0]);
      console.log(conts[0].id);
      this.contingents = conts;
      });
  }

  selectContingent(contingent) {
    this.currentContingent = contingent;
  }

  filterContingentList(event: EventEmitter<MdSlideToggleChange>) {
    if (event['checked']) {
      this.contingents = this.contingents.filter(
        (contingent) => {
          const currentDate = new Date();
          return contingent.fromDate < currentDate && contingent.toDate > currentDate;
        });
    } else {
      this.contingentService.getAllContingents()
        .then((conts) => this.contingents = conts);
    }
  }

  saveContingentEntry(event: Contingent) {
    this.contingentService.saveContingent(event)
      .then((newID) => {
        event.id = newID;
        this.currentContingent = null;
      });
  }

  addNewContingent() {

    let counter = 1;
    for (const element of this.contingents) {
      // Dieser Check muss evtl angepasst werden
      if (element.name.indexOf('Neues Kontingent') !== -1) {
        counter ++;
      }
    }

    this.contingents.push(new Contingent(
      -1,
      'Neues Kontingent ' + counter,
      new Date(),
      new Date(),
      100,
      0
    ));
  }
}
