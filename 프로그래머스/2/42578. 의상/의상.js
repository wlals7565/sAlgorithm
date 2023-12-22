function solution(clothes) {
  let map = new Map();
  let sum = 1;
  for (let i = 0; i < clothes.length; i++) {
    map.set(clothes[i][1], map.get(clothes[i][1]) +1 ||1);
  }
  let arr = Array.from(map.values())

  for(let i=0; i<arr.length; i++){
    sum *= (arr[i]+1)
  }
  return sum-1;
}