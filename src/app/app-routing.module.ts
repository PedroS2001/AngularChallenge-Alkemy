import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { BuscadorPageComponent } from './pages/buscador-page/buscador-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'ALaCarta - HOME' },
  { path: 'login', component: FormLoginComponent, title: 'ALaCarta - Login' },
  { path: 'buscador', component: BuscadorPageComponent, title: 'ALaCarta - Buscar Plato' },
  { path: 'detalles/:id', component: DetallePlatoComponent, title: 'ALaCarta - Detalles Plato' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
