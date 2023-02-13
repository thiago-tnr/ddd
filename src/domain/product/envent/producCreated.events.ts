import EventInterface from '../../@shared/event.interface';
// aqui nos estamos representando o evento de criação de produto
export default class ProductCreatedEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: any

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date()
    this.eventData = eventData
  }
}