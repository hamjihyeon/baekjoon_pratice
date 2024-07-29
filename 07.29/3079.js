const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "07.29/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const T = input.slice(1).map(Number);

let min = 1n;
let max = BigInt(T.reduce((a, b) => a > b ? a : b)) * BigInt(M);
let result = max;
const bigM = BigInt(M);

while (min <= max) {
  let mid = (min + max) / 2n;
  let count = 0n;

  for (let i = 0; i < N; i++) {
    count += mid / BigInt(T[i]);
    if (count >= bigM) break;
  }

  if (count >= bigM) {
    result = mid;
    max = mid - 1n;
  } else {
    min = mid + 1n;
  }
}

console.log(result.toString());