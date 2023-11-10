function solution(arr1, arr2) {
  let answer = [];
  let len1 = arr1.length;
  let len2 = arr1[0].length
  for(let i=0; i<len1; i++){
      let arr = [];
      for(let j=0; j<len2; j++){
          arr.push(arr1[i][j]+arr2[i][j]);
      }
      answer.push(arr);
  }
  return answer;
}