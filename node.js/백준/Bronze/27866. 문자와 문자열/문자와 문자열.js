var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const i = parseInt(input[1]);

console.log(a[i - 1]);