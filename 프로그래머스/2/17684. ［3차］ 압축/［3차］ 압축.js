function solution(msg) {
  let arr = [
    0,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  msg = msg.toUpperCase();
  let str="";
  let answer = [];
  let index;
  for (let i = 0; i < msg.length; i++) {
    if (arr.indexOf(str + msg[i]) == -1) {
      arr.push(str + msg[i]);
      answer.push(arr.indexOf(str));
      i--;
      str = ""
    } else {
      str += msg[i];
    }
  }
  answer.push(arr.indexOf(str))

  return answer;
}