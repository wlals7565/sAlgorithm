function solution(number, k) {
  const stack = [];
  const maxLength = number.length - k
  for(let i=0; i<number.length && k>=0;) {
    if(!k) {
      stack.push(number[i]);
      i++
    }
    else if(stack.length == 0) {
      stack.push(number[i]);
      i++;
    }
    else if(stack[stack.length-1] < number[i]) {
      stack.pop();
      k--;
    }
    else if(stack[stack.length-1] >= number[i]) {
      stack.push(number[i])
      i++
    }

  }
  let answer = ''
  for(let i=0; i<stack.length && i<maxLength; i++) {
    answer += stack[i];
  }
  return answer;
}