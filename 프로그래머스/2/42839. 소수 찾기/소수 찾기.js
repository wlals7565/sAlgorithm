let count = new Set();

function recur(str, arr, level) {
  if(arr.length==0){
    return
  }
  let tempArr;
  let tempStr;
  let num;
  let isSo;
  for (let i = 0; i < arr.length; i++) {
    if (level != 0 || arr[i] != "0") {
      tempArr = arr.slice();
      tempStr = str+arr[i]
      num = Number(tempStr);
      isSo = true;
      for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
          isSo=false;
          break;
        }
      }
      if(isSo && num !=1){
       count.add(num);
      }
      tempArr.splice(i,1)
      recur(tempStr, tempArr,level+1)
    }
  }
}

function solution(numbers) {
  let arr = numbers.split("");
  recur("", arr, 0);
  return count.size;
}