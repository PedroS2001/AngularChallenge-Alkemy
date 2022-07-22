import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {

  plato: any;
  constructor(private _service: PlatosService, private _route: ActivatedRoute, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    let id: any = this._route.snapshot.paramMap.get('id');
    this.spinner.show('mySpinner');
    this._service.detallesPlato(id).subscribe((datos: any) => {
      console.log(datos);
      this.spinner.hide('mySpinner');
      this.plato = datos;
    })
  }



}
