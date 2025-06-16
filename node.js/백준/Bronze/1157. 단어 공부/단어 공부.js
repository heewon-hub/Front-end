const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

const count = new Array(26).fill(0); 
for (let i = 0; i < input.length; i++) {
    count[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...count);
const maxCount = count.filter(c => c === max).length;

if (maxCount > 1) {
    console.log('?');
} else {
    const index = count.indexOf(max);
    console.log(String.fromCharCode(index + 65));
}