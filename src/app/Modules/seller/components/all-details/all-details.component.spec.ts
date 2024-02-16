import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailsComponent } from './all-details.component';

describe('AllDetailsComponent', () => {
  let component: AllDetailsComponent;
  let fixture: ComponentFixture<AllDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDetailsComponent]
    });
    fixture = TestBed.createComponent(AllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
