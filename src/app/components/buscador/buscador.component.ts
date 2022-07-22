import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() listaPlatos: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _service: PlatosService) { }

  ngOnInit(): void {
  }


  buscarPlatos() {
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtBuscar')).value;

    this._service.obtenerPlatos(busqueda).subscribe((data: any) => {
      this.listaPlatos.emit(data.results);
    })
  }

}
