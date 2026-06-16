class Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Чёрный кофе";
  }
}

// Кофе с молоком
class CoffeeWithMilk extends Coffee {
  cost() {
    return super.cost() + 2;
  }

  description() {
    return super.description() + " + молоко";
  }
}

// Кофе с молоком и сахаром
class CoffeeWithMilkAndSugar extends CoffeeWithMilk {
  cost() {
    return super.cost() + 1;
  }

  description() {
    return super.description() + " + сахар";
  }
}

// Кофе с карамелью
class CoffeeWithCaramel extends Coffee {
  cost() {
    return super.cost() + 3;
  }

  description() {
    return super.description() + " + карамель";
  }
}

// Использование
const myCoffee = new CoffeeWithCaramel();
console.log(myCoffee.description()); // Чёрный кофе + карамель
console.log(myCoffee.cost());        // 8
