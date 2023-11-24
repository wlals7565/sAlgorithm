function solution(n, lost, reserve) {
  let answer = 0;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);
  let lostLength = lost.length;
  let reserveLength = reserve.length;
  let count = 0;

  // 배열 a에만 존재하는 값 필터링
let resultA = lost.filter(item => !reserve.includes(item));

// 배열 b에만 존재하는 값 필터링
let resultB = reserve.filter(item => !lost.includes(item));



  for (let i = 0, j = 0; i < resultA.length && j < resultB.length;) {
    while (!(resultB[j] - 1 <= resultA[i] && resultA[i] <= resultB[j] + 1) && i < resultA.length && j < resultB.length) {
      if (resultB[j] > resultA[i]) {
        i++;
      } else {
        j++;
      }
    }
    if (resultB[j] - 1 == resultA[i] || resultA[i] == resultB[j] + 1) {
      count++;
      i++;
      j++;
    }
  }
  return n-resultA.length+count;
}
