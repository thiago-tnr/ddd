import Address from '../value-object/address'
import Customer from './costumer'

describe('Costumer', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let costumer = new Customer("", "John")
    }).toThrowError("Id is required")
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      let costumer = new Customer("123", "")
    }).toThrowError("Name is required")
  })

  it('should change name', () => {
    // Arange
    let costumer = new Customer("123", "John")
    // Act
    costumer.changeName("Jane")
    // Assert
    expect(costumer.name).toBe("Jane")
  })

  it('should activate', () => {
    // Arange
    let costumer = new Customer("123", "John")
    const address = new Address("rua 1", 123, "30555140", "Bh")
    costumer.address = address
    // Act
    costumer.activate()
    // Assert
    expect(costumer.isActive()).toBeTruthy()
  })

  it('should throw error when address is undefined', () => {
    expect(() => {
      let costumer = new Customer("123", "John")
      costumer.activate()
    }).toThrowError("Address is mandatory to activate a costumer")
  })

  it('should deactivate', () => {
    // Arange
    let costumer = new Customer("123", "John")
    // Act
    costumer.deactivate()
    // Assert
    expect(costumer.isActive()).toBeFalsy()
  })

  it('should add reward points', () => {
    const costumer = new Customer('123', 'any-costumer')
    expect(costumer.rewardPoints).toBe(0)

    costumer.addRewardPoints(10)
    expect(costumer.rewardPoints).toBe(10)

    costumer.addRewardPoints(10)
    expect(costumer.rewardPoints).toBe(20)
  })
})
