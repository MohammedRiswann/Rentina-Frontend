import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandDetailsComponent } from './land-details.component';

describe('LandDetailsComponent', () => {
  let component: LandDetailsComponent;
  let fixture: ComponentFixture<LandDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandDetailsComponent]
    });
    fixture = TestBed.createComponent(LandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
