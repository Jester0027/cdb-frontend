import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPicturePageComponent } from './animal-picture-page.component';

describe('AnimalPicturePageComponent', () => {
  let component: AnimalPicturePageComponent;
  let fixture: ComponentFixture<AnimalPicturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPicturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPicturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
