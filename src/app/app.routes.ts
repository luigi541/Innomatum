import { Routes } from '@angular/router';
import { AgendamentoServicoComponent } from './agendamento-servico/agendamento-servico.component';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'agendamento/:id', component: AgendamentoServicoComponent },
    { path: 'profissionais', component: ProfessionalsPageComponent},
    { path: '', component: HomeComponent}
];
