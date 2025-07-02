let obj = {
    name: "John",
    age: 50
};
Object.freeze(obj);
let obj2 = new Object(obj);
obj2.surname = "Alice";
console.log(obj2)
console.log(obj);
