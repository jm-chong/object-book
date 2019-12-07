import Money from './Money';
import DiscountPolicy from './DiscountPolicy';
import Screening from './Screening';

export default class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountPolicy: DiscountPolicy
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee(): Money {
    return this.fee;
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }

  changeDiscountPolicy(discountPolicy: DiscountPolicy): void {
    this.discountPolicy = discountPolicy;
  }
}
