let id = Symbol('id');
let id1 = Symbol('id1');
let obj = {
    name: "James",
    age: 32,
    [id]: 123,
    [id1]: 345
};
let symbols = Object.getOwnPropertySymbols(obj);
for(let sym of symbols){
    console.log(`символ: ${sym.toString()} - Значение: ${obj[sym]}`);
    
}
