import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Learning');
  name="Mihir Prasad Bhuyan";
  x=10;
  y=20;
  user1="Sameer";
  user2="Bapi"
}
