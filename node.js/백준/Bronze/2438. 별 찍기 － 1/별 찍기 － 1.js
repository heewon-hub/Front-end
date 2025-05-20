var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const N = parseInt(input);

  for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i));
  }