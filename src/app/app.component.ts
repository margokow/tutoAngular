import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirsComponentComponent } from './components/firs-component/firs-component.component';
import { ListeComponent } from './components/liste/liste.component';
import { UserComponent } from './components/user/user.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GenericAlertButtonComponent } from './components/generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirsComponentComponent, ListeComponent, UserComponent, AlertButtonComponent, MagieComponent, ListeFiltreComponent, ShowDateComponent, UserCardComponent, GenericAlertButtonComponent, ButtonMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title?:string = 'TutoAngular';
}
