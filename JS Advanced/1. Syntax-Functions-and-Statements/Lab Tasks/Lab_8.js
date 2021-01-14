function solve(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  let inverted = (numbers) => {
    let invertedValue = 0;
    for (let number of numbers) {
      invertedValue += 1 / number;
    }
    return invertedValue;
  };
  console.log(inverted(numbers));

  console.log(numbers.join(""));
}
solve([1, 2, 3]);

function solve(num) {  
  for(let i = 0; i < num; i++){
    let row = '';
    for(let j = 0; j < num; j++){
      row += '* ';
    }
    console.log(row);    
  }  
}
solve(5);
