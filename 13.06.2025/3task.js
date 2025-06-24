let obj = {
    name: "John",
    age: 50
};
Object.freeze(obj);
let obj2 = {...obj};
obj2.name = "Alice";
console.log(obj2)
console.log(obj);
