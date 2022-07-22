import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-acumulado-misplatos',
  templateUrl: './acumulado-misplatos.component.html',
  styleUrls: ['./acumulado-misplatos.component.css']
})
export class AcumuladoMisplatosComponent implements OnInit {

  constructor(public wh:WarehouseService) { }

  ngOnInit(): void {
  }

}
