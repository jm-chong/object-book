import TicketSeller from './TicketSeller';
import Audience from './Audience';

export default class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience): void {
    this.ticketSeller.sellTo(audience);
  }
}
