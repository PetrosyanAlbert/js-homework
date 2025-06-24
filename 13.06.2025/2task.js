function deepClone(obj){
    if(obj === null)
        return obj
}

if(Array.isArray(obj)){
    let  clone = [];
    for(let key of obj){
        clone.push(deepClone(key));
    }
    return clone;
}

