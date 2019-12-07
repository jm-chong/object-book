import DiscountPolicy, { DiscountCondition } from './DiscountPolicy';
import Screening from './Screening';
import Money from './Money';

export default class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, conditions: DiscountCondition[]) {
    super(conditions);
    this.percent = percent;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}
