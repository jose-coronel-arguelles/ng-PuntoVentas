import { Component} from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './list-product.component.html'
})
export class ProductListComponent{

  get products(){
    return this.productService.products;
  }

  constructor( private productService: ProductService){
  }

}
