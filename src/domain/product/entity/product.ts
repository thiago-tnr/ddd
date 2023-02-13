import ProductInterface from './product.interface';

export default class Product implements ProductInterface{
  constructor(private _id: string, private _name: string, private _price: number) {
    this.validate()
  }
  
  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get price(): number {
    return this._price
  }

  changeName(name: string): void {
    this._name = name;
    this.validate()
  }

  changePrice(price: number): void {
    this._price = price
    this.validate()
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }

    if (this._name.length === 0) {
      throw new Error("Name is required")
    }

    if (this._price <= 0) {
      throw new Error("Price must be grater than 0")
    }
    return true
  }
}
