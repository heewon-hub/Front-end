var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

const result = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    const index = input.charCodeAt(i) - 97;
    if (result[index] === -1) {
        result[index] = i;
    }
}

console.log(result.join(' '));