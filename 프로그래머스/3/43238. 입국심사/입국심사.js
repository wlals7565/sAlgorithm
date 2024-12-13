function solution(n, times) {
  times.sort((a, b) => a - b); // 심사 시간을 오름차순 정렬
  let low = 1; // 최소 시간
  let high = n * times[times.length - 1]; // 최대 시간
  let answer = high;

  while (low <= high) {
    console.log(low, high)
    const mid = Math.floor((low + high) / 2); // 중간 시간
    let total = 0; // 사람 수

    // mid 시간 안에 처리할 수 있는 사람 수 계산
    for (const time of times) {
      total += Math.floor(mid / time);
      if (total >= n) break; // 이미 필요한 사람 수를 처리했으면 종료
    }

    if (total >= n) {
      answer = mid; // 최소 시간을 업데이트
      high = mid - 1; // 더 적은 시간 탐색
    } else {
      low = mid + 1; // 더 많은 시간 탐색
    }
  }
  console.log(low, high)

  return answer;
}