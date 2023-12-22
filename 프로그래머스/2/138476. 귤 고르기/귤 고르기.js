function solution(k, tangerine) {
  let map = new Map()
  count = 0;
  for(let i=0; i<tangerine.length; i++){
    map.set(tangerine[i], map.get(tangerine[i])+1 || 1);
  }
  let arr = Array.from(map.values())
  arr = arr.sort((a,b) => {return b-a})
  let index = 0;
  while(k>0){
    k -= arr[index];
    index++;
    count++;
  }
  return count;
}