import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfessionalsPageComponent } from './professionals-page/professionals-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfessionalsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Innomatum-app';
}
