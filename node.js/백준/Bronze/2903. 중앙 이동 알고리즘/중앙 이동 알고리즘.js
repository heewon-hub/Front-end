const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const pointCount = (2 ** n + 1) ** 2;
console.log(pointCount);