import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculoModel } from './veiculos/veiculo.model';
 

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
 

  constructor(private http: HttpClient) { }

  cadastrarVeiculo(veiculo: VeiculoModel): Observable<VeiculoModel> {
   return  this.http.post<VeiculoModel>("http://localhost:3000/veiculos",veiculo)
  }

  listarVeiculos() : Observable<any>{
   return this.http.get("http://localhost:3000/veiculos")
  }

  atualizarVeiculo (id:any, veiculo: VeiculoModel) :Observable<VeiculoModel>{
    return this.http.put<VeiculoModel>("http://localhost:3000/veiculos", veiculo)
  }

  removerVeiculo(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/veiculos/${id}`);
}
}
