function solution(skill, skill_trees) {
  var answer = -1;
  let count = 0;
  let map = new Map()
  for(let i=0; i<skill.length; i++){
    map.set(skill[i], i);
  }
  let status;
  let goal = map.size;
  let temp;
  let isCan;
  for(let i=0; i<skill_trees.length; i++){
    status = 0;
    isCan = true
    for(let j=0; j<skill_trees[i].length; j++){
      temp = map.get(skill_trees[i][j]) 
      if(temp == status){
        status++;
      }
      else if(temp == undefined){
        continue;
      }
      else{
        isCan=false;
        break;
      }
    }
    if(isCan){
      count++
    }
  }
  return count;
}