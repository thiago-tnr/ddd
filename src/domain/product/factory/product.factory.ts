import { v4 } from 'uuid';
import Product from '../entity/product';
import ProductB from '../entity/product-b';
import ProductInterface from '../entity/product.interface';

export default class ProductFactory {
  public static create( type: string, name: string, price: number): ProductInterface {
    switch (type) {
      case "a":
        return new Product(v4(), name, price)
      case "b":
        return new ProductB(v4(), name, price * 2)
      default:
        throw new Error("Product type not supported")
    }
  }
}