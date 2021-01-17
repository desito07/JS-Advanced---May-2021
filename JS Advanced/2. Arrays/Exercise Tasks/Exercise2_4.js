function solve(input) {
  let count = Number(input.pop());
  count = count % input.length;
  
      for(let i = 0; i < count; i++){
        
        let last = input.pop();
        input.unshift(last);
       
    }
  console.log(input.join(" "));
}
solve(["1", "2", "3", "4", "2"]);
