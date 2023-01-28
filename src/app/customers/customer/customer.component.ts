import { Component } from '@angular/core';

export interface ICustomer{
  name: string;
  lastName: string;
  dateBirth: string;
  phone: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})

export class CustomerComponent{
  customer:ICustomer={
    name:"Jose",
    lastName:"Coronel",
    dateBirth:"1987-12-20",
    phone:"954647835"
  }

  add(){
    console.log('Added: ',this.customer);
  }
  edit(){
    console.log('Updated: ',this.customer);
  }

}
