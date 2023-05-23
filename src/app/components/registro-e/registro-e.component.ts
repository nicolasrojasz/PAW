import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css'],
})
export class RegistroEComponent {
  nit!: string;
  razon_social!: string;
  descripcion!: string;
  constructor(private services: ServiciosService) {}
  registrarEmpresa() {
    return this.services
      .registrarEmpresa(this.nit, this.razon_social, this.descripcion)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
