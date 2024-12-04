function solution(gems) {
  let set = new Set()
  let map = new Map()
  let rightIndex = 0;
  let leftIndex = 0;

  let answer = [0,200000]

  // 최대 보석 수
  let max;
  for(let i=0; i<gems.length; i++) {
    if(!set.has(gems[i])) {
      set.add(gems[i])
    }
  }
  max = set.size;

  // 진열대 전체를 돌면서 오른쪽 늘리고 왼쪽 줄이면서 가장 짧은 구간
  // 가장 짧은 구간이 여러군대면 가장 작은 인덱스
  for(let i=0; i<=gems.length;) {
    if(map.size === max) {
      rightIndex = i
      if(answer[1]-answer[0]>rightIndex-(leftIndex+1)) {       
        answer = [leftIndex+1, rightIndex]
      }
      if(map.get(gems[leftIndex]) === 1) {
        map.delete(gems[leftIndex])
      }
      else {
        map.set(gems[leftIndex], map.get(gems[leftIndex])-1)
      }
      leftIndex++
      continue
    }
    if(!map.get(gems[i])) {
      map.set(gems[i], 1)
    }
    else {
      map.set(gems[i], map.get(gems[i])+1)
    }
    i++
  }
  return answer
}
