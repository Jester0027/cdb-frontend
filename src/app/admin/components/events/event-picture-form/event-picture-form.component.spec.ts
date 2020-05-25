import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPictureFormComponent } from './event-picture-form.component';

describe('EventPictureFormComponent', () => {
  let component: EventPictureFormComponent;
  let fixture: ComponentFixture<EventPictureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPictureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPictureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
