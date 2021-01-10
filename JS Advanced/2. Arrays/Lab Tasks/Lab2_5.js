function solve(numbers) {
  return numbers
    .filter((i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}
let result = solve([10, 15, 20, 25]);
console.log(result);
