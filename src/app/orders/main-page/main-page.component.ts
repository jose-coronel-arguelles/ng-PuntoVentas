import { Component } from '@angular/core';
import { ICustomer } from '../../customers/customer/customer.component';
import { IOrderDetails } from './main-page-order-details.component';

export interface IOrder{
  date: string,
  orderDetail: IOrderDetails[],
  total:number,
  totalTaxes:number,
  totalDiscounts:number,
  customer:ICustomer
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  order:IOrder={
    date: Date.now().toString(),
    orderDetail: [],
    total: 0,
    totalTaxes: 0,
    totalDiscounts: 0,
    customer: {name:"", lastName:"", dateBirth:"", phone:""}
  }

  newOrder:IOrder[]=[];


  add(){
    // if(this.order.orderDetail.length===0){return;}
    this.newOrder.push(this.order);
    console.log('Adding an order.')
   }

}
