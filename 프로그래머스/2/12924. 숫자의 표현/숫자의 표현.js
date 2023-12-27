function solution(n) {
  let sum = 0;
  let count = 1;
  for (let left = 1, right = 1; right <= Math.ceil(n/2)+1;) {
    if(sum<=n){
      sum+=right;
      right++;
    }
    else{
      sum-=left;
      left++;
    }
    if(sum==n){
      count++
    }
  }
  if(n==1){
    count--;
  }
  return count;
}