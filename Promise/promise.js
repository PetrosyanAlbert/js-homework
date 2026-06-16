// setTimeout(() => {
//   console.log("Таймер");

//   Promise.resolve().then(() => {
//     console.log("Промис в таймере");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Промис вне таймера");
// });

// console.log("Конец скрипта");

// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return Promise.resolve("B");
//   })
//   .then((value) => {
//     console.log(value);
//     return "C";
//   })
//   .then(console.log);

// console.log("D");

// async function run() {
//   console.log("A");

//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log("B");
//       resolve();
//     }, 0);
//   });

//   console.log("C");
// }

// run();

// console.log("D");


// async function counter() {
//   console.log("A");
//   await new Promise(res => setTimeout(res, 1000)); 
//   console.log("B");
//   await Promise.resolve(); 
//   console.log("C");
// }

// console.log("D");
// counter();
// console.log("E");

// async function getValue() {
//   console.log("A");
 

//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log("B");
//       resolve();
//     }, 1000);
//   });
  
//   console.log("C");
//   return "D"; 
// }

// console.log("E");
// getValue().then(value => console.log(value));
// console.log("F");

// function tricky() {
//   return Promise.resolve("X").then(() => {
//      return "Y";
//   });
// }

// tricky().then(console.log);

// console.log("2");

// function* geb(){
//     let b = 10;
//     return b;
//     yield b;
// }
// let g = geb();
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 
// console.log(g.next()) 

// console.log(g.next())



// function tricky() {
//   return Promise.resolve("X")
//     .then(() => {
//       return Promise.resolve("Y");
//     });
// }

// tricky()
//   .then(result => {
//     console.log(result);
//   });

// async function test5() {
//   const a = await Promise.resolve("Сначала");
//   return a + " → Потом";
// }

// test5().then(console.log);

// async function test5() {
//   console.log("1. Начало функции");

//   const step1 = await Promise.resolve("2. Сначала");
//   console.log("3. После первого await:", step1);

//   const step2 = await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("4. Таймаут сработал");
//       resolve(step1 + " → Через паузу");
//     }, 1000);
//   });

//   console.log("5. После второго await:", step2);

//   try {
//     const step3 = await Promise.reject("❌ Ошибка на шаге 3");
//     return step3 + " → Продолжение";
//   } catch (error) {
//     console.log("6. Ошибка поймана:", error);
//     return step2 + " → Вместо ошибки";
//   }
// }

// test5().then((result) => {
//   console.log("7. Результат из test5:", result);
// });

// console.log("0. Конец основного потока");


// function polin(num){
//     let arr = []
//     let tmp = 0;

//     while (num) {
//         tmp = num % 10;
//         arr.push(tmp);
//         num /= 10 
//     }

//     let str = num.split('');
//     for (let i = 0; i < str.length; i++){
//         if (str[i] != arr[i]) return false;
//     }
//     return true;
// } 

// console.log(polin(121))


function pol(num){
   if (num < 0) return false;

    let original = num;
    let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = (num / 10) | 0;
  }

  return original === reversed;
}
console.log(pol(111))