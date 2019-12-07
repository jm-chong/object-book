import { DiscountCondition } from './DiscountPolicy';
import Screening from './Screening';

export default class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence);
  }
}
