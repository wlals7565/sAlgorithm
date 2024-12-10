function solution(stones, k) {
  const deque = [];
  let answer = Infinity;

  let index =0;

  for (let i = 0; i < stones.length; i++) {
    // deque의 범위를 벗어난 인덱스 제거
    if (deque.length > 0 && deque[index] < i - k + 1) {
      index++
    }

    // 현재 값보다 작은 값을 deque에서 제거
    while (deque.length > 0+index && stones[deque[deque.length - 1]] <= stones[i]) {
      deque.pop();
    }

    // 현재 인덱스를 deque에 추가
    deque.push(i);

    // 슬라이딩 윈도우가 완성되었을 때 최댓값 갱신
    if (i >= k - 1) {
      answer = Math.min(answer, stones[deque[index]]);
    }
  }

  return answer;
}
