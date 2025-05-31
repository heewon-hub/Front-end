var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

const words = input === "" ? [] : input.split(" ");
console.log(words.length);