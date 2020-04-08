import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsSectionComponent } from './animals-section.component';

describe('AnimalsSectionComponent', () => {
  let component: AnimalsSectionComponent;
  let fixture: ComponentFixture<AnimalsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
