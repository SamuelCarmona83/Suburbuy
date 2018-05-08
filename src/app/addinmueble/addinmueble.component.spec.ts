import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinmuebleComponent } from './addinmueble.component';

describe('AddinmuebleComponent', () => {
  let component: AddinmuebleComponent;
  let fixture: ComponentFixture<AddinmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
