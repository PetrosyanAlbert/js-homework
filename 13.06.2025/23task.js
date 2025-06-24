function Person(name){
    this.name = name;
}
let James = new Person("Bob");
let Alice = new Person("John");

Person.prototype.doIt = function(){
    console.log(`My name ${this.name}`);
};

James.doIt();
Alice.doIt();