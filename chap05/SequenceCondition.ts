import DiscountCondition from './DiscountCondition';
import Screening from './Screening';

export default class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
