var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { CalculateBolus } from "../Logic/boluscalculation.js";
import { api } from "../Controllers/calculationController.js";
import { cookieHelper } from "../Logic/cookieHelper.js";
//import { Chart } from '/troepen/ttpil2/Philips-S2/frontend/node_modules/chart.js'
//import * as chartjs from '../../node_modules/chart.js/dist/chart.esm.js'
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip } from '../../node_modules/chart.js/dist/chart.esm.js';
function UpdateFrontendBolusList() {
    var _this = this;
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var userId, data, labels, weights, carbs, grafiekElement, i, grafiekData, grafiek;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = cookieHelper.getCookie("id");
                    return [4 /*yield*/, api.getCalculationFromApi(Number(userId))];
                case 1:
                    data = _a.sent();
                    Promise.resolve(data);
                    console.log(data);
                    console.log(data);
                    labels = [];
                    weights = [];
                    carbs = [];
                    grafiekElement = document.getElementById("bolusChart");
                    document.getElementById("boluslist").innerHTML = "";
                    i = 0;
                    data.forEach(function () {
                        var date = new Date(data[i].calculationTime).toLocaleString();
                        var labels2 = [date];
                        labels = labels.concat(labels2);
                        var weights2 = [data[i].weight];
                        var carbs2 = [data[i].carbs];
                        weights = weights.concat(weights2);
                        carbs = carbs.concat(carbs2);
                        //document.getElementById("boluslist").insertAdjacentHTML("beforeend", "ID: " + data[i].id + " Weight: " + data[i].weight + " Carb Dose: " + data[i].carbs + " Calculation Time: " + date + "<br>" + "<br>");
                        i++;
                    });
                    grafiekData = {
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
                    Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);
                    grafiek = new Chart(grafiekElement, {
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
                    return [2 /*return*/];
            }
        });
    }); })();
}
function changeWeightInput(inputValue) {
    var outputDailyDose;
    if (inputValue.match(/^[0-9]+$/)) {
        if (inputValue) {
            outputDailyDose = Math.round(CalculateBolus.calculateDailyDose(parseFloat(inputValue)));
            //check for error
            if (outputDailyDose == 0) {
                alert("ERROR: Weight must be between 1 and 430 kilograms!");
            }
            else {
                var outputBaselDose = Math.round(CalculateBolus.calculateBasalDose(outputDailyDose));
                if (outputBaselDose !== 0) {
                    document.getElementById("dailyDoseNumber").innerHTML = outputDailyDose.toString() + " Units";
                    document.getElementById("basalDoseNumber").innerHTML = outputBaselDose.toString() + " Units";
                    return outputDailyDose;
                }
            }
        }
        else {
            alert("ERROR: Enter a Value!");
        }
    }
    else {
        alert("ERROR: Only enter positive numbers!");
    }
}
function calculateMealDose(inputValue, weightAPI, outputDailyDose) {
    if (inputValue.match(/^[0-9]+$/)) {
        if (inputValue) {
            var output = Math.round(CalculateBolus.calculateIntakeMeal(outputDailyDose, parseFloat(inputValue)));
            if (output == 0) {
                alert("ERROR: Amount of Carbs must be between 1 and 300 grams!");
            }
            else {
                var userID = parseInt(cookieHelper.getCookie("id"));
                if (userID != null) {
                    api.sendCalculationToAPI(weightAPI, parseFloat(inputValue), userID);
                }
                else {
                    console.log("Error! Login First!");
                }
                document.getElementById("carbsDoseNumber").innerHTML = output.toString() + " Units";
            }
        }
        else {
            alert("ERROR: Enter a Value!");
        }
    }
    else {
        alert("ERROR: Only enter positive numbers!");
    }
}
//event listener
window.addEventListener("load", function () {
    var buttonWeight = document.getElementById("buttonWeight");
    var buttonGetCalculations = document.getElementById("buttonCalculationList");
    var buttonCarbs = document.getElementById("buttonWeight");
    var outputDailyDose;
    var weightAPI;
    if (buttonGetCalculations) {
        document.getElementById("buttonCalculationList").addEventListener("click", function () {
            UpdateFrontendBolusList();
        });
    }
    if (buttonWeight) {
        document.getElementById("buttonWeight").addEventListener("click", function () {
            var weight = (document.getElementById("userWeight")).value;
            weightAPI = weight;
            outputDailyDose = changeWeightInput(weight);
        });
    }
    if (buttonCarbs) {
        document.getElementById("buttonCarbs").addEventListener("click", function () {
            if (outputDailyDose) {
                var carbsWeight = (document.getElementById("userCarbs")).value;
                calculateMealDose(carbsWeight, weightAPI, outputDailyDose);
            }
            else {
                alert("ERROR: First enter bodyweight!");
            }
        });
    }
}, false);
