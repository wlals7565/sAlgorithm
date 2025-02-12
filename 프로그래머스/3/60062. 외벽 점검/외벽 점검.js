function solution(n, weak, dist) {
  let inputMinimum = 100;
  // 시계 방향을 다음 weak의 거리를 구함.
  let nextWeakDistanceList = [];
  for (let i = 0; i < weak.length; i++) {
    if (i == weak.length - 1) {
      nextWeakDistanceList.push(
        n + weak[0] - weak[i % weak.length]
      );
      continue;
    }
    nextWeakDistanceList.push(
      weak[(i + 1) % weak.length] - weak[i % weak.length]
    );
  }

  dist.sort((a, b) => a - b);

  for (let index = 0; index < weak.length; index++) {
    // 찾은 weak지점
    let find = 0;
    // 복사한 dist배열
    let copiedDist = [...dist];
    // 지나간 거리
    let totalLength = 0;
    // copiedDist 배열 마지막 요소 인덱스
    let distIndex = copiedDist.length - 1;
    // 처음 둘러볼 weak
    let startIndex = index;
    // weak을 다 find하면 빠져나올 루프
    while (true) {
      // 다음 취약점 문제 없이 갈 수 있으면 find++하고 지나가기
      if (
        nextWeakDistanceList[startIndex % weak.length] + totalLength <=
        copiedDist[distIndex]
      ) {
        find++;
        totalLength += nextWeakDistanceList[startIndex % weak.length];
        startIndex++;
      }
      //못 지나가면 최소 dist로 지난간 곳 지나가보기
      else {
        if (totalLength <= copiedDist[distIndex - 1] && distIndex>0) {
          distIndex--;
        } else {
          // 출발시킨 dist는 잘라서 없에버리기;
          totalLength = 0;
          copiedDist.splice(distIndex, 1);
          find++;
          distIndex = copiedDist.length - 1;
          startIndex++;
          if (find >= weak.length) {
            inputMinimum =
              inputMinimum > dist.length - copiedDist.length
                ? dist.length - copiedDist.length
                : inputMinimum;
            break;
          }
          if (copiedDist.length === 0) {
            break;
          }
        }
      }
    }
  }
  if (inputMinimum == 100) {
    return -1;
  }
  return inputMinimum;
}