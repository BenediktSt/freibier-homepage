import { Component } from '@angular/core';
import { Dude } from './dude-details/dude-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app wor!';
  dudes: Dude[] = [new Dude('Bene', 10), new Dude('Falk', 10.2), new Dude('Consti', 7), new Dude('Stefan', 2.4)];

  currentDude: Dude = this.dudes[0];
}
