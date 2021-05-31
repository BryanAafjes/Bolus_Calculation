var CalculateBolus = /** @class */ (function () {
    function CalculateBolus() {
    }
    CalculateBolus.calculateDailyDose = function (weight) {
        //Weight in kg
        if (weight >= 1 && weight <= 430) {
            var totalDailyIntake = 0.55 * weight;
            return totalDailyIntake;
        }
        else {
            return 0;
        }
    };
    CalculateBolus.calculateBasalDose = function (totalDailyIntake) {
        //DailyIntake in Units
        if (totalDailyIntake > 0) {
            var basalDose = totalDailyIntake / 2;
            return basalDose;
        }
        else {
            return 0;
        }
    };
    CalculateBolus.calculateIntakeMeal = function (
    //DailyIntake in Units, mealCarbs in grams
    totalDailyIntake, mealCarbs) {
        if (mealCarbs >= 1 && mealCarbs <= 300) {
            var ratio = 500 / totalDailyIntake;
            var intakeMeal = mealCarbs / ratio;
            return intakeMeal;
        }
        else {
            return 0;
        }
    };
    return CalculateBolus;
}());
export { CalculateBolus };
