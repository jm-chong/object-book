import Ticket from './Ticket';
import Audience from './Audience';

export default class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  sellTicketTo(audience: Audience): void {
    this.plusAmount(audience.buy(this.getTicket()));
  }

  getTicket(): Ticket {
    return this.tickets.shift();
  }

  minusAmount(amount: number): void {
    this.amount -= amount;
  }

  plusAmount(amount: number): void {
    this.amount += amount;
  }
}
