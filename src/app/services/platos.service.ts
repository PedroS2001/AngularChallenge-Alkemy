import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private baseUrl: string = 'https://api.spoonacular.com/';
  private apiKey: string = 'e100789518f2401bbf9ca8097f1b01be';
  private apikeyMia: string = '9aaa6c381a064fcb853801ba4a41b2a5';

  constructor(private httpClient: HttpClient) { }

  obtenerPlatos(busqueda: string) {
    return this.httpClient.get<any>(`${this.baseUrl}recipes/complexSearch?apiKey=${this.apiKey}&query=${busqueda}&addRecipeInformation=true&addRecipeNutrition=true`);

  }
}
