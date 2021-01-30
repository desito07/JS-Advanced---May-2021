function solve(input) {
  let obj = {};

  while (input.length != 0) {
    let town = input.shift();
    let income = Number(input.shift());
    
    if(obj.hasOwnProperty(town)){
        obj[town] += income;
    } else {
        obj[town] = income;
    }
 }
  console.log(JSON.stringify(obj));
}
solve(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);
