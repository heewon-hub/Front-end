var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i] ** 2;
}

const result = sum % 10;
console.log(result);