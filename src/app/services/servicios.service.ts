import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor(private http: HttpClient) {}

  obtener(usuario: string): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PAW/perfil.php/?usuario=${usuario}`
    );
  }

  /* Servicios para registrar */
  /* Usuarios */
  registrarUsuario(
    usuario: string,
    contrasena: string,
    apodo: string,
    id_persona: number,
    id_empresa: string
  ): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PAW/guardarUsuario.php?usuario=${usuario}&contrasena=${contrasena}&apodo=${apodo}&id_persona=${id_persona}&id_empresa=${id_empresa}`
    );
  }
  /* Personas */
  registrarPersona(
    cedula: number,
    nombre: string,
    apellidos: string,
    pais: string,
    fec_nac: Date
  ): Observable<any> {
    return this.http.get(
      ` http://localhost/backCrud-PHP-PAW/guardarPersona.php?cedula=${cedula}&nombre=${nombre}&apellidos=${apellidos}&pais=${pais}&fec_nac=${fec_nac} `
    );
  }

  /* Servicios para llenar el select de para registro */
  selectPersonas() {
    return this.http.get('http://localhost/BackCrud-PHP-PAW/traerPersonas.php');
  }
  selectEmpresas() {
    return this.http.get('http://localhost/BackCrud-PHP-PAW/traerEmpresas.php');
  }

  /* Sevicio para login */
  login(usuario: string, contra: string): Observable<any> {
    return this.http.get(
      `http://localhost/BackCrud-PHP-PAW/login.php?usuario=${usuario}&contrasena=${contra}`
    );
  }

  /* Actualizar Perfil */
  actualizarS(usuario: string, nuevoApodo: string): Observable<any> {
    return this.http.get(
      `http://localhost/BackCrud-PHP-PAW/actualizarApodo.php?usuario=${usuario}&apodo=${nuevoApodo}`
    );
  }

  registrarEmpresa(
    nit: string,
    razon_social: string,
    descripcion: string
  ): Observable<any> {
    return this.http.get(
      `http://localhost/backCrud-PHP-PAW/guardarEmpresa.php?NIT=${nit}&razon_social=${razon_social}&descripcion=${descripcion}`
    );
  }
}
