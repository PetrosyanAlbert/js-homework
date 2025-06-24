function countProperties(obj){
    let count = 0;
    for (let prop in obj) { 
    count++;
    }
    return count;
}
let obj = {name: "John"};
let obj2 = Object.create(obj);
obj2.age = 4;
console.log(countProperties(obj2));