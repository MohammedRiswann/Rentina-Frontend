import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllComponent } from './list-of-all.component';

describe('ListOfAllComponent', () => {
  let component: ListOfAllComponent;
  let fixture: ComponentFixture<ListOfAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfAllComponent]
    });
    fixture = TestBed.createComponent(ListOfAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
