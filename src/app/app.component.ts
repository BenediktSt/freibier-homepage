import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Dude } from './dude-details/dude-details';

@Component({
  selector: 'app-root',
  providers: [MdSnackBar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app wor!';
  dudes: Dude[] = [new Dude('Bene', 10, 'bene_avatar.png'),
                   new Dude('Falk', 10.2, 'falk_avatar.jpg'),
                   new Dude('Consti', 7, 'consti_avatar.jpg'),
                   new Dude('Stefan', 2.4)];

  currentDude: Dude = this.dudes[0];
  create: boolean = false;
  snackbarConfig : MdSnackBarConfig;

  constructor(private snackBar: MdSnackBar) {
    this.snackbarConfig = new MdSnackBarConfig();
    this.snackbarConfig.duration = 2000;
  }


  hideNewDudeComponent(msg){
    this.snackBar.open(msg, 'CLOSE', this.snackbarConfig);
    this.create = false;
  }
}
