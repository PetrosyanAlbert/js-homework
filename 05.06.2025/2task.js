function add(a, b , c){
    if(arguments.length == 2){
        return a + b;
    }
    else if(arguments.length == 3){
        return a + b + c;
    }
    else{
        console.log("sxal");
    }
}
console.log(add(4, 5));
console.log(add(2, 3))