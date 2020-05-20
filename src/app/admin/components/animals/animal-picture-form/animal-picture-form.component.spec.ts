import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPictureFormComponent } from './animal-picture-form.component';

describe('AnimalPictureFormComponent', () => {
  let component: AnimalPictureFormComponent;
  let fixture: ComponentFixture<AnimalPictureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPictureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPictureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
