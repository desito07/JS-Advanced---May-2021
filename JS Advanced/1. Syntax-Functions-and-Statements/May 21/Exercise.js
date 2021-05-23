// 1.	Fruit
// function solve(str, num1, num2){
//     let kg = num1 / 1000;
//     let price = kg * num2;
//     console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${str}.`);
// }
// solve('orange', 2500, 1.80);

// 2.	Greatest Common Divisor - GCD
// function solve(num1, num2){
//     for (let i = Math.min(num1, num2); i >= 1; i--){
//         if(num1 % i ===0 && num2 % i === 0){
//             console.log(i);
//             break;
//         }
//     }
// }
// solve(15, 5);

// 3.	Same Numbers
// function solve(num) {
//   let n = num.toString().split("");
//   // console.log(n);
//   let unique = n[0];
//   let flag = true;
//   let sum = 0;
//   for (let i = 0; i < n.length; i++) {
//       if(n[i] !== unique && flag){
//           console.log('false');
//           flag = false;
//       }
//       sum += Number(n[i]);
//     }
//     if(flag){
//         console.log('true');
//     }
//   console.log(sum);
// }
// solve(2222222);

// 4.	Time to Walk
// solve = (steps, length, speed) => {
//     let distance = steps * length;
//     let time = Math.ceil(distance / (speed * 1000 / 3600) + Math.floor(distance / 500) * 60);
//     let hours = Math.floor(time / 3600);
//     let minutes = Math.floor((time - hours * 3600) / 60);
//     let seconds = time - hours*3600 - minutes*60;
//     return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

//     function pad(num){
//         if(num < 10){
//             return '0' + num;
//         } else {
//             return '' + num;
//         }
//     }
// }
// console.log(solve(4000, 0.60, 5));
// console.log(solve(2564, 0.70, 5.5));

// 5.	Road Radar
// function solve(speed, area) {
//     let diff = 0;
//     let maxSpeed = 0;
//     switch (area) {
//         case "motorway":
//             diff = speed - 130;
//             maxSpeed = 130;
//             break;
//         case "interstate":
//             diff = speed - 90;
//             maxSpeed = 90;
//             break;
//         case "city":
//             diff = speed - 50;
//             maxSpeed = 50;
//             break;
//         case "residential":
//             diff = speed - 20;
//             maxSpeed = 20;
//             break;
//     }
//     if (diff <= 0) {
//         console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
//         return;
//     }

//     if (diff <= 20) {
//         console.log(
//             `The speed is ${diff} km/h faster than the allowed speed of ${maxSpeed} - speeding`
//         );
//     } else if (diff <= 40) {
//         console.log(
//             `The speed is ${diff} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`
//         );
//     } else if (diff > 40) {
//         console.log(
//             `The speed is ${diff} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`
//         );
//     }
// }
// solve(40, "city");
// solve(21, "residential");
// solve(120, "interstate");
// solve(200, "motorway");

// 6.	Cooking by Numbers
// function solve(input) {
//   let num = Number(input.shift());
//   // console.log(num);
//   for (let i = 0; i < input.length; i++) {
//     switch (input[i]) {
//       case "chop":
//         num /= 2;
//         break;
//       case "dice":
//         num = Math.sqrt(num);
//         break;
//       case "spice":
//         num += 1;
//         break;
//       case "bake":
//         num *= 3;
//         break;
//       case "fillet":
//         num *= 0.8;
//         break;
//     }
//     console.log(num);
//   }
// }
// solve(["32", "chop", "chop", "chop", "chop", "chop"]);

// 7.	Validity Checker
// function solve(x1, y1, x2, y2) {
//   console.log(
//     `{${x1}, ${y1}} to {0, 0} is ${checkValidity(isValid(x1, y1, 0, 0))}`
//   );
//   console.log(
//     `{${x2}, ${y2}} to {0, 0} is ${checkValidity(isValid(x2, y2, 0, 0))}`
//   );
//   console.log(
//     `{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(
//       isValid(x1, y1, x2, y2)
//     )}`
//   );
//   function isValid(x1, y1, x2, y2) {
//     let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     return Number.isInteger(value);
//   }

//   function checkValidity(validity) {
//     return validity ? "valid" : "invalid";
//   }
// }
// solve(3, 0, 0, 4);

// 8.	Words Uppercase
// function wordUpperCase(input) {
//   return input.toUpperCase().match(/\w+/gim).join(", ");
// }
// console.log(wordUpperCase("Hi, how are you?"));
