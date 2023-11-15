function solution(k, m, score) {
  let answer = 0;
  let arr = score.sort((a,b)=>b-a);
  for(let i=0; i+m<=arr.length; i=i+m){
    answer += Math.min(...arr.slice(i,i+m))*m;
  }
  return answer;
}