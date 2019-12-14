// import { DiscountConditionType } from './../chap04/enums';
// import Screening from './Screening';

// export default class DiscountCondition {
//   private type: DiscountConditionType;
//   private sequence: number;
//   private dayOfWeek: number;
//   private startTime: Date;
//   private endTime: Date;

//   isSatisfiedBy(screening: Screening): boolean {
//     if (this.type === DiscountConditionType.PERIOD) {
//       return this.isSatisfiedByPeriod(screening);
//     }

//     return this.isSatisfiedBySequence(screening);
//   }

//   private isSatisfiedByPeriod(screening: Screening): boolean {
//     return (
//       this.dayOfWeek === screening.getWhenScreened().getDay() &&
//       this.startTime <= screening.getWhenScreened() &&
//       this.endTime >= screening.getWhenScreened()
//     );
//   }

//   private isSatisfiedBySequence(screening: Screening): boolean {
//     return this.sequence === screening.getSequence();
//   }
// }

import Screening from './Screening';

export default interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}
