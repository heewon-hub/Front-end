const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a, b, c] = input;
let reward = 0;

if (a === b && b === c) {
    reward = 10000 + a * 1000;
} else if (a === b || a === c) {
    reward = 1000 + a * 100;
} else if (b === c) {
    reward = 1000 + b * 100;
} else {
    reward = Math.max(a, b, c) * 100;
}

console.log(reward);