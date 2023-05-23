import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  estado!: string;
  estadoM!: string;
  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.getItem('login')
      ? (this.estado = 'none')
      : (this.estado = 'block');

    localStorage.getItem('login')
      ? (this.estadoM = 'block')
      : (this.estadoM = 'none');
  }
  cerrar() {
    if (localStorage.getItem('login') || localStorage.getItem('infoDirecto')) {
      localStorage.removeItem('login');
      localStorage.removeItem('infoDirecto');
      localStorage.removeItem('directo');
      this.router.navigate(['']);
      this.ngOnInit();
    }
  }
}
