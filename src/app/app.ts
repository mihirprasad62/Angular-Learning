import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { SignUp } from "./sign-up/sign-up";
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, SignUp,Profile],
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
