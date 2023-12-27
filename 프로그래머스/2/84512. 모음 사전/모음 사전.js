let goal;
let count = 0;
let answer;
let flag = false;
let arr = ["A", "E", "I", "O", "U"]

function recur(str) {
  if(str == goal){
    flag == true;
    answer = count;
  }
  if(str.length>4||flag){
    return;
  }
  for(let i=0; i<arr.length; i++){
    count++;
    recur(str+arr[i]);
  }
}

function solution(word) {
  goal = word
  recur("");
  return answer;
}