import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: false,

  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() Id: number;
  @Output() statusChange = new EventEmitter<{ id: number, newstatus: string }>();

  OnseTo(status:string)
  {
    this.statusChange.emit({id:this.Id,newstatus:status});
  }
}
