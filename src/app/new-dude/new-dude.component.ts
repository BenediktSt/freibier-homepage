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

  createNewDude(){
    let newDude: Dude = new Dude(this.name, this.coolness);
    if (this.imagePath !== '') {
      newDude.addImage(this.imagePath);
    }
    this.dudes.push(newDude);
    this.clearDude(`Neuer Dude '${newDude.name}' erstellt!`);
  }

  clearDude(message?: string){
    if (typeof message == 'undefined') {
      message = "Dude-Erstellung abgebrochen!";
    }

    this.name = '';
    this.imagePath = '';
    this.coolness = 5;
    this.finished.emit(message);
  }

  ngOnInit() {
  }

}
