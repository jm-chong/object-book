import Screening from './Screening';
import Money from './Money';

export default class Reservation {
  private customer: string;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    customer: string,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}
