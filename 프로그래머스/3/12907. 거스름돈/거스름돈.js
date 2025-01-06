function solution(n, money) {
  // 각 숫자별 가능한 경우의 수 저장용 배열
  let arr = [1];
  money.sort((a,b) => a-b)
  // arr초기화
  for(let i=1; i<=n ; i++) {
    arr.push(0)
  }
  for(let i=0; i<money.length; i++) {
    for(let j=money[i]; j<=n; j++) {
      arr[j] += arr[j-money[i]]
      if(arr[j]>=1000000007) {
        arr[j] = arr[j]%1000000007
      }
    }
  }
  return arr[n]
}