function range(start, end, step = 1){
    if(step === 0){
        throw new Error("Step can't be 0");
    }

    return{
        [Symbol.iterator](){
            let tmp = start;

            return{
                next(){
                    if(step > 0){
                        if(tmp >= end){
                            return {value: undefined, done: true};
                        }
                        let values = tmp;
                        tmp += step;
                        return {value: values, done: false};
                    } else {
                        if(tmp <= end){
                            return {value: undefined, done: true};
                        }
                        let values = tmp;
                        tmp += step;
                        return {value: values, done: false};
                    }
                }
            }
        }
    }
}

for (let n of range(5, 0, -1)) {
  console.log(n);  
}
