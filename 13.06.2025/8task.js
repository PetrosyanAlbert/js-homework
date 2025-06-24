function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getDescription = function () {
    return `${this.make} ${this.model} ${this.year}`;
}

const car = new Car("Toyota", "Corolla", 2020)

console.log(car.getDescription())
