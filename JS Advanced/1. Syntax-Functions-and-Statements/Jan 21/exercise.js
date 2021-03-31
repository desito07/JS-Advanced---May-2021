// 1
// function solve(str, n1, n2){
//     let kg = n1 / 1000;
//     let money = n2 * kg;
//     console.log(`I need $${(money.toFixed(2))} to buy ${kg.toFixed(2)} kilograms ${str}.`);
// }
// solve('orange', 2500, 1.80);

// 2
// function solve(n1,n2){
//     for(let i = Math.min(n1, n2); i >=1; i--){
//         if(n1 % i === 0 && n2 % i === 0){
//             console.log(i);
//             break;
//         }
//     }
// }
// solve(15, 5);

// 3
// function solve(input) {
//   let num = input.toString().split("");
//   //   console.log(num);
//   let sum = 0;
//   let flag = true;
//   for (const n of num){
//       if(n !== num[0] && flag){
//           console.log('false');
//           flag = false;
//       }
//       sum += Number(n);
//     }
//     if(flag){
//         console.log('true');
//     }
//     console.log(sum)
// }
// solve(2222222);

// 4
// function solve(steps, length, speed) {
//   let distance = steps * length;
//   let time = Math.ceil(
//     distance / ((speed * 1000) / 3600) + Math.floor(distance / 500) * 60
//   );
//   let hours = Math.floor(time / 3600);
//   let minutes = Math.floor((time - hours * 3600) / 60);
//   let seconds = time - hours * 3600 - minutes * 60;
//   console.log(`0${hours}:${minutes}:${seconds}`);
// }
// solve(4000, 0.6, 5);

// 5
// function solve(input) {
//   let speed = input.shift();
//   let area = input.shift();
//   let diff = 0;

//   switch (area) {
//     case "motorway":
//       diff = speed - 130;
//       break;
//     case "interstate":
//       diff - 90;
//       break;
//     case "city":
//       diff - 50;
//       break;
//     case "residential":
//       diff = speed - 20;
//       break;
//   }
//   if (diff <= 20 && diff > 0) {
//     console.log("speeding");
//   } else if (diff <= 40 && diff > 0) {
//     console.log("excessive speeding");
//   } else if (diff > 40 && diff > 0) {
//     console.log("reckless driving");
//   }
// }
// solve([200, 'motorway']);

// 6
function solve(input) {
  let num = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        Math.sqrt(num);
        break;
      case "spice":
        num += 1;
        break;
      case "bake":
        num *= 3;
        break;
      case "fillet":
        num *= 0.8;
        break;
    }
    console.log(num);
  }
}
solve(["9", "dice", "spice", "chop", "bake", "fillet"]);
