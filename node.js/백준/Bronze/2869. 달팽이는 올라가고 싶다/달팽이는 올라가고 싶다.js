const fs = require('fs');
const [A, B, V] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const days = Math.ceil((V - A) / (A - B)) + 1;
console.log(days);