class Employee {
    constructor(name){
        this.name = name;
    }
    getSalary(){
        throw new Error("Error111");
    }
}

class NewFullTimeEmployee extends Employee {
    constructor(name){
        super(name);
    }
    getSalary(){
        return"Hello";
    }
}

class PartTimeEmployee extends Employee {
    constructor(name){
        super(name);
    }
    getSalary(){
        return"GoodBye";
    }
}

class Freelancer extends Employee {
    constructor(name){
        super(name);
    }
    getSalary(){
        return "How are you";
    }
}



let employes = [new NewFullTimeEmployee("James"), new Freelancer("Alice"), new PartTimeEmployee("Sara")]

for(const emp of employes){
    console.log(emp.getSalary());
}