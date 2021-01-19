// Lab *****************************************************************
// ACCESSING ARRAY ELEMENTS ---------------------------------------------
let names = ["pesho", "gosho", "stamat"];
console.log(names[names.length - 1]);

let firstName = names[0];
console.log(firstName);

console.log(names["stoyancho"]);

names[-1] = 'gery';
console.log(names[-1]);
console.log(names[100]);
console.log(names.length);

let names = ["pesho", "gosho", "stamat"];
getNames(names);
function getNames(names){
    let [firstName, secondName] = names;
    console.log(firstName);
    console.log(secondName);
}

// TEST & SPLIT OPERATOR ----------------------------------------
function solve(...names) {
  console.log(names.join(', '));
}
solve("pesho", "gosho", "stamat");

let numbers = [10, 2, 100, 4];
let largestNum = Math.max(...numbers);
console.log(largestNum);

// POP --------------------------------------------------
let names = ["pesho", "gosho", "stamat"];

let lastName = names.pop();
console.log(lastName);
console.log(names.length);
console.log(names);

// PUSH --------------------------------------------------
let newName = names.push("niki");
console.log(newName);
console.log(names);

// SHIFT & UNSHIFT ---------------------------------------
let firstName = names.shift();
// console.log(names);
let result = names.unshift("tony");
console.log(names);

function solve(arr) {
  let fisrtArg = Number(arr[0]);
  let lastArg = Number(arr[arr.length - 1]);
  let sum = fisrtArg + lastArg;
  console.log(sum);
}
solve(["20", "30", "40"]);

// SPLICE --------------------------------------------------
let names = ["pesho", "gosho", "stamat", "mariyka"];

names.splice(3, 1);
// let result = names.splice(2, 0, "stoyan", "boyan");
console.log(names);

// FILL ----------------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.length = 10;
// arr.fill('pesho');
arr.fill(5, 1, 4);
console.log(arr);

// REVERSE -------------------------------------------------
names.reverse();
console.log(names);

// SORT ----------------------------------------------------
let arr = [1, 4, 3, 2, 5, 6, 8, 7, 9, 10];
arr.sort();
console.log(arr);

function compareNumbers(a, b) {
  return a - b;
}

let numbers = [6, 3, 7, 4, 5, 10];
numbers.sort(compareNumbers);
console.log(numbers);

let names = ["Gosho", "Pesho", "Stamat", "Mariyka"];

names.sort((a, b) => a.localeCompare(b));
console.log(names);

let letters = ["z", "a", "h", "e", "b"];
console.log(letters);
letters.sort();
console.log(letters);

// SORT STRINGS *************
let names = ["pesho", "Gosho", "Stamat"];
console.log(names);

names.sort((a, b) => a.localeCompare(b)); //ascending order
console.log(names);
names.sort((a, b) => b.localeCompare(a)); // descending order
console.log(names);

// SORT NUMBERS **********
let numbers = [1, 7, 6, 24, 85, 45, 67];

numbers.sort((a, b) => a - b); //ascending order
console.log(numbers);
numbers.sort((a, b) => b - a); // descending order
console.log(numbers);

// JOIN -----------------------------------------------------
console.log(names.join('-+-'));

// INDEX OF -------------------------------------------------
let peshoIndex = names.indexOf('pesho');
console.log(peshoIndex);

// INCLUDES -------------------------------------------------
if (names.includes("pesho")) {
  console.log("Ima go!");
} else {
  console.log("Nqma go!");
}

// CONCAT ---------------------------------------------------
let otherNames = ["kiko", "jojo", "gigo"];
let allNames = names.concat(otherNames);
console.log(allNames);

// SLICE ----------------------------------------------------
let some = names.slice(0, 2);
console.log(some);
console.log(names);

// FOREACH -------------------------------------------------
function solve() {
    let names = ['Pesho', 'Gosho', 'Stamat', 'Maryika'];
let arr = [];
for(let i = 0; i < names.length; i++){
    arr.push(names[i]);
}
console.log(arr);

names.forEach(name => {
    arr.push(name);
});
console.log(arr);
}
solve();

// FILTER ------------------------------------------------
let names = ["Pesho", "Gosho", "Stamat", "Maryika"];
let filteredNames = names.filter(name => {
    return name[0] !== 'P';
});
console.log(filteredNames);

// FIND --------------------------------------------------
let found = names.find((name) => {
  return name[1] === "e";
});
console.log(found);

// SOME --------------------------------------------------
let someName = names.some(name => {
    return name[3] === 'h';
});
console.log(someName);

// MAP ---------------------------------------------------
let superHeroes = names.map(name => name.toUpperCase());
console.log(superHeroes);

// REDUCE ------------------------------------------------
let numbers = [1, 4, 10, 11, 200];

let sum = numbers.reduce((acc, el) => {
    return acc + el;
}, 0)
console.log(sum);

let names = ["Pesho", "Gosho", "Stamat", "Maryika"];

let people = names.reduce((a, x) => a + x[0], "");
console.log(people);

// NESTSED ARRAYS -----------------------------------------
let arr = [
  [4, 6, 3, 0],
  [2, 1, -2],
  [-5, 17],
  [7, 3, 9, 12],
];

console.log(arr[1][2]);

for (const row of arr) {
    for (const el of row) {
        console.log(el);
    }
}

arr.forEach(row => {
    row.forEach(el => {
        console.log(el);
    });
});

arr.forEach((row) => {
  console.log(row.join(" "));
});
