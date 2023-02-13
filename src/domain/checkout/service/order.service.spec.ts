import Customer from '../entity/costumer'
import Order from '../checkout/order'
import OrderItem from '../entity/order_item'
import OrderService from './order.service'

describe('Order service unit tests', () => {
  it('should place an order', () => {
    const costumer = new Customer('123', 'any_name')
    const item = new OrderItem('11', '123', 100, 'any_product', 10)

    const order = OrderService.placeOrder(costumer, [item])

    expect(costumer.rewardPoints).toBe(500)
    expect(order.total()).toBe(1000)
  })

  it('should get total of all orders', () => {
    const item = new OrderItem("1", "111", 120, "any_item", 1)
    const item2 = new OrderItem("2", "222", 120, "any_item2", 2)

    const order = new Order('1', '123', [item])
    const order2 = new Order('1', '123', [item2])

    const total = OrderService.total([order, order2])

    expect(total).toBe(360)
  })
})
