// function wait(ms, callback) {
//     setTimeout(callback, ms);
// }
// wait(2000, () => {
//     console.log("end");
// })


// const obj = {
//   name: "Alice",
//   sayName() {
//     console.log(this.name);
//   }
// };

// obj.sayName();
// const obj = [10, 10 , 10]

// for(let i in obj){
//     console.log(i);   
// }

// const arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);  
// }


// function createStateMachine() {
//   let state = 0;

//   return {
//     next() {
//       if (state === 0) {
//         console.log("A");
//         state++;
//       } else if (state === 1) {
//         console.log("B");
//         state++;
//       } else if (state === 2) {
//         console.log("C");
//         state++;
//       } else {
//         console.log("Готово");
//       }
//     }
//   };
// }

// const machine = createStateMachine();

// machine.next();
// // machine.next(); 
// // machine.next(); 
// // machine.next(); 


// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// console.log([...gen()]); // [1, 2, 3]

// const g = gen();
// [...g]; // OK



// let arr = [10 , 2, 5];

// let r = arr.sort();

// console.log(r)


// console.log('1');

// async function asyncFunc() {
//     console.log('2');
//     await Promise.resolve();
//     console.log('3');
//     return 'async result';
// }

// Promise.resolve().then(() => console.log('4'));

// asyncFunc().then(result => console.log('5:', result));

// console.log('6');


// console.log('1');

// async function test() {
//     console.log('2');
//     await console.log('3');
//     console.log('4');
// }

// test();

// Promise.resolve().then(() => console.log('5'));

// console.log('6');


// console.log('1');

// async function asyncFunc() {
//     console.log('2');
//     await Promise.resolve();
//     console.log('3');
//     return 'async result';
// }

// Promise.resolve().then(() => console.log('4'));

// asyncFunc().then(result => console.log('5:', result));

// console.log('6');


// console.log('1');

// async function test() {
//     console.log('2');
//     await console.log('3');
//     console.log('4');
// }

// test();

// Promise.resolve().then(() => console.log('5'));

// console.log('6');


// async function func1() {
//     console.log('A');
//     await Promise.resolve();
//     console.log('B');
// }

// async function func2() {
//     console.log('C');
//     await Promise.resolve();
//     console.log('D');
//     await Promise.resolve();
//     console.log('E');
// }

// console.log('Start');
// func1();
// func2();
// console.log('End');



// console.log('1');

// Promise.reject('error').catch(() => console.log('2'));

// Promise.resolve().then(() => {
//     console.log('3');
//     throw new Error('test');
// }).catch(() => console.log('4'));

// setTimeout(() => console.log('5'), 0);

// console.log('6');

// console.log('A');

// setTimeout(() => console.log('B'), 10);
// setTimeout(() => console.log('C'), 0);

// Promise.resolve().then(() => {
//     console.log('D');
//     setTimeout(() => console.log('E'), 0);
// });

// async function asyncFunc() {
//     console.log('F');
//     await new Promise(resolve => setTimeout(resolve, 5));
//     console.log('G');
// }

// asyncFunc();
// console.log('H');


// console.log('1');

// setTimeout(() => {
//     console.log('2');
//     Promise.resolve().then(() => {
//         console.log('3');
//         queueMicrotask(() => console.log('4'));
//     });
//     queueMicrotask(() => {
//         console.log('5');
//         setTimeout(() => console.log('6'), 0);
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('7');
//     setTimeout(() => {
//         console.log('8');
//         queueMicrotask(() => console.log('9'));
//     }, 0);
// });

// async function complexAsync() {
//     console.log('10');
//     await Promise.resolve();
//     console.log('11');
//     queueMicrotask(() => console.log('12'));
//     return 'done';
// }

// complexAsync().then(() => console.log('13'));

// queueMicrotask(() => console.log('14'));

// console.log('15');



// Promise.resolve("A")
// .then(val => {
//     console.log(val);
//     return "B";
// })
// .then(val => console.log(val))
// .then(() => console.log("C"));

console.log("1");
Promise.reject("error").catch(() => console.log("2")) 
console.log("3");
