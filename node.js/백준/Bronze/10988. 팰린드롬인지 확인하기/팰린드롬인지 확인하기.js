const fs = require('fs');
const word = fs.readFileSync('/dev/stdin').toString().trim();

const reversed = word.split('').reverse().join('');

console.log(word === reversed ? 1 : 0);