import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contingent} from '../../../../models/time-management/contingent.model';
import {mockdata} from '../../../../services/time-management/contingent.mock';
import {MdSnackBar, DateAdapter, NativeDateAdapter} from '@angular/material';

export function endDateAfterValidator(formGroup) {
  const startDate = formGroup.get('from').value;
  const endDate = formGroup.get('to').value;

  return (endDate < startDate) ? { nomatch: true} : null;
}

@Component({
  selector: 'app-contingent-editor',
  templateUrl: './contingent-editor.component.html',
  styleUrls: ['./contingent-editor.component.css']
})
export class ContingentEditorComponent implements OnInit, OnChanges {

  @Input() contingent: Contingent;
  contingentForm: FormGroup;

  @Output()
  close: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  save: EventEmitter<Contingent> = new EventEmitter<Contingent>();

  fromDateFilter;
  toDateFilter;

  constructor(private fb: FormBuilder, public snackBar: MdSnackBar, dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('de-DE');
    this.contingentForm = this.fb.group({
      name: ['', Validators.required],
      from: [new Date(), Validators.required],
      to: [new Date(), Validators.required],
      size: '',
      sizeBooked: '',
      booking: ''
    }, {validator: endDateAfterValidator});

    this.fromDateFilter = (d: Date): boolean => {
      return d < this.contingentForm.get('to').value;
    };

    this.toDateFilter = (d: Date): boolean => {
      return d > this.contingentForm.get('from').value;
    };

  }

  ngOnInit() {
    if (this.contingent) {
      this.setFormValues();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.contingent && this.contingent) {
      this.setFormValues();
    }
  }

  setFormValues() {
    this.contingentForm.setValue({
      name: this.contingent.name,
      from: this.contingent.from,
      to: this.contingent.to,
      size: this.contingent.size || 0,
      sizeBooked: this.contingent.sizeBooked || 0,
      booking: this.contingent.booking || ''
    });
  }

  closeEditor() {
    this.close.emit();
  }

  saveContingent() {
    if (this.contingentForm.status === 'VALID') {
      const cont = new Contingent({
        id: this.contingent.id,
        name: this.contingentForm.get('name').value,
        from: this.contingentForm.get('from').value,
        to: this.contingentForm.get('to').value,
        size: this.contingentForm.get('size').value,
        sizeBooked: this.contingentForm.get('sizeBooked').value,
        booking: this.contingentForm.get('booking').value
      });

      // Workaround mit Mock-Daten
      mockdata.forEach((element, index) => {
        if (element.name === this.contingent.name) {
          mockdata[index] = cont;
          this.save.emit(cont);
          return;
        }
      });

      this.save.emit(cont);
    } else {
      this.snackBar.open('Bitte alle notwendigen Felder befüllen.', 'OK', {duration: 2000});
    }
  }
}
