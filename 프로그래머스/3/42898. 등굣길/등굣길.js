const division = 1000000007;

function solution(m, n, puddles) {
  const map = new Map();
  
  // 시작 위치 초기화
  map.set('1,1', 1);
  
  // 물웅덩이 위치는 0으로 설정
  for (let i = 0; i < puddles.length; i++) {
    map.set(`${puddles[i][0]},${puddles[i][1]}`, 0);
  }

  // 모든 칸을 순차적으로 처리
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) continue; // 시작 위치는 건너뜀

      // 물웅덩이일 경우 건너뜀
      if (map.has(`${i},${j}`) && map.get(`${i},${j}`) === 0) continue;

      // 왼쪽과 위에서 오는 방법을 더함
      let fromLeft = map.get(`${i-1},${j}`) || 0;
      let fromTop = map.get(`${i},${j-1}`) || 0;

      // 현재 칸에 가능한 방법 수 설정
      map.set(`${i},${j}`, (fromLeft + fromTop) % division);
    }
  }

  // 최종 목표 위치 결과 반환
  return map.get(`${m},${n}`) || 0;
}
