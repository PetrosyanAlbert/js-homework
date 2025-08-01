let obj = {
    arr: ["James", "Alice", "Chlp"],

    [Symbol.iterator](){
        let i = this.arr.length - 1;
        return {
            next: () => {
                if(i >= 0) {
                    return {value: this.arr[i--], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }

}
for (const val of obj) {
  console.log(val);
}

// console.log([...obj]);