function solve(input) {
  let arr = [];
  let initialNum = 1;
  input.forEach((x) => {
    if (x === "add") {
      arr.push(initialNum);
    } else if (x === "remove") {
      arr.pop(initialNum);
    }    
    initialNum++;
  });
  if(arr.length === 0){
      console.log('Empty');      
  } else {
  console.log(arr.join('\n'));
  }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
