function solution(want, number, discount) {
  let obj = {};
  let isAll;
  sum = 0;
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }
  for (let i = 0; i < 10; i++) {
    if (obj[discount[i]]!= undefined) {
      obj[discount[i]]--;
    }
  }
  isAll = true;
  for (let i = 0; i < want.length; i++) {
    if (obj[want[i]] > 0) {
      isAll = false;
    }
  }
  if (isAll) {
    sum+=1;
  }
  for (let i = 1; i < discount.length-9; i++) {
    if (obj[discount[i-1]] != undefined) {
      obj[discount[i-1]]++;
    }
    if (obj[discount[i+9]] != undefined) {
      obj[discount[i+9]]--;
    }
    isAll = true;
    for (let i = 0; i < want.length; i++) {
      if (obj[want[i]] > 0) {
        isAll = false;
      }
    }
    if (isAll) {
      sum += 1;
    }
  }
  return sum;
}
