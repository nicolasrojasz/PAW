import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.component.html',
  styleUrls: ['./registro-u.component.css'],
})
export class RegistroUComponent implements OnInit {
  usuario!: string;
  contrasena!: string;
  apodo!: string;
  apodoNull = null;
  empresaNull = null;
  id_persona!: number;
  id_empresa!: string;
  selectPersonas: any = [];
  selectEmpresas: any = [];
  comboPersona: string = '';
  varSeleccionado: string = '';
  varSelectEmpresa: string = '';
  comboEmpresa: string = '';

  constructor(private services: ServiciosService, private router: Router) {}

  ngOnInit() {
    this.services.selectPersonas().subscribe((response) => {
      this.selectPersonas = response;
      console.log(this.selectPersonas);
    });
    this.services.selectEmpresas().subscribe((reponse) => {
      this.selectEmpresas = reponse;
    });
  }

  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Se inicio el directo',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  registrar() {
    this.id_persona = parseInt(this.varSeleccionado);
    this.id_empresa = this.varSelectEmpresa;

    this.services
      .registrarUsuario(
        this.usuario,
        this.contrasena,
        this.apodo,
        this.id_persona,
        this.id_empresa
      )
      .subscribe((response) => {
        console.log(response);
      });

    this.showAlert();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }

  capturarPersona() {
    this.varSeleccionado = this.comboPersona;
  }
  capturarEmpresa() {
    this.varSelectEmpresa = this.comboEmpresa;
  }
}
