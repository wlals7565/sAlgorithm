function solution(n, works) {
  // 가장 큰 값부터 1씩 줄이고 구하는게 맞는거 같다.
  // 일단 works의 갯수를 세어본다.

  // 갯수 구하기용 객체
  let map = {};

  // 갯수 구한뒤 맨 뒤에서부터 시작하기 위한 값
  let max = 0;
  // 갯수 구하기
  for(let i=0; i<works.length; i++) {
    map[works[i]] = map[works[i]] ? map[works[i]]+1 : 1
    if(works[i]>max){
      max = works[i]
    }
  }
  // 맨 뒤에서부터 시작해서 씩 줄이기
  for(; n>0;) {
    if(map[max]) {
      --map[max]
      map[max-1] = map[max-1] ? map[max-1]+1: 1
      --n
    }
    else {
      --max
    }
  }
  // 피로도 계산하기
  console.log(map)
  let result = 0;
  for(let i=max; i>0; i--){
    if(map[i]) {
      result += i*i*map[i]
    }
  }
  return result
}