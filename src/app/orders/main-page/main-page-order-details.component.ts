import { IProduct } from '../../Products/product/product.component';
export interface IOrderDetails{
  id:number,
  product:IProduct,
  Quantity:number,
  hasDiscount:boolean,
  DiscountAmount:number
}
