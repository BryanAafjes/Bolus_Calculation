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
import { User } from "../../js/Controllers/userController.js";
import { cookieHelper } from "../../js/Logic/cookieHelper.js";
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip } from '../../node_modules/chart.js/dist/chart.esm.js';
export function getPatientsList() {
    return __awaiter(this, void 0, void 0, function () {
        var gpId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gpId = cookieHelper.getCookie("id");
                    if (!(gpId != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, User.GetPatientsFromGp(gpId)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/];
            }
        });
    });
}
export function PatientChart(user) {
    //const userId = cookieHelper.getCookie("id");
    //const data = await api.getCalculationFromApi(Number(userId));
    //Promise.resolve(data);
    var data = user.calculations;
    var labels = [];
    var weights = [];
    var carbsDose = [];
    var grafiekElement = document.createElement("canvas");
    document.getElementById("append-" + user.id).append(grafiekElement);
    //document.getElementById("patientTable").innerHTML = "";
    var i = 0;
    data.forEach(function () {
        labels = labels.concat(new Date(data[i].calculationTime).toLocaleString());
        weights = weights.concat(data[i].weight);
        carbsDose = carbsDose.concat(data[i].carbsDoseNumber);
        //document.getElementById("boluslist").insertAdjacentHTML("beforeend", "ID: " + data[i].id + " Weight: " + data[i].weight + " Carb Dose: " + data[i].carbs + " Calculation Time: " + date + "<br>" + "<br>");
        i++;
    });
    var grafiekData = {
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
    Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);
    var grafiek = new Chart(grafiekElement, {
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
