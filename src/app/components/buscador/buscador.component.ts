import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() listaPlatos: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _service: PlatosService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  buscarPlatos() {
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtBuscar')).value;
    this.spinner.show('mySpinner');
    this._service.obtenerPlatos(busqueda).subscribe((data: any) => {
      this.spinner.hide('mySpinner');
      this.listaPlatos.emit(data.results);
    })
  }

  onKeyUp(event: any) {
    if (event.keyCode == 13) {
      this.buscarPlatos();
    }
  }

}
