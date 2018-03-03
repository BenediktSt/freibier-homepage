import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contingent} from '../../../../models/time-management/contingent.model';
import {mockdata} from '../../../../services/time-management/contingent.mock';
import {MdSnackBar, DateAdapter, NativeDateAdapter} from '@angular/material';

export function endDateAfterValidator(formGroup) {
  const startDate = formGroup.get('fromDate').value;
  const endDate = formGroup.get('toDate').value;

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
      fromDate: [new Date(), Validators.required],
      toDate: [new Date(), Validators.required],
      size: '',
      bookedSize: '',
      bookingId: ''
    }, {validator: endDateAfterValidator});

    this.fromDateFilter = (d: Date): boolean => {
      return d < this.contingentForm.get('toDate').value;
    };

    this.toDateFilter = (d: Date): boolean => {
      return d > this.contingentForm.get('fromDate').value;
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
      fromDate: this.contingent.fromDate,
      toDate: this.contingent.toDate,
      size: this.contingent.size || 0,
      bookedSize: this.contingent.bookedSize || 0,
      bookingId: this.contingent.bookingId || ''
    });
  }

  closeEditor() {
    this.close.emit();
  }

  saveContingent() {
    if (this.contingentForm.status === 'VALID') {
      const cont = new Contingent(
        this.contingent.id,
        this.contingentForm.get('name').value,
        this.contingentForm.get('fromDate').value,
        this.contingentForm.get('toDate').value,
        this.contingentForm.get('size').value,
        this.contingentForm.get('bookedSize').value,
        this.contingentForm.get('bookingId').value
      );

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
