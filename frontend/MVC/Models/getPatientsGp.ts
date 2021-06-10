import { User } from "../../js/Controllers/userController.js";
import { cookieHelper } from "../../js/Logic/cookieHelper.js"
import { CalculateBolus } from "../Logic/boluscalculation.js";
import { api } from "../Controllers/calculationController.js";
import { UserWithBolus } from "../../js/Models/userModel.js";
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

export async function getPatientsList(){
    let gpId = cookieHelper.getCookie("id");
    if(gpId != null)
    {
        return await User.GetPatientsFromGp(gpId);
    }
}

export function PatientChart(user: UserWithBolus): HTMLCanvasElement {
  //const userId = cookieHelper.getCookie("id");
  //const data = await api.getCalculationFromApi(Number(userId));
  //Promise.resolve(data);
  let data = user.calculations;
  let labels = [];
  let weights = [];
  let carbsDose = [];

  let grafiekElement = document.createElement("canvas") as HTMLCanvasElement;
  document.getElementById("append-" + user.id).append(grafiekElement);
  //document.getElementById("patientTable").innerHTML = "";
  let i = 0;
  data.forEach(function () {
    labels = labels.concat(new Date(data[i].calculationTime).toLocaleString());
    weights = weights.concat(data[i].weight);
    carbsDose = carbsDose.concat(data[i].carbsDoseNumber);
    //document.getElementById("boluslist").insertAdjacentHTML("beforeend", "ID: " + data[i].id + " Weight: " + data[i].weight + " Carb Dose: " + data[i].carbs + " Calculation Time: " + date + "<br>" + "<br>");
    i++;
  });
  const grafiekData = {
    labels: labels,
    datasets: [{
      data: carbsDose,
      fill: false,
      borderColor: 'rgb(52, 235, 158)',
      backgroundColor: 'rgb(52, 235, 158)',
      label: 'Carbdose (in units)'
    }, {
      data: weights,
      fill: false,
      borderColor: 'rgb(245, 0, 37)',
      backgroundColor: 'rgb(245, 108, 108)',
      label: 'Weights (in kg)',

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
  return grafiek;
}