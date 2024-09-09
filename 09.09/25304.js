const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.09/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const X = Number(input[0]);
const N = Number(input[1]);
const items = input.slice(2).map(line => line.split(' ').map(Number));
let result = 0;

for (let i = 0; i < N; i++) {
    result += items[i][0] * items[i][1];
}

if (result === X) {
  console.log("Yes");
} else {
  console.log("No");
}