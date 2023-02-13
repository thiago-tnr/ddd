export default class OrderItem {
  constructor(  private _id: string,
    private _productId: string,
    private _price: number,
    private _name: string,
    private _quantity: number) {
      this.validate()
    }

    get price(): number {
      return this._price
    }
    get id(): string {
      return this._id
    }
    get name(): string {
      return this._name
    }
    get quantity(): number {
      return this._quantity
    }
    get productId(): string {
      return this._productId
    }

    orderItemTotal(): number {
      return this._price * this._quantity;
    }

    validate () {
      if (this._quantity<=0) {
        throw new Error("Quantity must be greater than 0")
      }
  }
}