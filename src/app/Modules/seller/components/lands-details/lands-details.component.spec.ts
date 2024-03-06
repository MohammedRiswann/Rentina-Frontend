import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsDetailsComponent } from './lands-details.component';

describe('LandsDetailsComponent', () => {
  let component: LandsDetailsComponent;
  let fixture: ComponentFixture<LandsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandsDetailsComponent]
    });
    fixture = TestBed.createComponent(LandsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
