export default class Address {
  // ele não vai ter id, pois representa apenas propriedades
  // quando eu uso _ antes da variável eu estou dizendo que ela é privada 
  // como os atributos são privados eu não posso mudar o obj de valor, ele não possui setters
  // então para alterar ele eu tenho que criar uma nova instancia com o dados
  _street: string = "";
  _number: number = 0;
  _zipcode: string = "";
  _city: string = "";

  // como tenho atributos privados eu não consigo fazer alteração direto neles, o que é o correto
  // toda vez que eu for criar o objeto tenho que pssar os dados para o construtor
  constructor(street: string, number: number, zipcode: string, city: string) {
    this._street = street;
    this._number = number;
    this._zipcode = zipcode;
    this._city = city;

    this.validate()
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zipcode(): string {
    return this._zipcode;
  }

  get city(): string {
    return this._city;
  }
  
  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is required");
    }
    if (this._number === 0) {
      throw new Error("Number is required");
    }
    if (this._zipcode.length === 0) {
      throw new Error("zipcode is required");
    }
    if (this._city.length === 0) {
      throw new Error("City is required");
    }
  }
// vizualizar as informações
  toString() {
    return `${this._street}, ${this._number}, ${this._zipcode} ${this._city}`;
  }
}
