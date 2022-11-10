import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {Chamado} from '../entity/chamado';

@Component({
  selector: 'app-chamados-list',
  templateUrl: './chamados-list.component.html',
  styleUrls: ['./chamados-list.component.css']
})
export class ChamadosListComponent implements OnInit {

  @ViewChild('dt') table: Table;

  loading = false;
  chamados: Chamado[];
  selectedChamados: Chamado[];
  categorias: any[];

  constructor() { }

  ngOnInit(): void {
    this.chamados = [
      {
        id: 1,
        descricao: 'Estabilizador queimado',
        responsavel: 'gabriel',
        status: 'A',
        solucao: 'Troca do estabilizador',
        dtCriacao: new Date(),
        dtFechamento: new Date(),
        solicitante: 'Weudes',
        categoria: 'Infraestrutura'
      },
      {
        id: 2,
        descricao: 'Estabilizador quebrado',
        responsavel: 'gabriel',
        status: 'F',
        solucao: 'Troca do estabilizador',
        dtCriacao: new Date(),
        dtFechamento: new Date(),
        solicitante: 'Clyeton',
        categoria: 'Infraestrutura'
      },
      {
        id: 3,
        descricao: 'Monitor quebrado',
        responsavel: 'Clyeton',
        status: 'A',
        solucao: 'Troca do monitor',
        dtCriacao: new Date(),
        dtFechamento: new Date(),
        solicitante: 'Weudes',
        categoria: 'Infraestrutura'
      }
    ];
  }

  onDateSelect(value): void {
    this.table.filter(this.formatDate(value), 'dataCitacao', 'equals');
    console.log(this.formatDate(value));
    // console.log(value);
  }

  formatDate(date): string {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    // return day + '/' + month  + '/' + date.getFullYear();
    return date.getFullYear() + '-' + month  + '-' + day + 'T03:00:00.000+00:00';
  }

}
