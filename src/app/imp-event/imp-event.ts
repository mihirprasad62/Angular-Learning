import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-event',
  imports: [],
  templateUrl: './imp-event.html',
  styleUrl: './imp-event.css',
})
export class ImpEvent {
  handleEvent(event:any) {
    console.log('function called.',event);
    console.log('function called.',event.type);
    console.log('function called.',event.target.value);
    // console.log('function called.',event.target.name);
    // console.log('function called.',event.target.className);
  }
}
