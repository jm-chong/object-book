export default class Event {
  private subject: string;
  private from: Date;
  private duration: number;

  constructor(subject: string, from: Date, duration: number) {
    this.subject = subject;
    this.from = from;
    this.duration = duration;
  }
}

const meeting = new Event('회의', new Date(2019, 5, 8, 10, 30), 30);
