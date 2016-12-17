import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Dude} from '../dude-details/dude-details';

@Component({
  selector: 'app-new-dude',
  templateUrl: './new-dude.component.html',
  styleUrls: ['./new-dude.component.css']
})
export class NewDudeComponent implements OnInit {

  @Input() dudes: Dude[];

  @Output() finished = new EventEmitter<String>();

  name: string = '';
  imagePath: string = '';
  coolness: number = 5;

  componentTitle: string = 'So macht man einen neuen Dude';
  constructor() {}

  // ganzs schön krasser scheiss hier

  createNewDude(){
    let newDude: Dude = new Dude(this.name, this.coolness);
    if (this.imagePath !== '') {
      newDude.addImage(this.imagePath);
    }
    this.dudes.push(newDude);
    this.clearDude();
  }

  clearDude(){
    this.name = '';
    this.imagePath = '';
    this.coolness = 5;
    this.finished.emit('Neuer Dude erzeugt');
  }

  ngOnInit() {
  }

}
