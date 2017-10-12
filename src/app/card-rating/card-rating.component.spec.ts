import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRatingComponent } from './card-rating.component';

describe('CardRatingComponent', () => {
  let component: CardRatingComponent;
  let fixture: ComponentFixture<CardRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
