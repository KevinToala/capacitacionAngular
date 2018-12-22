import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url = 'http://corlasosa-test-personas.us-east-1.elasticbeanstalk.com';

  constructor(private httpClient: HttpClient) { }

  public obtenerPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.url}/personas`);
  }

  public crearPersona(persona): Observable<Persona> {
    return this.httpClient.post<Persona>(`${this.url}/personas`, persona);
  }
}
