function solution(n, k) {
  const factorial = [1];
  const answer = [];
  // 팩토리얼 계산
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  // 순열 구하기
  const nums = Array.from({ length: n }, (_, index) => index + 1);
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor((k - 1) / factorial[i]);
    answer.push(nums[index]);
    nums.splice(index, 1);
    k = ((k - 1) % factorial[i]) + 1;
  }
  return answer;
}