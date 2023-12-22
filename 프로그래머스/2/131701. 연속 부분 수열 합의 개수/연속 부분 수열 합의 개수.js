let set = new Set();

function setsum(arr, len, size) {
  let sum;
  for(let i=0; i<len; i++){
    sum = 0;
    for(let j=0; j<size; j++){
      sum += arr[i+j];
    }
    set.add(sum);
  }
}

function solution(elements) {
  let length = elements.length;
  let arr = elements.concat(elements);
  for(let i=1; i<=length; i++){
    setsum(arr, length, i);
  }
  return set.size;
}
