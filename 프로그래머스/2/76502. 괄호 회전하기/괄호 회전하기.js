let arr = [0,1,2]

let map = new Map();
map.set("[", "]");
map.set("{", "}");
map.set("(", ")");

function confirm(s, i, l) {
  let arr = [];
  for(let j = i; j<i+l; j++){
    if(map.has(s[j])){
      arr.push(s[j]);
    }
    else{
      if(map.get(arr[arr.length-1]) == s[j])
      arr.pop();
      else{
        return false;
      }
    }
  }
  if(arr.length != 0){
    return false;
  }
  return true
}

function solution(s) {
  let length = s.length
  s = s+s;
  let count = 0;
  for(let i=0; i<length; i++){
    if(confirm(s, i, length)){
      count++;
    }
  }
  return count;
}