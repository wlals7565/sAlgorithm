function solution(sticker) {
  if (sticker.length === 1) {
    return sticker[0]; // 스티커가 하나일 때 그 값을 바로 반환
  }
  let arr1 = []
  let max = 0
  let answer = 0;
  for(let i=0; i<sticker.length-1; i++) {
    if(i<2) {
      arr1.push(sticker[i])
      if(answer<sticker[i]) {
        answer = sticker[i]
      }
    }
    else {
      if(max<arr1[i-2]) {
        max = arr1[i-2]
      }
      arr1.push(max+sticker[i])
      if(answer < max+sticker[i]) {
        answer = max+sticker[i]
      }
    }
  }
  let arr2 = []
  max = 0
  for(let i=1; i<sticker.length; i++) {
    if(i<3) {
      arr2.push(sticker[i])
      if(answer<sticker[i]) {
        answer = sticker[i]
      }
    }
    else {
      if(max<arr2[i-3]) {
        max = arr2[i-3]
      }
      arr2.push(max+sticker[i])
      if(answer < max+sticker[i]) {
        answer = max+sticker[i]
      }
    }
  }
  return Math.max(answer)
}

