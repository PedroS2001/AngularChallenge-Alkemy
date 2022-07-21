import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private urlLogin: string = 'http://challenge-react.alkemy.org/';
  constructor(private httpClient: HttpClient) { }


  obtenerToken(email: string, password: string) {
    return this.httpClient.post(this.urlLogin, {
      'email': email,
      'password': password
    })
  }


}
