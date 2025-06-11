const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const reversedA = input[0].split('').reverse().join('');
const reversedB = input[1].split('').reverse().join('');

console.log(Math.max(Number(reversedA), Number(reversedB)));