import { Component, OnInit } from '@angular/core';
import {Chamado} from '../entity/chamado';

@Component({
  selector: 'app-chamados-detalhes',
  templateUrl: './chamados-detalhes.component.html',
  styleUrls: ['./chamados-detalhes.component.css']
})
export class ChamadosDetalhesComponent implements OnInit {

  chamado: Chamado;

  constructor() { }

  ngOnInit(): void {
    this.chamado = {
        id: 1,
        descricao: 'Estabilizador queimado',
        responsavel: 'gabriel',
        status: 'A',
        solucao: 'Troca do estabilizador',
        dtCriacao: new Date(),
        dtFechamento: new Date(),
        solicitante: 'Weudes',
        categoria: 'Infraestrutura'
      };
  }

}
