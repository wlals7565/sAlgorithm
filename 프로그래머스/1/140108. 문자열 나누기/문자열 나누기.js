function solution(s) {
  let answer = 0;
  let base = s[0];
  let baseCnt = 1;
  let compareCnt = 0;
  for(let i=1; i<=s.length; i++){
    if(baseCnt == compareCnt){
      answer++;
      base = s[i];
      baseCnt = 1;
      compareCnt = 0;
      continue;
    } else if ( i== s.length) {
      answer++;
    }
    if(base == s[i]){
      baseCnt++;
    }
    else{
      compareCnt++;
    }
  }
  return answer;
}