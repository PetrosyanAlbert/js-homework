const arr = [1, 2];

const obj = {
    0: 'James',
    1: 25,
    length: 2, 
    [Symbol.isConcatSpreadable]: true
};

const res = arr.concat(obj);
console.log(res); 
console.log(Object.getOwnPropertySymbols(obj));


