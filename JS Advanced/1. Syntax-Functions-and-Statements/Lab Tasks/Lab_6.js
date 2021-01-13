function solve(num = 5) {
  for (let i = 1; i <= num; i++){
    let row = '';
    for (let j = 1; j <= num; j++) {
      row +='* ';
    }
    console.log(row);
  }
}
solve(5);

function solve(str1, str2) {
  let n = Number(str1);
  let m = Number(str2);
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}
solve("1", "5");

