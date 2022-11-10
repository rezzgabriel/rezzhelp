import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosDetalhesComponent } from './chamados-detalhes.component';

describe('ChamadosDetalhesComponent', () => {
  let component: ChamadosDetalhesComponent;
  let fixture: ComponentFixture<ChamadosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadosDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
