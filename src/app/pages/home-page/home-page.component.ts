import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  arrayPlatos: any = [];
  constructor(private _service: PlatosService) { }

  ngOnInit(): void {
  }

  obtenerPlatos() {
    // let busqueda: string = (<HTMLInputElement>document.getElementById('txtBuscar')).value;

    this._service.obtenerPlatos("pasta").subscribe((data: any) => {
      console.log(data);
      this.arrayPlatos = data.results;
      // data.results.forEach((plato: any) => {
      // });
    })
  }

}
