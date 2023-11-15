function solution(a, b) {
  //월 일 1월 1일 금요일
  let answer = "";
  let sum = b;
  let arr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  switch (a - 1) {
    case 11:
      sum += 30;
    case 10:
      sum += 31;
    case 9:
      sum += 30;
    case 8:
      sum += 31;
    case 7:
      sum += 31;
    case 6:
      sum += 30;
    case 5:
      sum += 31;
    case 4:
      sum += 30;
    case 3:
      sum += 31;
    case 2:
      sum += 29;
    case 1:
      sum += 31;
  }
  answer = arr[sum%7];
  return answer;
}