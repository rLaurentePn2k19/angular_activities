import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity5ParentComponentComponent } from './activity5-parent-component.component';

describe('Activity5ParentComponentComponent', () => {
  let component: Activity5ParentComponentComponent;
  let fixture: ComponentFixture<Activity5ParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activity5ParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity5ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
