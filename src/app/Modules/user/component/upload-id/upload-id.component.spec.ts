import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIdComponent } from './upload-id.component';

describe('UploadIdComponent', () => {
  let component: UploadIdComponent;
  let fixture: ComponentFixture<UploadIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadIdComponent]
    });
    fixture = TestBed.createComponent(UploadIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
