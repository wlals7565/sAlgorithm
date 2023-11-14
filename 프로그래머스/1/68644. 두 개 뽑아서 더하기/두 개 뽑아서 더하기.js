function solution(numbers) {
  let answer = [];
  let len = numbers.length;
  let set = new Set();
  for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
      set.add(numbers[i]+numbers[j]);
    }
  }
  let arr = [];
  set.forEach((el)=>arr.push(el));
  arr.sort((a,b)=>a-b);
  return arr;
}