function solve(input) {
  let arr = [];
  let max = Number.MIN_SAFE_INTEGER;

  input.forEach((num) => {
    if (max < num) {
      max = num;
      arr.push(max);
    }
  });
  console.log(arr.join("\n"));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function solve(input) {
  let max = Number.MIN_SAFE_INTEGER;

  let arr = input.reduce((acc, curr) => {
    if (max <= curr) {
      max = curr;
      acc.push(max);
    }
    return acc;
  }, []);
  console.log(arr.join("\n"));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
