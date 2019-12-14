import Movie from './Movie';
import Money from '../chap02/Money';
import DiscountCondition from './DiscountCondition';

export default class PercentDiscountMovie extends Movie {
  private percent: number;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    percent: number,
    discountConditions: DiscountCondition[]
  ) {
    super(title, runningTime, fee, discountConditions);
    this.percent = percent;
  }

  protected calculateDiscountAmount(): Money {
    return this.getFee().times(this.percent);
  }
}
