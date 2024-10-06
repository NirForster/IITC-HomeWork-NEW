// forEach:
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//   console.log(element);
// });

// arr.forEach((num) => {
//   console.log(num * 2);
// });

// const squares = [];

// arr.forEach((num) => {
//   squares.push(num * num);
// });
// console.log(squares);

// let sum = 0;
// arr.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

// let sentence = "";
// ["Hello", " ", "World", "!"].forEach((word) => {
//   sentence += word;
// });
// console.log(sentence);

// const doubled = arr.map((num) => {
//   return num * 2;
// });
// console.log(doubled);

// const charArr = ["תפוח", "בננה", "דובדבן"].map((word) => {
//   return word.length;
// });
// console.log(charArr);

// const numbers = [1, 4, 9, 16, 25];
// const squareRoot = numbers.map((num) => {
//   return Math.sqrt(num);
// });
// console.log(squareRoot);

// const newArr = ["hello", "world"].map((word) => {
//   return word.toUpperCase();
// });
// console.log(newArr);

// const newArr = [true, false, true].map((bool) => !bool);
// console.log(newArr);

// const numArr = [1, 2, 3, 4, 5, 6];
// const newArr = numArr.filter((num) => num % 2 === 0);
// console.log(newArr);

// const arr = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const newArr = arr.filter((fruit) => fruit.length > 5);
// console.log(newArr);

// const arr = [5, 10, 15, 20, 25];
// const newArr = arr.filter((num) => num > 10);
// console.log(newArr);

// const fruits = ["תפוח", "בננה", "תפוז", "דובדבן"];
// const startsWithT = fruits.filter((fruit) => fruit.startsWith("ת"));
// console.log(startsWithT);

// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((num, index) => index % 2 === 0 && index != 0);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.reduce((total, num) => total + num);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.reduce((total, num) => total * num);
// console.log(newArr);

// const arr = [10, 5, 15, 20, 25];
// const newArr = arr.reduce((total, num) => (num > total ? num : total));
// console.log(newArr);

// const arr = ["hello", " ", "world", "!"];
// const newArr = arr.reduce((sentence, word) => sentence + word);
// console.log(newArr);

// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const countOccurrences = numbers.reduce((accumulator, currentValue) => {
//   accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//   return accumulator;
// }, {});
// console.log(countOccurrences);
