import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugesPageComponent } from './refuges-page.component';

describe('RefugesPageComponent', () => {
  let component: RefugesPageComponent;
  let fixture: ComponentFixture<RefugesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
