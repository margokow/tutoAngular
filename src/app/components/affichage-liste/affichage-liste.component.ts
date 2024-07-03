import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affichage-liste',
  standalone: true,
  imports: [],
  templateUrl: './affichage-liste.component.html',
  styleUrl: './affichage-liste.component.css'
})
export class AffichageListeComponent {
  @Input()
  isVisible?: boolean

  @Output()
  delete: EventEmitter<boolean> = new EventEmitter()

  onClick() {
    this.isVisible = !this.isVisible;
    this.delete.emit(this.isVisible);

    console.log(this.isVisible);
  }
}
