import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugesFormComponent } from './refuges-form.component';

describe('RefugesFormComponent', () => {
  let component: RefugesFormComponent;
  let fixture: ComponentFixture<RefugesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
