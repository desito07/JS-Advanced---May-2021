// Function Declaration
// function printSomething(text) {
//   console.log(text);
// }
// printSomething("Pesho");

// Function Expression
// let printMessage = function (text) {
//   console.log(text);
// };
// printMessage("Pesho e gotin");

// Arrow Function
// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(2, 10);

// Function return declaration
// function calc(a, b) {
//   return a + b;
// }
// let result = calc(2, 20);
// console.log(result);

// Function expression return
// let calculate = function (c, d) {
//   return c + d;
// };
// let result1 = calculate(2, 10);
// console.log(result1);



// ******************************************************************
//  Задачи
// 1.	Echo Function
// function solve(str){
//     console.log(str.length);
//     console.log(str);
// }
// solve('Hello, JavaScript!');

// 2.	String Length
// function solve(str1, str2, str3) {
//   let sum = str1.length + str2.length + str3.length;
//   let avr = Math.floor(sum / 3);
//   console.log(sum);
//   console.log(avr);
// }
// solve("chocolate", "ice cream", "cake");

// 3.	Largest Number
// function solve(num1, num2, num3){
//     console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);
// }
// solve(5, -3, 16);

// 4.	Circle Area
// function solve(argument) {
//   let num = typeof argument;
//   if (num === "number") {
//     console.log((Math.PI * argument * argument).toFixed(2));
//   } else {
//     console.log(
//       `We can not calculate the circle area, because we receive a ${num}.`
//     );
//   }
// }
// solve(5);
// solve("name");

// 5.	Math Operations
// function solve(num1, num2, str){
//     switch(str){
//         case '+':
//             console.log(num1 + num2);
//         break;
//         case '-':
//             console.log(num1 - num2);
//         break;
//         case '*':
//             console.log(num1 * num2);
//         break;
//         case '/':
//             console.log(num1 / num2);
//         break;
//         case '%':
//             console.log(num1 % num2);
//         break;
//         case '**':
//             console.log(num1 ** num2);
//         break;
//     }
// }
// solve(5, 6, '+')

// 6.	Sum of Numbers N…M
// function solve(num1, num2){
//    let n = Number(num1);
//    let m = Number(num2);
//    let sum = 0;
//    for( let i = n; i <= m; i++){
//     sum += i;
//    }
//    console.log(sum);
// }
// solve('1', '5' )

// 7.	Day of Week
// function solve(day){
//     switch(day){
//         case 'Monday':
//             console.log(1);
//         break;
//         case 'Tuesday':
//             console.log(2);
//         break;
//         case 'Wednesday':
//             console.log(3);
//         break;
//         case 'Thursday':
//             console.log(4);
//         break;
//         case 'Friday':
//             console.log(5);
//         break;
//         case 'Saturday':
//             console.log(6);
//         break;
//         case 'Sunday':
//             console.log(7);
//         break;
//         default:
//             console.log('error');
//         break;
//     }
// }
// solve('Monday');
// solve('tyikyi');
// solve('Friday');

// 8.	Square of Stars
// function solve(num) {
//   for (let i = 1; i <= num; i++) {
//     let row = "";
//     for (let j = 1; j <= num; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// solve(1);
// solve(2);
// solve(5);

// 9.	Aggregate Elements
// function solve(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   let inverted = 0;
//   for(let i = 0; i < arr.length; i++){
//       inverted += 1/arr[i];
//   }
//   console.log(inverted);
//     console.log(arr.join(''));
// }
// solve([1, 2, 3]);
