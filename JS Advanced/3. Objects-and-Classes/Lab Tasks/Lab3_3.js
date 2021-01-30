function solve(input) {
  
  let arr = input.map(x => x.split(' <-> '));
  let obj = {};

  arr.forEach(el => {
      
    if (obj.hasOwnProperty(el[0])) {
      obj[el[0]] += Number(el[1]);
    } else {
      obj[el[0]] = Number(el[1]);
    }
});
    for(const key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
