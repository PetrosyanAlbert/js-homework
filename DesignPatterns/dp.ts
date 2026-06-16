// Интерфейс кофе
interface ICoffee {
  cost(): number;
  description(): string;
}

// Базовый кофе
class BasicCoffee implements ICoffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Чёрный кофе";
  }
}

// Абстрактный декоратор
abstract class CoffeeDecorator implements ICoffee {
  constructor(protected coffee: ICoffee) {}

  abstract cost(): number;
  abstract description(): string;
}

// Декоратор: молоко
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + " + молоко";
  }
}

// Декоратор: сахар
class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + " + сахар";
  }
}

// Декоратор: карамель
class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 3;
  }

  description(): string {
    return this.coffee.description() + " + карамель";
  }
}

// ✅ Использование — создаём кофе с молоком, сахаром и карамелью
let myCoffee: ICoffee = new BasicCoffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
myCoffee = new CaramelDecorator(myCoffee);

// Вывод
console.log(myCoffee.description()); // Чёрный кофе + молоко + сахар + карамель
console.log(myCoffee.cost());        // 11


const fancyCoffee = new CaramelDecorator(
  new SugarDecorator(
    new MilkDecorator(
      new BasicCoffee()
    )
  )
);

console.log(fancyCoffee.description());  // Чёрный кофе + молоко + сахар + карамель
console.log(fancyCoffee.cost());         // 11
