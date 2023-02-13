import { Component, Input } from '@angular/core';
import { CustomerService } from '../services/customer.services';

export interface ICustomer{
  name: string;
  lastName: string;
  dateBirth: string;
  phone: string;
}

@Component({
  selector: 'app-customer-add',
  templateUrl: './add-customer.component.html',
})

export class CustomerAddComponent {

  @Input() newCustomer: ICustomer={
    name:'',
    lastName: '',
    dateBirth: '',
    phone:''
  }

  constructor(private customerService: CustomerService ){

  }

  add(){
    if (this.newCustomer.name.trim().length===0) {return;}

    this.customerService.add(this.newCustomer);

    this.newCustomer={
      name:'',
      lastName: '',
      dateBirth: '',
      phone:''
    }
  }

}
