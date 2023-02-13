import { Sequelize } from 'sequelize-typescript'
import Product from '../../../product/entity/product'
import ProductModel from './sequelize/product.model'
import ProductRepository from './products.repository'

describe('Product repository test', () => {
  let sequileze: Sequelize;

  beforeEach(async () => {
    sequileze = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequileze.addModels([ProductModel]);
    await sequileze.sync();
  });

  afterEach(async () => {
    await sequileze.close();
  });

  it("should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 100,
    });
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 100,
    });

    product.changeName('Product 2')
    product.changePrice(150)

    await productRepository.update(product)

    const productRepository2 = await ProductModel.findOne({ where: { id: "1" } });
    expect(productRepository2.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 2",
      price: 150,
    });
  });

  it('should find a product', async () => {
    const productRepository = new ProductRepository()
    const product = new Product('1', 'Product 1', 100)

    await productRepository.create(product)

    const findOneProduct = await ProductModel.findOne({ where: { id: '1' } })
    const foundProduct = await productRepository.find("1")
    expect(findOneProduct.toJSON()).toStrictEqual({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
    });
  })

  it("should find all products", async () => {
    const productRepository = new ProductRepository();

    const product = new Product("1", "Product 1", 100);
    await productRepository.create(product);

    const product2 = new Product("2", "Product 2", 200);
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();
    const products = [product, product2];

    expect(products).toEqual(foundProducts);
  });
})


