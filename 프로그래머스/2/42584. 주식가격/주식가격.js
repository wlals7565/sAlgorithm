function solution(prices) {
  var answer = [];
  let stack = []; // [값, 인덱스]
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length != 0) {
      if (stack[stack.length - 1][0] >= prices[i]) {
        stack.pop();
      } else {
        answer.push(stack[stack.length - 1][1] - i);
        stack.push([prices[i], i]);
        break;
      }
    }
    if (stack.length == 0) {
      stack.push([prices[i], i]);
      answer.push(prices.length-1 - i);
    }
  }
  return answer.reverse();
}