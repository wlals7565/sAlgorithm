function solution(k, score) {
  //k 자르는 범위 score 점수 배열
  let answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    if (arr.length == k) {
      if (arr[k-1] < score[i]) {
        arr[k-1] = score[i];
      }
    } else {
      arr.push(score[i]);
    }
    arr.sort((a, b) => b - a);
    answer.push(Math.min(...arr));
  }
  return answer;
}