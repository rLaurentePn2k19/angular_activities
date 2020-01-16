import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity5ChildComponentComponent } from './activity5-child-component.component';

describe('Activity5ChildComponentComponent', () => {
  let component: Activity5ChildComponentComponent;
  let fixture: ComponentFixture<Activity5ChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity5ChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity5ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
