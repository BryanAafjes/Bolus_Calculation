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
var User = /** @class */ (function () {
    function User() {
    }
    User.CreateNewUser = function (username, email, password, userRole, gpId) {
        return __awaiter(this, void 0, void 0, function () {
            var creationDate, updatedDate, json, myHeaders, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        creationDate = new Date().toISOString();
                        updatedDate = new Date().toISOString();
                        json = JSON.stringify({ "username": username, "email": email, "password": password, "role": userRole, "gp": gpId, "created_at": creationDate, "updated_at": updatedDate });
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Connection", "keep-alive");
                        myHeaders.append("timeout", "5000");
                        myHeaders.append("Accept", "*/*");
                        event.preventDefault();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:8000/api/adduser", {
                                method: 'POST',
                                headers: myHeaders,
                                body: json
                            }).then(function (result) { if (result.status == 201) {
                                alert("User created");
                            }
                            else {
                                alert("User already exists");
                            } })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.VerifyUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var json, myHeaders, response, data, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = JSON.stringify({ "email": email, "password": password });
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Connection", "keep-alive");
                        myHeaders.append("timeout", "5000");
                        return [4 /*yield*/, fetch("http://localhost:8000/api/loginuser", {
                                method: 'POST',
                                headers: myHeaders,
                                body: json
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status == 201)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json().catch(function (error) { return console.log(error); })];
                    case 2:
                        data = _a.sent();
                        user = {
                            id: data['id'],
                            email: data['email'],
                            username: data['username'],
                            role: data['role'],
                            created_at: data['created_at'],
                            updated_at: data['updated_at']
                        };
                        console.log(user);
                        return [2 /*return*/, user];
                    case 3: throw (new Error('Something went wrong'));
                }
            });
        });
    };
    User.getGps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myHeaders, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Connection", "keep-alive");
                        myHeaders.append("timeout", "5000");
                        return [4 /*yield*/, fetch("http://localhost:8000/api/getgps", {
                                method: 'GET',
                                headers: myHeaders,
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json().catch(function (error) { return console.log(error); })];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    User.GetPatientsFromGp = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var json, myHeaders, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = JSON.stringify({ "id": id });
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Connection", "keep-alive");
                        myHeaders.append("timeout", "5000");
                        return [4 /*yield*/, fetch("http://localhost:8000/api/getpatientsfromgp", {
                                method: 'POST',
                                headers: myHeaders,
                                body: json
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json().catch(function (error) { return console.log(error); })];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    User.GetUserInfo = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var json, myHeaders, response, data, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = JSON.stringify({ "id": userId });
                        myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");
                        myHeaders.append("Connection", "keep-alive");
                        myHeaders.append("timeout", "5000");
                        return [4 /*yield*/, fetch("http://localhost:8000/api/selectuser", {
                                method: 'POST',
                                headers: myHeaders,
                                body: json
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response.status == 201)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json().catch(function (error) { return console.log(error); })];
                    case 2:
                        data = _a.sent();
                        user = {
                            id: data['id'],
                            email: data['email'],
                            username: data['username'],
                            role: data['role'],
                            created_at: data['created_at'],
                            updated_at: data['updated_at']
                        };
                        console.log(user);
                        return [2 /*return*/, user];
                    case 3: throw (new Error('Something went wrong'));
                }
            });
        });
    };
    return User;
}());
export { User };
