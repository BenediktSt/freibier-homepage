import { Component } from '@angular/core';
import { Dude } from './dude-details/dude-details';

@Component({
  selector: 'app-root',
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
}
