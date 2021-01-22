function solve(input) {
  let result = [];  
  let arr = input
            .map(row => row.split('|')
            .filter(x => x != '')
            .map(x => x.trim()));
            // console.log(arr);
  let [town, latitude, longitude] = arr.shift();

  arr.forEach(el => {
      let obj = {};
      obj[town] = el[0];
      obj[latitude] = +(Number(el[1]).toFixed(2));
      obj[longitude] = +(Number(el[2]).toFixed(2));
      result.push(obj);      
  });          
   console.log(JSON.stringify(result));   
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
