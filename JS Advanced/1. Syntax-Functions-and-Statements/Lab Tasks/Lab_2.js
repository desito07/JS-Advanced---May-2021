function solve(firstNum, secondNum, operator){
    let result = 0;
    switch(operator){
        case '+':result = firstNum + secondNum;
            break;
        case '-':result = firstNum - secondNum;
            break;
        case '*':result = firstNum * secondNum;
            break;
        case '/':result = firstNum / secondNum;
            break;
        case '%':result = firstNum % secondNum;
            break;
        case '**':result = firstNum ** secondNum;
            break;        
    }
    console.log(result);
}
solve(5, 6, '+');
solve(3, 5.5, '*');

function solve(str1, str2, str3) {
    let str1Length = Number(str1.length);
    let str2Length = Number(str2.length);
    let str3Length = Number(str3.length);
    let sum = Math.floor(str1Length+str2Length+str3Length);
    let avr = Math.floor(sum / 3);
    console.log(sum);
    console.log(avr);    
}
solve('pasta', '5', '22.3');
