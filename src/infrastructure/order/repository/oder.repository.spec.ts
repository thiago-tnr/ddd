import { Sequelize } from "sequelize-typescript";
import Address from '../../../costumer/value-object/address';
import Customer from '../../../entity/costumer';
import Order from '../../domain/checkout/order';

import Product from '../../../product/entity/product';
import CustomerModel from '../../costumer/repository/sequelize/customer.model';
import OrderItemModel from './sequelize/order-item.model';
import OrderModel from '../../db/sequelize/model/order.model';
import ProductModel from '../../product/repository/sequelize/product.model';
import CustomerRepository from "../../costumer/repository/customer.repository";
import OrderRepository from './order.repository';
import ProductRepository from './products.repository';
import OrderItem from '../../../checkout/entity/order_item';

describe("Order repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create a new order', async () => {
    const costumerRepository = new CustomerRepository()
    const costumer = new Customer('123', 'any_name')
    const address = new Address('any_street', 123, '12345', 'any_city')
    costumer.changeAddress(address)
    await costumerRepository.create(costumer)

    const productRepository = new ProductRepository();
    const product = new Product("123", "Product 1", 10);
    await productRepository.create(product);

    const ordemItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      2
    );

    const order = new Order("123", "123", [ordemItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: "123",
      customer_id: "123",
      total: order.total(),
      items: [
        {
          id: ordemItem.id,
          name: ordemItem.name,
          price: ordemItem.price,
          quantity: ordemItem.quantity,
          order_id: "123",
          product_id: "123",
        },
      ],
    });
  })
});
