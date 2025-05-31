var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
    const [r, s] = input[i].split(' ');
    const repeat = Number(r);
    let result = '';

    for (let char of s) {
        result += char.repeat(repeat);
    }

    console.log(result);
}