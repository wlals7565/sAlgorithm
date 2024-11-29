class MaxHeap {
  array = [];

  // 힙에 삽입
  insert(val) {
    this.array.push(val)
    this.heapifyBottomToTop(this.array.length-1)
  }

  // 힙에 삽입시 힙 조율 아래에서 위로
  heapifyBottomToTop(index = this.array.length-1) {
    if(index == 0){
      return
    }
    const parrentIndex = Math.ceil(index/2)-1;
    if(this.array[parrentIndex]<this.array[index]) {
      // 값 교환
      const temp = this.array[parrentIndex];
      this.array[parrentIndex] = this.array[index];
      this.array[index] = temp;
      // 바뀐 값에 대하여 재귀적으로 처리
      return this.heapifyBottomToTop(parrentIndex);
    }
    return
  }

  pop() {
    const maxValue = this.array[0];
    this.array[0] = this.array.pop();
    this.heapifyTopToBottom();
    return maxValue;
  }

  // 힙 조율 위에서 아래로
  heapifyTopToBottom(index = 0) {
    const topValue = this.array[index];
    const leftChildIndex = index*2+1;
    const rightChildIndex = index*2+2;
    const leftChildValue = this.array[leftChildIndex]
    const rightCHildValue= this.array[rightChildIndex]
    let maxValue;
    // 양쪽 자식 없을 경우
    if(leftChildValue == undefined && rightCHildValue  == undefined) {
      return;
    }
    // 왼쪽 자식만 있을 경우
    else if(leftChildValue && rightCHildValue  == undefined) {
      if(leftChildValue<=topValue) {
        return;
      }
      else {
        maxValue = leftChildValue;
        this.array[leftChildIndex] = topValue;
        this.array[index] = maxValue;
        this.heapifyTopToBottom(leftChildIndex)
      }
    }
    // 양쪽 자식이 있을 경우
    else {
      // 값도 저장해야 하지만 인덱스도 알아내야함.
      const maxChildValue = leftChildValue > rightCHildValue ? leftChildValue : rightCHildValue
      const maxChildIndex = leftChildValue > rightCHildValue ? leftChildIndex : rightChildIndex
      if(maxChildValue > topValue) {
        maxValue = maxChildValue;
        this.array[maxChildIndex] = topValue;
        this.array[index] = maxValue;
        this.heapifyTopToBottom(maxChildIndex)
      }
      else {
        return
      }
    }
  }

  top() {
    return this.array[0];
  }

  clear() {
    this.array = [];
  }

  
}

function solution(operations) {
  // 힙을 만들어야 한다.
  // 힙 관련 함수. 위에서 아래, 아래에서 위, 뽑기, 삽입
  // 한 종류 힙으로 최소힙 최대힙 둘다 가능하다. 곱하기 -
  // 문제는 두 개의 힙이 있을 때 어떻게 맞출 것인지인데
  // 그냥 map 객체 두개 만들어서 빼야했던 값들을 저장하고 루트에 올라오면 빼겠다.
  const maxHeap = new MaxHeap()
  const minHeap = new MaxHeap();
  const maxHeapMap = new Map();
  const minHeapMap = new Map();
  let elementCountInHeap = 0;

  // ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
  // I-삽입 D-삭제 1:최댓값 -1: 최솟값
  for(let i=0; i<operations.length; i++) {
    // 오퍼레이션 분리
    const operation = operations[i].split(" ")
    const [command, value] = operation;

    //삽입 명령어
    if(command == "I") {
      maxHeap.insert(Number(value))
      minHeap.insert(-Number(value))
      elementCountInHeap++;
    }
    // 삭제 명령어
    else{
      if(elementCountInHeap <= 1) {
        elementCountInHeap = 0;
        maxHeap.clear()
        minHeap.clear();
        maxHeapMap.clear()
        minHeapMap.clear()
      }
      //최댓값 삭제
      else if(value == "1") {
        const deleteValue = maxHeap.pop();
        minHeapMap.get(-deleteValue) ? minHeapMap.set(deleteValue, (minHeapMap.get(-deleteValue)+1)) : minHeapMap.set(-deleteValue, 1)
        while(maxHeapMap.get(maxHeap.top())) {
          const notExistValue = maxHeap.pop();
          maxHeapMap.set(notExistValue, (maxHeapMap.get(notExistValue)-1))
        }
        elementCountInHeap--
      }
      //최솟값 삭제
      else {
        const deleteValue = minHeap.pop();
        maxHeapMap.get(-deleteValue) ? maxHeapMap.set(-deleteValue, (maxHeapMap.get(-deleteValue)+1)) : maxHeapMap.set(-deleteValue, 1)
        while(minHeapMap.get(minHeap.top())) {
          const notExistValue = minHeap.pop();
          console.log(minHeapMap.get(notExistValue))
          minHeapMap.set(notExistValue, (minHeapMap.get(notExistValue)-1))
        }
        elementCountInHeap--
      }
    }
  }
  if(elementCountInHeap == 0) {
    return [0,0]
  }
  // 후처리
  let maxValue = maxHeap.pop()
  while (maxHeapMap.get(maxValue)) {
    console.log(maxValue)
    maxHeapMap.set(maxValue, (maxHeapMap.get(maxValue)-1))
    maxValue = maxHeap.pop();
  }
  let minValue = minHeap.pop()
  while (minHeapMap.get(minValue)) {
    console.log(minValue)
    minHeapMap.set(minValue, (minHeapMap.get(minValue)-1))
    minValue = minHeap.pop();
  }
  return [maxValue, -minValue]
}