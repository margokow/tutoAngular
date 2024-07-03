import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/user.model';

@Component({
  selector: 'app-affichage-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage-liste.component.html',
  styleUrls: ['./affichage-liste.component.css']
})
export class AffichageListeComponent {
  @Input() users: User[] = [];
  @Output() deleteUser = new EventEmitter<number>();

  delete(userId: number) {
    this.deleteUser.emit(userId);
  }
}
