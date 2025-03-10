import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'full-demo';
  serverElements:any=[{type:'server',name:'server 1',content:'server 1 content'}];
  Onchangefirst()
  {
    this.serverElements[0].name = "Aya";

  }
  OnDestroyfirst()
  {
    this.serverElements.splice(0,1);
  }
}
