let fib = [0,1]

function solution(n) {
  for(let i=2; i<=n; i++){
    fib[i]= (fib[i-1]+ fib[i-2])%1234567;
  }
  return fib[n];
}