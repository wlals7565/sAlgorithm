function solution(keymap, targets) {
  let answer = [];
  let map = new Map();
  let target;
  let sum = 0;
  for(let i=0; i<targets.length; i++){
    for(let j=0; j<targets[i].length; j++){
      target = targets[i][j];
      point: for(let x=0; x<keymap.length; x++){
        for(let y=0; y<keymap[x].length; y++){
          if(target == keymap[x][y]){
            if(y+1 == 1){
              map.set(target, 1);
              break point;
            }
            else {
              map.set(target, Math.min(map.get(target)||101, y+1));
            }
          }
        }
      }
    }
  }
  for(let i=0; i<targets.length; i++){
    sum = 0;
    for(let j=0; j<targets[i].length; j++) {
      if(map.get(targets[i][j])){
        sum += map.get(targets[i][j]);
      }
      else{
        sum = -1;
        break;
      }
    }
    answer.push(sum);
  }
  return answer;
}