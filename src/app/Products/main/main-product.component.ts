import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

export interface IProduct{
    name: string;
   description:string;
   price:number
}

@Component({
  selector:'app-main-product',
  templateUrl:'main-product.component.html'
})

export class ProductComponent{

  newProduct: IProduct={
    name:'',
    description: '',
    price: 0
  }

  // addNewProduct( argument: IProduct){
  //   console.log('Main Product Component');

  //   this.productsList.push(argument);
  // }

  constructor(){

  }
}


