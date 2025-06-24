let person = {
    greet: true
};
let student = Object.create(person);
student.name = "john";
console.log(student.greet);
