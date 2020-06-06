import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCVComponent } from './add-cv.component';

describe('AddCVComponent', () => {
  let component: AddCVComponent;
  let fixture: ComponentFixture<AddCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
