import { DiscountPolicy } from './DiscountPolicy';
import Money from './Money';

export default class NoneDiscountPolicy implements DiscountPolicy {
  calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
