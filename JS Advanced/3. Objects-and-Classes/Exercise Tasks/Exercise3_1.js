function solve(input) {
  let result = [];

  input.forEach((x) => {
    let [name, level, items] = x.split(" / ");
    level = Number(level);

    if(items === undefined){
        items = [];
    } else {
        items = items.split(', ');
    }

    result.push({ name, level, items });
  });
  
  console.log(JSON.stringify(result));
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
