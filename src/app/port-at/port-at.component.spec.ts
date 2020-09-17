import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortAtComponent } from './port-at.component';

describe('PortAtComponent', () => {
  let component: PortAtComponent;
  let fixture: ComponentFixture<PortAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
