import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimalCategoryPageComponent } from './edit-animal-category-page.component';

describe('EditAnimalCategoryPageComponent', () => {
  let component: EditAnimalCategoryPageComponent;
  let fixture: ComponentFixture<EditAnimalCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
