import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-child1-core',
  standalone: false,

  templateUrl: './child1-core.component.html',
  styleUrl: './child1-core.component.scss'
})
export class Child1CoreComponent {
  newServerName ="";
  newServerContent="";
  @Output() serverCreated = new EventEmitter<{servername:string,servercontent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{servername:string,servercontent:string}>();

  OnAddServer() {
    this.serverCreated.emit({servername :this.newServerName,servercontent:this.newServerContent});
  }
  OnAddBlueprint() {
    this.bluePrintCreated.emit({servername :this.newServerName,servercontent:this.newServerContent});
  }
}
