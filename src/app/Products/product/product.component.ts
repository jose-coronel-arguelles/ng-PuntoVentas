import { Component } from '@angular/core';

export interface IProduct{
    name: string;
   description:string;
   price:number
}

@Component({
  selector:'app-product',
  templateUrl:'product.component.html'

})

export class ProductComponent{
  product: IProduct={
    name:'Sandwich',
    description: 'big sandwich with meat',
    price: 22
  }

  add(){
    console.log(this.product );
  }
  edit(){
    console.log(this.product);
  }

}


