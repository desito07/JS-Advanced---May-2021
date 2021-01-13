function solve(n, m) {
  let sum = 0;
  let num1 = Number(n);
  let num2 = Number(m);
  for (let i = num1; i <= num2; i++) {
    sum += i;    
  }
  console.log(sum);
}
solve("1", "5");
solve("-8", "20");

function solve(num1, num2, num3) {
  let maxNum = Math.max(num1, num2, num3);
  console.log(`The largest number is ${maxNum}.`);
}
solve(-3, -5, -22.5);
