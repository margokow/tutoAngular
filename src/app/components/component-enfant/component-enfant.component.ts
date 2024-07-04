import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-enfant',
  standalone: true,
  imports: [],
  templateUrl: './component-enfant.component.html',
  styleUrl: './component-enfant.component.css'
})
export class ComponentEnfantComponent {

  @Input()
  visible!: boolean

  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter()


  onClick(){
    this.visible = !this.visible
    this.changeValue.emit(this.visible)
    console.log(this.visible);
  }

}
