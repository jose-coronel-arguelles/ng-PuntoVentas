
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './list/list-customer.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './services/customer.services';
import { CustomerAddComponent } from './add/add-customer.component';
import { CustomerMainComponent } from './main/main-customer.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddComponent,
    CustomerMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomerMainComponent
  ],
  providers: [
    CustomerService
  ],
})

export class CustomerModule{

}
