var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  console.log(A + B);
}