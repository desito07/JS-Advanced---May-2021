function solve(arr) {
  let arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arrNum.push(arr[i]);
    }
  }
  console.log(arrNum.join(" "));
}
solve(["20", "30", "40"]);
