var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Базовый кофе
var BasicCoffee = /** @class */ (function () {
    function BasicCoffee() {
    }
    BasicCoffee.prototype.cost = function () {
        return 5;
    };
    BasicCoffee.prototype.description = function () {
        return "Чёрный кофе";
    };
    return BasicCoffee;
}());
// Абстрактный декоратор
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    return CoffeeDecorator;
}());
// Декоратор: молоко
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MilkDecorator.prototype.cost = function () {
        return this.coffee.cost() + 2;
    };
    MilkDecorator.prototype.description = function () {
        return this.coffee.description() + " + молоко";
    };
    return MilkDecorator;
}(CoffeeDecorator));
// Декоратор: сахар
var SugarDecorator = /** @class */ (function (_super) {
    __extends(SugarDecorator, _super);
    function SugarDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SugarDecorator.prototype.cost = function () {
        return this.coffee.cost() + 1;
    };
    SugarDecorator.prototype.description = function () {
        return this.coffee.description() + " + сахар";
    };
    return SugarDecorator;
}(CoffeeDecorator));
// Декоратор: карамель
var CaramelDecorator = /** @class */ (function (_super) {
    __extends(CaramelDecorator, _super);
    function CaramelDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaramelDecorator.prototype.cost = function () {
        return this.coffee.cost() + 3;
    };
    CaramelDecorator.prototype.description = function () {
        return this.coffee.description() + " + карамель";
    };
    return CaramelDecorator;
}(CoffeeDecorator));
// ✅ Использование — создаём кофе с молоком, сахаром и карамелью
var myCoffee = new BasicCoffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
myCoffee = new CaramelDecorator(myCoffee);
// Вывод
console.log(myCoffee.description()); // Чёрный кофе + молоко + сахар + карамель
console.log(myCoffee.cost()); // 11
// const fancyCoffee = new CaramelDecorator(
//   new SugarDecorator(
//     new MilkDecorator(
//       new BasicCoffee()
//     )
//   )
// );
// console.log(fancyCoffee.description());  // Чёрный кофе + молоко + сахар + карамель
// console.log(fancyCoffee.cost());         // 11
