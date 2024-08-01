const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "08.01/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);

const maxN = Math.floor(Math.sqrt(B));
const isPrime = new Array(maxN + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i < maxN; i++) {
  for (let j = i * i; j <= maxN; j += i) {
    isPrime[j] = false;
  }
}

const primes = [];
for (let i = 2; i <= maxN; i++) {
  if (isPrime[i]) {
    primes.push(i);
  }
}

let result = 0;
for (prime of primes) {
  let num = prime * prime;
  while (num <= B) {
    if (num >= A) {
      result++;
    }
    num *= prime;
  }
}

console.log(result);