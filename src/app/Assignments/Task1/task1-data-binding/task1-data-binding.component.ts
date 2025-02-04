import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-data-binding',
  standalone: false,

  templateUrl: './task1-data-binding.component.html',
  styleUrl: './task1-data-binding.component.scss'
})
export class Task1DataBindingComponent {
  userName:string = '';
  showSecret: boolean = false;
  clickCount:number[]= [];
  counter:number=0;
  isfeatured:boolean=true;
  featureStyle={
    "background-color":"blue",
  }
  featureClasss={

  "featureClass" : this.isfeatured
  }

  resetUserName() {
    this.userName = '';
  }
  showDetails()
  {
    this.counter =this.counter + 1;
    this.clickCount.push(this.counter);
    this.showSecret = !this.showSecret;

  }
}
