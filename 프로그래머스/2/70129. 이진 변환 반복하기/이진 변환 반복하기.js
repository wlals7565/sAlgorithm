function solution(s) {
  var answer = [];
  let str = "";
  let length2 = 0;
  let length1 = 0;
  let count = 0;
  sum = 0;
  while (s != 1) {
    length1 = s.length;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "1") {
        str += "1";
      }
    }
    length2 = str.length;
    s = length2.toString(2);
    console.log(s);
    count++;
    str = "";
    sum += length1-length2;
  }
  
  return [count,sum];
}