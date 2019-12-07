export default class Money {
  constructor(amount: number) {
    this.amount = amount;
  }

  private amount: number;

  static wons(amount: number): Money {
    return new Money(amount);
  }

  plus(amount: Money): Money {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money): Money {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number): Money {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money): boolean {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount >= other.amount;
  }

  static ZERO: Money = Money.wons(0);
}
