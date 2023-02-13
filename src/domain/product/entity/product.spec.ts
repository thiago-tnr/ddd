import Product from './product'

describe('Product unit tests', () => {
  it('should throw error when id empty', () => {
    expect(() => {
      new Product("", "Product 1", 100)
    }).toThrowError("Id is required")
  })

  it('should throw error when name empty', () => {
    expect(() => {
      new Product("123", "", 100)
    }).toThrowError("Name is required")
  })

  it('should throw error when price is less than zero', () => {
    expect(() => {
      new Product("123", "any_name", -1)
    }).toThrowError("Price must be grater than 0")
  })

  it('should change name', () => {
    const product = new Product("123", "any_name", 1)
    product.changeName('any_name2')
    expect(product.name).toBe('any_name2')
  })

  it('should change price', () => {
    const product = new Product("123", "any_name", 1)
    product.changePrice(10)
    expect(product.price).toBe(10)
  })
})
