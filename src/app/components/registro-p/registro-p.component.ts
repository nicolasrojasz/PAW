import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css'],
})
export class RegistroPComponent {
  cedula!: number;
  nombre!: string;
  apellidos!: string;
  pais!: string;
  fec_nac!: Date;

  constructor(private services: ServiciosService, private router: Router) {}

  registrar() {
    this.services
      .registrarPersona(
        this.cedula,
        this.nombre,
        this.apellidos,
        this.pais,
        this.fec_nac
      )
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['login']);
      });
  }
}
