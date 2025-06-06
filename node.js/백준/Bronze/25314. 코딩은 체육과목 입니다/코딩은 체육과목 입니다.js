const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);
const count = N / 4;

const result = 'long '.repeat(count) + 'int';
console.log(result);