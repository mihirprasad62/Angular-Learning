import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { ImpEvent } from './imp-event/imp-event';
import { GetAndSetInputFieldValue } from './get-and-set-input-field-value/get-and-set-input-field-value';
import { DiffTypesStyles } from './diff-types-styles/diff-types-styles';
import { IfElse } from './if-else/if-else';
import { ElseIf } from './else-if/else-if';
import { SwitchCase } from './switch-case/switch-case';
import { ForLoop } from './for-loop/for-loop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, SignUp, Profile,ImpEvent,GetAndSetInputFieldValue,DiffTypesStyles,IfElse,ElseIf,SwitchCase,ForLoop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('Angular_Learning');
  // name="Mihir Prasad Bhuyan";
  // x=10;
  // y=20;
  // user1="Sameer";
  // user2="Bapi"

  // userName:string="Mihir"
  // data:string|number='Hello'
  // other:any=10

  // handleClickEvent(){
  //  console.log('Function Called.')
  //  this.handleOtherFunction()
  // }

  // handleOtherFunction(){
  //   console.log("other function called.")
  // }
  // updateUsername(){
  //   this.userName='Sameer'
  //   this.data=30
  //   this.other=true
  // }

  // updateVar(){
  //   let x:number=30;

  //   console.log(x)
  //   this.sum(50,50)
  // }

  // sum(a:number,b:number){
  //   console.log(a+b)
  // }


  count: number = 0;

  handleIncrement() {
    this.count += 1;
  }
  handleDecrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
  handleReset() {
    this.count = 0;
  }

 
}
