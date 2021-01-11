function solve(input) {
  let nElement = Number(input.pop());
  let arr = [];
  //   console.log(nElement);
  input.forEach((x, i) => {
      if(i % nElement === 0){
      arr.push(x);
      }
  });
  console.log(arr.join('\n'));     
}
solve(["5", "20", "31", "4", "20", "2"]);
