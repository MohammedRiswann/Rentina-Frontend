import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandsComponent } from './add-lands.component';

describe('AddLandsComponent', () => {
  let component: AddLandsComponent;
  let fixture: ComponentFixture<AddLandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLandsComponent]
    });
    fixture = TestBed.createComponent(AddLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
