import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contingent} from '../contingent.model';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-contingent-overview',
  templateUrl: './contingent-overview.component.html',
  styleUrls: ['./contingent-overview.component.css'],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'}
  ]
})
export class ContingentOverviewComponent implements OnInit {

  @Input() contingent: Contingent;

  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();

  bookedPercentage: number;

  constructor() {
  }

  ngOnInit() {
    this.bookedPercentage = this.contingent.sizeBooked / this.contingent.size;
  }

  clickEvent() {
    this.selected.emit();
  }

}
