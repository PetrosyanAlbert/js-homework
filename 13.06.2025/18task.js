function object(obj){
    return Object.values(obj).map(values => {
         if(typeof values === 'string'){
             return values.toUpperCase();
         }
        return values;
    });
}
let obj = {
  name: "Alice",
  city: "London",
  age: 25
};

let res = object(obj);
console.log(res); 




