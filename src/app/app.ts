import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './shared/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userService = inject(User)

  document = "1036399377"
  getUser(){
    console.log('Hola desde el componente principal')
  this.userService.getUser(this.document).subscribe()
  }
}
