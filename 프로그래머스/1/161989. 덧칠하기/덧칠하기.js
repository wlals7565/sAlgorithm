function solution(n, m, section) {//n벽 m롤러 길이 section 다시 칠할 구역
  //그리드 알고리즘하자
  let answer = 1;
  let start=section[0]+m;
  for(let i=0; i<section.length; i++){
    if(section[i]<start){
      
    }
    else{
      answer++;
      start = section[i]+m;
    }
  }
  return answer;
}