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
//for testing
//module.exports = CalculateBolus;
//event listener
// window.addEventListener(
//   "load",
//   function () {
//     const buttonWeight = document.getElementById("buttonWeight");
//     let outputDailyDose;
//     if (buttonWeight) {
//       document
//         .getElementById("buttonWeight")
//         .addEventListener("click", function () {
//           const weight = (<HTMLInputElement>(
//             document.getElementById("userWeight")
//           )).value;
//           if (weight.match(/^[0-9]+$/)) {
//             if (weight) {
//               outputDailyDose = Math.round(
//                 CalculateBolus.calculateDailyDose(parseFloat(weight))
//               );
//               //check for error
//               if (outputDailyDose == 0) {
//                 alert("ERROR: Weight must be between 1 and 430 kilograms!");
//               } else {
//                 const outputBaselDose = Math.round(
//                   CalculateBolus.calculateBasalDose(outputDailyDose)
//                 );
//                 if (outputBaselDose !== 0) {
//                   document.getElementById("dailyDoseNumber").innerHTML =
//                     outputDailyDose.toString() + " Units";
//                   document.getElementById("basalDoseNumber").innerHTML =
//                     outputBaselDose.toString() + " Units";
//                 }
//               }
//             } else {
//               alert("ERROR: Enter a Value!");
//             }
//           } else {
//             alert("ERROR: Only enter positive numbers!");
//           }
//         });
//     }
//     const buttonCarbs = document.getElementById("buttonWeight");
//     if (buttonCarbs) {
//       document
//         .getElementById("buttonCarbs")
//         .addEventListener("click", function () {
//           if (outputDailyDose) {
//             const carbsWeight = (<HTMLInputElement>(
//               document.getElementById("userCarbs")
//             )).value;
//             if (carbsWeight.match(/^[0-9]+$/)) {
//               if (carbsWeight) {
//                 const output = Math.round(
//                   CalculateBolus.calculateIntakeMeal(
//                     outputDailyDose,
//                     parseFloat(carbsWeight)
//                   )
//                 );
//                 if (output == 0) {
//                   alert(
//                     "ERROR: Amount of Carbs must be between 1 and 300 grams!"
//                   );
//                 } else {
//                   document.getElementById("carbsDoseNumber").innerHTML =
//                     output.toString() + " Units";
//                 }
//               } else {
//                 alert("ERROR: Enter a Value!");
//               }
//             } else {
//               alert("ERROR: Only enter positive numbers!");
//             }
//           } else {
//             alert("ERROR: Enter bodyweight!");
//           }
//         });
//     }
//   },
//   false
// );