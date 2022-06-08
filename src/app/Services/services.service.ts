import { Transferencia } from './../../models/transferencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listaTransferencias = [];
   }

   Listartransferencias(): Observable<Transferencia[]>{
     return this.http.get<Transferencia[]>(this.url);
   }

   adicionar(transferencia: Transferencia) :Observable<Transferencia>{
     return this.http.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
