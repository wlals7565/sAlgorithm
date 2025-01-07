function solution(n, results) {
  let answer = 0;
  // 자기보다 강한 사람들 집합
  const upMap = new Map();
  // 자기보다 약한 사람들 집합
  const downMap = new Map();
  // [이긴사람, 진 사람]
  // 초기화
  for (let i = 0; i < n; i++) {
    upMap.set(i + 1, []);
    downMap.set(i + 1, []);
  }

  // 맵을 이용한 트리 만들기
  for (let i = 0; i < results.length; i++) {
    const [up, down] = results[i];
    const upList = upMap.get(down);
    upList.push(up);
    const downList = downMap.get(up);
    downList.push(down);
  }

  const visitedSet = new Set();
  for (let i = 1; i <= n; i++) {
    recursiveTrevle(i, upMap, visitedSet);
    recursiveTrevle(i, downMap, visitedSet);
    if (visitedSet.size === n - 1) {
      answer++;
    }
    visitedSet.clear();
  }
  return answer;
}

function recursiveTrevle(target, map, set) {
  const list = map.get(target);
  for (let i = 0; i < list.length; i++) {
    if (!set.has(list[i])) {
      set.add(list[i]);
      recursiveTrevle(list[i], map, set);
    }
  }
}