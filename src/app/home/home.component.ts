import { Component } from '@angular/core';
import { CommonModule }from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showMe:boolean=false;
  isdisable:boolean=true;
  toggleChange(){
    
  }

}
