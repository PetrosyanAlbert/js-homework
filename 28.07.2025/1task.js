let sym = Symbol("Hello");
let sym1 = Symbol("Hello");

const obj = {};
obj[sym] = 'Value sym';
obj[sym1] = 'Value sym1';

// console.log(Object.keys(obj));

console.log(Object.getOwnPropertySymbols(obj));