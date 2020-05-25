import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThemesFormComponent } from './event-themes-form.component';

describe('EventThemesFormComponent', () => {
  let component: EventThemesFormComponent;
  let fixture: ComponentFixture<EventThemesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventThemesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThemesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
