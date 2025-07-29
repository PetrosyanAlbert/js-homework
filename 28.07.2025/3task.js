class Arr {
    static[Symbol.hasInstance](arr){
        for(let i =  0; i < arr.length; ++i){
            if(arr[i] < arr[i - 1]){
                return false;
            }
        }
        return true;
    }
}

console.log([1, 2, 3] instanceof Arr);