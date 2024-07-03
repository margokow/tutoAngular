import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composant-enfant.component.html',
  styleUrl: './composant-enfant.component.css',
})
export class ComposantEnfantComponent {
  @Input()
  visible!: boolean

  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter()

  onClick() {
    this.visible = !this.visible;
    this.changeValue.emit(this.visible);

    console.log(this.visible);
  }
}
