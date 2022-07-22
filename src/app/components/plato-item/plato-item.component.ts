import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router, private wh: WarehouseService) { }

  ngOnInit(): void {
  }

  verDetalles(id: any) {
    this.router.navigate(['detalles/' + id]);
  }

  agregarPlato(plato: any) {
    this.wh.addPlato(plato);
  }

  eliminarPlato(plato: any) {
    this.wh.removePlato(plato);
  }

}
