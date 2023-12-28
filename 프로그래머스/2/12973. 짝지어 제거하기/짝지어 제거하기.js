function solution(s)
{
  let stack = [0]
  for(let i=0; i<s.length; i++){
    if(stack[stack.length-1]==s[i]){
      stack.pop();
    }
    else{
      stack.push(s[i]);
    }
  }
  if(stack.length==1){
    return 1
  }else{
    return 0
  }
}