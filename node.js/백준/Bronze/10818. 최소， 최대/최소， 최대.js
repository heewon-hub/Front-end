var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const num = input[1].split(' ').map(Number);

const min = Math.min(...num);
const max = Math.max(...num);

console.log(min + ' ' + max);