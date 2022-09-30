import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples-component',
  templateUrl: './juros-simples-component.component.html',
  styleUrls: ['./juros-simples-component.component.css']
})
export class JurosSimplesComponentComponent implements OnInit {
  valor: number;
  periodo: number;
  taxa: number;
  juros: number;


  constructor() { 
    this.valor = 0;
    this.periodo = 0;
    this.taxa = 0.01;


  }

  ngOnInit() {
  }

  getJuros(){
    this.juros = this.valor * ( 1 + this.taxa * (this.periodo))
  }

}