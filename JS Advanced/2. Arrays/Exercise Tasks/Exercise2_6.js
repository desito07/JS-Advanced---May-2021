function solve(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(input.join('\n'));
}
solve(['test', 
'Deny', 
'omen', 
'Default']
);