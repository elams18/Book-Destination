import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(private r1:Router) {
    console.log(r1);
  }
  ifSignedIn(){
    console.log(this.r1.url);
    if(this.r1.url == "/home") return true
    else return false;
  }
}
