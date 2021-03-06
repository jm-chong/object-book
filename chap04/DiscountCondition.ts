import { DiscountConditionType } from './enums';
export default class DiscountCondition {
  private type: DiscountConditionType;
  private sequence: number;

  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  isDiscountable(
    type: DiscountConditionType,
    data: {
      dayOfWeek?: number;
      sequence?: number;
      time?: Date;
    }
  ): boolean {
    if (type === DiscountConditionType.PERIOD) {
      const { dayOfWeek, time } = data;
      return (
        this.dayOfWeek === dayOfWeek &&
        this.startTime <= time &&
        this.endTime >= time
      );
    }

    if (type === DiscountConditionType.SEQUENCE) {
      const { sequence } = data;
      return this.sequence === sequence;
    }
  }

  getType(): DiscountConditionType {
    return this.type;
  }

  setType(type: DiscountConditionType): void {
    this.type = type;
  }
  getSequence(): number {
    return this.sequence;
  }
  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getDayOfWeek(): number {
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek: number): void {
    this.dayOfWeek = dayOfWeek;
  }

  getStartTime(): Date {
    return this.startTime;
  }

  setStartTime(startTime: Date): void {
    this.startTime = startTime;
  }

  getEndTime(): Date {
    return this.endTime;
  }

  setEndTime(endTime: Date): void {
    this.endTime = endTime;
  }
}
