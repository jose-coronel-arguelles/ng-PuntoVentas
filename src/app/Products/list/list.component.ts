import { Component} from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent{

  productsList: ProductComponent[] =
  [
    {
      name:'Pan con chicharron',
      description:'Pan con chicharron',
      price:15
    },
    {
      name:'1/4 KG chicharron',
      description:'1/4 KG chicharron',
      price:15
    },
    {
      name:'1/2 KG chicharron',
      description:'1/2 KG chicharron',
      price:15
    },
    {
      name:'1 KG chicharron',
      description:'1 KG chicharron',
      price:15
    }
  ];

  deletedProduct?: ProductComponent;

  deleteProduct(){
     this.deletedProduct=this.productsList.shift();
     console.log(this.deletedProduct);
  }

}
