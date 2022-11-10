import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ChamadosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
  ]
})
export class HomeModule { }
