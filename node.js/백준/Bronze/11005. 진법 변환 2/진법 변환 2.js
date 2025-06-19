const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]); 
const B = parseInt(input[1]);

const result = N.toString(B).toUpperCase(); 

console.log(result);