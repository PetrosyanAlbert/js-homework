let obj = {
    name: "James"
};
let {name, age = 30} = obj;
console.log(name);
console.log(age);
console.log(obj);
