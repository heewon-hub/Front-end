var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
  const [A, B] = line.split(' ').map(Number);
  if (A !== 0 && B !== 0) {
    console.log(A + B);
  }
});