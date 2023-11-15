function solution(cards1, cards2, goal) {
  let one = cards1.length;
  let two = cards2.length;
  let left = 0;
  let right = 0;
  for(let i=0; i<goal.length; i++){
    if(left<cards1.length){
      if(goal[i]==cards1[left]){
        left++;
        continue;
      }
    }
    if(right<cards2.length){
      if(goal[i]==cards2[right]){
        right++;
        continue;
      }
    }
    return "No"
  }
  return "Yes"
}