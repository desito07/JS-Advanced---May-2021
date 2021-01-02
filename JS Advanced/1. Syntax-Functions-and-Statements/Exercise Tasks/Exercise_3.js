function solve(input) {
  let number = input.toString().split("");
  //   console.log(number);
  let unique = number[0];
  // console.log(unique);
  let flag = true;
  let sum = 0;
  for (const num of number) {
    if (num !== unique && flag) {
      console.log("false");
      flag = false;
    }
    sum += Number(num);
  }
  if (flag) {
    console.log("true");
  }
  console.log(sum);
}
solve(2222222);
solve(1234);
