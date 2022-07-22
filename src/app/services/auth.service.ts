import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  private urlLogin: string = 'http://challenge-react.alkemy.org/';
  constructor(private httpClient: HttpClient, private router: Router) {
    this.iniciarSesion();
  }


  obtenerToken(email: string, password: string) {
    return this.httpClient.post(this.urlLogin, {
      'email': email,
      'password': password
    })
  }

  cerrarSesion() {
    this.currentUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  iniciarSesion() {
    let token: any = localStorage.getItem('token');
    let decoded: any;
    if (token) {
      decoded = jwtDecode(token);
      this.currentUser = decoded.email;
    }
  }


}
