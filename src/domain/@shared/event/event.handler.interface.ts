import EventInterface from './event.interface';
// aqui eu estou dizendo que tneho um evento generico que implementar o eventInterface
// o meu tipo T é sempr eum eventInterface que tem por padrão um eventInterface
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
  handle(event: T): void
}