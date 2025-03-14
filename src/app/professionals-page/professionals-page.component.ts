import { Component, OnInit } from '@angular/core';
import { ProfessionalsCardComponent } from '../professionals-card/professionals-card.component';
import { ApiService } from '../../services/Profissionais.services';
import { Observable } from 'rxjs';
import Professional from '../../interfaces/Professional';
import { AsyncPipe, CommonModule } from '@angular/common';
import Servico from '../../interfaces/Servico';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professionals-page',
  imports: [ProfessionalsCardComponent, AsyncPipe, CommonModule, FontAwesomeModule, HeaderComponent],
  templateUrl: './professionals-page.component.html',
  styleUrl: './professionals-page.component.css',
})
export class ProfessionalsPageComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) { }

  faXMark = faXmark;
  professionals$!: Observable<Professional[]>;
  services$!: Observable<Servico[]>;
  isFilterActive: boolean = false;
  activeFilterServiceId: number = 0;

  ngOnInit(): void {
    this.services$ = this.apiService.getServicos();
    this.professionals$ = this.apiService.getProfissionais();
  }
  onServiceFilterClick(serviceId: number): void {
    this.activeFilterServiceId = serviceId;
    this.professionals$ = this.apiService.getProfissionaisPorServico(serviceId);
    this.isFilterActive = true;
  }
  onResetFiltersClick(): void {
    this.activeFilterServiceId = 0;
    this.professionals$ = this.apiService.getProfissionais();
    this.isFilterActive = false;
  }

  redirect(id:number): void {
    this.router.navigate(["agendamento/"+ id])
    
  }
}
