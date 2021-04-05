import {CalculateBolus} from "../Controllers/boluscalculation.js";
import {api} from "../Controllers/apiController.js";

//event listener
window.addEventListener(
    "load",
    function () {
      const buttonWeight = document.getElementById("buttonWeight");
      let outputDailyDose;
      let weightAPI;

      if (buttonWeight) {
        document
          .getElementById("buttonWeight")
          .addEventListener("click", function () {
            const weight = (<HTMLInputElement>(
              document.getElementById("userWeight")
            )).value;
            weightAPI = weight;

            if (weight.match(/^[0-9]+$/)) {
              if (weight) {
                outputDailyDose = Math.round(
                  CalculateBolus.calculateDailyDose(parseFloat(weight))
                );
                //check for error
                if (outputDailyDose == 0) {
                  alert("ERROR: Weight must be between 1 and 430 kilograms!");
                } else {
                  const outputBaselDose = Math.round(
                    CalculateBolus.calculateBasalDose(outputDailyDose)
                  );

                  if (outputBaselDose !== 0) {
                    document.getElementById("dailyDoseNumber").innerHTML =
                      outputDailyDose.toString() + " Units";
                    document.getElementById("basalDoseNumber").innerHTML =
                      outputBaselDose.toString() + " Units";
                  }
                }
              } else {
                alert("ERROR: Enter a Value!");
              }
            } else {
              alert("ERROR: Only enter positive numbers!");
            }
          });
        }

      const buttonCarbs = document.getElementById("buttonWeight");

    if (buttonCarbs) {
        document
          .getElementById("buttonCarbs")
          .addEventListener("click", function () {
            if (outputDailyDose) {
              const carbsWeight = (<HTMLInputElement>(
                document.getElementById("userCarbs")
              )).value;

              api.sendCalculationToAPI(weightAPI, parseFloat(carbsWeight));

              if (carbsWeight.match(/^[0-9]+$/)) {
                if (carbsWeight) {
                  const output = Math.round(
                    CalculateBolus.calculateIntakeMeal(
                      outputDailyDose,
                      parseFloat(carbsWeight)
                    )
                  );

                  if (output == 0) {
                    alert(
                      "ERROR: Amount of Carbs must be between 1 and 300 grams!"
                    );
                  } else {
                    document.getElementById("carbsDoseNumber").innerHTML =
                      output.toString() + " Units";
                  }
                } else {
                  alert("ERROR: Enter a Value!");
                }
              } else {
                alert("ERROR: Only enter positive numbers!");
              }
            } else {
              alert("ERROR: Enter bodyweight!");
            }
          });
      }
    },
    false
  );
