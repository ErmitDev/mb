import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpinismComponent } from './alpinism.component';

describe('AlpinismComponent', () => {
  let component: AlpinismComponent;
  let fixture: ComponentFixture<AlpinismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpinismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpinismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
