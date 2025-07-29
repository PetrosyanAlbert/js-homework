class Money {
    constructor(amount){
        this.amount = amount;
    }
    [Symbol.toPrimitive](hint){
        if(hint === "string"){
            return `${this.amount}`;
        }
        if(hint === "number"){
            return this.amount;
        }
        return this.amount;
    }
}

let money = new Money(100);

console.log(money + 50);  
console.log(`${money}`); 
console.log('100');    
console.log(+100); 