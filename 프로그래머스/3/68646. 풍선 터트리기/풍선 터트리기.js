//  인접한 두 풍선 중에서 번호가 더 작은 풍선을 터트리는 행위는 최대 1번만 할 수 있습니다
function solution(a) {
  const leftMinimumState = [];
  const rightMinimumState = [];
  let minimum = 1000000001;
  for(let i=0; i<a.length; i++) {
    if(minimum>a[i]) {
      leftMinimumState[i] = 0
      minimum=a[i]
    }
    else {
      leftMinimumState[i] = 1
    }
  }
  minimum = 1000000001;
  for(let i=a.length-1; i>=0; i--) {
    if(minimum>a[i]) {
      rightMinimumState[i] = 0
      minimum=a[i]
    }
    else {
      rightMinimumState[i] = 1
    }
  }
  let answer = 0;
  for(let i=0; i<leftMinimumState.length; i++) {
    if(leftMinimumState[i]+rightMinimumState[i]<2) {
      answer++
    }
  }
  console.log(leftMinimumState)
  console.log(rightMinimumState)
  return answer
}
