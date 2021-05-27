var cookieHelper = /** @class */ (function () {
    function cookieHelper() {
    }
    cookieHelper.setCookie = function (name, val) {
        var date = new Date();
        var value = val;
        date.setTime(date.getTime() + (7 * 86400000));
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    };
    cookieHelper.getCookie = function (name) {
        var nameLenPlus = (name.length + 1);
        return document.cookie
            .split(';')
            .map(function (c) { return c.trim(); })
            .filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === name + "=";
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
    };
    cookieHelper.deleteCookie = function (name) {
        var date = new Date();
        date.setTime(date.getTime() + (-1 * 86400000));
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
    };
    return cookieHelper;
}());
export { cookieHelper };
