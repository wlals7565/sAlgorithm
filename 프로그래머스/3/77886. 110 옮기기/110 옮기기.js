function solution(s) {
  // 답 저장용
  let result = [];
  // 각 문자열 s돌기
  for (let i = 0; i < s.length; i++) {
    // 110을 찾기 위한 스택
    let stack = [];
    let oneOneZero = 0;
    let str = s[i];
    // 각 문자열마다 110을 찾아보자.
    for (let i = 0; i < str.length; i++) {
      if (
        stack[stack.length - 2] === "1" &&
        stack[stack.length - 1] === "1" &&
        str[i] === "0"
      ) {
        oneOneZero++;
        stack.pop();
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
    stack.push("1")
    stack.push("1")
    let changedStr = "";
    for (let i = 0; i < stack.length-2; i++) {
      if (stack[i] == "1" && stack[i + 1] == "1" && stack[i + 2] === "1") {
        while (oneOneZero) {
          changedStr += "110";
          oneOneZero--;
        }
        changedStr += stack[i];
      } else {
        changedStr += stack[i];
      }
    }
    while (oneOneZero) {
      changedStr += "110";
      oneOneZero--;
    }
    result.push(changedStr);
  }
  return result;
}