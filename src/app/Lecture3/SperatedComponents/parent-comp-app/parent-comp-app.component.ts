import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp-app',
  standalone: false,

  templateUrl: './parent-comp-app.component.html',
  styleUrl: './parent-comp-app.component.scss'
})
export class ParentCompAppComponent {
  title: string = 'Full-demo';
  serverElements: any = [];
  newServerName: string = '';
  newServerContent: string = '';

  OnAddServer(serverdata:{servername:string,servercontent:string}) {
    this.serverElements.push({
      type: 'Server',
      name: serverdata.servername,
      content: serverdata.servercontent,
    });
  }
  OnAddBlueprint(serverdata:{servername:string,servercontent:string}) {
    this.serverElements.push({
      type: 'BluePrint',
      name: serverdata.servername,
      content: serverdata.servercontent,
    });
  }
}
