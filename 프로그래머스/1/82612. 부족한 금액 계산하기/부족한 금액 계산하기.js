function solution(price, money, count) {
  let sum = count*(1+count)/2;
  let answer = money-price*sum;
  if(answer<0){
      answer = -answer;
  }
  else{
      answer = 0;
  }
  return answer;
}