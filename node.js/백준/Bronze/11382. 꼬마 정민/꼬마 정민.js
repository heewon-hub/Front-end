const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [A, B, C] = input.split(' ').map(BigInt);
const sum = A + B + C;

console.log(sum.toString());