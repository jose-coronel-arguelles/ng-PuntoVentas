import { Component, Input } from '@angular/core';
import { ICustomer } from '../add/add-customer.component';

@Component({
  selector:'app-customer-main',
  templateUrl:'main-customer.component.html'
})

export class CustomerMainComponent{

  @Input() newCustomer: ICustomer={
    name:'',
    lastName: '',
    dateBirth: '',
    phone:''
  }
  constructor() {}
}


