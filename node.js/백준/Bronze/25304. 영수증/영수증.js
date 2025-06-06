const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const total = parseInt(input[0]);     
const n = parseInt(input[1]);       

let sum = 0;

for (let i = 2; i < 2 + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    sum += a * b;
}

console.log(sum === total ? "Yes" : "No");