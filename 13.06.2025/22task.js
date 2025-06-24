let container = {
    name: "James",
    age: 24
};
let copy = {...container};
copy.name = "Aldo";
console.log(container.name);
console.log(copy.name);
