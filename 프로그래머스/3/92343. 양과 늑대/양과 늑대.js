let maxSheep = 1

function solution(info, edges) {
  // 먼저 트리를 구성해보자,
  const child = new Map();
  const parent = new Map();
  for (let i = 0; i < info.length; i++) {
    child.set(i, []);
    parent.set(i, undefined);
  }

  for (let i = 0; i < edges.length; i++) {
    const parentNode = child.get(edges[i][0]);
    parent.set(edges[i][1], edges[i][0]);

    parentNode.push(edges[i][1]);
  }

  // 리프 노드이면서 늑대 노드인 것들 다 제거
  let isThereWolfInLeaf = true;
  while (isThereWolfInLeaf) {
    isThereWolfInLeaf = false
    for (let i = 0; i < info.length; i++) {
      if (child.has(i) && child.get(i).length === 0 && info[i] === 1) {
        const parentNode = parent.get(i);
        const childNodeList = child.get(parentNode);
        child.delete(i);
        parent.delete(i)
        child.set(parentNode, childNodeList.filter((node) => node !== i));
        isThereWolfInLeaf = true
      }
    }
  }
  let countOfSheep = 1
  let countOfWolf = 0
  // BFS를 이용한 메모이제이션 백트래킹이라고 한다.
  // BFS와 트리 합성을 이용하자.
  const adjacencyEdgeArray = child.get(0)
  dfs(adjacencyEdgeArray,  info, child, countOfSheep, countOfWolf)
  return maxSheep
}

const dfs = (adjacencyEdgeArray,  info, child, countOfSheep, countOfWolf) => {
  if(countOfSheep <= countOfWolf || adjacencyEdgeArray.length===0) {
    return
  }
  let isThereSheep = true;
  // 모든 양의 정점 합성하기
  while(isThereSheep) {
    isThereSheep = false;
    for(let i=0; i<adjacencyEdgeArray.length; i++) {
      if(info[adjacencyEdgeArray[i]] === 0) {
        adjacencyEdgeArray = [...adjacencyEdgeArray.filter((edge) => edge !== adjacencyEdgeArray[i]), ...child.get(adjacencyEdgeArray[i])]
        countOfSheep++;
        isThereSheep = true
        i=0;
      }
    }
  }
  if(countOfSheep> maxSheep) {
    maxSheep = countOfSheep
  }
  for(let i=0; i<adjacencyEdgeArray.length; i++) {
    const newAdjacencyEdgeArray = [...adjacencyEdgeArray.filter((edge) => edge !== adjacencyEdgeArray[i]), ...child.get(adjacencyEdgeArray[i])]
    dfs(newAdjacencyEdgeArray, info, child, countOfSheep, countOfWolf+1)
  }
}