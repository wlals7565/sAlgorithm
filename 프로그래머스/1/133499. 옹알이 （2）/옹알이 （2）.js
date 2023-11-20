function solution(babbling) {
  var answer = 0;
  let arr = ["aya", "ye", "woo", "ma"]
  let temp;
  let repeat = ''
  for(let i=0; i<babbling.length; i++){
    repeat = ''
    for(let j=0; j<babbling[i].length;) {
      if(babbling[i][0]=='a' || babbling[i][0] == 'w'){
        temp = babbling[i].slice(0,3);
        if(temp == "aya" || temp == "woo"){
          if(repeat == temp) break
          babbling[i] = babbling[i].slice(3)
          repeat = temp
        }
        else break
      }
      else if(babbling[i][0]=='y' || babbling[i][0] == 'm'){
        temp = babbling[i].slice(0,2);
        if(temp == "ye" || temp == "ma"){
          if(repeat == temp) break
          babbling[i] = babbling[i].slice(2)
          repeat = temp
        }
        else break
      }
      else break
    }
    //console.log(babbling[i].length)
    if(babbling[i].length==0){
      answer++
    }
  }
  return answer;
}
