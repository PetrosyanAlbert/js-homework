let obj = {
    arr: [15, 63, 30],
    Even: true,
    *[Symbol.iterator](){
        for(let i = 0; i < this.arr.length; ++i){
            if(this.Even && this.arr[i] % 2 === 0){
                continue;
            }
            yield this.arr[i];
        }
    }
}
for (const val of obj) {
  console.log(val);
}

let obj1 = Object.create(obj);
console.log(obj1);