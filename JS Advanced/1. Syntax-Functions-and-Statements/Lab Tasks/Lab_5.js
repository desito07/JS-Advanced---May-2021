function solve(arg) {
  let result = 0;
  let inputType = typeof arg;
  if (inputType === 'number') {
      result = Math.PI*arg*arg;
    console.log(result.toFixed(2));
  } else {
      console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
  }
}
solve(5);
solve("name");

function solve(num1, num2, operator) {  
    let result = 0;
    switch(operator){
      case '+':
      result = num1 + num2;
      break;
      case '-':
      result = num1 - num2;
      break;
      case '*':
      result = num1 * num2;
      break;
      case '/':
      result = num1 / num2;
      break;
      case '%':
      result = num1 % num2;
      break;
      case '**':
      result = num1 ** num2;
      break;
    }
    console.log(result);    
}
solve(5, 6, '+');
