import Bag from './Bag';
import Ticket from './Ticket';

export default class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  getBag(): Bag {
    return this.bag;
  }

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
