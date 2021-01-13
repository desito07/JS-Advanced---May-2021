function solve(str1, str2, str3){
    let sum = 0;
    let avr = 0;
    let firstLength = str1.length;
    let secondLength = str2.length;
    let thirdLength = str3.length;
    sum = firstLength+secondLength+thirdLength;
    avr = Math.floor(sum / 3);
    console.log(sum);    
    console.log(avr);
}
solve('chocolate', 'ice cream', 'cake');

function solve(str) {
  console.log(str.length);
  console.log(str);
}
solve("Hello, JavaScript!");
