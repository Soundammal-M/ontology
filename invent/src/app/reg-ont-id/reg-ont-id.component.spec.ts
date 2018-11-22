import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegOntIdComponent } from './reg-ont-id.component';

describe('RegOntIdComponent', () => {
  let component: RegOntIdComponent;
  let fixture: ComponentFixture<RegOntIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegOntIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegOntIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
