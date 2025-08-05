var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.send = function (message) {
        console.log("Send with email: ".concat(message));
    };
    return Email;
}());
var Sms = /** @class */ (function () {
    function Sms() {
    }
    Sms.prototype.send = function (message) {
        console.log("Send with sms: ".concat(message));
    };
    return Sms;
}());
var Push = /** @class */ (function () {
    function Push() {
    }
    Push.prototype.send = function (message) {
        console.log("Push notification: ".concat(message));
    };
    return Push;
}());
var SlackNotification = /** @class */ (function () {
    function SlackNotification() {
    }
    SlackNotification.prototype.send = function (message) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 SLACK-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F: ".concat(message));
    };
    return SlackNotification;
}());
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.create = function (type) {
        return this.types[type] ? this.types[type] : null;
    };
    NotificationFactory.register = function (type, cls) {
        this.types[type] = cls;
    };
    NotificationFactory.types = {};
    return NotificationFactory;
}());
NotificationFactory.register("email", new Email());
var notifier = NotificationFactory.create("email");
notifier === null || notifier === void 0 ? void 0 : notifier.send("Hello World");
console.log(notifier);
