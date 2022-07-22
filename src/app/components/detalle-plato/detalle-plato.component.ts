import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {

  plato: any;
  constructor(private _service: PlatosService, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    let id: any = this._route.snapshot.paramMap.get('id');

    this._service.detallesPlato(id).subscribe((datos: any) => {
      console.log(datos);
      this.plato = datos;
    })
  }



}
