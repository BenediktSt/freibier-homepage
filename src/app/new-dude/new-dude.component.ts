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

  @Input()
  create: boolean;

  name: string = '';
  imagePath: string = '';
  coolness: number = 5;

  componentTitle: string = 'So macht man einen neuen Dude';
  constructor() {}

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
    this.create = false;
  }

  ngOnInit() {
  }

}
