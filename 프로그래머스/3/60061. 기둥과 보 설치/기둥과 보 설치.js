const columnSet = new Set();
const rowSet = new Set();

function solution(n, build_frame) {
  // build_frame 형식
  // [x,y, a, b]
  // x와 y는 좌표
  // a는 0일 경우 기둥 // 1일 경우 보
  // b는 0일 경우 삭제 // 1일경우 설치
  // 보는 좌표 기준 오른쪽으로 설치 기둥은 좌표기준 위로 설치
  let result = [];
  for (let i = 0; i < build_frame.length; i++) {
    const currentBuild = build_frame[i];
    // 삭제 작업일 때
    if (currentBuild[3] === 0) {
      // 기둥을 목표로
      if (currentBuild[2] === 0) {
        deleteColumn(currentBuild[0], currentBuild[1]);
      }
      // 보를 목표로
      else {
        deleteRow(currentBuild[0], currentBuild[1]);
      }
    }
    // 설치 작업일 때
    else {
      // 기둥을 목표로
      if (currentBuild[2] === 0) {
        setColumn(currentBuild[0], currentBuild[1]);
      }
      // 보를 목표로
      else {
        setRow(currentBuild[0], currentBuild[1]);
      }
    }
  }
  // 여기서부터 문제 없음.
  const columnArr = Array.from(columnSet.keys());
  const rowArr = Array.from(rowSet.keys());
  for(let i=0; i<columnArr.length; i++) {
    const val = columnArr[i].split(":")
    result.push([Number(val[0]), Number(val[1]), 0])
  }
  for(let i=0; i<rowArr.length; i++) {
    const val = rowArr[i].split(":")
    result.push([Number(val[0]), Number(val[1]), 1])
  }
  result.sort((a,b) => {
    if(a[0]===b[0]) {
      if(a[1]===b[1]) {
        return a[2]-b[2]
      }
      else {
        return a[1] - b[1]
      }
    }
    else {
      return a[0] - b[0]
    }
  })
  console.log(result)
  result.filter((val) => {
    if(val[2] === 1) {
      if(val[1]>= n) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      if(val[0]>= n) {
        return false;
      }
      else {
        return true;
      }
    }
  })
  return result;
}

// 문제 없음
const setColumn = (x, y) => {
  let isCan = false;
  // 바닥 위
  if (y === 0) {
    isCan = true;
  }
  // 기둥 위
  if (!isCan && columnSet.has(`${x}:${y - 1}`)) {
    isCan = true;
  }
  // 보 위
  if (!isCan && (rowSet.has(`${x - 1}:${y}`) || rowSet.has(`${x}:${y}`))) {
    isCan = true;
  }
  if (isCan) {
    columnSet.add(`${x}:${y}`);
    return true;
  }
  return false;
};

// 문제 없음
const setRow = (x, y) => {
  let isCan = false;
  // 한 쪽 끝 부분이 기둥
  if (columnSet.has(`${x}:${y - 1}`) || columnSet.has(`${x + 1}:${y - 1}`)) {
    isCan = true;
  }
  // 양 쪽 끝 부분이 보
  if (!isCan && rowSet.has(`${x - 1}:${y}`) && rowSet.has(`${x + 1}:${y}`)) {
    isCan = true;
  }
  if (isCan) {
    rowSet.add(`${x}:${y}`);
    return true;
  }
  return false;
};

// 문제 없음
const deleteColumn = (x, y) => {
  columnSet.delete(`${x}:${y}`);
  let isCan = true;
  if (isCan && columnSet.has(`${x}:${y + 1}`)) {
    isCan = setColumn(x, y + 1)
  }
  if (isCan && rowSet.has(`${x - 1}:${y + 1}`)) {
    isCan = setRow(x - 1, y + 1)
  }
  if (isCan && rowSet.has(`${x}:${y + 1}`)) {
    isCan = setRow(x, y + 1)
  }
  if(!isCan) {
    columnSet.add(`${x}:${y}`)
  }
};

//
const deleteRow = (x, y) => {
  rowSet.delete(`${x}:${y}`);
  let isCan = true;
  if (isCan && columnSet.has(`${x}:${y}`)) {
    isCan = setColumn(x, y)
  }
  if (isCan && columnSet.has(`${x+ 1}:${y}`)) {
    isCan = setColumn(x + 1, y)
  }
  if (isCan && rowSet.has(`${x - 1}:${y}`)) {
    isCan = setRow(x - 1, y)
  }
  if (isCan && rowSet.has(`${x + 1}:${y}`)) {
    isCan = setRow(x + 1, y)
  }
  if (!isCan) {
    rowSet.add(`${x}:${y}`);
  }
};