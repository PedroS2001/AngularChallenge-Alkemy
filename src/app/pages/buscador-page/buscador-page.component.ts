import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.css']
})
export class BuscadorPageComponent implements OnInit {

  arrayPlatos: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  capturarListaPlatos(lista: any) {
    console.log(lista);
    this.arrayPlatos = lista;
  }

}
