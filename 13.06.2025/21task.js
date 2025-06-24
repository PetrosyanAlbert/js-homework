function uniqKeys(obj){
    let uniq = {};
    obj.forEach(obj => {
        for(let keys in obj){
            uniq[keys] = obj[keys];
        }
    });
    return uniq;
}
let obj = [
  { name: "Аня", age: 25 },
  { city: "Москва", age: 30 },
  { country: "Россия", name: "Игорь" }
];
let res = uniqKeys(obj);
console.log(res);
