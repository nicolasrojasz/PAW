import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { RegistroPComponent } from '../components/registro-p/registro-p.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistroUComponent } from '../components/registro-u/registro-u.component';
import { RegistroEComponent } from '../components/registro-e/registro-e.component';
import { IniciarDirectoComponent } from '../components/inicio/iniciar-directo/iniciar-directo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'registrarse', component: RegistroPComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevoUsuario', component: RegistroUComponent },
  { path: 'registrarEmpresa', component: RegistroEComponent },
  { path: 'iniciarDirecto', component: IniciarDirectoComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
