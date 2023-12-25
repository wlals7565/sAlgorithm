let length;
let answer = 0;

function recur(numbers, sum, deep, target){
  if(deep == length){
    if(sum==target){
      answer++;
      return;
    }
    else{
      return
    }
  }
  recur(numbers, sum-2*numbers[deep], deep+1, target);
  recur(numbers, sum, deep+1, target);
}

function solution(numbers, target) {
  length = numbers.length;
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  recur(numbers, sum, 0, target)
  return answer;
}