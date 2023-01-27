import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations:[
    ProductComponent,
    ListComponent
  ],
  exports:[
    ListComponent,
    ProductComponent
  ],
  imports:[
    CommonModule
  ],
})

export class ProductsModule{

}
