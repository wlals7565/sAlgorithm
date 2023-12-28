function solution(n)
{
  let count = 0;
  for(let i=n; i!=0;){
    if(i%2==0){
      i/=2
    }
    else{
      count++
      i-=1;
    }
  }
  return count
}