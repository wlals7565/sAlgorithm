function solution(n, k, cmd) {
  const result = Array(n).fill("O"); // 행 상태 기록
  const stack = []; // 삭제된 행 기록
  const linkedList = Array.from({ length: n }, (_, i) => [i - 1, i + 1]); // 연결 리스트 생성

  for (let c of cmd) {
    const [op, x] = c.split(" ");
    if (op === "U") {
      for (let i = 0; i < +x; i++) k = linkedList[k][0]; // 위로 이동
    } else if (op === "D") {
      for (let i = 0; i < +x; i++) k = linkedList[k][1]; // 아래로 이동
    } else if (op === "C") {
      stack.push([k, ...linkedList[k]]); // 삭제된 행 기록
      result[k] = "X"; // 삭제 상태 기록
      const [prev, next] = linkedList[k];
      if (prev !== -1) linkedList[prev][1] = next; // 이전 행 연결 수정
      if (next !== n) linkedList[next][0] = prev; // 다음 행 연결 수정
      k = next !== n ? next : prev; // 다음 선택 행 설정
    } else if (op === "Z") {
      const [restored, prev, next] = stack.pop(); // 복구 정보 가져오기
      result[restored] = "O"; // 복구 상태 기록
      if (prev !== -1) linkedList[prev][1] = restored; // 이전 행 연결 복구
      if (next !== n) linkedList[next][0] = restored; // 다음 행 연결 복구
    }
  }

  return result.join(""); // 최종 상태 반환
}
