import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../list/list-product.component';

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

  @Input() productsList: IProduct[]=[
    {
      name:"Sandwich",
      description:"lalalal",
      price:20
  },{
      name:"Juice",
      description:"ahahahaha",
      price:15
  }];

  @Input() newProduct: IProduct={
    name:'',
    description: '',
    price: 0
  }

  addNewProduct( argument: IProduct){
    console.log('Main Product Component');

    this.productsList.push(argument);
  }
}


