import { Component } from '@angular/core';

@Component({
  selector:'app-product',
  templateUrl:'product.component.html'

})

export class ProductComponent{
  //name : string = 'Pan con chicharron';
  // photo: string = 'img/pan-con-chicharron.jpg';
  //description : string = 'Pan frances relleno con camote frito y lonjas de chicharrón mas sarza criolla.';
  //price : number = 15.00

  // constructor(name:string, description:string, price:number){
  // }

   name!: string;
   description!:string;
   price!:number
}


