import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPaginationComponent } from './animal-pagination.component';

describe('AnimalPaginationComponent', () => {
  let component: AnimalPaginationComponent;
  let fixture: ComponentFixture<AnimalPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
