import Product from '../entity/product'
import ProductService from './product.service'

describe('Product service unit test', () => {
  it('should change the prices of all products', () => {
    const product1 = new Product("1", "any_product", 100)
    const product2 = new Product("2", "any_product2", 1000)
    const products = [product1, product2]

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(200)
    expect(product2.price).toBe(2000)
  })
})
/** aqui temos um típo caso de domain service, pois eu tenho que mudar o preço de todos os produtos
* o que não faz sentido ser dentro da minha classe produto, pois afetrá todos eles e não somente um no 
* momento da sua criação
* CUIDADO - nem sempre quando eu vou alterar dados em larga escala no meu banco de dados
* eu devo usar domain services, tem certas coisas que é melhor usar rotina para fazer um update
*/
