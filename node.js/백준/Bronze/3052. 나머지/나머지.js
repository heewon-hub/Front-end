const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const count = input.map(num => num % 42);
const a = new Set(count);

console.log(a.size);