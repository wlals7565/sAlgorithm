function solution(key, lock) {
  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  // 비교해야할 최소 공간 구하기
  for(let y=0; y<lock.length; y++) {
    for(let x=0; x<lock[0].length; x++) {
      if(lock[y][x]===0) {
        if(minX>x) {
          minX = x
        }
        if(maxX<x) {
          maxX = x
        }
        if(minY>y) {
          minY = y
        }
        if(maxY<y) {
          maxY = y
        }
      }
    }
  }

  // 매칭되는지 알아보기
  for(let i=0; i<4; i++) {
    for(let y=0; y<=key.length-(maxY-minY+1); y++) {
      for(let x=0; x<=key.length-(maxX-minX+1); x++) {
        if(match(key, x, y, lock, minX, minY, (maxX-minX+1),(maxY-minY+1))) {
          return true;
        }
      }
    }
    key = turn90(key)
  }
  return false;
}

const turn90 = (array) => {
  const result = [];
  for(let x=0; x<array.length; x++) {
    const newArray = [];
    for(let y=array.length-1; y>=0; y--) {
      newArray.push(array[y][x])
    }
    result.push(newArray)
  }
  return result;
}

const match = (array1, arr1StartX, arr1StartY,array2, arr2StartX, arr2StartY, xLength, yLength) => {
  for(let y=0; y<yLength; y++) {
    for(let x=0; x<xLength; x++) {
      if(array1[arr1StartY+y][arr1StartX+x] === array2[arr2StartY+y][arr2StartX+x]) {
        return false;
      }
    }
  }
  return true;
}
