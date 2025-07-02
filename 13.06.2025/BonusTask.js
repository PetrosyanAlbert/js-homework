let students = [];

function createStudent(name, age, grades) {
    return {
        name: name,
        age: age,
        grades: grades,
        getAverageGrade: function(){
            if(this.grades.length === 0) return 0;
            let sum = this.grades.reduce((i, grade) => i + grade, 0);
            return sum / this.grades.length;
        }
    };
}

function addStudent(studentsArray, name, age, grades){
    let student = createStudent(name, age, grades);
    studentsArray.push(student);
}

function getStudentInfo(studentsArray, name){
    let student = studentsArray.find(student => student.name === name);
    if(!student) {
        return `student not find`;
    }
    return {
        name: student.name,
        age: student.age,
        averageGrade: student.getAverageGrade()
    };
}
function filterStudentsByGrade(studentsArray, minGrade) {
    return studentsArray.filter(student => student.getAverageGrade() > minGrade);
}

addStudent(students, "Alice", 20, [85, 90, 88]);
addStudent(students, "Bob", 22, [75, 80, 82]);
addStudent(students, "Charlie", 19, [95, 92, 98]);

// Получение информации о студенте
console.log(getStudentInfo(students, "Alice")); 
// Вывод: { name: 'Alice', age: 20, averageGrade: 87.66666666666667 }

// Получение информации о несуществующем студенте
console.log(getStudentInfo(students, "David")); 
// Вывод: "Student David not found"

// Фильтрация студентов с средним баллом выше 85
console.log(filterStudentsByGrade(students, 85)); 
// Вывод: [
//   { name: 'Alice', age: 20, grades: [85, 90, 88], getAverageGrade: [Function] },
//   { name: 'Charlie', age: 19, grades: [95, 92, 98], getAverageGrade: [Function] }
// ]