import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'rezzhelp';

  constructor(private config: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.config.setTranslation({
      accept: 'Aceitar',
      reject: 'Cancelar',
      emptyMessage: 'Nenhum resultado encontrado',
      emptyFilterMessage: 'Nenhum resultado encontrado',
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      choose: 'Escolha',
      upload: 'Enviar',
      cancel: 'Cancelar',
      today: 'Hoje',
      clear: 'Limpar',
    });
  }
}
