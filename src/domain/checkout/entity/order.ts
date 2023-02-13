import OrderItem from './order_item';

export default class Order {
  // se está em diferente agregados a relação é pelo id
  // se está no mesmo agregado se faz a relação pelo objeto
  _id: string;
  _costumerId: string;
  _items: OrderItem[]
  _total: number

  constructor(id: string, costumerId:string, items: OrderItem[]) {
    this._id = id;
    this._costumerId = costumerId
    this._items =items
    this._total = this.total()
    this.validate()
  }

  get id(): string {
    return this._id
  }
  get costumerId(): string {
    return this._costumerId
  }
  get items(): OrderItem[] {
    return this._items
  }

  validate():boolean {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }

    if(this._costumerId.length === 0) {
      throw new Error('CostumerId is required')
    }

    if(this._items.length === 0) {
      throw new Error('Items qtd must be grater than zero')
    }

    return true
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}