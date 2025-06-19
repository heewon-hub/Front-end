const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
const maxLen = Math.max(...input.map(line => line.length));

for (let col = 0; col < maxLen; col++) {
    for (let row = 0; row < 5; row++) {
        if (input[row][col]) {
            result += input[row][col];
        }
    }
}

console.log(result);