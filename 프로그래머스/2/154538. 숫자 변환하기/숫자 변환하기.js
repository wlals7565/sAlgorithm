let count = 1000001;

function recur(x,y,n,cnt){
  if(cnt>=count || y<x){
    return
  }
  if(x==y){
    count = Math.min(cnt,count)
  }
  if(y%2==0){
    recur(x,y/2,n,cnt+1);
  }
  if(y%3==0){
    recur(x, y/3,n, cnt+1)
  }
  if((y-n)%2==0 || (y-n)%3==0|| (y-x)%n==0){
    recur(x,y-n,n,cnt+1)
  }
}

function solution(x, y, n) {
    recur(x,y,n,0)
    if(count==1000001){
      return -1;
    }
    return count;
}