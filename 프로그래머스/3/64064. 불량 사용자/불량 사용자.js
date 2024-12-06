let alreadyHave = new Set();

function solution(user_id, banned_id) {
  let mapArr = [];
  let isMatched = true
  // 일치하는 값 담을 셋 객체
  for (let i = 0; i < banned_id.length; i++) {
    mapArr.push(new Set());
  }

  // 일치하는 애들 셋 객체에 넣기
  for (let i = 0; i < banned_id.length; i++) {
    for (let j = 0; j < user_id.length; j++) {
      if(banned_id[i].length === user_id[j].length) {
        isMatched = true
        for(let h=0; h<banned_id[i].length; h++) {
          if(banned_id[i][h]=== "*") {
            continue
          }
          if(banned_id[i][h] !== user_id[j][h]) {
            isMatched = false
            break;
          }
        }
        if(isMatched) {
          mapArr[i].add(user_id[j]);
        }
      }
    }
  }
  
  const existSet = new Set()
  recusrsiveCheck(0, mapArr, existSet, mapArr.length);
  return alreadyHave.size;
}

function recusrsiveCheck (index,mapArr,existSet, endindex) {
  if(endindex===index) {
    const arr = Array.from(existSet.keys())
    arr.sort()
    if(!alreadyHave.has(JSON.stringify(arr))) {
      alreadyHave.add(JSON.stringify(arr))
    }
    return
  }
  for(let i of mapArr[index].keys()) {
    if(existSet.has(i)) {
      continue
    }
    existSet.add(i)
    recusrsiveCheck(index+1, mapArr, existSet, endindex)
    existSet.delete(i)
  }
}