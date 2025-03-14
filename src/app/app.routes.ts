import { Routes } from '@angular/router';
import { AgendamentoServicoComponent } from './agendamento-servico/agendamento-servico.component';

export const routes: Routes = [
    { path: 'agendamento/:id', component: AgendamentoServicoComponent }, 
];
