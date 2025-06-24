function filterNumber(obj){
    let res = {};
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            res[key] = obj[key];
        }
    }
    return res;
}
let obj = {
    name: "Иван",
  age: 30,
  height: 180,
  city: "Москва",
  score: 95
};
let num = filterNumber(obj);
console.log(num);
