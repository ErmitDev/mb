import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StpetersbourgComponent } from './stpetersbourg.component';

describe('StpetersbourgComponent', () => {
  let component: StpetersbourgComponent;
  let fixture: ComponentFixture<StpetersbourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StpetersbourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StpetersbourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
