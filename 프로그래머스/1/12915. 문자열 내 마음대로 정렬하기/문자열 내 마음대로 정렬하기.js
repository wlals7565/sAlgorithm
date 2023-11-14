function solution(strings, n) {
  let temp;
  for (let j = 0; j < strings.length - 1; j++) {
    for (let i = 0; i < strings.length - 1; i++) {
      if (strings[i][n] > strings[i + 1][n]) {
        temp = strings[i];
        strings[i] = strings[i + 1];
        strings[i + 1] = temp;
      } else if (strings[i][n] == strings[i + 1][n]) {
        if (strings[i] > strings[i + 1]) {
          temp = strings[i];
          strings[i] = strings[i + 1];
          strings[i + 1] = temp;
        }
      } else {
      }
    }
  }
  return strings;
}