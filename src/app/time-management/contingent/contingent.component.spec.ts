import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingentComponent } from './contingent.component';

describe('ContingentComponent', () => {
  let component: ContingentComponent;
  let fixture: ComponentFixture<ContingentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContingentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
