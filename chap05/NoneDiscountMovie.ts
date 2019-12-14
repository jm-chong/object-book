import Movie from './Movie';
import Money from '../chap02/Money';

export default class NoneDiscountMovie extends Movie {
  constructor(title: string, runningTime: number, fee: Money) {
    super(title, runningTime, fee);
  }

  protected calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
