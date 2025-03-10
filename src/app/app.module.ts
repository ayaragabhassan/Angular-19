import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Lecture1/header/header.component';
import { ProductsComponent } from './Lecture1/products/products.component';
import { FooterComponent } from './Lecture1/footer/footer.component';
import { Task1DataBindingComponent } from './Assignments/Task1/task1-data-binding/task1-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Lec2DataBindingComponent } from './Lecture2DataBinding/lec2-data-binding/lec2-data-binding.component';
import { AllInOneComponentComponent } from './Lecture3/AllInOneComponent/all-in-one-component/all-in-one-component.component';
import { ParentCompAppComponent } from './Lecture3/SperatedComponents/parent-comp-app/parent-comp-app.component';
import { Child1CoreComponent } from './Lecture3/SperatedComponents/child1-core/child1-core.component';
import { Child2ServerElementsComponent } from './Lecture3/SperatedComponents/child2-server-elements/child2-server-elements.component';
import { ProductsListComponent } from './Lect5/Components/products-list/products-list.component';
import { CustomeDirectiveExample } from './Lect5/directives/custome-directive-example.directive';
import { ServerElementComponent } from './Lect6-CompLifeCycle/server-element/server-element.component';
import { AccountComponent } from './Lect6-CompLifeCycle/Part2/account/account.component';
import { NewaccountComponent } from './Lect6-CompLifeCycle/Part2/newaccount/newaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    Task1DataBindingComponent,
    Lec2DataBindingComponent,
    AllInOneComponentComponent,
    ParentCompAppComponent,
    Child1CoreComponent,
    Child2ServerElementsComponent,
    ProductsListComponent,
    CustomeDirectiveExample,
    ServerElementComponent,
    AccountComponent,
    NewaccountComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
