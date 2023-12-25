function solution(priorities, location) {
  let arr = []; //우선순위 갯수
  let count = 0;
  for (let i = 0; i < priorities.length; i++) {
    if (!arr[priorities[i]]) {
      arr[priorities[i]] = 1;
    } else {
      arr[priorities[i]]++;
    }
  }
  let index = arr.length - 1; //우선순위 좌표
  //
  while (0 != location || index != priorities[0]) {
    if (priorities[0] != index) {
      priorities.push(priorities.shift());
      location--;
      if (location < 0) {
        location = priorities.length - 1;
      }
    } else {
      priorities.shift();
      location--;
      count++;
      arr[index]--;
      if (!arr[index]) {
        while (!arr[index] && index >= 0) {
          index--;
        }
      }
    }
  }
  return count + 1;
}