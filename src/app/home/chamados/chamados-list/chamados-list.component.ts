import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {Chamado} from '../entity/chamado';
import {ChamadosService} from '../chamados.service';
import {Categoria} from '../entity/categoria';
import {Usuario} from '../entity/usuario';
import Swal from 'sweetalert2';

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
  categorias: Categoria[];
  usuarios: Usuario[];
  newChamado: Chamado = new Chamado();

  constructor(private chamadosService: ChamadosService) { }

  ngOnInit(): void {
    this.getChamadosAbertos();
    this.getCategorias();
    this.getUsuarios();
  }

  getChamados(): void {
    this.chamadosService.getAllChamados().subscribe(
      data => {
        this.chamados = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getChamadosAbertos(): void {
    this.chamadosService.getAllChamadosAbertos().subscribe(
      data => {
        this.chamados = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getChamadosEncerrados(): void {
    this.chamadosService.getAllChamadosEncerrados().subscribe(
      data => {
        this.chamados = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getCategorias(): void {
    this.chamadosService.getAllCategorias().subscribe(
      data => {
        this.categorias = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getUsuarios(): void {
    this.chamadosService.getAllUsuarios().subscribe(
      data => {
        this.usuarios = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  cadastraChamado(): void {
    this.chamadosService.createChamado(this.newChamado).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Chamado cadastrado com sucesso',
          showConfirmButton: false,
          timer: 2000
        });
        this.getChamados();
      }, error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Não foi possível cadastrar o chamado',
          text: 'Preencha os dados corretamente',
          showConfirmButton: true,
        });
      }
    );
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
