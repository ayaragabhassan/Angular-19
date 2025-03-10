import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one-component',
  standalone: false,

  templateUrl: './all-in-one-component.component.html',
  styleUrl: './all-in-one-component.component.scss',
})
export class AllInOneComponentComponent {
  title: string = 'Full-demo';
  serverElements: any = [];
  newServerName: string = '';
  newServerContent: string = '';

  OnAddServer() {
    this.serverElements.push({
      type: 'Server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
  OnAddBlueprint() {
    this.serverElements.push({
      type: 'bluePrint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
