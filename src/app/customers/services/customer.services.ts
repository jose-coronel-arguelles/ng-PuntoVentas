import { Injectable } from "@angular/core";
import { ICustomer } from "../add/add-customer.component";

@Injectable()
export class CustomerService{

  private _customers: ICustomer[]=[
    {
      name:"Jos",
      lastName:"Cor",
      dateBirth:"20/12/1987",
      phone:"954647835"
  },{
    name:"Ric",
    lastName:"Coron",
    dateBirth:"04/04/1983",
    phone:"954647596"
  }];

  get customers(): ICustomer[]{
    return [...this._customers];
  }

  constructor(){
  }

  add(customer: ICustomer){
    this._customers.push(customer);
  }

}
