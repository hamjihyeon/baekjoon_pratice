const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.09/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let X = Number(input[0]);
let result = '';

while (X >= 4) {
  result += 'long ';
  X -= 4;
}

console.log(result + 'int');