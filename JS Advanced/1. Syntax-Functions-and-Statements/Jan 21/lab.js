// 1
// function solve(string) {
//   console.log(string.length);
//   console.log(string);
// }
// solve("Hello, JavaScript!");

// 2
// function solve(str1, str2, str3) {
//   let sum = Number(str1.length + str2.length + str3.length);
//   let avr = Number(sum / 3);
//   console.log(sum);
//   console.log(avr.toFixed(0));
// }
// solve("chocolate", "ice cream", "cake");

// 3
// function solve(num1, num2, num3){
//     let max = Math.max(num1, num2, num3);
//     console.log(`The largest number is ${max}.`);
// }
// solve(5, -3, 16);

// 4
// function solve(arg) {
//     let inputType = typeof(arg);
//   if (inputType === "number") {
//     let area = Math.PI * arg * arg;
//     console.log(area.toFixed(2));
//   } else {
//     console.log(
//       `We can not calculate the circle area, because we receive a ${inputType}.`
//     );
//   }
// }
// solve(5);

// 5
// function solve(n1, n2, str){
//     switch(str){
//         case '+':
//         console.log(n1 + n2);
//         break;
//         case '-':
//         console.log(n1 - n2);
//         break;
//         case '*':
//         console.log(n1 * n2);
//         break;
//         case '/':
//         console.log(n1 / n2);
//         break;
//         case '%':
//         console.log(n1 % n2);
//         break;
//         case '**':
//         console.log(n1 ** n2);
//         break;
//     }
// }
// solve(5, 6, '+');

// 6
// function solve(n, m) {
//   n = Number(n);
//   m = Number(m);
//   let sum = 0;

//   for (let i = n; i <= m; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// solve("1", "5");

// 7
// function solve(str) {
//   switch (str) {
//     case "Monday":
//       console.log(1);
//       break;
//     case "Tuesday":
//       console.log(2);
//       break;
//     case "Wednesday":
//       console.log(3);
//       break;
//     case "Thursday":
//       console.log(4);
//       break;
//     case "Friday":
//       console.log(5);
//       break;
//     case "Saturday":
//       console.log(6);
//       break;
//     case "Sunday":
//       console.log(7);
//       break;
//     default:
//       console.log("error");
//   }
// }
// solve("Monday");

// 8
// function solve(num) {
//   for (let i = 0; i < num; i++) {
//     let row = "";
//     for (let j = 0; j < num; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// solve(5);

// 9
// function solve(arr) {
//   let sum = 0;
//   let sum1 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     sum1 += 1 / arr[i];
//   }
//   console.log(sum);
//   console.log(sum1);
//   console.log(arr.concat().join(''));  
// }
// solve([1, 2, 3]);
