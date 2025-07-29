class Shape {
    constructor(){
        if(new.target === Shape){
        throw new Error ("Cannot instantiate abstract class");
        }
    }   
    getArea(){
        throw new Error("Cannot instantiate abstract class")
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
    return this.width * this.height;
    }
}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius;
    }
}

let R = new Rectangle(10, 5);
console.log(R.getArea());
let C = new Circle(10);
console.log(C.getArea());