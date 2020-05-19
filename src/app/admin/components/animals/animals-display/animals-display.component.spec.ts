import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsDisplayComponent } from './animals-display.component';

describe('AnimalsDisplayComponent', () => {
  let component: AnimalsDisplayComponent;
  let fixture: ComponentFixture<AnimalsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
