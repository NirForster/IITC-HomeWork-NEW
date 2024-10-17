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

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.some((number) => number > 3);
// console.log(newArr);

// const arr = [2, 4, 6, 8, 10];
// const newArr = arr.every((number) => number % 2 === 0);
// console.log(newArr);

// const arr = ["תפוח", "בננה", "דובדבן"];
// const newArr = arr.some((word) => word.length > 6);
// console.log(newArr);

// const arr = ['חתול', 'כלב', 'פיל'];
// const newArr = arr.some((word) => word.length > 6);
// console.log(newArr);

// const arr = [false, false, true, false];
// const newArr = arr.some((boolean) => boolean === true);
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5];
// const numOver3 = arr.find((num) => num > 3);
// console.log(numOver3);

// const arr = [1, 3, 4, 5, 6];
// const index = arr.findIndex((num) => num % 2 === 0);
// console.log(index);

// const arr = ["תפוח", "בננה", "דובדבן"];
// const strLonger5 = arr.find((str) => str.length > 5);
// console.log(strLonger5);

// const arr = ["תפוח", "בננה", "דובדבן", "תמר"];
// const indexOfWord = arr.findIndex((word) => word === "תמר");
// console.log(indexOfWord);

// const arr = [1, 2, 3, -4, 5, -6];
// const firstNegativeNum = arr.find((num) => num < 0);
// console.log(firstNegativeNum);

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const newArr = arr.sort((num1, num2) => num1 - num2);
// console.log(newArr);

// const arr = ["בננה", "דובדבן", "תפוח", "תמר"];
// arr.sort();
// console.log(arr);

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const newArr = arr.sort((num1, num2) => num2 - num1);
// console.log(newArr);

// const arr = ["בננה", "דובדבן", "תפוח", "תמר"];
// arr.sort((word1, word2) => word1.length - word2.length);
// console.log(arr);

// const arr = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ];
// arr.sort((word1, word2) => word1.age - word2.age);
// console.log(arr);

// const arr = [1, [2, 3], [4, [5, 6]]];
// const newArr = arr.flat(2);
// console.log(newArr);

// const arr = [1, [2, [3, [4]]]];
// const newArr = arr.flat(2);
// console.log(newArr);

// const arr = ["א", ["ב", "ג"], "ד"];
// const newArr = arr.flat();
// console.log(newArr);

// const arr = [1, [2, [3, [4, [5]]]]];
// const newArr = arr.flat(Infinity);
// console.log(newArr);

// const arr = ["א", "ב", "ג", "ד"];
// arr.forEach((letter, index) => {
//   console.log(`Index: ${index}, Value: ${letter}`);
// });

// const arr = ['תפוח', 'בננה', 'אבטיח', 'תמר'];
// const newArr = arr.map((num, index) => {
//   return { index, num };
// });
// console.log(newArr);

// const arr = ["א", "ב", "א", "ג", "ב", "א"];
// const frequency = arr.reduce((acc, current) => {
//   acc[current] = (acc[current] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);

// const arr = ["שלום", "עולם", "גאווהסקריפט"];
// const newArr = arr.some((word) => word.includes("ז"));
// console.log(newArr);

// const arr = [2, 4, 6, 8];
// const newArr = arr.every((num) => num % 2 === 0);
// console.log(newArr);

// const arr = [
//   { id: 1, status: "לא פעיל" },
//   { id: 2, status: "פעיל" },
// ];
// const newArr = arr.find((word) => word.status === "פעיל");
// console.log(newArr);

// const arr = ["Python", "JavaScript", "Ruby", "Java"];
// const newArr = arr.sort((a, b) => a.length - b.length);
// console.log(newArr);

// const arr = [1, [2, [3]], [4, [5]]];
// const newArr = arr.flat(1);
// console.log(newArr);

// const arr = ["ש", "ל", "ו", "ם"];
// let word = "";
// arr.forEach((letter) => (word += letter));
// console.log(word);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = arr.filter((num) => num % 3 === 0);
// console.log(newArr);

// const arr = ["קצר", "בינוני", "הכי ארוך", "ארוך יותר"];
// const newArr = arr.reduce((longest, current) => {
//   return current.length > longest.length ? current : longest;
// });
// console.log(newArr);

// const arr = [1, 3, 5, 7, 9];
// const newArr = arr.some((num) => num % 2 === 0);
// console.log(newArr);

// const arr = ["תפוח", "תפ", "תפוז"];
// const newArr = arr.every((word) => word.startsWith("תפ"));
// console.log(newArr);

// const arr = [
//   { id: 1, completed: false },
//   { id: 2, completed: true },
// ];
// const newArr = arr.find((word) => word.completed);
// console.log(newArr);

// const arr = ["תפוח", "בננה", "דובדבן"];
// const newArr = arr.findIndex((word) => word === "בננה");
// console.log(newArr);

// const arr = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ];
// const newArr = arr.sort((a, b) => a.name.localeCompare(b.name));
// console.log(newArr);

// const arr = [1, [2, 3], [4, [5, 6]]];
// const newArr = arr.flat(2);
// console.log(newArr);

// const string = "שלום";
// const characters = string.split(""); // מפרק את המחרוזת למערך של תווים

// characters.forEach((character) => {
//   console.log(character); // מדפיס כל תו למסוף
// });

// const arr = ["תפוח", "בננה", "דובדבן"];
// const newArr = arr.map((fruit) => fruit.charAt(0));
// console.log(newArr);

// const arr = ["א", "אב", "אבג", "אבגד"];
// const newArr = arr.filter((word) => word.length > 3);
// console.log(newArr);

// const arr = ["תפוח", "בננה", "דובדבן"];
// const newArr = arr.reduce(
//   (total, currentWord) => total + currentWord.length,
//   0
// );
// console.log(newArr);

// const arr = ["תפוח", "בננה", "דובדבן"];
// const newArr = arr.reduce(
//   (total, currentWord) => total + currentWord.length,
//   0
// );
// console.log(newArr);

// const arr = ["hello", "world", "javascript"];
// const newArr = arr.some((word) => word.length > 10);
// console.log(newArr);

// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.every((num) => num > 5);
// console.log(newArr);

// const arr = ["ספר", "דלת", "חלון"];
// const newArr = arr.find((str) => str.includes("ו"));
// console.log(newArr);

// const arr = [5, 10, 15, 20];
// const newArr = arr.findIndex((num) => num > 10);
// console.log("index is " + newArr);

// const arr = ["אאא", "בב", "ג"];
// const newArr = arr.sort((a, b) => a.length - b.length);
// console.log(newArr);

// const arr = [1, [2, [3, [4]]]];
// const newArr = arr.flat(3);
// console.log(newArr);

// const arr = [1, 4, 9, 16];
// const newArr = [];
// arr.forEach((num) => newArr.push(Math.sqrt(num)));
// console.log(newArr);

// const arr = ["א", "ב", "ג"];
// const newArr = arr.map((str) => str + str);
// console.log(newArr);

// const arr = [5, 10, 15, 20, 25];
// const newArr = arr.filter((num) => num >= 10 && num <= 20);
// console.log(newArr);

// const arr = [{ א: 1 }, { ב: 2 }, { ג: 3 }];
// const newArr = arr.reduce((total, number) => {
//   return { ...total, ...number };
// }, {});
// console.log(newArr);

// const arr = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const newArr = arr.some((obj) => obj.y);
// console.log(newArr);

// const arr = ['א1', 'ב2', 'ג3'];
// const allContainLetterAndNumber = arr.every(str => /[a-zא-ת]/i.test(str) && /\d/.test(str));
// console.log(allContainLetterAndNumber); // true

// const arr = [{ מחיר: 60 }, { מחיר: 40 }, { מחיר: 70 }];
// const newArr = arr.find((obj) => obj.מחיר < 50);
// console.log(newArr);

// const arr = [1, "", true, 0, null, "שלום"];
// const newArr = arr.findIndex((value) => !value);
// console.log(newArr);

// const arr = [3.14, 2.71, 1.41, 1.73];
// const newArr = arr.sort((a, b) => a - b);
// console.log(newArr);

// const arr = ["א", ["ב", ["ג"]]];
// const newArr = arr.flat(Infinity);
// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenSquares = numbers
//   .filter((num) => num % 2 === 0)
//   .map((num) => num ** 2);
// console.log(evenSquares);

// 1. Grouping an Array of Objects by a Specific Property
// const data = [
//     {שם: 'אליס', גיל: 25},
//     {שם: 'בוב', גיל: 30},
//     {שם: 'צ'רלי', גיל: 25}
//   ];

//   const groupedByAge = data.reduce((acc, person) => {
//     if (!acc[person.gיל]) {
//       acc[person.gיל] = [];
//     }
//     acc[person.gיל].push(person);
//     return acc;
//   }, {});
//   console.log(groupedByAge);

//   // 2. Simple Debounce Function
//   function debounce(func, delay) {
//     let timeout;
//     return function(...args) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func.apply(this, args), delay);
//     };
//   }
//   const functions = [
//     () => console.log('Function 1 executed'),
//     () => console.log('Function 2 executed'),
//   ];
//   const debouncedFunc = debounce(() => console.log('Debounced!'), 1000);
//   functions.forEach(func => {
//     debouncedFunc();
//   });

//   // 3. Fetching Data from Multiple URLs Using map and Promise.all
//   const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];
//   const fetchUrls = async (urls) => {
//     const requests = urls.map(url => fetch(url).then(response => response.json()));
//     const results = await Promise.all(requests);
//     return results;
//   };
//   fetchUrls(urls).then(data => console.log(data));

//   // 4. Simple Memoization Function
//   const memoize = (fn) => {
//     const cache = {};
//     return (n) => {
//       if (cache[n]) {
//         return cache[n];
//       }
//       const result = fn(n);
//       cache[n] = result;
//       return result;
//     };
//   };
//   const fibonacci = memoize(n => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)));
//   const fibNumbers = [0, 1, 2, 3, 4, 5, 6].map(fibonacci);
//   console.log(fibNumbers);

//   // 5. Simple Implementation of Promise.all Using reduce
//   const promiseAll = (promises) => {
//     return promises.reduce((acc, promise) => {
//       return acc.then(results =>
//         promise.then(result => [...results, result])
//       );
//     }, Promise.resolve([]));
//   };
//   const promises = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//   ];
//   promiseAll(promises).then(console.log);

//   // 6. Finding the Median of an Array of Numbers
//   const findMedian = (arr) => {
//     const sorted = arr.sort((a, b) => a - b);
//     const mid = Math.floor(sorted.length / 2);
//     return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
//   };
//   console.log(findMedian([3, 1, 4, 2]));

//   // 7. Flattening an Array of Arrays with Transformation
//   const arrays = [[1, 2], [3, 4], [5, 6]];
//   const flattenedWithTransformation = arrays.reduce((acc, curr) => {
//     return acc.concat(curr.map(num => num * 2));
//   }, []);
//   console.log(flattenedWithTransformation);

//   // 8. Composing Functions with reduce
//   const compose = (fns) => {
//     return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//   };
//   const double = x => x * 2;
//   const increment = x => x + 1;
//   const composedFunction = compose([double, increment]);
//   console.log(composedFunction(2));

//   // 9. Simple `groupBy` Implementation with filter and reduce
//   const groupBy = (arr, key) => {
//     return arr.reduce((acc, obj) => {
//       const groupKey = obj[key];
//       if (!acc[groupKey]) {
//         acc[groupKey] = [];
//       }
//       acc[groupKey].push(obj);
//       return acc;
//     }, {});
//   };
//   const items = [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' },
//     { category: 'vegetable', name: 'carrot' }
//   ];
//   console.log(groupBy(items, 'category'));

//   // 10. Finding the Mode of an Array
//   const findMode = (arr) => {
//     const frequency = arr.reduce((acc, num) => {
//       acc[num] = (acc[num] || 0) + 1;
//       return acc;
//     }, {});
//     return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
//   };
//   console.log(findMode([1, 2, 3, 1, 2, 1]));

//   // 11. Implementing flatMap
//   const flatMap = (arr, fn) => {
//     return arr.reduce((acc, item) => {
//       return acc.concat(fn(item));
//     }, []);
//   };
//   const nested = [[1], [2, 3], [4]];
//   const result = flatMap(nested, x => x);
//   console.log(result);

//   // 12. Complex Transformation on an Array of Objects
//   const transform = (data) => {
//     return data.map(obj => {
//       return {
//         ...obj,
//         value: obj.value * 2
//       };
//     }).reduce((acc, obj) => {
//       acc[obj.category] = acc[obj.category] || [];
//       acc[obj.category].push(obj);
//       return acc;
//     }, {});
//   };
//   const dataTransform = [
//     { category: 'A', value: 1 },
//     { category: 'B', value: 2 },
//     { category: 'A', value: 3 },
//   ];
//   console.log(transform(dataTransform));

//   // 13. Simple Implementation of reduceRight
//   const reduceRight = (arr, fn, initialValue) => {
//     return arr.reduce((acc, curr) => fn(acc, curr), initialValue);
//   };
//   const arr = [1, 2, 3];
//   const resultRight = reduceRight(arr, (acc, val) => acc + val, 0);
//   console.log(resultRight);

//   // 14. Sorting an Array of Objects by Multiple Criteria
//   const itemsSort = [
//     { name: 'apple', quantity: 5 },
//     { name: 'banana', quantity: 2 },
//     { name: 'orange', quantity: 5 },
//   ];
//   const sortedItems = itemsSort.sort((a, b) => {
//     if (a.quantity === b.quantity) {
//       return a.name.localeCompare(b.name);
//     }
//     return a.quantity - b.quantity;
//   });
//   console.log(sortedItems);

//   // 15. Simple Query Language Implementation
//   const query = (data, criteria) => {
//     return data
//       .filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]))
//       .map(item => ({ ...item }));
//   };
//   const dataQuery = [
//     { name: 'apple', color: 'red' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'cherry', color: 'red' },
//   ];
//   console.log(query(dataQuery, { color: 'red' }));

//   // 16. Creating a Trie from an Array of Words
//   const createTrie = (words) => {
//     const root = {};
//     words.forEach(word => {
//       let node = root;
//       for (let char of word) {
//         if (!node[char]) {
//           node[char] = {};
//         }
//         node = node[char];
//       }
//       node.isEndOfWord = true;
//     });
//     return root;
//   };
//   const trie = createTrie(['cat', 'car', 'bat']);
//   console.log(JSON.stringify(trie, null, 2));

//   // 17. Customizable Depth flat Implementation
//   const flatten = (arr, depth = 1) => {
//     return arr.reduce((acc, val) => {
//       return acc.concat(depth > 0 && Array.isArray(val) ? flatten(val, depth - 1) : val);
//     }, []);
//   };
//   const nestedArray = [1, [2, [3, 4]], 5];
//   console.log(flatten(nestedArray, 2));

//   // 18. Balanced Binary Search Tree from Sorted Array
//   const sortedArrayToBST = (arr) => {
//     if (!arr.length) return null;
//     const mid = Math.floor(arr.length / 2);
//     const node = {
//       value: arr[mid],
//       left: sortedArrayToBST(arr.slice(0, mid)),
//       right: sortedArrayToBST(arr.slice(mid + 1)),
//     };
//     return node;
//   };
//   const bst = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]);
//   console.log(JSON.stringify(bst, null, 2));

//   // 19. Simple SUMIF Function
//   const sumIf = (data, condition) => {
//     return data
//       .filter(item => Object.keys(condition).every(key => item[key] === condition[key]))
//       .reduce((sum, item) => sum + item.value, 0);
//   };
//   const itemsSumIf = [
//     { category: 'fruit', value: 10 },
//     { category: 'fruit', value: 20 },
//     { category: 'vegetable', value: 15 },
//   ];
//   console.log(sumIf(itemsSumIf, { category: 'fruit' }));
