var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const nums = input;

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

if (JSON.stringify(nums) === JSON.stringify(ascending)) {
    console.log('ascending');
} else if (JSON.stringify(nums) === JSON.stringify(descending)) {
    console.log('descending');
} else {
    console.log('mixed');
}