import Movie from './Movie';
import { MovieType } from './enums';
import Money from '../chap02/Money';

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  calculateFee(audienceCount: number): Money {
    switch (this.movie.getMovieType()) {
      case MovieType.AMOUNT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie.calculateAmountDiscountedFee().times(audienceCount);
        }
        break;
      case MovieType.PERCENT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie
            .calculatePercentDiscountedFee()
            .times(audienceCount);
        }
        break;
      case MovieType.NONE_DISCOUNT:
      default:
        return this.movie.calculateNoneDiscountedFee().times(audienceCount);
    }

    return this.movie.calculateNoneDiscountedFee().times(audienceCount);
  }

  public getMovie(): Movie {
    return this.movie;
  }

  public setMovie(movie: Movie): void {
    this.movie = movie;
  }

  public getSequence(): number {
    return this.sequence;
  }

  public setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  public getWhenScreened(): Date {
    return this.whenScreened;
  }

  public setWhenScreened(whenScreened: Date): void {
    this.whenScreened = whenScreened;
  }
}
