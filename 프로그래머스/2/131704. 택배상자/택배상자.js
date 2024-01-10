function solution(order) {
  let stack = [];
  let box = 1;
  let index = 0;
  let count = 0;
  while(index<order.length){
    if(order[index]==box){
      count ++;
      box ++;
      index++;
    }
    else if(order[index]>box){
      for(let i=box; i<order[index]; i++){
        stack.push(i);
      }
      box=order[index]
    }
    else if(order[index]<box){
      if(stack[stack.length-1]==order[index]){
        count++;
        index++;
        stack.pop();
      }
      else{
        return count;
      }
    }
  }
  return count;
}