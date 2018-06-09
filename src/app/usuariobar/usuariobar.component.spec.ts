import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariobarComponent } from './usuariobar.component';

describe('UsuariobarComponent', () => {
  let component: UsuariobarComponent;
  let fixture: ComponentFixture<UsuariobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
