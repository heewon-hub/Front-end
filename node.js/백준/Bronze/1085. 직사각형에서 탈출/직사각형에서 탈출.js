const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [x, y, w, h] = input;

const left = x;
const right = w - x;
const bottom = y;
const top = h - y;

const minDistance = Math.min(left, right, bottom, top);

console.log(minDistance);