import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  count=signal(10)
  countProp=20

  value=signal(0)

  constructor(){
    effect(()=>{
      console.log(this.value())
      console.log(this.count())
      console.log(this.countProp)
    })
  }
  updateValue(){
    this.countProp=this.countProp+1
    this.count.set(this.count()+1)
  }

  changeValue(val:string){
    if(val=='dec'){
      this.value.set(this.value()-1)
    }else{
      this.value.set(this.value()+1)
    }
  }
}
