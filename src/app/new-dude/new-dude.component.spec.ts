/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewDudeComponent } from './new-dude.component';

describe('NewDudeComponent', () => {
  let component: NewDudeComponent;
  let fixture: ComponentFixture<NewDudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
