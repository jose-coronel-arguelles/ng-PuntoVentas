import { Component, Input } from '@angular/core';

export interface IProduct{
    name: string;
   description:string;
   price:number
}

@Component({
  selector:'app-product-main',
  templateUrl:'main-product.component.html'
})

export class ProductComponent{

  newProduct: IProduct={
    name:'',
    description: '',
    price: 0
  }
  constructor() {}
}


