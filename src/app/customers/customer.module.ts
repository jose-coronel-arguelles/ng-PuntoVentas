
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './list/customerList.component';
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [ CommonModule ],
  exports: [
    CustomerComponent,
    CustomerListComponent
  ],
  providers: [
    AppComponent
  ],
})

export class CustomerModule{

}
