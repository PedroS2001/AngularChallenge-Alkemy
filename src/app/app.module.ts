import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PlatoItemComponent } from './components/plato-item/plato-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuscadorPageComponent } from './pages/buscador-page/buscador-page.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { AcumuladoMisplatosComponent } from './components/acumulado-misplatos/acumulado-misplatos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormLoginComponent,
    PlatoItemComponent,
    HomePageComponent,
    BuscadorPageComponent,
    BuscadorComponent,
    DetallePlatoComponent,
    AcumuladoMisplatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
