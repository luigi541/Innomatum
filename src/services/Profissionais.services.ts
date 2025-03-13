import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Profissional from '../interfaces/Professional';
import Servico from '../interfaces/Servico';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Buscar todos os profissionais
  getProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.baseUrl}/profissionais`);
  }

  // Buscar um profissional pelo ID
  getProfissionalById(id: number): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.baseUrl}/profissionais/${id}`);
  }

  // Buscar todos os profissionais de um serviço específico
  getProfissionaisPorServico(idServico: number): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.baseUrl}/profissionais/servico/${idServico}`);
  }

  // Buscar todos os serviços
  getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.baseUrl}/servicos`);
  }

  // Buscar um serviço pelo ID
  getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.baseUrl}/servicos/${id}`);
  }
}
