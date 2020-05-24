import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugesSectionComponent } from './refuges-section.component';

describe('RefugesSectionComponent', () => {
  let component: RefugesSectionComponent;
  let fixture: ComponentFixture<RefugesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
