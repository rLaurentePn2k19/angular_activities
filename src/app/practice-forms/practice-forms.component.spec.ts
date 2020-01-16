import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFormsComponent } from './practice-forms.component';

describe('PracticeFormsComponent', () => {
  let component: PracticeFormsComponent;
  let fixture: ComponentFixture<PracticeFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
