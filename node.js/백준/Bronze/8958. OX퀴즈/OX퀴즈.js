var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
    const line = input[i];
    let score = 0;
    let count = 0;

    for (let ch of line) {
        if (ch === 'O') {
            count++;
            score += count;
        } else {
            count = 0;
        }
    }

    console.log(score);
}