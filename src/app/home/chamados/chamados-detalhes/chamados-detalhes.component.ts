import { Component, OnInit } from '@angular/core';
import {Chamado} from '../entity/chamado';
import {ChamadosService} from '../chamados.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from '../entity/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chamados-detalhes',
  templateUrl: './chamados-detalhes.component.html',
  styleUrls: ['./chamados-detalhes.component.css']
})
export class ChamadosDetalhesComponent implements OnInit {

  id: number;
  chamado: Chamado = new Chamado();
  usuarios: Usuario[];
  chamados: Chamado[];

  constructor(
    private route: ActivatedRoute,
    private chamadosService: ChamadosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getChamadoById();
    this.getUsuarios();
  }

  getChamadoById(): void {
    this.chamadosService.getChamadoById(this.id).subscribe(
      data => {
        this.chamado = data;
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

  updateChamado(): void {
    Swal.fire({
      title: `Atenção!`,
      text: 'Você deseja solucionar e encerrar este chamado?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Não`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.chamadosService.updateChamado(this.id, this.chamado).subscribe(data => {
          console.log(data);
          Swal.fire('Atualizado com sucesso', '', 'success');
        }, error => console.log(error));
        this.getChamados();
        this.navegarParaLista();
      } else if (result.isDenied) {
        Swal.fire('Alterações não foram feitas', '', 'info');
      }
    });
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

  public navegarParaLista(): void {
    this.router.navigate(['']);
  }

}
