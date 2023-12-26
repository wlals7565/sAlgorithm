function solution(brown, yellow) {
  var answer = [];
  let h = 0;
  for(let w=0; w<=Math.sqrt(yellow); w++){
    if(yellow%w==0){
      h = yellow/w;
      if(2*(w+2)+2*h==brown){
        answer.push(Math.max(w+2,h+2));
        answer.push(Math.min(w+2,h+2));
      }
    }
  }
  return answer;
}