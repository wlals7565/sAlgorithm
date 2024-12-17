let second = 0;

class Heap {
  array = [];
  turnaround = [];

  insert = (job) => {
    this.array.push(job);
    this.heapifyBottomToTop(this.array.length - 1);
  };

  // 시발 요청 시간, 소요 시간이네
  // 작업의 소요시간이 짧은 것, 작업의 요청 시각이 빠른 것, 작업의 번호가 작은 것 순으로 우선순위가 높습니다.
  heapifyBottomToTop = (index) => {
    if (index === 0) return; // 루트 노드에 도달하면 종료

    const parentIndex = Math.ceil(index / 2) - 1; // 부모 노드 인덱스 계산

    const current = this.array[index];
    const parent = this.array[parentIndex];
    const shouldSwap =
      parent[1] > current[1] ||
      (parent[1] === current[1] && parent[0] > current[0]) ||
      (parent[1] === current[1] &&
        parent[0] === current[0] &&
        parent[2] > current[2]);

    if (shouldSwap) {
      this.swap(parentIndex, index);
      this.heapifyBottomToTop(parentIndex);
    }
  };

  swap = (index1, index2) => {
    let temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
  };

  top = () => {
    return this.array[0];
  };

  pop = () => {
    const result = this.top();
    const lastJob = this.array.pop();
    if (this.array.length != 0) {
      this.array[0] = lastJob;
    }
    this.turnaround.push(second + result[1] - result[0]);
    this.heapifyTopToBottom(0);
    return result;
  };

  heapifyTopToBottom = (index) => {
    const leftChildIndex = index * 2 + 1; // 왼쪽 자식 인덱스
    const rightChildIndex = index * 2 + 2; // 오른쪽 자식 인덱스

    const leftChild = this.array[leftChildIndex];
    const rightChild = this.array[rightChildIndex];
    const current = this.array[index];

    // 자식 노드가 없는 경우 (리프 노드)
    if (!leftChild && !rightChild) {
      return;
    }

    // 왼쪽 자식만 있는 경우
    if (leftChild && !rightChild) {
      if (
        leftChild[1] < current[1] ||
        (leftChild[1] === current[1] && leftChild[0] < current[0]) ||
        (leftChild[1] === current[1] &&
          leftChild[0] === current[0] &&
          leftChild[2] < current[2])
      ) {
        this.swap(leftChildIndex, index);
        this.heapifyTopToBottom(leftChildIndex); // 재귀적으로 왼쪽 자식 확인
      }
      return;
    }

    // 왼쪽과 오른쪽 자식이 모두 있는 경우
    if (leftChild && rightChild) {
      // 더 우선순위가 높은 자식을 찾음
      let priorityChildIndex = leftChildIndex;

      if (
        rightChild[1] < leftChild[1] || // 소요 시간이 짧은 순
        (rightChild[1] === leftChild[1] && rightChild[0] < leftChild[0]) || // 요청 시각이 빠른 순
        (rightChild[1] === leftChild[1] &&
         rightChild[0] === leftChild[0] &&
         rightChild[2] < leftChild[2]) // 작업 번호가 작은 순
    ) {
        priorityChildIndex = rightChildIndex;
    }

      // 부모와 더 우선순위가 높은 자식을 비교
      const priorityChild = this.array[priorityChildIndex];

      if (
        priorityChild[1] < current[1] ||
        (priorityChild[1] === current[1] && priorityChild[0] < current[0]) ||
        (priorityChild[1] === current[1] &&
          priorityChild[0] === current[0] &&
          priorityChild[2] < current[2])
      ) {
        this.swap(priorityChildIndex, index);
        this.heapifyTopToBottom(priorityChildIndex); // 재귀적으로 스왑된 위치 확인
      }
    }
  };

  getAvg = () => {
    let sum = 0;
    for (let i = 0; i < this.turnaround.length; i++) {
      sum += this.turnaround[i];
    }
    return sum / this.turnaround.length;
  };
}

let time = 0;
function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시각 기준 정렬
  const heap = new Heap();
  for (let i = 0; i < jobs.length || heap.array.length != 0 || time != 0; ) {
    while (jobs[i] && jobs[i][0] <= second) {
      heap.insert(jobs[i]);
      i++;
    }
    if (time == 0 && heap.top()) {
      time = heap.pop()[1];
    }
    if (time > 0) {
      time--;
    }
    second++;
  }
  return Math.floor(heap.getAvg());
}