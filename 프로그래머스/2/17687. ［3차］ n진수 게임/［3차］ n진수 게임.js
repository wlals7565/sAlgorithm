function solution(n, t, m, p) {
  let totalstr = "0";
  let str;
  let count = 1;
  let temp;
  let answer = "";
  let remain;
  while (totalstr.length < p + (t - 1) * m) {
    str = "";
    temp = count;
    while (temp / n > 0) {
      remain = temp % n;
      if (remain < 10) {
        str = (temp % n) + str;
      } else {
        switch (remain) {
          case 10:
            str = "A" + str;
            break;
          case 11:
            str = "B" + str;
            break;
          case 12:
            str = "C" + str;
            break;
          case 13:
            str = "D" + str;
            break;
          case 14:
            str = "E" + str;
            break;
          case 15:
            str = "F" + str;
            break;
        }
      }
      temp = Math.floor(temp / n);
    }
    totalstr = totalstr+ str;
    count++;
  }
  for(let i=1; i<=t; i++){
    answer += totalstr[(p+(i-1)*m)-1]
  }
  return answer
}