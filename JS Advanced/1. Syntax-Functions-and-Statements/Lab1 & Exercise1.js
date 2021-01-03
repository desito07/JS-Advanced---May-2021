// Lab *****************************************************************

let someVariable;
console.log(someVariable);
let someVariable2 = null;
console.log(someVariable2);

let stringLet = "some text";
let numberLet = 10;
let boolean = false;
let boolean1 = true;

let _name = "John";
console.log(_name);

function sum(x, y){
    return x+y;
}
console.log(sum);

console.log(+'4' +2);
let name = undefined;
console.log(name);

function calculate() {
  let name = "Gosho";
  console.log(name);
  name = 'Pesho';
  console.log(name);
}
calculate();
console.log(name);

if ((a = 5)) {
  let b = 5;
  console.log(a + b);
}

console.log(5 ? 4 : 10);

function printStars(count){
    console.log('*'.repeat(count));
}
printStars(10);

function cal(a, b){
    let sum = a + b;
    return sum;
}
let result = cal(10, 20);
console.log(result);

// After Lab Practice *************************************************************

let _name = "John";
function $sum(x, y) {
  return x + y;
}
// let 9 = 'nine';
console.log(_name);
console.log($sum);

let a;
console.log(a);
// console.log(b);

function solve(a, b) {
  let c = a + b;
  c = 8;
  let name = "Gosho";
  name = "Maria";
  console.log(name);
  console.log(c);
}
solve(5, 5);

console.log(1 == "1");
console.log(1 === "1");
console.log(3 != "3");
console.log(3 !== "3");
console.log(5 < 5.5);
console.log(5 <= 4);
console.log(2 > 1.5);
console.log(2 >= 2);
console.log(0 ? 4 : 10);
console.log(5 ? 4 : 10);

function log(val) {
  if (val) {
    console.log("True");
  } else {
    console.log("False");
  }
}
log(3.14);
log({});
log(NaN);
log("NaN");

const val = "yes" && null && false;
console.log(val);
const val1 = true && 5 && "yeah" && false;
console.log(val1);

const val2 = 5;
console.log(typeof val2);
const str = "Pesho";
console.log(typeof str);
const obj = { name1: "Maria", age: 15 };
console.log(typeof obj);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars instanceof Array);
console.log(cars instanceof Object);
console.log(cars instanceof String);
console.log(cars instanceof Number);

let num = 5;
console.log(num instanceof Number);
console.log(num instanceof String);
console.log(num instanceof Array);
console.log(num instanceof Object);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
log(1, 2);
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
log(1, 2, 3, 4, 5, 6);

function printStars(count = 5) {
  console.log("*".repeat(count));
}
printStars(10);

function calc(a,b){
  let sum = a+b;
  // console.log(sum);
return sum;
}
let result = calc(10, 20);
console.log(result);

function sum(a, b) {
  let sum = a + b;
  return sum;
}
let result = sum(10, 20);
let multiply = function (a, b) {
  return a * b;
};
let product = multiply(2, 5);
console.log(product);

let subtract = (a,b) => {
  return a - b;
};
let result2 = subtract(10, 4);
console.log(result2);

let double = (a) => {
  return a * 2
};
let doubled = double(10);
console.log(doubled);

// Tricky tasks from Lab & Exercise ********************************************************

function solve(text) {
  let words = text
    .split(/[', .!?-]/g)
    .filter((x) => x != "")
    .map((x) => x.toUpperCase())
    .join(", ");
  console.log(words);
}
solve("Hi, how are you?");

function solve(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(sum);
  let inverted = (input) => {
    let invertedValue = 0;
    for (const num of input) {
      invertedValue += 1/ num;
    }
    return invertedValue;
  };
  console.log(inverted(input));
  console.log(input.join(''));
}
solve([1, 2, 3]);

function solve(num1, num2){
  for(let i = Math.min(num1, num2); i >= 1; i--){
    if(num1 % i === 0 && num2 % i === 0){
      console.log(i);
      break;
    }
  }
}
solve(168, 15);

function solve(input) {
  let number = input.toString().split("");
  // console.log(number);
  let unique = number[0];
  // console.log(unique);
  let flag = true;
  let sum = 0;
  for (const num of number) {
    if (num !== unique && flag) {
      console.log("false");
      flag = false;
    }
    sum += Number(num);
  }
  if (flag === true) {
    console.log("true");
  }
  console.log(sum);
}
solve(1468471);

// Exercise ****************************************************

function hypotenuse(m, n){
  function square(num){
    return num * num;
  }
  return Math.sqrt(square(m) + square(n));
}
console.log();
hypotenuse(3, 4);

console.log(num);
var num;
num = 6; // undefined

num = 6;
console.log(num);
var num; // 6

num = 6;
console.log(num);
let num; // num is not defined

console.log(num);
num = 6; // num is not defined
