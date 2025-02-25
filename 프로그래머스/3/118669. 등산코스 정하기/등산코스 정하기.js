// 힙 만들고 시간 초과 해결하기


// 이것만 테스트 해보기
class MinHeap {
  heap = [];

  // 확인
  push = (vertex, distance) => {
    this.heap.push([vertex, distance]);
    let childIndex = this.heap.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      this.heap[parentIndex] !== undefined &&
      this.heap[parentIndex][1] > this.heap[childIndex][1]
    ) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[childIndex];
      this.heap[childIndex] = temp;
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  };

  pop = () => {
    if(this.heap.length == 1) {
      return this.heap.pop();
    }
    if(this.heap.length == 0) {
      return [undefined, undefined]
    }
    const [vertex, distance] = this.heap[0];
    this.heap[0] = this.heap.pop();
    let parentIndex = 0;
    let leftChildIndex = parentIndex * 2 + 1;
    let rightChildIndex = parentIndex * 2 + 2;

    while (true) {
      if (this.heap[leftChildIndex] && this.heap[rightChildIndex]) {
        const [comparedIndex, comparedDistance] =
          this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]
            ? [leftChildIndex, this.heap[leftChildIndex][1]]
            : [rightChildIndex, this.heap[rightChildIndex][1]];
        if (comparedDistance < this.heap[parentIndex][1]) {
          const [tempIndex, temp] = [comparedIndex, this.heap[comparedIndex]];
          this.heap[comparedIndex] = this.heap[parentIndex];
          this.heap[parentIndex] = temp;
          parentIndex = tempIndex;
          leftChildIndex = parentIndex * 2 + 1;
          rightChildIndex = parentIndex * 2 + 2;
        }
        else {
          break;
        }
      }
      else if(this.heap[leftChildIndex] && !this.heap[rightChildIndex]) {
        if(this.heap[leftChildIndex][1]<this.heap[parentIndex][1]) {
          const [tempIndex, temp] = [leftChildIndex,this.heap[leftChildIndex]];
          this.heap[leftChildIndex] = this.heap[parentIndex];
          this.heap[parentIndex] = temp;
          parentIndex = tempIndex;
          leftChildIndex = parentIndex * 2 + 1;
          rightChildIndex = parentIndex * 2 + 2;
        }
        else {
          break;
        }
      }
      else {
        break;
      }
    }
    return [vertex, distance];
  };
}

function solution(n, paths, gates, summits) {
  // 연결된 정점 저장용
  const linkedVertexList = new Map();
  // 초기화
  for (let i = 1; i <= n; i++) {
    linkedVertexList.set(i, []);
  }
  // 출발 정점 저장용
  const gatesSet = new Set();
  for (let i = 0; i < gates.length; i++) {
    gatesSet.add(gates[i]);
  }
  // 도착 정점 저장용
  const summitsSet = new Set();
  for (let i = 0; i < summits.length; i++) {
    summitsSet.add(summits[i]);
  }
  // 거리 저장용 A->B형식
  const distanceMap = new Map();
  for (let i = 0; i < paths.length; i++) {
    distanceMap.set(`${paths[i][0]}->${paths[i][1]}`, paths[i][2]);
    distanceMap.set(`${paths[i][1]}->${paths[i][0]}`, paths[i][2]);
    linkedVertexList.get(paths[i][0]).push(paths[i][1]);
    linkedVertexList.get(paths[i][1]).push(paths[i][0]);
  }
  // 설정 확인 완료
  // 여기부터
  const minheap = new MinHeap();
  // 시작 지점 모두 확인
  for (let i = 0; i < gates.length; i++) {
    const gate = gates[i];
    const vertexList = linkedVertexList.get(gate);
    // 이 부분은 또 쓰인다.
    for (let i = 0; i < vertexList.length; i++) {
      const distance = distanceMap.get(`${gate}->${vertexList[i]}`);
      minheap.push(vertexList[i], distance)
    }
  }

  // 이후 출발
  const results = [];
  const visitedSet = new Set();
  let maxIntensity = 0;
  let minimumIntensityVertex, minimumIntensity;
  while (true) {
    while(true) {
      const node = minheap.pop();
      minimumIntensityVertex = node[0];
      minimumIntensity = node[1]
      if(!visitedSet.has(minimumIntensityVertex) || minimumIntensityVertex === undefined) {
        break;
      }
    }
    // 방문할 정점이 없으면 더 이상 할 필요가 없다.
    if(!minimumIntensityVertex && !minimumIntensity) {
      break;
    }
    if (minimumIntensity > maxIntensity) {
      maxIntensity = minimumIntensity;
    }
    if (summitsSet.has(minimumIntensityVertex)) {
      if (
        results.length == 0 ||
        results[results.length - 1][1] == maxIntensity
      ) {
        results.push([minimumIntensityVertex, maxIntensity]);
        visitedSet.add(minimumIntensityVertex);
      } else {
        break;
      }
    } else {
      visitedSet.add(minimumIntensityVertex);
      const vertexList = linkedVertexList.get(minimumIntensityVertex);
      for (let i = 0; i < vertexList.length; i++) {
        if (visitedSet.has(vertexList[i]) || gatesSet.has(vertexList[i])) {
          continue;
        }
        const distance = distanceMap.get(
          `${minimumIntensityVertex}->${vertexList[i]}`
        );
        minheap.push(vertexList[i], distance)
      }
    }
  }
  results.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(results[0]);
  return results[0];
}