import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderDetailsComponent } from './get-order-details.component';

describe('GetOrderDetailsComponent', () => {
  let component: GetOrderDetailsComponent;
  let fixture: ComponentFixture<GetOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
