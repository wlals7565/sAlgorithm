
let set = new Set();

function setsum(arr, len) {
  let sum;
  for(let i=0; i<len; i++){
    sum = 0;
    for(let j=0; j<len; j++){
      sum += arr[i+j];
      set.add(sum);
    }
  }
}

function solution(elements) {
  let length = elements.length;
  let arr = elements.concat(elements);
  setsum(arr, length);
  return set.size;
}