import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chamado} from './entity/chamado';
import {Categoria} from './entity/categoria';
import {Usuario} from './entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  private baseURL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getAllChamados(): Observable<Chamado[]> {
    return this.httpClient.get<Chamado[]>(`${this.baseURL}/chamado`);
  }

  getAllChamadosAbertos(): Observable<Chamado[]> {
    return this.httpClient.get<Chamado[]>(`${this.baseURL}/chamado/abertos`);
  }

  getAllChamadosEncerrados(): Observable<Chamado[]> {
    return this.httpClient.get<Chamado[]>(`${this.baseURL}/chamado/encerrados`);
  }

  createChamado(chamado: Chamado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/chamado`, chamado);
  }

  updateChamado(id: number, chamado: Chamado): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/chamado/solucao/${id}`, chamado);
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.baseURL}/categoria`);
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuario`);
  }

  getChamadoById(id: number): Observable<Chamado> {
    return this.httpClient.get<Chamado>(`${this.baseURL}/chamado/${id}`);
  }

}
