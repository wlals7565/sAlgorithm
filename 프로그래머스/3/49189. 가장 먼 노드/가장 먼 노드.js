const graphMap = new Map();
function solution(n, edge) {
  // 쉽게 접근 하면 dfs로 다 찾으면 된다.
  // 근데 20000번의 재귀 함수가 맞는가?
  const array = new Array(n+1)
  for(let i=0; i<edge.length; i++) {
    if(!graphMap.has(edge[i][0])) {
      graphMap.set(edge[i][0], [edge[i][1]])
    }
    else {
      const graphArray = graphMap.get(edge[i][0])
      graphArray.push(edge[i][1])
    }
    if(!graphMap.has(edge[i][1])) {
      graphMap.set(edge[i][1], [edge[i][0]])
    }
    else {
      const graphArray = graphMap.get(edge[i][1])
      graphArray.push(edge[i][0])
    }
  }
  
  
  array[1] = 0;
  const queue = [1];
  const set = new Set();

  while(set.size != n) {
    let top = queue.shift()
    let list = graphMap.get(top)
    for(let i=0; i<list?.length; i++) {
      if(!list?.length) {
        break;
      }
      // 이미 방문한 곳은 넘어가도 된다.
      if(set.has(list[i])) {
        continue;
      }
      // 방문하지 않은 곳은 방문한다고 생각하고 거리 계산한다. 
      array[list[i]] = array[top] + 1;
      set.add(list[i]);
      queue.push(list[i])
    }
    set.add(top);
  }
  let max = 1;
  let count = 0;
  for(let i=0; i<array.length; i++) {
    if(array[i]>max) {
      max = array[i]
      count = 1;
    }
    else if(array[i] == max) {
      count++
    }
  }
  return count
}