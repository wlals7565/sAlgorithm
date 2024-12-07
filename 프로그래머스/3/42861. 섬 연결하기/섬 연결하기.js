function solution(n, costs) {
  let setArr = []
  costs.sort((a,b) => a[2]-b[2])
  let leftIslandSet;
  let rightIslandSet;
  let total = 0;
  

  // [ [ 0, 1, 1 ], [ 1, 3, 1 ], [ 0, 2, 2 ], [ 1, 2, 5 ], [ 2, 3, 8 ] ]
  for(let i=0; i<costs.length; i++) {
    leftIslandSet = undefined
    rightIslandSet = undefined
    // 셋에 모든 섬이 들어가면 끝내야 한다. 더 할 이유가 없다.
    if(setArr[0]?.size === n) {
      break;
    }
    // 왼쪽 섬을 가진 집합이 있는지 찾는다.
    for(let j=0; j<setArr.length; j++) {
      if(setArr[j].has(costs[i][0])) {
        leftIslandSet = setArr[j]
        break;
      }
    }
    // 오른쪽 섬을 가진 집합이 있는지 찾는다.
    for(let h=0; h<setArr.length; h++) {
      if(setArr[h].has(costs[i][1])) {
        rightIslandSet = setArr[h]
        break;
      }
    }

    // 확인 완료
    // 왼쪽 섬 오른쪽 섬 둘다 가진 집합이 같다면 연결할 이유가 없다.
    if(rightIslandSet === leftIslandSet && rightIslandSet && leftIslandSet) {
      continue
    }
    // 확인 완료
    // 왼쪽 섬 오른쪽 섬 집합이 서로 다른 집합이라면 하나로 통일 해야 한다.
    if(rightIslandSet && leftIslandSet) {
      total += costs[i][2]
      let tempArr = Array.from(leftIslandSet.values())
      for(let z=0; z<tempArr.length; z++) {
        rightIslandSet.add(tempArr[z])
      }
      // 섬 삭제 구현할 것
      setArr = setArr.filter((set) => set !== leftIslandSet)
      continue
    }

    //확인 완료
    // 섬 집합에 둘 다 없다면 새로운 집합으로 추가해야한다.
    if(!rightIslandSet && !leftIslandSet) {
      total += costs[i][2]
      const set = new Set();
      set.add(costs[i][0])
      set.add(costs[i][1])
      setArr.push(set)
      continue
    }

    // 확인
    // 하나만 섬 집합에 속한다면 다른 하나를 이미 존재하는 섬 집합에 넣어야 한다.
    if(!rightIslandSet && leftIslandSet || rightIslandSet && !leftIslandSet) {
      total += costs[i][2]
      const island = rightIslandSet ? rightIslandSet : leftIslandSet
      const newIsLand = rightIslandSet ? costs[i][0] : costs[i][1]
      island.add(newIsLand)
      continue
    }
  }
  if(setArr[0].size !== n) {
    return 0
  }
  return total
}