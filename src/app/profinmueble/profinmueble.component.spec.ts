import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfinmuebleComponent } from './profinmueble.component';

describe('ProfinmuebleComponent', () => {
  let component: ProfinmuebleComponent;
  let fixture: ComponentFixture<ProfinmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfinmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
