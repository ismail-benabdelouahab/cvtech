import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCVComponent } from './delete-cv.component';

describe('DeleteCVComponent', () => {
  let component: DeleteCVComponent;
  let fixture: ComponentFixture<DeleteCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
