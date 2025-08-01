class Shape {
  area() {
    throw new Error("Метод 'area()' должен быть реализован.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  setSide(side) {
    this.side = side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }
}


function renderArea(shape) {
  console.log("Площадь:", shape.area());
}



const rectangle = new Rectangle(5, 10);
renderArea(rectangle); 

const square = new Square(5);
renderArea(square);    

const circle = new Circle(7);
renderArea(circle);    


rectangle.setWidth(7);
rectangle.setHeight(8);
renderArea(rectangle); 

circle.setRadius(10);
renderArea(circle);   
