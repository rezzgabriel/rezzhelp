import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
    //     this.router.navigate(['auxiliar']);
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 100);
    //   },
    //   (error => {
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'error',
    //       title: 'Usuário ou senha incorretos',
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //     console.log(error);
    //   })
    // );
  }

}
