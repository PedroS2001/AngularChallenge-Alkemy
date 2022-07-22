import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
