import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contingent} from '../contingent.model';

@Component({
  selector: 'app-contingent-overview',
  templateUrl: './contingent-overview.component.html',
  styleUrls: ['./contingent-overview.component.css']
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
