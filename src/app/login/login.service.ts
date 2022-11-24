import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../home/chamados/entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/usuario/login`, {
      username,
      password
    });
  }
}
