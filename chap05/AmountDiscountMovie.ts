import Movie from './Movie';
import Money from '../chap02/Money';
import DiscountCondition from './DiscountCondition';

export default class AmountDiscountMovie extends Movie {
  private discountAmount: Money;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountAmount: Money,
    discountConditions: DiscountCondition[]
  ) {
    super(title, runningTime, fee, discountConditions);
    this.discountAmount = discountAmount;
  }

  protected calculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}
