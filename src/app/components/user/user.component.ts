import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  nom:string = 'john';
  prenom: string = 'doe';
  age: number= 50;
  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5ifGv31alypPo1wnFtdjPynvIkAvkvNoaA&s"
  job: string = "";
}
