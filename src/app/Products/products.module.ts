import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './list/list-product.component';
import { ProductComponent } from './main/main-product.component';
import { AddComponent } from './add/add-product.component';
@NgModule({
  declarations:[
    ProductComponent,
    ProductListComponent,
    AddComponent
  ],
  exports:[
    ProductComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ],
})

export class ProductsModule{

}
