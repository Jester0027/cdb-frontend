import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCardComponent } from './animals-card.component';

describe('AnimalsCardComponent', () => {
  let component: AnimalsCardComponent;
  let fixture: ComponentFixture<AnimalsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
