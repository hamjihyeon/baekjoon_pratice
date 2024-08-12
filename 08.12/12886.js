const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.12/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B, C] = input[0].split(' ').map(Number);
const sum = A + B + C;

if (sum % 3 !== 0) {
  console.log(0);
  return;
}

const queue = [];
const visited = new Set();

function addToQueue(a, b, c) {
  const sorted = [a, b, c].sort((x, y) => x - y);
  const key = sorted.join(' ');
  if (!visited.has(key)) {
    visited.add(key);
    queue.push(sorted);
  }
}

addToQueue(A, B, C);

while (queue.length > 0) {
  const [a, b, c] = queue.shift();
  if (a === b && b === c) {
    console.log(1);
    return;
  }

  addToQueue(a * 2, b - a, c);
  addToQueue(a * 2, b, c - a);
  addToQueue(a, b * 2, c - b);
}

console.log(0);
