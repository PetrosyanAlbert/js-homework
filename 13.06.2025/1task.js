let person1 = {
    name: "John"
};
let person2 = {
    name: "Alice",
    //surname: "James",
    age: 34
};
let mergedPerson = Object.assign(person1, person2);
console.log(mergedPerson);
console.log(person1);
//console.log(person2);
