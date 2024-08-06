const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "08.05/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return;
  }
  console.log(num);
}

for (let i = M; i <= N; i++) {
  isPrime(i);
}