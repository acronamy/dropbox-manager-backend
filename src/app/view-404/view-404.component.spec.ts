import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View404Component } from './view-404.component';

describe('View404Component', () => {
  let component: View404Component;
  let fixture: ComponentFixture<View404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
