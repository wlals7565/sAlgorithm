function solution(land) {
  let first = 0;
  let second = 0;
  let index;
  for (let i = 0; i < land.length; i++) {
    //첫번째로 큰 값 저장
    first = 0;
    second = 0;
    for (let j = 0; j < 4; j++) {
      if (land[i][j] > first) {
        if(first>second){
          second = first
        }
        first = land[i][j];
        index = j;
      } else if (land[i][j] > second) {
        second = land[i][j];
      }
    }
    if (i + 1 == land.length) {
      break;
    }
    for (let j = 0; j < 4; j++) {
      if (index != j) {
        land[i + 1][j] += first;
      } else {
        land[i + 1][j] += second;
      }
    }
  }
  return first;
}