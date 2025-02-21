function solution(a) {
  let stack = ["*"];
  let count = [];
  for(let i=0; i<a.length; i++) {
    count[i] = 0;
  }
  /*
  for(let i=0; i<a.length; i++) {
    if(stack[stack.length-1] =="*") {
      stack.push(a[i]);
    }
    else if (stack[stack.length-1] != a[i]) {
      stack.push(a[i]);
      stack.push("*")
    }
  }
    */
  for(let i=0; i<a.length; i++) {
    if(a[i]===a[i-1] && a[i]===a[i-2]) {
      continue;
    }
    count[a[i]]++
  }
  console.log(count)
  let maxCount = 0;
  let maxNumber = 0;
  for(let i=0; i<count.length; i++) {
    if(count[i]>=maxCount) {
      maxCount = count[i];
      maxNumber = i;
    }
  }
  let pair = 0;
  stack = [];
  for(let i=0; i<a.length; i++) {
    if(!stack.length || stack[stack.length-1] == "*") {
      stack.push(a[i])
    }
    else if (a[i] == stack[stack.length-1]) {
      stack.push(a[i])
    }
    else if (a[i] == maxNumber || stack[stack.length-1] == maxNumber) {
      pair++;
      stack.push(a[i])
      stack.push("*")
    }
    else {
      stack.push(a[i]);
    }
  }
  return pair*2
}
// 3 2 3 5 5 5
