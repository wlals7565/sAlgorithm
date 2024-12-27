// 펠린드롬의 경우의 수는 2가지이다.
// 1. 짝수인 경우 abba
// 2. 홀수인 경우 aba
function solution(s) {
  // 펠린드롬은 최소 1개는 무조건 있다.
  let max = 1;
  let left, right;
  for (let i = 1; i < s.length; i++) {
    //짝수 팰린드롬
    if (s[i] === s[i - 1]) {
      left = i - 1;
      right = i;
      for (
        ;
        s[left - 1] === s[right + 1] &&
        s[left - 1] !== undefined &&
        s[right + 1] !== undefined;

      ) {
        left--;
        right++;
      }
      max = right - left + 1 > max ? right - left + 1 : max;
    }
    //홀수 팰린드롬
    left = i;
    right = i;
    for (
      ;
      s[left - 1] === s[right + 1] &&
      s[left - 1] !== undefined &&
      s[right + 1] !== undefined;

    ) {
      left--;
      right++;

      max = right - left + 1 > max ? right - left + 1 : max;
    }
  }
  return max;
}