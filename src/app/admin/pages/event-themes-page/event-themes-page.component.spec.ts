import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThemesPageComponent } from './event-themes-page.component';

describe('EventThemesPageComponent', () => {
  let component: EventThemesPageComponent;
  let fixture: ComponentFixture<EventThemesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThemesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThemesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
