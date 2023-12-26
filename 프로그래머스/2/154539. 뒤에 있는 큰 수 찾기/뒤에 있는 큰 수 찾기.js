function solution(numbers) {
  let answer = [];
  let stack = [];
  for(let i=numbers.length-1 ; i>=0; i--){
    while(stack.length>0){
      if(stack[stack.length-1]>numbers[i]){
        answer.push(stack[stack.length-1]);
        stack.push(numbers[i]);
        break;
      }
      else{
        stack.pop();
      }
    }
    if(stack.length == 0){
      answer.push(-1);
      stack.push(numbers[i]);
    }
  }
  return answer.reverse();
}