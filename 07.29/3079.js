const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "07.29/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const T = input.slice(1).map(Number).sort((a, b) => a - b);
let min = BigInt(1);
let max = BigInt(T[N - 1] * M);
let result = max;

while (min <= max) {
  let count = BigInt(0);
  let mid = BigInt((max + min) / BigInt(2));
  T.forEach((times => {
    count += BigInt(mid) / BigInt(times);
  }))
  if (count >= M) {
    result = result < mid ? result : mid;
    max = mid - BigInt(1);
  } else {
    min = mid + BigInt(1);
  }
}
console.log(String(result));