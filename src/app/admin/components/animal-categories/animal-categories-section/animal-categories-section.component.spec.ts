import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCategoriesSectionComponent } from './animal-categories-section.component';

describe('AnimalCategoriesSectionComponent', () => {
  let component: AnimalCategoriesSectionComponent;
  let fixture: ComponentFixture<AnimalCategoriesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCategoriesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
