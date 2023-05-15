import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
