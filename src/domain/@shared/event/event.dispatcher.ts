import EventDispatcherInterface from './event.dispatcher.interface';
import EventHandlerInterface from './event.handler.interface';
import EventInterface from './event.interface';

export default class EventDispatcher implements EventDispatcherInterface {

  private eventsHandlers: { [eventName: string]: EventHandlerInterface[] } = {}

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventsHandlers;
  }
  notify(event: EventInterface): void {

  }
  // nome do eevento que está ocorendo o nome do metódo que está sendo executado
  register(eventName: string, eventHandler: EventHandlerInterface): void {
    if (!this.eventsHandlers[eventName]) {
      this.eventsHandlers[eventName] = [];
    }
    this.eventsHandlers[eventName].push(eventHandler);
  }
  unregister(eventName: string, eventHandler: EventHandlerInterface): void {

  }
  unregisterAll(): void {

  }
}