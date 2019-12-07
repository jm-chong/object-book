import DiscountPolicy, { DiscountCondition } from './DiscountPolicy';
import Money from './Money';

export default class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
    this.discountAmount = discountAmount;
  }

  protected getDiscountAmount(): Money {
    return this.discountAmount;
  }
}
