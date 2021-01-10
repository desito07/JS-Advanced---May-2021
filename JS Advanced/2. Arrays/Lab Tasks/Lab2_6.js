// function solve(arr) {
//   return arr.sort((a, b) => a - b).slice(0, 2);
// }
// let sorted = solve([30, 15, 50, 5]);
// console.log(sorted.join(" "));

function solve(arr) {
  let result = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
  console.log(result);
}
solve([30, 15, 50, 5]);
