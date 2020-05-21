import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCategoryFormComponent } from './animal-category-form.component';

describe('AnimalCategoryFormComponent', () => {
  let component: AnimalCategoryFormComponent;
  let fixture: ComponentFixture<AnimalCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
