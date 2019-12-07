import Money from './Money';
import Reservation from './Reservation';
import Movie from './Movie';

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this.sequence == sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  reserve(customer: string, audienceCount: number): Reservation {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
