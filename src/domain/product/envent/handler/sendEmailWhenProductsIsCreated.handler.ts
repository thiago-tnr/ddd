import EventHandlerInterface from '../../../@shared/event.handler.interface';
import ProductCreatedEvent from '../producCreated.events';

export default class SendEmailWhenProductsIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
  handle(event: ProductCreatedEvent): void {
    console.log(`Send email to... `);

  }
}