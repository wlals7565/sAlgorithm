function solution(sizes) {
  let array1 = [];
  let array2 = [];
  sizes.map((data)=> {array1.push(Math.max(...data)); array2.push(Math.min(...data))});
  array1.sort((a,b)=>b-a);
  array2.sort((a,b)=> b-a);
  return array1[0]*array2[0];
}