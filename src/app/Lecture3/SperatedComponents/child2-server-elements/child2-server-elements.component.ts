import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child2-server-elements',
  standalone: false,

  templateUrl: './child2-server-elements.component.html',
  styleUrl: './child2-server-elements.component.scss',
})
export class Child2ServerElementsComponent {
  @Input() elemet: { type: string; name: string; content: string };
}
