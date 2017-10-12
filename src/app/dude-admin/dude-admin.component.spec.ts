import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DudeAdminComponent } from './dude-admin.component';

describe('DudeAdminComponent', () => {
  let component: DudeAdminComponent;
  let fixture: ComponentFixture<DudeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DudeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DudeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
