import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';

const routes: Routes = [
  { path: '', component: FormLoginComponent, title: 'ALaCarta - Login' },
  { path: 'login', component: FormLoginComponent, title: 'ALaCarta - Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
