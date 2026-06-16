function block(seconds){
    let endtime = Date.now() + seconds * 1000;
    while(Date.now() < endtime);
}

console.log("Start");
block(3);
console.log("End");
