function solution(n,a,b)
{
    let deep = Math.log2(n);
    
    while(true){
      n/=2
      if(a<=n && b<=n){
        deep--;
      }
      else if(a>n && b>n){
        a -= n;
        b -= n;
        deep--;
      }
      else{
        return deep
      }
    }
}