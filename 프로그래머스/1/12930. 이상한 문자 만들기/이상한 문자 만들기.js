function solution(s) {
  var answer = '';
  let blank = " ";
  let val =0;
  for(let i=0; i<s.length; i++){
    if(s[i]==blank){
      val =0;
      answer = answer + " ";
      continue;
    }
    if(val%2==0){
      answer = answer+s[i].toUpperCase();
    }
    else{
      answer = answer + s[i].toLowerCase();
    }
    val++;
  }
  return answer
}
