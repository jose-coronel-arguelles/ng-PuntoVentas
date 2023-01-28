import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ],
})

export class ProductsModule{

}
