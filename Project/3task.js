class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("Нельзя создавать экземпляры абстрактного класса Animal");
    }
  }

  speak() {
    console.log("Animal makes a sound");
  }
}


class Dog extends Animal {
  speak() {
    super.speak(); 
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
