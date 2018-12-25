import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../modelo/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
   }

   public obtenerLista(): Observable<Pais[]> {
     return this.httpClient.get<Pais[]>(this.buildUrl('paises'));
   }

   public crear(pais): Observable<Pais> {
    return this.httpClient.post<Pais>(this.buildUrl('paises'), pais);
   }

   public actualizar(id, pais): Observable<Pais> {
    return this.httpClient.put<Pais>(this.buildUrl(`paises/${id}`), pais);
   }

   public eliminar(id): Observable<void> {
    return this.httpClient.delete<void>(this.buildUrl(`paises/${id}`));
   }
}
