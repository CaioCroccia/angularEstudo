import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples-component',
  templateUrl: './juros-simples-component.component.html',
  styleUrls: ['./juros-simples-component.component.css']
})
export class JurosSimplesComponentComponent implements OnInit {
  valor: number;
  periodo: number;
  

  constructor() { }

  ngOnInit() {
  }

}