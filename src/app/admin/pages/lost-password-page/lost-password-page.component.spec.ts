import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPasswordPageComponent } from './lost-password-page.component';

describe('LostPasswordPageComponent', () => {
  let component: LostPasswordPageComponent;
  let fixture: ComponentFixture<LostPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPasswordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
