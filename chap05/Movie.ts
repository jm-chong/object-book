import Money from '../chap02/Money';
import { MovieType } from '../chap04/enums';
import Screening from './Screening';
import DiscountCondition from './DiscountCondition';

export default abstract class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  // private discountAmount: Money;
  // private discountPercent: number;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountConditions?: DiscountCondition[]
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;
  }

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditions.reduce(
      (acc: boolean, condition: DiscountCondition) =>
        condition.isSatisfiedBy(screening) || acc,
      false
    );
  }

  protected abstract calculateDiscountAmount();

  protected getFee(): Money {
    return this.fee;
  }

  // private calculateDiscountAmount(): Money {
  //   switch (this.movieType) {
  //     case MovieType.AMOUNT_DISCOUNT:
  //       return this.calculateAmountDiscountAmount();
  //     case MovieType.PERCENT_DISCOUNT:
  //       return this.calcluatePercentDiscountAmount();
  //     case MovieType.NONE_DISCOUNT:
  //       return this.calculateNoneDiscountAmount();
  //   }

  //   throw new Error();
  // }

  // private calculateAmountDiscountAmount(): Money {
  //   return this.discountAmount;
  // }
  // private calcluatePercentDiscountAmount(): Money {
  //   return this.fee.times(this.discountPercent);
  // }
  // private calculateNoneDiscountAmount(): Money {
  //   return Money.ZERO;
  // }
}
