function solution(t, p) {
  let answer = 0;
  let length = p.length;
  for(let i=0; i<t.length-p.length+1; i++){
      if(parseInt(t.slice(i,i+length))<=parseInt(p)){
         answer++;
         }
  }
  return answer;
}