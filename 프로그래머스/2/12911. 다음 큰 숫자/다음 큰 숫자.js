function solution(n) {
  let a = n
  let temp;
  n = n.toString(2);
  let none = 0;
  let tone = 0;
  for(let i=0; i<n.length; i++){
    if(n[i]=="1"){
      none++;
    }
  }
  while(true){
    a++;
    temp = a.toString(2);
    tone = 0;
    for(let i=0; i<temp.length; i++){
      if(temp[i]=="1"){
        tone++;
      }
    }
    if(tone == none){
      return a;
    }
  }
}