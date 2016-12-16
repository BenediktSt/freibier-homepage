import { Component, OnInit , Input} from '@angular/core';
import {Dude} from '../dude-details/dude-details';

@Component({
  selector: 'app-new-dude',
  templateUrl: './new-dude.component.html',
  styleUrls: ['./new-dude.component.css']
})
export class NewDudeComponent implements OnInit {

  @Input()
  dudes: Dude[];

  newDude: Dude;

  componentTitle: string = 'So macht man einen neuen Dude';
  constructor() {
    this.newDude = new Dude('', 0);
  }

  createNewDude(){
    this.dudes.push(this.newDude);
    this.clearDude();
  }

  clearDude(){
    this.newDude = new Dude('', 0);
  }

  ngOnInit() {
  }

}
