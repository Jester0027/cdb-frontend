import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefugePageComponent } from './edit-refuge-page.component';

describe('EditRefugePageComponent', () => {
  let component: EditRefugePageComponent;
  let fixture: ComponentFixture<EditRefugePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRefugePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefugePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
