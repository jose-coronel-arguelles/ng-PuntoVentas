import { Component, Input} from '@angular/core';
import { IProduct } from '../main/main-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './list-product.component.html'
})
export class ProductListComponent{

  @Input() productsList: IProduct[] =[];

  deletedProduct?: IProduct;

  deleteProduct(){
     this.deletedProduct=this.productsList.shift();
     console.log(this.deletedProduct);
  }

}
