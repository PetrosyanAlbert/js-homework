let obj = {
    name: "Alex",
    age: "20",
    city: "Yerevan",
    country: "Armenia"
};
function other({name, age, ...rest}){
    console.log(name);
    console.log(age);
    console.log(rest);
}
other(obj);