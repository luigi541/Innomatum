import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importa as rotas
import { provideHttpClient } from '@angular/common/http'; // Necessário para o ApiService

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideHttpClient() 
  ]
}).catch((err) => console.error(err));