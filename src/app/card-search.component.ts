import { Component } from '@angular/core';

@Component({
  selector: 'card-search',
  templateUrl: 'card-search.component.html'
})
export class CardSearchComponent {

  cardName : string;
  submitted : boolean = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cardName); }

  newName() {
    this.cardName = "Stefan";
  }

}
