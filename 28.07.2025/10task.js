function* deep(arr){
    for(const item of arr){
        if(typeof item === 'object' && item !== null){
            yield* deep(item);
        } else {
            yield item;
        }
    }
}

let arr = [1, [2, [3, 4], 5], 6];

for(const item of deep(arr)){
    console.log(item);
}

