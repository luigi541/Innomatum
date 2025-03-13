import { Component, input } from '@angular/core';

@Component({
  selector: 'app-professionals-card',
  imports: [],
  templateUrl: './professionals-card.component.html',
  styleUrl: './professionals-card.component.css',
})
export class ProfessionalsCardComponent {
  professionalName = input.required<string>();
  professionalImgUrl = input.required<string>();
}
