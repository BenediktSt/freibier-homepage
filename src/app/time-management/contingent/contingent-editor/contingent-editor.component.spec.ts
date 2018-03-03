import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingentEditorComponent } from './contingent-editor.component';

describe('ContingentEditorComponent', () => {
  let component: ContingentEditorComponent;
  let fixture: ComponentFixture<ContingentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContingentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
