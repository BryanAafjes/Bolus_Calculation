var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
export var UserRole;
(function (UserRole) {
    UserRole["PATIENT"] = "Patient";
    UserRole["GP"] = "Gp";
})(UserRole || (UserRole = {}));
var userModel = /** @class */ (function () {
    function userModel() {
    }
    return userModel;
}());
export { userModel };
var Bolus = /** @class */ (function () {
    function Bolus() {
    }
    return Bolus;
}());
var userWithBolus = /** @class */ (function (_super) {
    __extends(userWithBolus, _super);
    function userWithBolus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return userWithBolus;
}(userModel));
export { userWithBolus };
