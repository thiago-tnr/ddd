import EventHandlerInterface from './event.handler.interface';
import EventInterface from './event.interface';

export default interface EventDispatcherInterface {
  notify(event: EventInterface): void
  // nome do eevento que está ocorendo o nome do metódo que está sendo executado
  register(eventName: string, eventHandler: EventHandlerInterface): void
  unregister(eventName: string, eventHandler: EventHandlerInterface): void
  unregisterAll(): void
}