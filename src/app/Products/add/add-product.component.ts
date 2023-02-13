import { Component, Input } from '@angular/core';
import { IProduct } from '../main/main-product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './add-product.component.html'
})
export class AddComponent {

  @Input() newProduct: IProduct={
    name:'',
    description: '',
    price: 0
  }

  constructor(private productoService: ProductService ){

  }

  // @Output() onNewProduct: EventEmitter<IProduct> = new EventEmitter();

  add(){
    if (this.newProduct.name.trim().length===0) {return;}

    this.productoService.add(this.newProduct);

    this.newProduct={
      name:'',
      description: '',
      price: 0
    }
  }

}

