import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailPageComponent } from './animal-detail-page.component';

describe('AnimalDetailPageComponent', () => {
  let component: AnimalDetailPageComponent;
  let fixture: ComponentFixture<AnimalDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
