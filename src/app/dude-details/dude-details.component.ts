import { Component, OnInit, Input } from '@angular/core';
import { Dude } from './dude-details';

@Component({
  selector: 'app-dude-details',
  templateUrl: './dude-details.component.html',
  styleUrls: ['./dude-details.component.css']
})
export class DudeDetailsComponent implements OnInit {

  @Input()
  dude: Dude;

  constructor() { }

  ngOnInit() {
  }

}
