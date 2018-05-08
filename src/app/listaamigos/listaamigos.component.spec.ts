import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaamigosComponent } from './listaamigos.component';

describe('ListaamigosComponent', () => {
  let component: ListaamigosComponent;
  let fixture: ComponentFixture<ListaamigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaamigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaamigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
