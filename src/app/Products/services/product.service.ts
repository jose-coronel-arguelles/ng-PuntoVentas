import { Injectable } from "@angular/core";
import { IProduct } from "../main/main-product.component";

@Injectable()
export class ProductService{

  private _products: IProduct[]=[
    {
      name:"Sandwich",
      description:"lalalal",
      price:20
  },{
      name:"Juice",
      description:"ahahahaha",
      price:15
  }];

  get products(): IProduct[]{
    return [...this._products];
  }

  constructor(){
  }

  add(product: IProduct){
    this._products.push(product);
  }

}
