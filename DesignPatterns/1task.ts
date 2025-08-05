interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost(): number {
        return 10;
    }
    description(): string {
        return "Simple coffee";
    }
}

abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    
    abstract cost(): number;
    abstract description(): string;
}

class WithMilk extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee); 
    }

    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return this.coffee.description() + " with milk";
    }
}

class WithSugar extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1;
    }

    description(): string {
        return this.coffee.description() + " with sugar";
    }
}

class WithWhippedCream extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 5;
    }

    description(): string {
        return this.coffee.description() + " with whipped cream";
    }
}

const coffee = new WithSugar(new WithMilk(new SimpleCoffee()));

console.log(coffee.description());  
console.log(coffee.cost()); 