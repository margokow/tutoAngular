import { Component } from '@angular/core';
import { DynamiqueDateComponent } from '../dynamique-date/dynamique-date.component';

@Component({
  selector: 'app-affichage-date',
  standalone: true,
  imports: [DynamiqueDateComponent],
  templateUrl: './affichage-date.component.html',
  styleUrls: ['./affichage-date.component.css']  // Correction ici
})
export class AffichageDateComponent {

}
