import Order from './order'
import OrderItem from './order_item';

describe('Order unit test', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required")
  })

  it('should throw error when costumerId is empty', () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("CostumerId is required")
  })
  it('should throw error when items is empty', () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items qtd must be grater than zero")
  })

  it('should calculate total', () => {
    const item = new OrderItem("123", "any_name", 123, "p1", 2)
    const item2 = new OrderItem("123", "any_name", 321, "p2", 2)
    const order = new Order("any", "c1", [item])
    
    const total = order.total()
    expect(total).toBe(246)
    
    const order2 = new Order("any", "c1", [item, item2])
    const total2 = order2.total()

    expect(total2).toBe(888)
  })

  it('should throw error if the item qtd is less or equal 0', () => {
    expect(() => {
      const item = new OrderItem("123", "any_name", 123, "p1", 0)
      new Order("any", "c1", [item])
    }).toThrowError('Quantity must be greater than 0')
  })
})
