import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../main/main-product.component';

@Component({
  selector: 'app-add',
  templateUrl: './add-product.component.html'
})
export class AddComponent {

  @Input() newProduct: IProduct={
    name:'',
    description: '',
    price: 0
  }
  @Output() onNewProduct: EventEmitter<IProduct> = new EventEmitter();

  add(){
    if (this.newProduct.name.trim().length===0) {return;}

    console.log(this.newProduct );

    this.onNewProduct.emit(this.newProduct);

    this.newProduct={
      name:'',
      description: '',
      price: 0
    }
  }
  edit(){
    console.log(this.newProduct);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

