function solve(input) {
  let speed = input.shift();
  let area = input.shift();
  let diff = 0;

  switch (area) {
    case "motorway":
      diff = speed - 130;
      break;
    case "interstate":
      diff = speed - 90;
      break;
    case "city":
      diff = speed - 50;
      break;
    case "residential":
      diff = speed - 20;
      break;
  }

  if (diff <= 20 && diff > 0) {
    console.log("speeding");
  } else if (diff <= 40 && diff > 0) {
    console.log("excessive speeding");
  } else if (diff > 40 && diff > 0) {
    console.log("reckless driving");
  }
}
solve([40, "city"]);
solve([21, "residential"]);
solve([120, "interstate"]);
solve([200, "motorway"]);
