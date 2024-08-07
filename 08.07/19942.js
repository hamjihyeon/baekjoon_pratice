const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.07/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const [mp, mf, ms, mv] = input[1].split(' ').map(Number);
const ingredients = input.slice(2).map(value => value.split(' ').map(Number));

function isValidCombination(combination) {
  let totalP = 0, totalF = 0, totalS = 0, totalV = 0;
  for (const index of combination) {
    totalP += ingredients[index][0];
    totalF += ingredients[index][1];
    totalS += ingredients[index][2];
    totalV += ingredients[index][3];
  }
  return totalP >= mp && totalF >= mf && totalS >= ms && totalV >= mv;
}

function findMinimalCombination() {
  let minCost = Infinity;
  let minCombination = null;

  for (let i = 1; i < (1 << N); i++) {
    const combination = [];
    let totalCost = 0;

    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        combination.push(j);
        totalCost += ingredients[j][4];
      }
    }
    if (isValidCombination(combination)) {
      if (totalCost < minCost || (totalCost === minCost && combination < minCombination)) {
        minCost = totalCost;
        minCombination = combination;
      }
    }
  }
  return { minCost, minCombination };
}

const { minCost, minCombination } = findMinimalCombination();

if (minCombination === null) {
  console.log(-1);
} else {
  console.log(minCost);
  console.log(minCombination.map(index => index + 1).sort((a, b) => a - b).join(' '));
}