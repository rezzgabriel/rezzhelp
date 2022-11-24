import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChamadosComponent} from './chamados.component';
import {ChamadosListComponent} from './chamados-list/chamados-list.component';
import {ChamadosDetalhesComponent} from './chamados-detalhes/chamados-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadosListComponent
  },
  {
    path: 'detalhes/:id',
    component: ChamadosDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
