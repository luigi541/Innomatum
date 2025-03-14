import { Routes } from '@angular/router';
import { AgendamentoServicoComponent } from './agendamento-servico/agendamento-servico.component';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';

export const routes: Routes = [
    { path: 'agendamento/:id', component: AgendamentoServicoComponent },
    { path: 'profissionais', component: ProfessionalsPageComponent},
];
