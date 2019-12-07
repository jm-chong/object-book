import TicketOffice from './TicketOffice';
import Audience from './Audience';

export default class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience): void {
    this.ticketOffice.sellTicketTo(audience);
  }
}
