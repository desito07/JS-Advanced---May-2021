// 1.	Print an Array with a Given Delimiter
// function solve(arr, delimiter) {
//     return arr.join(delimiter);
//   }
//   console.log(solve(["One", "Two", "Three", "Four", "Five"], "-"));

// 2.	Print Every N-th Element from an Array
// function solve(arr, num) {
//   let newArr = [];
//   arr.forEach((x, i) => {
//     if (i % num === 0) {
//       newArr.push(x);
//     }
//   });
//   return newArr;
// }
// console.log(solve(["5", "20", "31", "4", "20"], 2));

// 3.	Add and Remove Elements
// function solve(arr) {
//   let newArr = [];
//   let num = 1;
//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "add":
//         newArr.push(num);
//         break;
//       case "remove":
//         newArr.pop(num);
//         break;
//     }
//     num++;
//   }
//   if (newArr.length === 0) {
//     return "Empty";
//   } else {
//     return newArr.join("\n");
//   }
// }
// console.log(solve(["add", "add", "add", "add"]));
// console.log(solve(["add", "add", "remove", "add", "add"]));
// console.log(solve(["remove", "remove", "remove"]));

// 4.	Rotate Array
// function solve(input, count) {
//     for(let i = 0; i < count % input.length; i++){

//         let last = input.pop();
//         input.unshift(last);

//     }
//   return input.join(" ");
// }
// console.log(solve(["1", "2", "3", "4"], 2));

// 5.	Extract Increasing Subsequence from Array
// function solve(input) {
//     let arr = [];
//     let max = Number.MIN_SAFE_INTEGER;

//     input.forEach((num) => {
//       if (max <= num) {
//         max = num;
//         arr.push(max);
//       }
//     });
//     return arr;
//   }
//   console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

// 6.	List of Names
// function solve(input) {
//   let newArr = input.sort((a, b) => a.localeCompare(b))
//                     .map((x, i) => {
//                     return `${i + 1}.${x}`
//                     });
//      return newArr.join('\n');
// }
// console.log(solve(["John", "Bob", "Christina", "Ema"]));

// 7.	Sorting Numbers
// function solve(arr) {
//     arr.sort((a, b) => a - b);
//     // console.log(arr);
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 1) {
//         result.push(arr.pop());
//         } else {
//          result.push(arr.shift());
//         }
//   }
//      return result;
// }
// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// 8.	Sort an Array by 2 Criteria
// function solve(input) {
//     input.sort((a, b) => a.length - b.length || a.localeCompare(b));
//     return input.join('\n');
// }
// console.log(solve(['alpha',
// 'beta',
// 'gamma']
// ));

// 9.	Magic Matrices
// function solve(array) {
//   let sumOfRows = 0;
//   array.forEach((row, index) => {
//     let isEqual = true;
//     if (array[index + 1]) {
//       if (
//         row.reduce((acc, el) => acc + el) ==
//         array[index + 1].reduce((acc, el) => acc + el)
//       ) {
//         sumOfRows = row.reduce((acc, el) => acc + el);
//       } else {
//         isEqual = false;
//       }
//     }
//   });
//   let counter = 0;
//   let sumOfColumns = 0;
//   let currSum = 0;
//   let fistCHeck = false;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       sumOfColumns += array[j][counter];
//     }
//     if (currSum !== sumOfColumns && !fistCHeck) {
//       currSum = sumOfColumns;
//       fistCHeck = true;
//     } else {
//       fistCHeck = false;
//       break;
//     }
//     sumOfColumns = 0;
//     counter++;
//   }

//   if (sumOfColumns === sumOfRows) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// solve([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5],
// ]);
