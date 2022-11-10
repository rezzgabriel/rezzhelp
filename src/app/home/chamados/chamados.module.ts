import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosListComponent } from './chamados-list/chamados-list.component';
import { ChamadosDetalhesComponent } from './chamados-detalhes/chamados-detalhes.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ChamadosListComponent,
    ChamadosDetalhesComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    FormsModule
  ]
})
export class ChamadosModule { }
