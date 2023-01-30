import { IProduct } from '../../Products/main/main-product.component';
export interface IOrderDetails{
  id:number,
  product:IProduct,
  Quantity:number,
  hasDiscount:boolean,
  DiscountAmount:number
}
