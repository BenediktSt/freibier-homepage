import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkhubComponent } from './linkhub.component';

describe('LinkhubComponent', () => {
  let component: LinkhubComponent;
  let fixture: ComponentFixture<LinkhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
