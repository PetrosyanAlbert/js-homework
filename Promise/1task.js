// class MyPromise {
//   constructor(executor) {
//     this.state = 'pending';
//     this.value = undefined;
//     this.reason = undefined;
//     this.thenCallback = undefined;
//     this.catchCallback = undefined;

//     const resolve = (v) => {
//       if (this.state !== 'pending') return;
//       this.state = 'fulfilled';
//       this.value = v;

//       if (this.thenCallback) {
//         queueMicrotask(() => {
//           this.thenCallback(this.value);
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.state !== 'pending') return;
//       this.state = 'rejected';
//       this.reason = reason;

//       if (this.catchCallback) {
//         queueMicrotask(() => {
//           this.catchCallback(this.reason);
//         });
//       }
//     };

//     try {
//       executor(resolve, reject); 
//     } catch (e) {
//       reject(e);
//     }
//   }

//   then(onFulfilled) {
//     if (this.state === 'fulfilled') {
//       queueMicrotask(() => {
//         onFulfilled(this.value);
//       });
//     } else {
//       this.thenCallback = (v) => {
//         queueMicrotask(() => {
//           onFulfilled(v);
//         });
//       };
//     }
//     return this; 
//   }

//   catch(onRejected) {
//     if (this.state === 'rejected') {
//       queueMicrotask(() => {
//         onRejected(this.reason);
//       });
//     } else {
//       this.catchCallback = (r) => {
//         queueMicrotask(() => {
//           onRejected(r);
//         });
//       };
//     }
//     return this; 
//   }
// }

    

// const p = new MyPromise((resolve) => {
//   resolve(42);
// });

// p.then((v) => {
//   console.log(v); 
// });

// const p2 = new MyPromise((resolve) => {
//   setTimeout(() => resolve('ok'), 100);
// });

// setTimeout(() => {
//   p2.then((v) => console.log(v)); 
// }, 2000);


// let b = new MyPromise((resolve, reject) => {
//   reject('Что-то пошло не так');
// })
// .then(result => {
//   console.log('Результат:', result);
// })
// .catch(error => {
//   console.error('Поймали ошибку:', error);
// });


// function* myGenerator() {
//   console.log("10");
//   yield 1;
//   console.log("15");
//   yield 1;


// }

// const gen = myGenerator();
// gen.next();
// console.log(gen.next());
// console.log(gen.next());

// const user = {
//   name: "Alice",
//   age: 25,
//   isAdmin: false
// };

// function count(obj){
//   let count = 0;
//   for(let item in obj){
//     console.log(item)
//     count++;
//   }
//   return count;
// }

// console.log(count(user));
// function getUniqueValues(arr){
//   return [...new Set(arr)];

// }
// const data = [1, 2, 2, 3, 4, 4, 5];
// console.log(getUniqueValues(data));


// const user = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// setTimeout(user.greet.bind(user), 100);

// const person = {
//   name: 'Bob',
//   sayHi: function() {
//     const inner = () => {
//       console.log(`Hi, ${this.name}`);
//     };
//     inner();
//   }
// };

// person.sayHi();

// function Player(name) {
//   this.name = name;
  
//   function getPlayerName() {
//     console.log(this.name);
//   }

//   getPlayerName();
// }

// const player = new Player('Chris');


// function Car(make) {
//   this.make = make;
// }

// const basicCar = {};
// const boundCar = Car.bind(basicCar);

// const myCar = new boundCar('Tesla');

// console.log(myCar.make);
// console.log(basicCar.make);


// const calculator = {
//   value: 42,
//   add: function(n) {
//     this.value += n;
//     console.log(this.value);
//   }
// };
// console.log(calculator.add(10))
// const { add } = calculator;
// add(10);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.getName = function() {
//   return this.name;
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const dog = new Dog('Buddy', 'Golden Retriever');
// console.log(dog.getName());


// Object.isExtensible

// async function main() {
//   console.log('A');
//   await new Promise(res => setTimeout(res, 0));
//   console.log('B');
//   return 'C';
// }

// console.log('D');
// main().then(val => console.log(val));
// console.log('E');


// Promise.resolve().then(() => {
//   console.log('first');
// }).then(() => {
//   console.log('second');
// });

// console.log('third');


// console.log('A');

// setTimeout(() => {
//   console.log('B');

//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');

//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });

// console.log('F');


// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplacehoder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log("Data:", response);
//   } catch (error) {
//     console.error("Ошибка при загрузке:", error.message);
//   }
// }

// fetchData();

// async function ex() {
//   try{
//     const res = await Promise.reject("Xntir");
//     console.log(res);
//   }catch(e){
//     console.log("Brnec", e)
//   }
// }
// ex()


// async function run() {
//   console.log('A');
// }

// console.log('C');
// run();
// console.log('G');
// console.log('B');
// console.log('A');

// async function test() {
//   console.log(1);
//   setTimeout(() => console.log(2), 0);
//   await Promise.resolve();
//   console.log(3);
// }
// test();
// console.log(4);


// async function go() {
//   console.log('X');
//   await new Promise(res => {
//     console.log('Y');
//     res();
//   });
//   console.log('Z');
// }
// go();
// console.log('W');


// async function fn() {
//   console.log('start');
//   await new Promise(resolve => setTimeout(() => {
//     console.log('timer');
//     resolve();
//   }, 0));
//   console.log('after await');
// }
// fn();
// console.log('end');


// async function flow() {
//     console.log(1);
//     await Promise.resolve();
//     console.log("10");
//     console.log(2);
//     await Promise.resolve();
//     console.log(3);
// }

// flow();
// console.log(4);

// async function broken() {
//   console.log('first');
//   await Promise.reject('fail');
//   console.log('second');
// }
// broken().catch(err => console.log('caught:', err));
// console.log('third');


// Promise.reject(new Error('Initial Error'))
//   .catch(err => {
//     console.log('Ошибка поймана:', err.message);
//     return 'Everything is fine now'; 
//   })
//   .then(message => {
//     console.log(message); 
//   });


// Promise.reject(new Error('Initial Error'))
//   .catch(err => {
//     console.log('Поймали первую ошибку, но создаем новую...');
//     throw new Error('A new error occurred in catch!');
//   })
//   .then(() => {

//     console.log('This will not run');
//   })
//   .catch(err => {

//     console.log('Поймали вторую ошибку:', err.message);
//   });

// async function thenableTest() {
//   await {
//     then(resolve) {
//       console.log('inside thenable');
//       resolve();
//     }
//   };
//   console.log('after thenable');
// }
// thenableTest();
// console.log('outside');


// setTimeout(async () => {
//   console.log('A');
//   await null;
//   console.log('B');
// }, 120);
// console.log('C');


// async function check() {
//   console.log('before');
//   await 123;
//   console.log('after');
// }
// check();
// console.log('outside');


// setTimeout(() => console.log('timeout'), 0);

// Promise.resolve().then(() => {
//   console.log('promise1');
// });

// async function asyncFn() {
//   console.log('async start');
//   await Promise.resolve();
//   console.log('async end');
// }
// asyncFn();

// console.log('sync end');



// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(4);
// });

// console.log(5);


// async function test() {
//   console.log('A');
//   await Promise.resolve();
//   console.log('B');
// }

// setTimeout(() => console.log('C'), 0);

// test();
// console.log('D');


// async function demo() {
//   console.log('1');
//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log('2');
//       resolve();
//     }, 0);
//   });
//   console.log('3');
// }
// demo();
// console.log('4');



// async function check() {
//   console.log('before');
//   await 42;
//   console.log('after');
// }
// check();
// console.log('outside');


// async function err() {
//   console.log('X');
//   try {
//     await Promise.reject('Oops');
//   } catch (e) {
//     console.log('Caught:', e);
//   }
//   console.log('Y');
// }
// err();
// console.log('Z');


// async function one() {
//   console.log('one start');
//   await Promise.resolve();
//   console.log('one end');
// }

// async function two() {
//   console.log('two start');
//   await Promise.resolve();
//   console.log('two end');
// }

// one();
// two();
// console.log('main end');



// setTimeout(() => {
//   console.log('timeout start');
//   Promise.resolve().then(() => {
//     console.log('promise inside timeout');
//   });
//   console.log('timeout end');
// }, 0);

// console.log('outside');



// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('3');
// });

// (async () => {
//   console.log('4');
//   await null;
//   console.log('5');
// })();

// console.log('6');



// let obj = {
//     name: "Alice",
//     age: 17,
//     [Symbol.iterator](){
//         let values = Object.keys(this);
//         let i = 0;
//         return{
//             next(){
//                 if(i < values.length){
//                     return {value: values[i++], done: false}
//                 }else{
//                     return {value: values[i], done: true}
//                 }
//             }
//         }
//     }
  
// }

// for(let item of obj){
//     console.log(item);
// }    



// async function test1() {
//   return await 42;
// }

// test1().then(console.log);


// function test2() {
//   return new Promise((resolve) => {
//     resolve(Promise.resolve(100));
//   });
// }

// test2().then(console.log);


// async function test4() {
//   setTimeout(() => console.log("timeout"), 0);
//   await Promise.resolve("done");
//   console.log("after await");
// }

// test4();
// console.log("outside");


// async function test3() {
//   const result = await Promise.resolve("Oops")
//   console.log(result);
// }

// test3();
// console.log(Promise.resolve("2"));
// let res2 = Promise.resolve("5");
// console.log(res2.then(console.log));

// async function test4() {
//   setTimeout(() => console.log("timeout"), 0);
//   await Promise.resolve("done");
//   console.log("after await");
// }

// test4();
// console.log("outside");



// class Test8 {
//   constructor() {
//     this.init();
//   }

//   async init() {
//     this.value = await Promise.resolve("ready");
//   }
// }

// const obj = new Test8();
// setTimeout(() => console.log(obj.value), 0);


// console.log("Start");

// Promise.resolve("First")
//   .then((res) => {
//     console.log(res);
//     Promise.resolve("Second").then((res2) => {
//       console.log(res2);
//       return "Third";
//     });
//   })
//   .then((res3) => {
//     console.log(res3);
//   });

// console.log("End");


// Promise.resolve("X")
//   .then(async (res) => {
//     console.log("Inside async then:", res);
//     return "Y";
//   })
//   .then((res) => {
//     console.log("Then after async then:", res);
//   });



// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return Promise.resolve();
//   })
//   .then(async () => {
//     console.log("B");
//     await null;
//     console.log("C");
//   })
//   .then(() => {
//     console.log("D");
//   });

// console.log("E");




// async function deep() {
//   return Promise.resolve().then(() => {
//     console.log("1");
//     return Promise.resolve("2");
//   }).then(async (val) => {
//     console.log(val);
//     await null;
//     console.log("3");
//     return "4";
//   });
// }

// deep().then((v) => console.log("Resolved with:", v));
// console.log("End");






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
// //10,7,14,


// async function task1() {
//   const result = await {
//     then(resolve, reject) {
//       console.log("thenable executing");
//       throw new Error("Boom");
//     }
//   };
//   console.log("Result:", result);
// }

// task1().catch((e) => console.log("Caught:", e.message));


// async function task2() {
//   await Promise.reject("failure");
//   console.log("after reject");
// }

// task2().catch((e => {
//     console.log(e)
// }));
// console.log("end");


// async function task8() {
//   const val = await (async () => {
//     return await Promise.resolve("Nested");
//   })();
//   console.log(val);
// }

// task8();


// Promise.resolve().then(() => {
//   console.log("A");
//   return Promise.resolve();
// }).then(() => {
//   console.log("B");
// });

// queueMicrotask(() => console.log("C"));
// console.log("D");




// async function task1() {
//   console.log("A");

//   await Promise.resolve().then(() => {
//     console.log("B");
//     return Promise.resolve().then(() => {
//       console.log("C");
//     });
//   });

//   console.log("D");
// }

// task1();
// console.log("E");



// function task1() {
//   return Promise.resolve("A")
//     .then((res) => {
//       console.log(res);
//       new Promise((resolve) => {
//         console.log("B");
//         resolve("C");
//       }).then((x) => {
//         console.log(x);
//       });
//       return "D";
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// task1();


// async function task2() {
//   await new Promise((resolve) => {
//     console.log("X");
//     resolve("Y");
//   }).then((val) => {
//     console.log(val);
//   });

//   console.log("Z");
// }

// task2();



// function task3() {
//   return Promise.resolve("Start")
//     .then((val) => {
//       console.log(val);
//       Promise.resolve("Next").then((x) => console.log(x));
//       return "Done";
//     })
//     .then((res) => {
//       console.log("Final:", res);
//     });
// }

// task3();
// console.log("R")


// async function inner() {
//   console.log("Inner Start");
//   return new Promise((resolve) => {
//     console.log("Inner Promise");
//     resolve("Inner Done");
//   });
// }

// async function task4() {
//   const result = inner(); 
//   console.log("After call");
//   const value = await result;
//   console.log("Result:", value);
// }

// task4();



// async function task5() {
//   await new Promise((resolve) => {
//     console.log("Outer");
//     new Promise((res) => {
//       console.log("Inner");
//       res();
//     }).then(() => {
//       console.log("Inner Then");
//     });
//     resolve();
//   });

//   console.log("After Await");
// }

// task5();
// console.log("10");



// function task6() {
//   return Promise.resolve()
//     .then(() => {
//       console.log("Before error");
//       throw new Error("Oops");
//     })
//     .then(() => {
//       console.log("This will NOT run");
//     });
// }

// task6().catch((e) => {
//   console.log("Caught:", e.message);
// });



// const obj = {
//   name: "Alice",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// const fn = obj.sayHi;
// fn(); 


// const obj = {
//   x: 42,
//   getX(){
//     return this.x;
//   },
// };

// const bound = obj.getX.bind(obj);
// const extracted = obj.getX;

// console.log(bound());     
// console.log(extracted()); 



// const person = {
//   name: "Eva",

//   sayLater() {
//     const self = this;
//     setTimeout(() => {
//       console.log("Hi", self.name);
//     }, 100);
//   },
// };

// person.sayLater();




// class Counter {
//   count = 0;

//   constructor() {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 100);
//   }
// }

// new Counter();



// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     setTimeout(() => {
//       console.log(this.name + " says woof");
//     }, 100);
//   }
// }

// new Dog("Rex").bark();



// function whoAmI() {
//   console.log(this.role);
// }

// const admin = { role: "admin" };
// const user = { role: "user" };

// whoAmI.call(admin);
// whoAmI.call(user);



// const obj = {
//   value: 10,
//   double() {
//     this.value *= 2;
//     return this;
//   },
//   increment() {
//     this.value += 1;
//     return this;
//   },
// };

// console.log(obj.double().increment());
// console.log(obj.value); // ?


// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const p = new Person("Leo");


// const car = {
//   brand: "BMW",
//   getBrand() {
//     return this.brand;
//   },
// };

// function print(cb) {
//   console.log(cb());
// }

// print(car.getBrand.bind(car)); 


// function outer() {
//   let x = 10;
//   return function inner() {
//     console.log(++x);
//   };
// }

// const fn = outer();
// fn(); // ?


// class EmailService {
//     send(message){
//         console.log(`Отправка email: ${message}`);
//     }
// }

// class SMSService{
//     send(message){
//         console.log(`Отправка SMS: ${message}`);
//     }
// }

// class PushNotificationService{
//     send(message){
//         console.log(`Отправка push-уведомления: ${message}`);
//     }
// }

// class MessageSender{
//     constructor(messagingService){
//         this.messagingService = messagingService;
//     }
//     sendMessage(message){
//         this.messagingService.send(message);
//     }
// }

// const emailService = new EmailService();
// const emailSender = new MessageSender(emailService);
// emailSender.sendMessage("Hello");

// const sms = new SMSService();
// const SMS = new MessageSender(sms);
// SMS.sendMessage("Privet bratan");


// function create(){
//     let count = 0;
//     return function(){
//         return ++count;
//     };
// }

// let a = create();
// let b = create();
// console.log(a());
// console.log(a());
// console.log(b());


// const funcs = [];

// for (let i = 0; i < 3; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs[0](); 
// funcs[1](); 
// funcs[2](); 


// const func = [];

// for(let i = 0; i < 3; ++i){
//     func.push(function() {
//         console.log(i);
//     })
// }

// console.log(func)


// TRANSFORM THIS:
// async function fetchUser(id) {
//   try {
//     const response = await fetch(`/api/users/${id}`);
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     throw error;
//   }
// }

// // YOUR SOLUTION:
// function fetchUser1(id) {
//   // Write your promise-based version here
//   try{
//     const response = Promise.resolve().then(() => {
//         return fetch(`/api/users/${id}`);
//     }).then((val) => {
//         return val.json();
//     })
//   }catch(er){
//     console.error('Error fetching user:', er);
//     throw er;
//   }
// }

// console.log(fetchUser(1))
// console.log(fetchUser1(1))



// function fetchUser1(id) {
//     return fetch(`/api/users/${id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .catch(error => {
//         console.error(‘Error fetching user:’, error);
//         throw error;
//       });
//   }


// const p = new Promise((resolve, reject) => {
//   console.log('1');
//   resolve('2');
// });

// p.then(res => console.log(res));

// console.log('3');


// Promise.resolve()
//   .then(() => {
//     console.log('First');
//     return;
//   })
//   .then(() => {
//     throw new Error('Boom!');
//   })
//   .then(() => {
//     console.log('After Error');
//   })
//   .catch(e => {
//     console.log('Caught:', e.message);
//   })
//   .then(() => {
//     console.log('Final then');
//   });



// new Promise((resolve, reject) => {
//   resolve('Success');
// })
// .then(res => {
//   console.log(res);
//   return Promise.reject(new Error('Async error'));
// })
// .catch(e => {
//   console.log('Caught:', e.message);
// });


// async function test() {
//   console.log('A');
//   await new Promise(resolve => setTimeout(() => resolve(console.log('B')), 2000));
//   console.log('C');
// }

// test();
// console.log('D');




// async function step1() {
//   console.log('step1 start');
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('step1 timeout');
//       resolve('result1');
//     }, 100);
//   });
// }

// function step2() {
//   console.log('step2 start');


//   return Promise.resolve('result2')
//     .then(res => {
//       console.log('step2 then:', res);
//       throw new Error('step2 error');
//     })
//     .catch(e => {
//       console.log('step2 catch:', e.message);
//       return 'recovered';
//     });
// }

// async function main() {
//   try {
//     const res1 = await step1();
//     console.log('main got:', res1);

//     const res2 = await step2();
//     console.log('main got:', res2);

//     throw new Error('main error');
//   } catch (e) {
//     console.log('main catch:', e.message);
//   } finally {
//     console.log('main finally');
//   }

//   return 'done';
// }

// main().then(res => console.log('main then:', res));

// console.log('after main call');




console.log('1');

Promise.resolve()
    .then(() => {
        console.log('2');
        return Promise.resolve();
    })
    .then(() => console.log('3'));

Promise.resolve()
    .then(() => {
        console.log('4');
        Promise.resolve().then(() => console.log('5'));
    })
    .then(() => console.log('6'));

console.log('7');
