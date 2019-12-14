import Movie from './Movie';

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  //   reserve(customer: Customer, audienceCount: number): Reservation {}

  getWhenScreened(): Date {
    return this.whenScreened;
  }
  getSequence(): number {
    return this.sequence;
  }

  //   private calculateFee(audienceCount: number) {
  //     return this.movie.calculateMovieFee(this).times(audienceCount);
  //   }
}
