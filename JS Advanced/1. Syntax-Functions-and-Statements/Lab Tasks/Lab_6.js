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
