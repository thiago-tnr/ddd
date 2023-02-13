import Product from '../../../domain/product/entity/product';
import ProductRepositoryInterface from '../../../domain/product/repository/product-repository.interface';
import ProductModel from './sequelize/product.model';


export default class ProductRepository implements ProductRepositoryInterface {
  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });

  }
  async update(entity: Product): Promise<void> {
    await ProductModel.update({
      name: entity.name,
      price: entity.price
    },
      {
        where: {
          id: entity.id
        }
      })
  }
  async find(id: string): Promise<Product> {
    const data = await ProductModel.findOne({
      where: {
        id: id
      }
    })
    return data.dataValues
  }
  async findAll(): Promise<Product[]> {
    const productModel = await ProductModel.findAll()
    return productModel.map((productModel) =>
      new Product(productModel.id, productModel.name, productModel.price)
    )
  }
}