class Calculator {
    #a; 
    #b;

    constructor() {
        this.#a = 0;
        this.#b = 0;
    }

    set(a, b) {
    this.#a = a;
    this.#b = b;
  }

  add() {
    return this.#a + this.#b;
  }


  sub() {
    return this.#a - this.#b;
  }

  
  mul() {
    return this.#a * this.#b;
  }

  
  div() {
    if (this.#b === 0) {
      return "Ошибка: деление на ноль";
    }
    return this.#a / this.#b;
  }

  
  modulo() {
    if (this.#b === 0) {
      return "Ошибка: деление на ноль";
    }
    return this.#a % this.#b;
  }

}


const calc = new Calculator();

calc.set(10, 5);

console.log("Сложение:", calc.add());       
console.log("Вычитание:", calc.sub());       
console.log("Умножение:", calc.mul());      
console.log("Деление:", calc.div());        
console.log("Остаток:", calc.modulo());     

calc.set(7, 0);

console.log("Деление на 0:", calc.div());   
console.log("Остаток на 0:", calc.modulo()); 
