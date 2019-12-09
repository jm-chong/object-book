import DiscountCondition from './DiscountCondition';
import Money from '../chap02/Money';
import { MovieType } from './enums';

export default class Movie {
  private title: string;
  private runningTime: Date;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  setMovieType(movieType: MovieType): void {
    this.movieType = movieType;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getDiscountConditions(): DiscountCondition[] {
    return this.discountConditions;
  }

  setDiscountConditions(discountConditions: DiscountCondition[]): void {
    this.discountConditions = discountConditions;
  }

  getDiscountAmount(): Money {
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money): void {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(discountPercent: number): void {
    this.discountPercent = discountPercent;
  }
}
