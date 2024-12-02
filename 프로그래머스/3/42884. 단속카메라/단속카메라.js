function solution(routes) {
  // 1. 정렬을 한다.
  // 2. for 문을 돌면서 경로가 이어졌는지 확인한다
  // 3. 경로가 이어지지 않으면 cctv를 하나 추가한다.
  // 정렬
  const sortedRoutes = routes.sort((a,b) => a[0]-b[0])

  let countOfCctv = 0;
  // for문 경로 이어졌는지 탐색
  let endRoute = -300001
  console.log(sortedRoutes)
  for(let i=0; i<sortedRoutes.length; i++) {
    if(sortedRoutes[i][0] > endRoute) {
      countOfCctv++;
      endRoute = sortedRoutes[i][1];
      console.log(endRoute)
    }
    else {
      if(endRoute>sortedRoutes[i][1]) {
        endRoute = sortedRoutes[i][1]
      }
    }
  }
  return countOfCctv
}