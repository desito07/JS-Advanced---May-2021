function solve(fruit, weight, money){
    let weightKg = weight/1000;
    let price = weightKg * money;
    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);