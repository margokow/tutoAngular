import { Component } from '@angular/core';
import { ComponentEnfantComponent } from '../component-enfant/component-enfant.component';

@Component({
  selector: 'app-component-parent',
  standalone: true,
  imports: [ComponentEnfantComponent],
  templateUrl: './component-parent.component.html',
  styleUrl: './component-parent.component.css'
})
export class ComponentParentComponent {

  visible: boolean = true;

  changeVisible(event: boolean){
    this.visible = event
    
  }
}
