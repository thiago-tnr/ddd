// meu dominio nao precisa necessariamente conhecer a implementação do meu repositorio 
// pois ele nao pode ficar preso nele, pois isso pode gerar um acoplamento desnecessãrio
// contudo ainda sim meu dominio é qume controla meu repositorio, para que isso ocorra
// eu crio uma interfce
// o certo no ddd é desacoplar o serviço de dominio do repositorio, da implementação concreta dele
// essa interface é um adaptador que eu consigo plugar em qualquer tipo de banco de dados, ela quem vai 
// fazer a ligação do meu dominio com meu repositorio
export default interface RepositoryInterface<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}