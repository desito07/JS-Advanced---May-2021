function solve(text) {
  let words = text
    .split(/[' ,!?.-]/g)
    .filter((x) => x != "")
    .map((x) => x.toUpperCase())
    .join(", ");

  console.log(words);
}
solve("Hi, how are you?");
solve("hello");

function solve(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(sum); 
  let inverted = 0;
  for (const element of input) {
     inverted += 1 / element;
  }
  console.log(inverted);  
  console.log(input.join("")); 
}
solve([1, 2, 3]);


