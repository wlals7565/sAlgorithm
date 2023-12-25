function solution(n, k) {
  let val = n;
  let mock = 0;
  let remain = 0;
  let str = "";
  while (val > 0) {
    mock = Math.floor(val / k);
    remain = val % k;
    str = remain + str;
    val = mock;
  }
  let count = 0;
  let index =0;
  let num;
  let numstr ="";
  let isSo;
  while(index<=str.length){
    if((str[index] == 0 || index == str.length)&&numstr!=""){
      num = +numstr;
      isSo = true;
      for(let i=2; i<= Math.sqrt(num); i++){
        if(num%i==0){
          isSo = false;
          break;
        }
      }
      if(isSo && num!=1 && num!=0){
        count++;
      }
      numstr = "";
    }
    else {
      numstr = numstr + str[index]
    }
    index++;
  }
  return count;
}
