import Movie from './Movie';

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

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
