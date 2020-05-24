import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRefugePageComponent } from './new-refuge-page.component';

describe('NewRefugePageComponent', () => {
  let component: NewRefugePageComponent;
  let fixture: ComponentFixture<NewRefugePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRefugePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRefugePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
