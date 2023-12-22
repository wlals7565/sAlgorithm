let arr = [0,1,2]

function solution(n) {
  for(let i=3; i<=n; i++){
    arr[i] = (arr[i-2]+ arr[i-1])%1234567;
  }
  return arr[n];
}