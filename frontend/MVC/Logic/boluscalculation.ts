
  export class CalculateBolus {
  static calculateDailyDose(weight: number): number {
    //Weight in kg
    if (weight >= 1 && weight <= 430) {
      const totalDailyIntake: number = 0.55 * weight;
      return totalDailyIntake;
    } else {
      return 0;
    }
  }

  static calculateBasalDose(totalDailyIntake: number): number {
    //DailyIntake in Units
    if (totalDailyIntake > 0) {
      const basalDose: number = totalDailyIntake / 2;
      return basalDose;
    } else {
      return 0;
    }
  }

  static calculateIntakeMeal(
    //DailyIntake in Units, mealCarbs in grams
    totalDailyIntake: number,
    mealCarbs: number
  ): number {
    if (mealCarbs >= 1 && mealCarbs <= 300) {
      const ratio: number = 500 / totalDailyIntake;
      const intakeMeal: number = mealCarbs / ratio;
      return intakeMeal;
    } else {
      return 0;
    }
  }
}
