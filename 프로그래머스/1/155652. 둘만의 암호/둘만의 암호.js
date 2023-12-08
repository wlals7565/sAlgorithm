function solution(s, skip, index) {
  //a 97 z=122 알파벳 26개
  let answer = "";
  let set = new Set();
  for (let i = 97; i < 123; i++) {
    set.add(String.fromCharCode(i));
  }
  for (let i = 0; i < skip.length; i++) {
    set.delete(skip[i]);
  }
  let arr = Array.from(set.values());
  for (let i = 0; i < s.length; i++) {
    answer += arr[(arr.indexOf(s[i])+index)%arr.length];
  }
  return answer;
}