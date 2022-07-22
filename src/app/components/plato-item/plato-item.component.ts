import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plato-item',
  templateUrl: './plato-item.component.html',
  styleUrls: ['./plato-item.component.css']
})
export class PlatoItemComponent implements OnInit {
  private Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router, private wh: WarehouseService) { }

  ngOnInit(): void {
  }

  verDetalles(id: any) {
    this.router.navigate(['detalles/' + id]);
  }

  agregarPlato(plato: any) {
    let rta: number = this.wh.addPlato(plato);

    if (rta == 1) {
      this.Toast.fire({
        icon: 'success',
        title: 'Se agrego el plato correctamente'
      })
    } else if (rta == -1) {
      this.Toast.fire({
        icon: 'error',
        title: 'No puede pedir mas de 4 platos',
      })
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'No puede haber mas de 2 platos veganos o no veganos'
      })
    }
  }

  eliminarPlato(plato: any) {
    this.wh.removePlato(plato);
    this.Toast.fire({
      icon: 'warning',
      title: 'Se elimino el plato correctamente'
    })
  }

}
