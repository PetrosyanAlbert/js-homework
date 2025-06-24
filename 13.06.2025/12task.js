function isEqual(obj1, obj2) {
  if (obj1 === obj2) return true; 

  if (obj1 === null || obj2 === null) return false;

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false; 

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; 

  for (let key of keys1) {
    if (!keys2.includes(key)) return false; 
    if (!isEqual(obj1[key], obj2[key])) return false; 
  }

  return true;
}

const a = { name: "Alice", age: 25, details: { city: "Paris" } };
const b = { name: "Alice", age: 25, details: { city: "Paris" } };
const c = { name: "Alice", age: 25, details: { city: "London" } };

console.log(isEqual(a, b)); 
console.log(isEqual(a, c)); 


// function isEqualJSON(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// const a = { name: "Alice", age: 25, details: { city: "Paris" } };
// const b = { name: "Alice", age: 25, details: { city: "Paris" } };
// const c = { name: "Alice", age: 25, details: { city: "London" } };

// console.log(isEqualJSON(a, b)); 
// console.log(isEqualJSON(a, c)); 