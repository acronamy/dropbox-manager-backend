import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesignComponent } from './view-design.component';

describe('ViewDesignComponent', () => {
  let component: ViewDesignComponent;
  let fixture: ComponentFixture<ViewDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
