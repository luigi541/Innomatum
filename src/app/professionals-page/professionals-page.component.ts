import { Component, input } from '@angular/core';
import { ProfessionalsCardComponent } from '../professionals-card/professionals-card.component';

@Component({
  selector: 'app-professionals-page',
  imports: [ProfessionalsCardComponent],
  templateUrl: './professionals-page.component.html',
  styleUrl: './professionals-page.component.css',
})
export class ProfessionalsPageComponent {
  professionals = input([
    {
      id_servico: 1,
      id_profissionais: 4,
      nome: 'Maria',
      numero: 343423,
      local: 'Ola mundo 23',
      cidade: 'Porto',
      imagem_url:
        'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305504006.jpg',
    },
    {
      id_servico: 1,
      id_profissionais: 3,
      nome: 'Johnny',
      numero: 343423,
      local: 'Ola mundo 23',
      cidade: 'Porto',
      imagem_url:
        'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305504006.jpg',
    },
  ]);
}
