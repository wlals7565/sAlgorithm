function solution(scores) {
  let wanho = scores[0];

  scores.sort((a,b) => {
    if(a[0]===b[0]) {
      return a[1] - b[1]
    }
    else {
      return b[0] - a[0]
    }
  })
  let fillteredArray = [];
  let yMax = 0;
  for(let i=0; i<scores.length; i++) {
    if(yMax<=scores[i][1]) {
      yMax = scores[i][1]
      fillteredArray.push(scores[i])
    }
  }
  fillteredArray.sort((a,b) => (b[0]+b[1])-(a[0]+a[1]))
  let rank = undefined;
  for(let i=0; i<fillteredArray.length; i++) {
    if(!rank){
      if(fillteredArray[i][0]+ fillteredArray[i][1] === wanho[0] + wanho[1]) {
        rank = i+1
      }
    }
    if(fillteredArray[i][0] === wanho[0] && fillteredArray[i][1] === wanho[1]) {
      return rank;
    }
  }
  return -1
}
