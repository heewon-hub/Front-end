var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

const n = input;

for (let i = 1; i <= 9; i++) {
  console.log(input + ' * ' + i + ' = ' + input*i);
}