import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnimalCategoryPageComponent } from './new-animal-category-page.component';

describe('NewAnimalCategoryPageComponent', () => {
  let component: NewAnimalCategoryPageComponent;
  let fixture: ComponentFixture<NewAnimalCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnimalCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnimalCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
