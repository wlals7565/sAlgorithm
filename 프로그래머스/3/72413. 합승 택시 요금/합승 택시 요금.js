// 각 지점으로부터 거리 저장하는 용도 배열 그래프
const arrayGraph = [];

function solution(n, s, a, b, fares) {
  for (let i = 0; i <= n; i++) {
    const array = [];
    for (let j = 0; j <= n; j++) {
      if(i===j) {
        array.push(0)
      }
      array.push(Number.POSITIVE_INFINITY);
    }
    arrayGraph.push(array);
  }

  for (let i = 0; i < fares.length; i++) {
    arrayGraph[fares[i][0]][fares[i][1]] = fares[i][2];
    arrayGraph[fares[i][1]][fares[i][0]] = fares[i][2];
  }


  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (arrayGraph[i][k] + arrayGraph[k][j] < arrayGraph[i][j]) {
          arrayGraph[i][j] = arrayGraph[i][k] + arrayGraph[k][j];
        }
      }
    }
  }
  
  
  let minimunPathLength = Number.POSITIVE_INFINITY;
  for(let i=1; i<=n; i++) {
    if(minimunPathLength> (arrayGraph[s][i]+ arrayGraph[i][a] + arrayGraph[i][b])) {
      minimunPathLength = (arrayGraph[s][i]+ arrayGraph[i][a] + arrayGraph[i][b])
    }
  }
  return minimunPathLength
}