import DiscountCondition from './DiscountCondition';
import Screening from './Screening';

export default class PeriodCondition implements DiscountCondition {
  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: number, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime <= screening.getWhenScreened() &&
      this.endTime >= screening.getWhenScreened()
    );
  }
}
