import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css'
})
export class IfElse {
  display=true
  toggleDiv=true

  hide(){
    this.display=false
  }

  show(){
    this.display=true
  }

  toggle(){
    this.display=!this.display
  }
  toggleTwo(){
    this.toggleDiv=!this.toggleDiv
  }
}
