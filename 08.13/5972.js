class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentNode = this.heap[parentIndex];

      if (parentNode[0] <= lastInsertedNode[0]) break;

      this.heap[index] = parentNode;
      index = parentIndex;
    }
    this.heap[index] = lastInsertedNode;
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const node = this.heap[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swap = null;

      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx][0] < node[0]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (
          (swap === null && this.heap[rightChildIdx][0] < node[0]) ||
          (swap !== null && this.heap[rightChildIdx][0] < this.heap[swap][0])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = node;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.13/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => []);

for (let [a, b, c] of map) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

const dijkstra = (start) => {
  const distance = Array(N + 1).fill(Infinity);
  distance[start] = 0;
  const pq = new MinHeap();
  pq.insert([0, start]);

  while (!pq.isEmpty()) {
    const [currentCost, currentNode] = pq.extractMin();

    if (currentCost > distance[currentNode]) {
      continue;
    }

    for (let [nextNode, nextCost] of graph[currentNode]) {
      const newCost = currentCost + nextCost;

      if (newCost < distance[nextNode]) {
        distance[nextNode] = newCost;
        pq.insert([newCost, nextNode]);
      }
    }
  }
  return distance;
}

const distances = dijkstra(1);
console.log(distances[N]);
