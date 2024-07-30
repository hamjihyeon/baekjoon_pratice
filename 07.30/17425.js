const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "07.30/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.slice(1).map(Number);
const maxN = Math.max(...N);
const divisorSum = new Array(maxN + 1).fill(0);

for (let i = 1; i <= maxN; i++) {
  for (let j = i; j <= maxN; j += i) {
    divisorSum[j] += i;
  }
}

const cumulativeSum = new Array(maxN + 1).fill(0);

for (let i = 1; i <= maxN; i++) {
  cumulativeSum[i] = cumulativeSum[i - 1] + divisorSum[i];
}

console.log(N.map(n => cumulativeSum[n]).join('\n'));