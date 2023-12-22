function solution(n, left, right) {
  let arr = [];
  let start = Math.floor(left/n);
  let startj = left%n
  let end = Math.floor(right/n);
  let endj = n;
  for (let i = start; i <= end; i++) {
    if(i==end){
      endj = right%n+1;
    }
    for (let j = startj; j < endj; j++) {
      if (j >= i) {
        arr.push(j + 1);
      }
      else {
        arr.push(i+1);
      }
    }
    startj = 0;
  }
  return arr;
}