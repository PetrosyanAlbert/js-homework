
const base = {
  greet() {
    return "Hello";
  }
};


const child = {
  name: "Ребёнок"
};


Object.setPrototypeOf(child, base);


console.log(child.name);       
console.log(child.greet());    
