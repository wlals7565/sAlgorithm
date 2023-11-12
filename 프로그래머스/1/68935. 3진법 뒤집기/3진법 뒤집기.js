function solution(n) {
  let answer = "";
  let val;
  while(n){
    val = n%3;
    n=Math.floor(n/3);
    answer += val;
  }
  let sum = 0;
  let mult =1;
  for(let i=answer.length-1; i>=0; i--){
    sum += parseInt(answer[i])*mult;
    mult*=3;
  }
  
  return sum;
}
