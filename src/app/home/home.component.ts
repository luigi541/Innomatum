import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/Profissionais.services';
import { Observable } from 'rxjs';
import Professional from '../../interfaces/Professional';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private apiService: ApiService, private router: Router) {
    
  }
 profissionais$!: Observable<Professional[]>
  ngOnInit(): void {
    this.profissionais$ = this.apiService.getProfissionais()
  }
  redirect(id:number): void {
    this.router.navigate(["agendamento/"+ id])
    
  }
}
