import Address from './address'

export default class Customer {
  // o costumer aqui é uma entidade
  // o id é unico mais os outros atributos são mutaveis com o tempo
  // uma entidade além de conter comportamentos deve conter as regras de negócio
  // essas regras são o que fazem o DDD ser o DDD, pois a entidade manipula o coração da aplicação
  // quanbdo estamos pensando em motivo para a mudança normalmente estamos pensando em regra de negocio

  _id: string
  _name: string
  // meu address pode inicializar em branco com o uso do !
  _address!: Address
  _active: boolean = true
  _rewardPoints: number = 0

  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  // quando eu possuo uma entidade que somente possui getters e setters e mantém esse padrão,
  // ela é anemica, pois ela servirá somente para armazenamento de dados, porque ele não carrega nenhuma regra de negócio
  // nesse caso ela irá se assemelhar com uma entidade de repositório

  // get address(): string {
  //   return this.id
  // }

  // se eu quero mudar o endereço eu tenho duas formas, criar um metodo changeAdress ou usar o setAddress
  // nesse caso ambos vão fazer a mesma coisa o que vai mudar a é expresividade do que quero fazer
  // quando eu penso em usar o set name(), por exemplo ele está ali por estar, ou seja, quando precisar eu mudo
  // quando eu uso um metoodo de mudança como o changeName, eu estou pensando em uma regra de negocio, em uma intenção que o sistema tem
  // de uma necessecidade de mudança
  //a semantica demosntra intenção de negocio 

  // a modelagem do dominio rico expressa o negócio e não metodos getters e setters
  // a validação do DDD é uma garantia de que o estado atual da minha entidade seja sempre o correto

  // todas as vezes que eu for acessar uma entidade eu tenho que garantir que os seus dados estão consistentes, isso implica em
  // todos os dados que são obrigátios para que minha entidade funcione, precisam ser incluídos no construtor como obrigatório
  // changeAddrress(address: stirng) {
  //   this._address = address
  // }

  // set address(address: string){
  //   this._address = address
  // }

  // uma entidade por padrão, vai ter que SEMPRE se auto validar
  // por isso eu sempre crio o meu metódo de validação e passo ele no construtor
  // pois no momento de construção do meu objeto ele estará se auto validando
  // também é interessante rodar a validação dentro de cada metódo de altereação que eu tiver
  // para ter a plena garantia de que se alguma coisa acontecer fora do padrão
  // a minha entidade continuara consistente

  // essa é uma entidade (com metódos validadores e com regra de négocio) focada em negócio e não em persistencia
  // quando eu for usar meu orm para persistir dados eu terei que ter uma outra entidade(model) focada em persistencia

  validate() {
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
  }

  get name(): string {
    return this._name
  }

  get id(): string {
    return this._id
  }

  get rewardPoints(): number {
    return this._rewardPoints
  }

  get address(): Address {
    return this._address;
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  isActive(): boolean {
    return this._active
  }

  activate() {
    if (this._address === undefined) {
      throw new Error('Address is mandatory to activate a costumer')
    }
    this._active = true
  }

  deactivate() {
    this._active = false
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points
  }

  changeAddress(address: Address) {
    this._address = address
  }

  set address(address: Address) {
    this._address = address
  }

}