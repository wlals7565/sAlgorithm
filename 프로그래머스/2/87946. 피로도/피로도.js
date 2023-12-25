function recur(k, dungeons){
  if(dungeons.length == 0){
    return 0;
  }
  let temp;
  let max = 0;
  let a;
  for(let i=0; i<dungeons.length; i++){
    temp = dungeons.slice(0)
    if(k>=dungeons[i][0]){
      temp.splice(i,1);
      a = recur(k-dungeons[i][1], temp)+1;
    }
    else{
      temp.splice(i,1);
      a = recur(k, temp);
    }
    if(a>max){
      max = a;
    }
  }
  return max;
}

function solution(k, dungeons) {
  return recur(k, dungeons)
}