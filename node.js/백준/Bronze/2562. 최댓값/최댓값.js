var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let max = input[0];
let a = 1;

for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
        max = input[i];
        a = i + 1;
    }
}

console.log(max);
console.log(a);