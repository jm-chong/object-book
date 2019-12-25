export default class RecurringSchedule {
  private subject: string;
  private dayOfWeek: number;
  private from: Date;
  private duration: number;

  constructor(
    subject: string,
    dayOfWeek: number,
    from: Date,
    duration: number
  ) {
    this.subject = subject;
    this.dayOfWeek = dayOfWeek;
    this.from = from;
    this.duration = duration;
  }

  getDayOfWeek(): number {
    return this.dayOfWeek;
  }

  getFrom(): Date {
    return this.from;
  }

  getDuration(): number {
    return this.duration;
  }
}

const schedule = new RecurringSchedule('회의', 3, new Date(), 30);
