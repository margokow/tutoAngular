import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamique-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamique-date.component.html',
  styleUrl: './dynamique-date.component.css'
})
export class DynamiqueDateComponent {
  today: Date = new Date();

// window = window.location.reload();

  cities = [
    {
      name: "Paris", zone: "Europe", time: "CEST"
    },
    {
      name: "Amsterdam", zone: "Europe", time: "CEST"
    },
    {
      name: "New-York", zone: "Amerique", time: "EDT"
    }
  ]
}
