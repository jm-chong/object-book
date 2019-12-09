import Money from '../chap02/Money';
import Screening from './Screening';
import Customer from './Customer';

export default class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    customer: Customer,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  public getScreening(): Screening {
    return this.screening;
  }

  public setScreening(screening: Screening): void {
    this.screening = screening;
  }

  public getFee(): Money {
    return this.fee;
  }

  public setFee(fee: Money): void {
    this.fee = fee;
  }

  public getAudienceCount(): number {
    return this.audienceCount;
  }

  public setAudienceCount(audienceCount: number): void {
    this.audienceCount = audienceCount;
  }
}
