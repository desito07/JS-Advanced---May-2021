// let myArr = [1, 2, 3, 4];
// console.log(myArr[8]);
// myArr[8] = 44;
// console.log(myArr);
// for(let i = 0; i < myArr.length; i++){
//     console.log(`${i} -> ${myArr[i]}`);
// }

// for(let myarr of myArr){
//     console.log(myarr);
// }

// ***************************************************
// // 1.	Even Position Elementfunction
// function solve(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr.join(" "));
// }
// solve(["20", "30", "40", "50", "60"]);

// 2.	Last K Numbers Sequence
// function solve(n, k) {
//   let result = [1];

//   for (let i = 1; i < n; i++) {
//     let last = result.slice(-k);
//     let sum = last.reduce((a, x) => a + x, 0);

//     result.push(sum);
//   }
//   return result;
// }
// console.log(solve(6, 3));

// 3.	Sum First Last
// function solve(arr) {
//   let n1 = Number(arr[0]);
//   let n2 = Number(arr[arr.length - 1]);
//   return n1 + n2;
// }
// console.log(solve(["20", "30", "40"]));

// 4. Negative / Positive Numbers
// function solve(arr) {
//   let arrNew = [];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       arrNew.unshift(arr[i]);
//     } else{
//       arrNew.push(arr[i]);
//     }
//   }
//   return arrNew.join("\n");
// }
// console.log(solve([7, -2, 8, 9]));

// 5.	Smallest Two Numbers
// function solve(arr) {
//   let result = arr
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .join(" ");
//   return result;
// }
// console.log(solve([30, 15, 50, 5]));

// 6.	Bigger Half
// function solve(arr) {
//   const result = arr.sort((a, b) => a - b);

//   return (`[${result.splice(result.length / 2).join(', ')}]`);
// }
// console.log(solve([4, 7, 2, 5]));

// 7.	Piece of Pie


// 8.	Process Odd Positions
// function solve(input){
//     let arr = input.filter((x, i) => x = i % 2 !== 0)
//         .map(x => x * 2)
//         .reverse()
//         .join(' ')
//         return arr
// }
// console.log(solve([10, 15, 20, 25]));

// 9.	Biggest Element
// function solve(arr) {
//   let maxNum = Number.MIN_SAFE_INTEGER;

//   arr.forEach((row) => {
//     //     let currentMax = Number.MIN_SAFE_INTEGER;
//     //         row.forEach(el => {
//     //             if(currentMax < el){
//     //                 currentMax = el;
//     //             }
//     //         });
//     //         if(maxNum < currentMax){
//     //             maxNum = currentMax;
//     //         }
//     //   });
//     //   console.log(maxNum);
//     let currentMax = Math.max(...row);
//     if (maxNum < currentMax) {
//       maxNum = currentMax;
//     }
//   });
//   console.log(maxNum);
// }
// solve([
//   [20, 50, 10],
//   [8, 33, 145],
// ]);

// 10.	Diagonal Sums
// function solve(arr) {
//     let primarySum = 0;
//     let secondarySum = 0;
//     let elementIndex = 0;

//     arr.forEach((row) => {
//         primarySum += row[elementIndex];
//         secondarySum += row[row.length - 1 - elementIndex];
//         elementIndex++;
//     });
//     console.log(primarySum + ' ' + secondarySum);
//   }
//   solve([[20, 40], [10, 60]]);

// 11.	Equal Neighbors
// function solve(input) {
//   let pairs = 0;
//   input.forEach((row, i) => {
//     row.forEach((el, j) => {
//       if (el === row[j + 1]) {
//         pairs++;
//       }
//       if (input[i + 1] && el === input[i + 1][j]) {
//         pairs++;
//       }
//     });
//   });
//   console.log(pairs);
// }
// solve([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);
