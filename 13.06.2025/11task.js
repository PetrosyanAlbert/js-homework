function shallowMerge(...obj){
    let res = {};
    return Object.assign(res, ...obj);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5, d: 6 };

let merged = shallowMerge(obj1, obj2, obj3);
console.log(merged);