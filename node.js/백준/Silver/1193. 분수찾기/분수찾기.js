const fs = require('fs');
const x = Number(fs.readFileSync('/dev/stdin').toString().trim());

let line = 1;
let count = 0;

while (x > count + line) {
  count += line;
  line++;
}

const indexInLine = x - count;

let numerator, denominator;

if (line % 2 === 0) {
  numerator = indexInLine;
  denominator = line - indexInLine + 1;
} else {
  numerator = line - indexInLine + 1;
  denominator = indexInLine;
}

console.log(`${numerator}/${denominator}`);