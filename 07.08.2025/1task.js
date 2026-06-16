function block(seconds){
    const end = Date.now() + seconds * 1000;
    while(Date.now() < end){

    }
}

console.log("start");
block(3);
console.log("End");