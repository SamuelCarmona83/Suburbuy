import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosbarComponent } from './amigosbar.component';

describe('AmigosbarComponent', () => {
  let component: AmigosbarComponent;
  let fixture: ComponentFixture<AmigosbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
