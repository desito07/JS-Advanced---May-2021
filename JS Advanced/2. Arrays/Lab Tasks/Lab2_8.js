function solve(arr) {
  let primarySum = 0;
  let secondarySum = 0;
  let elementIndex = 0;

  arr.forEach((row) => {
      primarySum += row[elementIndex];
      secondarySum += row[row.length - 1 - elementIndex];
      elementIndex++;
  });
  console.log(primarySum + ' ' + secondarySum);  
}
solve([[20, 40], [10, 60]]);