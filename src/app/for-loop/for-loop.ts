import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css'
})
export class ForLoop {
  users=['mihir','sameer','hapi','bapi','lala','aju']

  students=[
    {name:'mihir',age:'29',email:'mihir@gmail.com'},
    {name:'sameer',age:'39',email:'sameer@gmail.com'},
    {name:'hapi',age:'49',email:'hapi@gmail.com'},
    {name:'bapi',age:'59',email:'bapi@gmail.com'},
    {name:'lala',age:'69',email:'lala@gmail.com'},
  ]

  getName(name:string){
    console.log(name)
  }
}
