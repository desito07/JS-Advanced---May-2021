function findMaxNumber(first, second, third){
    let maxNumber = Math.max(first, second, third);
    console.log(`The largest number is ${maxNumber}.`);
}
findMaxNumber(5, -3, 16);

function solve(input) {
  let arg = typeof input;
  // console.log(arg);
  if (arg === "number") {
    console.log((Math.PI * input * input).toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${arg}.`
    );
  }
}
solve(5);
solve("name");
