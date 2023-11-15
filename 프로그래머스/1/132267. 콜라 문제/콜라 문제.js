function solution(a, b, n) {
  //교환 빈병, 받는 콜라, 총 빈병
  var answer = 0;
  let sum = 0;
  let remain = n;
  while (remain >= a) {
    answer = Math.floor(remain / a) * b;
    remain = answer+ (remain % a);
    sum += answer;
  }
  return sum;
}