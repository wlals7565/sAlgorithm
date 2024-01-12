function solution(queue1, queue2) {
  // 잘못 생각했네
  let sum = 0;
  let arr1sum = 0;
  let arr2sum = 0;
  let arr1 = queue1.concat(queue2);
  let arr2 = queue2.concat(queue1);
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    if (i < arr1.length / 2) {
      arr1sum += arr1[i];
    } else {
      arr2sum += arr1[i];
    }
  }
  sum /= 2;
  //두개다 해봐야 안다
  let count = 0;
  let arr1f = 0;
  let arr1s = arr1.length / 2;
  let arr2f = 0;
  let arr2s = arr1s;
  //구하는건 된다 그럼 다시 묻겠다. 어떻게 안되는거 판단하고 -1 반환할래?
  while (true) {
    if (arr1s < arr1.length) {
      if (arr1sum > sum) {
        arr1sum -= arr1[arr1f++];
      } else if (arr1sum < sum) {
        arr1sum += arr1[arr1s++];
      } else {
        return count;
      }
    }
    if (arr2s < arr1.length) {
      if (arr2sum > sum) {
        arr2sum -= arr2[arr2f++];
      } else if (arr2sum < sum) {
        arr2sum += arr2[arr2s++];
      } else {
        return count;
      }
    }
    count++;
    //여기가 문제네
    if (arr2s == arr1.length && arr1s == arr1.length) {
      return -1;
    }
  }
}