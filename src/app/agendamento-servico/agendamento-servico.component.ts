import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/Profissionais.services';
import Professional from '../../interfaces/Professional';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendamento-servico',
  templateUrl: './agendamento-servico.component.html',
  styleUrls: ['./agendamento-servico.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgendamentoServicoComponent implements OnInit {
  profissional?: Professional;
  formData: any = {};
  formularioEnviado: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const profissionalId = this.route.snapshot.paramMap.get('id');

    if (profissionalId) {
      this.apiService.getProfissionalById(+profissionalId).subscribe(
        (profissional) => (this.profissional = profissional),
        (error) => console.error('Erro ao buscar o profissional:', error)
      );
    } else {
      console.error('ID do profissional não encontrado.');
    }
  }

  onSubmit(): void {
    if (!this.formData.data || !this.formData.hora) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    this.formularioEnviado = true;
    console.log('Formulário enviado:', this.formData);
  }
}  
