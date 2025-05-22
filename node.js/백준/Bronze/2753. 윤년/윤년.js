var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

const year = input;

if (year >= 1 && year <= 4000) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(1);  
  } else {
    console.log(0); 
  }
}