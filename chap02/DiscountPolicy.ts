import { DiscountPolicy } from './DiscountPolicy';
import Money from './Money';
import Screening from './Screening';

export interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}

export interface DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money;
}

export default abstract class DefaultDiscountPolicy implements DiscountPolicy {
  private conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening): Money {
    this.conditions.forEach(condition => {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    });

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
