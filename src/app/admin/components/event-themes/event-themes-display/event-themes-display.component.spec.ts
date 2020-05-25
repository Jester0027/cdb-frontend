import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThemesDisplayComponent } from './event-themes-display.component';

describe('EventThemesDisplayComponent', () => {
  let component: EventThemesDisplayComponent;
  let fixture: ComponentFixture<EventThemesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThemesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThemesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
