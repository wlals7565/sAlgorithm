function solution(X, Y) {
  var answer = "";
  let Xarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let Yarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < X.length; i++) {
    Xarr[parseInt(X[i])]++;
  }
  for (let i = 0; i < Y.length; i++) {
    Yarr[parseInt(Y[i])]++;
  }
  for (let i = 9; 0 <= i; i--) {
    while (Xarr[i] != 0 && Yarr[i] != 0) {
      answer += i;
      Xarr[i]--;
      Yarr[i]--;
    }
  }
  if (answer == "") {
    return "-1";
  } else if (answer[0] == "0") {
    return "0";
  } else {
    return answer;
  }
}