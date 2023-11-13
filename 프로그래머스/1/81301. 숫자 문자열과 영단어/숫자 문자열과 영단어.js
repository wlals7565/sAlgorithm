function solution(s) {
  answer = ""
  let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for(let i=0; i<s.length; ){
      if(/\d/.test(s[i])){
        answer = answer + s[i];
        i++;
      }
      else {
        for(let j=0; j<arr.length; j++){
          if(s.slice(i,i+arr[j].length)==arr[j]){
            answer = answer + j;
            i = i+arr[j].length;
          }
        }
      }
  }
  return parseInt(answer);
}