function solution(str1, str2) {
  let set = new Set();
  let map1 = new Map();
  let map2 = new Map();
  let left = "";
  let right = "";
  let temp = ""
  for(let i=0; i<str1.length-1; i++){
    left = str1[i].toLowerCase();
    right = str1[i+1].toLowerCase();
    if(97<=left.codePointAt() && 122>=left.codePointAt() && 97<=right.codePointAt() && 122>=right.codePointAt()){
      temp = left+right;
      set.add(temp);
      map1.set(temp, map1.get(temp)+1 || 1)
    }
  }
  console.log(set)
  console.log(map1);
  for(let i=0; i<str2.length-1; i++){
    left = str2[i].toLowerCase();
    right = str2[i+1].toLowerCase();
    if(97<=left.codePointAt() && 122>=left.codePointAt() && 97<=right.codePointAt() && 122>=right.codePointAt()){
      temp = left+right;
      set.add(temp);
      map2.set(temp, map2.get(temp)+1 || 1)
    }
  }
  let arr = Array.from(set.values());
  let sumSet = 0;
  let subSet = 0;
  let map1val;
  let map2val;
  const mult = 65536;
  for(let i=0; i<arr.length; i++){
    map1val = map1.get(arr[i])||0; 
    map2val = map2.get(arr[i])||0;
    if(map1val>=map2val){
      sumSet += map1val;
      subSet += map2val;
    }
    else {
      sumSet += map2val;
      subSet += map1val;
    }
  }
  if(arr.length == 0){
    return mult
  }
  return Math.floor((subSet/sumSet)*mult)
}