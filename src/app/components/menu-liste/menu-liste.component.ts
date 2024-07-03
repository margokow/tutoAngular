import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/user.model';
import { AffichageListeComponent } from '../affichage-liste/affichage-liste.component';

@Component({
  selector: 'app-menu-liste',
  standalone: true,
  imports: [CommonModule, FormsModule, AffichageListeComponent],
  templateUrl: './menu-liste.component.html',
  styleUrls: ['./menu-liste.component.css']
})
export class MenuListeComponent {
  search: string = "";

  users: User[] = [
    { id: 1, nom: "foo", prenom: "bar", age: 18, isVisible: true },
    { id: 2, nom: "smith", prenom: "jane", age: 22, isVisible: true },
    { id: 3, nom: "john", prenom: "doe", age: 18, isVisible: true },
    { id: 4, nom: "jackson", prenom: "michael", age: 30, isVisible: true },
    { id: 5, nom: "brown", prenom: "chris", age: 25, isVisible: true },
    { id: 6, nom: "williams", prenom: "serena", age: 28, isVisible: true },
    { id: 7, nom: "jones", prenom: "quincy", age: 34, isVisible: true },
    { id: 8, nom: "johnson", prenom: "emily", age: 21, isVisible: true },
    { id: 9, nom: "martin", prenom: "luther", age: 40, isVisible: true }
  ];

  delete(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.isVisible = false;
    }
  }
}
