const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.14/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number).sort((a, b) => a - b);
let count = 0;
let result = [];

for (let i = A + 1; i < B; i++) {
  count++;
  result.push(i);
}
console.log(count);
console.log(result.join(' '));