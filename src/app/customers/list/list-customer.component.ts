import { Component } from "@angular/core";
import { ICustomer } from "../add/add-customer.component";
import { CustomerService } from '../services/customer.services';

@Component({
  selector:'app-customer-list',
  templateUrl:'./list-customer.component.html'
})

export class CustomerListComponent{
  get customers(){
    return this.customerService.customers;
  }

  constructor( private customerService: CustomerService){
  }
}
