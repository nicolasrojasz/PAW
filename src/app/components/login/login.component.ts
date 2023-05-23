import { Component } from '@angular/core';
import { loginLocalStorage } from 'src/app/models/loginLocalStorage';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: string;
  contrasena!: string;
  infoLogin: loginLocalStorage[] = [];
  infoLoginObj = {
    usuario: '',
    apodo: '',
    razon_social: '',
  };
  constructor(private services: ServiciosService, private router: Router) {}
  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Cargando...',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  login() {
    console.log(this.usuario);
    this.services.login(this.usuario, this.contrasena).subscribe((response) => {
      console.log(response);
      this.infoLogin = response;
      this.infoLoginObj = {
        usuario: this.infoLogin[0].usuario,
        apodo: this.infoLogin[0].apodo,
        razon_social: this.infoLogin[0].razon_social,
      };
      localStorage.setItem('login', JSON.stringify(this.infoLoginObj));
      this.showAlert();
      setTimeout(() => {
        this.router.navigate(['perfil']);
      }, 2000);
    });
  }
}
