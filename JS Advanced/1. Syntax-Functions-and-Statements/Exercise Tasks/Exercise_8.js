function solve(arr){
    let object = {};

    while(arr.length > 0){
        let product = arr.shift();
        let calories = arr.shift();

        object[product] = Number(calories);
    }
    console.log(object);
}
solve([ 'Yoghurt', '48', 'Rise', '138', 'Apple', '52' ]);