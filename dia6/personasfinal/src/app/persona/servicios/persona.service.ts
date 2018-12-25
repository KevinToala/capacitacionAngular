import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getById(idPersona): Observable<Persona> {
    return this.httpClient.get<Persona>(this.buildUrl(`personas/${idPersona}`));
  }

  public getList(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.buildUrl(`personas`));
  }

  public crear(persona): Observable<Persona> {
    return this.httpClient.post<Persona>(this.buildUrl(`personas`), persona);
  }

  public actualizar(id, persona): Observable<Persona> {
    return this.httpClient.put<Persona>(this.buildUrl(`personas/${id}`), persona);
  }

  public eliminar(id): Observable<void> {
    return this.httpClient.delete<void>(this.buildUrl(`personas/${id}`));
  }
}
