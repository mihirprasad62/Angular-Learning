import { Component } from '@angular/core';

@Component({
  selector: 'app-get-and-set-input-field-value',
  imports: [],
  templateUrl: './get-and-set-input-field-value.html',
  styleUrl: './get-and-set-input-field-value.css',
})
export class GetAndSetInputFieldValue {
  name = '';
  displayName=""
  email=""
  getName(event: Event) {
    const name=(event.target as HTMLInputElement).value
    console.log(name);
    this.name=name
  }

  showName(){
    this.displayName=this.name
  }

  setName(){
    this.name="Mihir"
  }
  getEmail(val:string){
    this.email=val
    console.log(val)
  }
  setEmail(){
    this.email="abc@gmail.com"
  }
}
