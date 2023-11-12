function solution(n, m) {
  var answer = [];
  let min = Math.min(n,m);
  let max = Math.max(n,m);
  let left = 1;
  let right = max;
  for(let i=2; i<=min; i++){
    if(min%i==0 && max%i==0){
      left = i;
    }
  }
  for(let i=1; i; i++){
    if((max*i)%min==0){
      right = max*i;
      break;
    }
  }
  answer = [left, right];
  return answer;
}