import { Component, OnInit } from '@angular/core';
import { ProfessionalsCardComponent } from '../professionals-card/professionals-card.component';
import { ApiService } from '../../services/Profissionais.services';
import { Observable } from 'rxjs';
import Professional from '../../interfaces/Professional';
import { AsyncPipe } from '@angular/common';
import Servico from '../../interfaces/Servico';

@Component({
  selector: 'app-professionals-page',
  imports: [ProfessionalsCardComponent, AsyncPipe],
  templateUrl: './professionals-page.component.html',
  styleUrl: './professionals-page.component.css',
})
export class ProfessionalsPageComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  professionals$!: Observable<Professional[]>;
  services$!: Observable<Servico[]>;
  isFilterActive: boolean = false;

  ngOnInit(): void {
    this.services$ = this.apiService.getServicos();
    this.professionals$ = this.apiService.getProfissionais();
  }
  onServiceFilterClick(serviceId: number): void {
    this.professionals$ = this.apiService.getProfissionaisPorServico(serviceId);
    this.isFilterActive = true;
  }
  onResetFiltersClick(): void {
    this.professionals$ = this.apiService.getProfissionais();
    this.isFilterActive = false;
  }
}
