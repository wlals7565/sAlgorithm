function solution(s){
  countOfP = 0;
  countOfY = 0;
  for(i=0; i<s.length; i++){
    if(s[i]=='p' || s[i]=='P')
    {
      countOfP++;
    }
    else if(s[i]=='y' || s[i] == 'Y')
    {
      countOfY++;
    }
  }
  if(countOfP == countOfY)
  {
    return true
  }
  return false
}