import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscaneoUsuarioPage } from './escaneo-usuario.page';

describe('EscaneoUsuarioPage', () => {
  let component: EscaneoUsuarioPage;
  let fixture: ComponentFixture<EscaneoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscaneoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
