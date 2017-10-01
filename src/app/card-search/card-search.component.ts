import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: 'card-search.component.html'
})
export class CardSearchComponent {

  cardName: string;
  submitted = false;

  @Output()
  nameSubmitted: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.submitted = true;
    this.nameSubmitted.emit(this.cardName);
  }

}
