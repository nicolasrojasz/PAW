import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/PersonaDTO';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  personas: Persona[] = [];
  nombre!: string;
  apellidos!: string;
  fecha_nac!: Date;
  ciudad!: string;
  correo!: string;
  estado: boolean = true;
  nuevoApodo!: string;
  UsuarioLocal!: any;
  infoTemp!: any;
  infoTemp2!: any;

  constructor(private services: ServiciosService) {}

  ngOnInit() {
    if (localStorage.getItem('login')) {
      this.nuevoApodo = '';
      this.infoTemp = localStorage.getItem('login');

      this.infoTemp = JSON.parse(this.infoTemp);
      this.consultar(this.infoTemp.usuario);
    }
  }
  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Se actualizo correctamente',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  consultar(usuario: string) {
    this.services.obtener(usuario).subscribe((personas) => {
      this.personas = personas;
      console.log(this.personas);
    });
  }

  actualizarApodo() {
    if (this.nuevoApodo !== '') {
      this.services
        .actualizarS(this.personas[0].usuario, this.nuevoApodo)
        .subscribe((data) => {
          console.log(data);
          if (localStorage.getItem('login')) {
            this.infoTemp2 = {
              usuario: this.infoTemp.usuario,
              apodo: this.nuevoApodo,
              razon_social: this.infoTemp.razon_social,
            };
            localStorage.setItem('login', JSON.stringify(this.infoTemp2));
          }
          this.showAlert();
          setTimeout(() => {
            this.ngOnInit();
          }, 2000);
        });
    } else {
      console.log('No se actualizo');
    }
  }
}
