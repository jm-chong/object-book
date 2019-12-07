import { DiscountCondition } from './DiscountPolicy';
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
      screening.getStartTime().getDay() === this.dayOfWeek &&
      this.startTime.getTime() <= screening.getStartTime().getTime() &&
      this.endTime.getTime() >= screening.getStartTime().getTime()
    );
  }
}
