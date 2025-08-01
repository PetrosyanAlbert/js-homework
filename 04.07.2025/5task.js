class obj {
    static count = 0;

    constructor() {
        obj.count++;
        this.uniq = obj.count;
    }
    getNumber() {
        return this.uniq;
    }
}

const a = new obj();
const b = new obj();
const c = new obj();

console.log(a.getNumber()); 
console.log(b.getNumber()); 
console.log(c.getNumber()); 