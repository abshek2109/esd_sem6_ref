import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulComponent } from './mul.component';

describe('MulComponent', () => {
  let component: MulComponent;
  let fixture: ComponentFixture<MulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
