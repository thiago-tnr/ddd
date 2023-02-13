import CustomerFactory from './costumer.factory'

describe('Customer factory unit test', () => {
  it('should create a new customer', () => {
    let costumer = CustomerFactory.create("John")

    expect(costumer.id).toBeDefined
    expect(costumer.name).toBe("John")
    expect(costumer.address).toBeUndefined()
  })
})
