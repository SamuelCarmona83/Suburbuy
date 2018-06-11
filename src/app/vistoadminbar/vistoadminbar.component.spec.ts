import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistoadminbarComponent } from './vistoadminbar.component';

describe('VistoadminbarComponent', () => {
  let component: VistoadminbarComponent;
  let fixture: ComponentFixture<VistoadminbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistoadminbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistoadminbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
