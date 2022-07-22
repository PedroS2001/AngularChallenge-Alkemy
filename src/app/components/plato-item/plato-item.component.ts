import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDetalles(id: any) {
    this.router.navigate(['detalles/' + id]);
  }

}
