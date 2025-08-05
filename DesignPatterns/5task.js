var EmailAlert = /** @class */ (function () {
    function EmailAlert() {
    }
    EmailAlert.prototype.send = function (message) {
        console.log("Email: ".concat(message));
    };
    return EmailAlert;
}());
var SmsAlert = /** @class */ (function () {
    function SmsAlert() {
    }
    SmsAlert.prototype.send = function (message) {
        console.log("SMS: ".concat(message));
    };
    return SmsAlert;
}());
var SlackAlert = /** @class */ (function () {
    function SlackAlert() {
    }
    SlackAlert.prototype.send = function (message) {
        console.log("Slack: ".concat(message));
    };
    return SlackAlert;
}());
var HealthMonitor = /** @class */ (function () {
    function HealthMonitor(alertServices) {
        this.alertServices = alertServices;
    }
    HealthMonitor.prototype.checkServer = function () {
        console.log("HealthMonitor: \u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430");
        this.notifyAll("Обнаружена проблема");
    };
    HealthMonitor.prototype.notifyAll = function (message) {
        for (var _i = 0, _a = this.alertServices; _i < _a.length; _i++) {
            var item = _a[_i];
            item.send(message);
        }
    };
    return HealthMonitor;
}());
var monitor = new HealthMonitor([
    new EmailAlert(),
    new SmsAlert(),
    new SlackAlert()
]);
monitor.notifyAll("All is good");
