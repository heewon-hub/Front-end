var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

const number = Number(a) + Number(b) - Number(c);
const string = Number(String(a) + String(b)) - Number(c);

console.log(number);
console.log(string);