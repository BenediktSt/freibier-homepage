import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: 'search-field.component.html'
})
export class SearchFieldComponent {

  input: string;
  submitted = false;

  @Output()
  nameSubmitted: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.submitted = true;
    this.nameSubmitted.emit(this.input);
  }

}
