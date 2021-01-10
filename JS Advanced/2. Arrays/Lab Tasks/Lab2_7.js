function solve(arr) {
  let maxNum = Number.MIN_SAFE_INTEGER;

  arr.forEach(row => {
//     let currentMax = Number.MIN_SAFE_INTEGER;
//         row.forEach(el => {
//             if(currentMax < el){
//                 currentMax = el;
//             }
//         });
//         if(maxNum < currentMax){
//             maxNum = currentMax;
//         }
//   });
//   console.log(maxNum);
    let currentMax = Math.max(...row);
    if (maxNum < currentMax) {
      maxNum = currentMax;
    }
  });
  console.log(maxNum);
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
