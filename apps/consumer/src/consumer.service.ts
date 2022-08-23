import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class ConsumerService {
  handleOrderCreated(data: OrderCreatedEvent) {
    console.log(data);
  }
}
