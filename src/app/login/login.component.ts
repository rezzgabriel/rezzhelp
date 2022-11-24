import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChamadosService} from '../home/chamados/chamados.service';
import {LoginService} from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.usuario, this.senha).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      },
      (error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuário ou senha incorretos',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error);
      })
    );
  }

}
