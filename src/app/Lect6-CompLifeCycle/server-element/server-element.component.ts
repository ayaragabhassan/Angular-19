import { Component, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,

  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss'
})
export class ServerElementComponent implements OnInit, OnChanges,OnDestroy {
  @Input('serverElement') element: { type: string, name: string, content: string };
  @Input() name:string;

  constructor() {
    console.log("I'm instialized from constructor");
  }
  ngOnDestroy(): void {
    console.log("Destroy Called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("I'm instialized from Onchanges");
    console.log('Changes',changes);
  }

  ngOnInit(): void {
    console.log("I'm instialized from onInit");
  }
}
