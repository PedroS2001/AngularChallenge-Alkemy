import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoggedGuard } from './guards/logged.guard';
import { BuscadorPageComponent } from './pages/buscador-page/buscador-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'ALaCarta - HOME', canActivate: [LoggedGuard], data: { animation: 'HomePage' } },
  { path: 'login', component: FormLoginComponent, title: 'ALaCarta - Login', data: { animation: 'LoginPage' } },
  { path: 'buscador', component: BuscadorPageComponent, title: 'ALaCarta - Buscar Plato', canActivate: [LoggedGuard], data: { animation: 'BuscadorPage' } },
  { path: 'detalles/:id', component: DetallePlatoComponent, title: 'ALaCarta - Detalles Plato', canActivate: [LoggedGuard], data: { animation: 'DetallePage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
