function solution(s) {
  let answer = "";
  let isEmpty = 0;
  for (let i = 0; i < s.length; i++) {
    if (isEmpty == 0 && isNaN(s[i])) {
      answer += s[i].toUpperCase();
      isEmpty = 1;
    } else {
      if (isNaN(s[i])) {
        answer += s[i].toLowerCase()
      } else {
        answer += s[i];
      }
      isEmpty = 1;
      if (s[i] == " ") {
        isEmpty = 0;
      }
    }
  }
  return answer;
}