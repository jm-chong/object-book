import Screening from './Screening';
import Customer from './Customer';
// import { DiscountConditionType, MovieType } from './enums';
import Money from '../chap02/Money';
import Reservation from './Reservation';

export default class ReservationAgency {
  reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ): Reservation {
    const fee: Money = screening.calculateFee(audienceCount);
    return new Reservation(customer, screening, fee, audienceCount);

    // const movie = screening.getMovie();
    // let discountable = false;

    // for (const discountCondition of movie.getDiscountConditions()) {
    //   if (discountCondition.getType() === DiscountConditionType.PERIOD) {
    //     discountable =
    //       screening.getWhenScreened().getDay() ===
    //         discountCondition.getDayOfWeek() &&
    //       discountCondition.getStartTime().getTime() <=
    //         screening.getWhenScreened().getTime() &&
    //       discountCondition.getEndTime().getTime() >=
    //         screening.getWhenScreened().getTime();
    //   } else {
    //     discountable =
    //       discountCondition.getSequence() === screening.getSequence();
    //   }

    //   if (discountable) {
    //     break;
    //   }
    // }

    // let fee: Money;

    // if (discountable) {
    //   let discountAmount = Money.ZERO;

    //   switch (movie.getMovieType()) {
    //     case MovieType.AMOUNT_DISCOUNT:
    //       discountAmount = movie.getDiscountAmount();
    //       break;
    //     case MovieType.PERCENT_DISCOUNT:
    //       discountAmount = movie.getFee().times(movie.getDiscountPercent());
    //       break;
    //     case MovieType.NONE_DISCOUNT:
    //     default:
    //       discountAmount = Money.ZERO;
    //       break;
    //   }

    //   fee = movie
    //     .getFee()
    //     .minus(discountAmount)
    //     .times(audienceCount);
    // } else {
    //   fee = movie.getFee();
    // }

    // return new Reservation(customer, screening, fee, audienceCount);
  }
}
