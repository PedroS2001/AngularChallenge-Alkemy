import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  arrayPlatos: any = [];
  constructor(private _service: WarehouseService) { }

  ngOnInit(): void {
    this.arrayPlatos = this._service.misPlatos;
  }

}
