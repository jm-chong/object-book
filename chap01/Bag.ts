import Invitation from './Inviataion';
import Ticket from './Ticket';

export default class Bag {
  constructor(amount: number, invitation?: Invitation) {
    if (invitation) {
      this.invitation = invitation;
    }

    this.amount = amount;
  }

  private amount: number;
  private invitation: Invitation;
  private ticket: Ticket;

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  private hasInvitation(): boolean {
    return this.invitation !== null;
  }

  private hasTicket(): boolean {
    return this.ticket !== null;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  private plusAmount(amount: number): void {
    this.amount += amount;
  }
}
