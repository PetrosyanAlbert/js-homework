// Array.prototype.myForEach = function(callback) {
//   // this — текущий массив
//   for (let i = 0; i < this.length; i++) {
//     // Проверяем, существует ли элемент (чтобы пропустить "дыры" в массиве)
//     if (i in this) {
//       callback(this[i], i, this);
//     }
//   }
// };
// let arr = [10, 25, 30];

// arr.myForEach((num) => {
//   console.log(num);
// });


let arr = [10, 20, 30];

arr.forEach((num) => {
  console.log(num);
});
