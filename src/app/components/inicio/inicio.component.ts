import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  infoUsuLocal: any = {};
  infoDirecto!: any;
  apodo!: string;
  empresa!: string;
  video!: number;
  descripcion!: string;
  sesion: boolean = false;
  directoLocal!: any;
  numero!: number;
  arrayVideoJuego: any = [
    {
      video: this.cicloAleatorio(),
      nombre: 'Nicolas',
      apellido: 'rojas',
      edad: 22,
      ciudad: 'cali',
    },
    {
      video: this.cicloAleatorio(),
      nombre: 'Felipe',
      apellido: 'rojas',
      edad: 10,
      ciudad: 'Medellin',
    },
    {
      video: this.cicloAleatorio(),
      nombre: 'Armando',
      apellido: 'rojas',
      edad: 22,
      ciudad: 'cali',
    },
    {
      video: this.cicloAleatorio(),
      nombre: 'Luisa',
      apellido: 'rojas',
      edad: 22,
      ciudad: 'cali',
    },
  ];

  arrayTendencia: any = [
    {
      video: this.cicloAleatorio(),
      nombre: 'Luisa',
      apellido: 'rojas',
      edad: 22,
      ciudad: 'cali',
    },
  ];

  cicloAleatorio() {
    this.numero = Math.random() * (12 - 1) + 1;
    return (this.numero = Math.round(this.numero));
  }
  arrays() {
    this.arrayVideoJuego = [
      {
        video: this.cicloAleatorio(),
        nombre: 'Nicolas',
        apellido: 'rojas',
        edad: 22,
        ciudad: 'cali',
      },
      {
        video: this.cicloAleatorio(),
        nombre: 'Felipe',
        apellido: 'rojas',
        edad: 10,
        ciudad: 'Medellin',
      },
      {
        video: this.cicloAleatorio(),
        nombre: 'Armando',
        apellido: 'rojas',
        edad: 22,
        ciudad: 'cali',
      },
      {
        video: this.cicloAleatorio(),
        nombre: 'Luisa',
        apellido: 'rojas',
        edad: 22,
        ciudad: 'cali',
      },
    ];
    this.arrayTendencia = [
      {
        video: this.cicloAleatorio(),
        nombre: 'Luisa',
        apellido: 'rojas',
        edad: 22,
        ciudad: 'cali',
      },
    ];
  }

  ngOnInit() {
    setInterval(() => {
      this.arrayVideoJuego = [];
      this.arrayTendencia = [];
      this.arrays();
    }, 3000);

    if (localStorage.getItem('directo')) {
      this.directoLocal = localStorage.getItem('directo');
      this.directoLocal = JSON.parse(this.directoLocal);
    } else {
      this.directoLocal = false;
    }

    if (localStorage.getItem('login')) {
      this.sesion = true;

      if (localStorage.getItem('infoDirecto')) {
        this.infoDirecto = localStorage.getItem('infoDirecto');
        this.infoDirecto = JSON.parse(this.infoDirecto);

        this.apodo = this.infoDirecto.apodo;
        this.empresa = this.infoDirecto.empresa;
        this.descripcion = this.infoDirecto.descripcion;
        setInterval(() => {
          this.cicloAleatorio();
          this.video = this.numero;
        }, 3000);
      }
    } else {
      this.sesion = false;
    }
  }
  terminarDirecto() {
    localStorage.removeItem('infoDirecto');
    localStorage.removeItem('directo');
    this.ngOnInit();
  }
}
