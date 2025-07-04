const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const maxScore = Math.max(...scores);

const newScores = scores.map(score => score / maxScore * 100);
const average = newScores.reduce((a, b) => a + b, 0) / N;

console.log(average);