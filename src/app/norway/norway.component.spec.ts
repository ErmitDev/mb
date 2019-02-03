import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorwayComponent } from './norway.component';

describe('NorwayComponent', () => {
  let component: NorwayComponent;
  let fixture: ComponentFixture<NorwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
