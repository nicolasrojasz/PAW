import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistroPComponent } from './components/registro-p/registro-p.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroEComponent } from './components/registro-e/registro-e.component';
import { RegistroUComponent } from './components/registro-u/registro-u.component';
import { IniciarDirectoComponent } from './components/inicio/iniciar-directo/iniciar-directo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    PerfilComponent,
    RegistroPComponent,
    LoginComponent,
    RegistroEComponent,
    RegistroUComponent,
    IniciarDirectoComponent,
  ],
  imports: [BrowserModule, RoutesModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [NavbarComponent],
})
export class AppModule {}
