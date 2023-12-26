function solution(s) {
  var answer = '';
  arr = s.split(" ").map((num)=>{return parseInt(num)}).sort((a, b) => a - b);
  answer = arr[0]+" "+arr[arr.length-1];
  return answer;
}