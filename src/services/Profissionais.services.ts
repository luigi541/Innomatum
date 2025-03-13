import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Buscar todos os profissionais
  getProfissionais(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profissionais`);
  }

  // Buscar um profissional pelo ID
  getProfissionalById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profissionais/${id}`);
  }

  // Buscar todos os profissionais de um serviço específico
  getProfissionaisPorServico(idServico: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/profissionais/servico/${idServico}`);
  }

  // Buscar todos os serviços
  getServicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/servicos`);
  }

  // Buscar um serviço pelo ID
  getServicoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/servicos/${id}`);
  }
}
