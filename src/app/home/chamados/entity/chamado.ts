import {Usuario} from './usuario';
import {Categoria} from './categoria';

export class Chamado {
  id: number;
  descricao: string;
  responsavel: Usuario;
  status: string;
  solucao: string;
  dtCriacao: Date;
  dtFechamento: Date;
  solicitante: Usuario;
  categoria: Categoria;
}
