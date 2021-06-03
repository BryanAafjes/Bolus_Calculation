import { CalculateBolus } from "../Logic/boluscalculation.js";
import { api } from "../Controllers/calculationController.js";
import { cookieHelper } from "../Logic/cookieHelper.js"
//import { Chart } from '/troepen/ttpil2/Philips-S2/frontend/node_modules/chart.js'
//import * as chartjs from '../../node_modules/chart.js/dist/chart.esm.js'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip

} from '../../node_modules/chart.js/dist/chart.esm.js'


function UpdateFrontendBolusList() {
  (async () => {
    const userId = cookieHelper.getCookie("id");
    const data = await api.getCalculationFromApi(Number(userId));
    Promise.resolve(data);
    console.log(data);
    console.log(data);
    let labels = [];
    let weights = [];
    let carbs = [];

    const grafiekElement = document.getElementById("bolusChart") as HTMLCanvasElement;

    document.getElementById("boluslist").innerHTML = "";
    let i = 0;
    data.forEach(function () {
      const date = new Date(data[i].calculationTime).toLocaleString();
      let labels2 = [date]
      labels = labels.concat(labels2);
      let weights2 = [data[i].weight];
      let carbs2 = [data[i].carbs];
      weights = weights.concat(weights2);
      carbs = carbs.concat(carbs2);
      //document.getElementById("boluslist").insertAdjacentHTML("beforeend", "ID: " + data[i].id + " Weight: " + data[i].weight + " Carb Dose: " + data[i].carbs + " Calculation Time: " + date + "<br>" + "<br>");
      i++;
    });
    const grafiekData = {
      labels: labels,
      datasets: [{
        data: carbs,
        fill: false,
        borderColor: 'rgb(52, 235, 158)',
        backgroundColor: 'rgb(52, 235, 158)',
        label: 'carbs'
      }, {
        data: weights,
        fill: false,
        borderColor: 'rgb(245, 0, 37)',
        backgroundColor: 'rgb(245, 108, 108)',
        label: 'weight',

      }]

    };
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip
    );
    const grafiek = new Chart(grafiekElement, {

      type: 'line',
      data: grafiekData,
      options: {
        scales: {
          yAxes: {
            stacked: false,
            Ticks: {
              mirror: true,

            },

          },
          xAxes: {
            stacked: false,
            Ticks: {
              mirror: true
            },
            title: {
              display: true,
              text: 'Time of calculation',
              color: '#000000',
              font: {
                family: 'sans-serif',
                size: 20,
                style: 'normal',
                lineHeight: 1.2
              },
              padding: {
                top: 30,
                left: 0,
                right: 0,
                bottom: 0
              }
            }
          }
        }
      },
    });
  })();
}

let outputDailyDose;
let outputBasalDose;

function changeWeightInput(inputValue: string) {
  if (inputValue.match(/^[0-9]+$/)) {
    if (inputValue) {
      outputDailyDose = Math.round(CalculateBolus.calculateDailyDose(parseFloat(inputValue)));
      //check for error
      if (outputDailyDose == 0) {
        alert("ERROR: Weight must be between 1 and 430 kilograms!");
      } else {
        outputBasalDose = Math.round(CalculateBolus.calculateBasalDose(outputDailyDose));

        if (outputBasalDose !== 0) {
          document.getElementById("dailyDoseNumber").innerHTML = outputDailyDose.toString() + " Units";
          document.getElementById("basalDoseNumber").innerHTML = outputBasalDose.toString() + " Units";
          return outputDailyDose;
        }
      }
    } else {
      alert("ERROR: Enter a Value!");
    }
  } else {
    alert("ERROR: Only enter positive numbers!");
  }
}

function calculateMealDose(inputValue: string, weightAPI: number) {
  if (inputValue.match(/^[0-9]+$/)) {
    if (inputValue) {
      const carbsDose = Math.round(CalculateBolus.calculateIntakeMeal(outputDailyDose, parseFloat(inputValue)));

      if (carbsDose == 0) {
        alert("ERROR: Amount of Carbs must be between 1 and 300 grams!");
      } else {
        const userID: number = parseInt(cookieHelper.getCookie("id"));
        if (userID != null) {
          api.sendCalculationToAPI(weightAPI, outputDailyDose, outputBasalDose, parseFloat(inputValue), carbsDose, userID);
        } else {
          console.log("Error! Login First!");
        }
        document.getElementById("carbsDoseNumber").innerHTML = carbsDose.toString() + " Units";
      }
    } else {
      alert("ERROR: Enter a Value!");
    }
  } else {
    alert("ERROR: Only enter positive numbers!");
  }
}

//event listener
window.addEventListener(
  "load",
  function () {
    const buttonWeight = document.getElementById("buttonWeight");
    const buttonGetCalculations = document.getElementById("buttonCalculationList");
    const buttonCarbs = document.getElementById("buttonWeight");

    let outputDailyDose;
    let weightAPI;

    if (buttonGetCalculations) {
      document.getElementById("buttonCalculationList").addEventListener("click", function () {
        UpdateFrontendBolusList();
      });
    }

    if (buttonWeight) {
      document.getElementById("buttonWeight").addEventListener("click", function () {
        const weight = ( < HTMLInputElement > (document.getElementById("userWeight"))).value;
        weightAPI = weight;

        outputDailyDose = changeWeightInput(weight);
      });
    }

    if (buttonCarbs) {
      document.getElementById("buttonCarbs").addEventListener("click", function () {
        if (outputDailyDose) 
        {
          const carbsWeight = ( < HTMLInputElement > (document.getElementById("userCarbs"))).value;

          calculateMealDose(carbsWeight, weightAPI);
        } 
        else 
        {
          alert("ERROR: First enter bodyweight!");
        }
      });
    }
  },
  false
);