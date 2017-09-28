import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-search',
  templateUrl: 'card-search.component.html'
})
export class CardSearchComponent {

  cardName : string;
  submitted : boolean = false;

  @Output()
  nameSubmitted : EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.submitted = true;
    this.nameSubmitted.emit(this.cardName);
  }

}
