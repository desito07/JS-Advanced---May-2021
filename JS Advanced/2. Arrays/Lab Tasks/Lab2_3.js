function solve(arr) {
    let newArr = [];
    arr.forEach((el) => {
      if (el < 0) {
        newArr.unshift(el);
      } else {
        newArr.push(el);
      }    
    });
    console.log(newArr.join('\n'));
  }
  solve([7, -2, 8, 9]);
