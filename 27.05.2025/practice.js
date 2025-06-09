/* 
function erkar(str){
    return str.length;
}
console.log(erkar("Hello World"));
*/ 
/*
let str = "hello";
console.log(str.toUpperCase());
*/
/*
function gumar(a, b){
    let c = a + b;
    return c;
}
let a = 10;
let b = 20;
console.log(gumar(a, b));
*/
/*
function reverse(str){
    let str1 = "";
    for(let i = str.length - 1; i >= 0; --i){
        str1 += str[i];
    }
    return str1;
}
let str = "hello";
console.log(reverse(str));
*/
/*
let arr = [];
let arr1 = [1, 2];
let arr2 = [3, 4];
for(let i = 0; i < arr1.length; ++i){
    arr += arr1[i];
}
for(let i = 0; i < arr2.length; ++i){
    arr += arr2[i];
}
console.log(arr);
*/
/*
let array1 = [1, 2];
let array2 = [3, 4];

let combined = array1.concat(array2);

console.log(combined); 
*/
/*
let array1 = [1, 2];
let array2 = [3, 4];

let combined = [...array1, ...array2];

console.log(combined); // [1, 2, 3, 4]
*/
/*
let str = "Изучение JavaScript";
let sub = "Java";

if (str.includes(sub)) {
    console.log("Строка содержит подстроку.");
} else {
    console.log("Подстрока не найдена.");
}
*/
/*
let arr = [1, 2, 3, 9];
let digit = 9;
let flag = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === digit){
            flag = 1;
            break;
        }
    }    
    if(flag){
        console.log("gtanq");
    }else{
    console.log("chgtanq");
    }
*/
/*
let arr = [50, 75, 100];
let sum = 0;
for(let i = 0; i < arr.length; ++i){
    sum += arr[i];
}        
console.log(sum);
*/
/*
let num = 11;
if(num % 2 === 0){
    console.log("zuyg");   
}else{
    console.log("kent");
}
*/

/*
//Напишите функцию JavaScript, которая создает большое количество объектов в цикле и сохраняет их в массиве.

function createAndClean(count) {
    // Шаг 1: создаем массив объектов
    let objects = [];

    for (let i = 0; i < count; i++) {
        const obj = {
            id: i,
            name: `Object #${i}`,
            data: new Array(100).fill(i)
        };
        objects.push(obj);
    }

    console.log(`Создано объектов: ${objects.length}`);

    // (Дополнительно) Используем объекты, чтобы они были "использованы"
    console.log("Пример объекта:", objects[0]);

    // Шаг 2: эмуляция ручного освобождения памяти

    //Обнуляем каждый элемент массива
    for (let i = 0; i < objects.length; i++) {
       objects[i] = null;
    }

    // Удаляем сам массив
    objects = null;

    console.log("Ссылки удалены. Объекты могут быть собраны сборщиком мусора.");
}
    createAndClean(12);
*/
//const numbers = [1 , 2, 3, 4];
//numbers[2] = numbers;
//console.log(numbers[2][2][2][2]);
//let i = 0;
//do{
//    console.log(i);
//    ++i;   
//} while(i < 0);
//console.log(1 < 2 < 3);
//console.log(3 > 2 > 1);
//const arr = ["apple", "banana", "cherry"];
//console.log(arr.slice(-2, -3));
//let numbers = [1, 2, 3, 4, 5];
//numbers.splice(2, 2, "a", "b");
//console.log(numbers);
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.includes("banana", 1));
// const str = "i love JavaScript";
// const words = str.split(" ").reverse().join(" ");
// console.log(words);
// const str = "    javascript    ";
// const result = str.trim().padStart(15, "*");
// console.log(result);
// let a = [1, 2];
// let b = [1, 2];
// console.log(a == b);
// console.log(a === b);
// function sum(n){
//     if(n <= 0) return 0;
//     return n + sum(n - 2);
// }
// console.log(sum(6));

//Напиши функцию, которая принимает три числа и возвращает наибольшее.
// function max(a, b, c){
//     let tmp = a;
//     if(tmp < b) tmp = b;
//     if(tmp < c) tmp = c;
//     return tmp;
// }
// console.log(max(10, -1, 6));

//Напиши функцию, которая находит факториал числа (n!).
// function factorial(n){
//     let a = 1;
//     for(let i = 1; i <= n; ++i){
//         a *= i;
//     }
//     return a;
// }
// console.log(factorial(6));
