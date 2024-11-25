function solution(n, computers) {
  // 논리부터
  // 첫번째부터 넓이 우선 탐색을 한다.
  // 하나의 배열로 만든다.
  const visited = new Set();
  let count = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr = [];
    if (visited.has(i)) {
      //이미 지나간 경로면 무시한다.
      continue;
    } else {
      // 지나가지 않은 경로면 추가해준다.
      visited.add(i);
      //카운트도 추가해준다.
      count++;
      arr.push(i);
    }
    while (arr.length > 0) {
      const computer = arr.pop();
      for (let j = 0; j < n; j++) {
        if (computers[computer][j] == 1) {
          if (visited.has(j)) {
            continue;
          } else {
            visited.add(j);
            arr.push(j);
          }
        }
      }
    }
  }
  return count;
}