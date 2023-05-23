import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-iniciar-directo',
  templateUrl: './iniciar-directo.component.html',
  styleUrls: ['./iniciar-directo.component.css'],
})
export class IniciarDirectoComponent implements OnInit {
  apodo!: string;
  empresa!: string;
  descripcion!: string;
  directo: boolean = true;
  infoLocal!: any;
  infoDirecto = {
    apodo: '',
    empresa: '',
    descripcion: '',
    video: '',
  };
  constructor(private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('login')) {
      this.infoLocal = localStorage.getItem('login');
      this.infoLocal = JSON.parse(this.infoLocal);
      this.apodo = this.infoLocal.apodo;
      this.empresa = this.infoLocal.razon_social;
    }
  }

  showAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Se inicio el directo',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  iniciarDirecto() {
    this.infoDirecto = {
      apodo: this.infoLocal.apodo,
      empresa: this.infoLocal.razon_social,
      descripcion: this.descripcion,
      video: '',
    };
    localStorage.setItem('infoDirecto', JSON.stringify(this.infoDirecto));
    localStorage.setItem('directo', JSON.stringify(this.directo));
    this.showAlert();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2000);
  }
}
