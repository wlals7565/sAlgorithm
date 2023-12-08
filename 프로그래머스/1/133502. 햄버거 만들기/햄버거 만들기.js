function solution(ingredient) {
  let arr = [-1];
  let sum = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient[i] == 1) {
      if (arr[arr.length - 1] == 3) {
        arr.pop();
        arr.pop();
        arr.pop();
        sum++;
      }
      else {
        arr.push(1)
      }
    }
    else if(ingredient[i] == 2) {
      if (arr[arr.length - 1] == 1) {
        arr.push(2)
      }
      else {
        arr.push(-1)
      }

    }
    else if(ingredient[i] == 3) {
      if (arr[arr.length - 1] == 2) {
        arr.push(3)
      }
      else {
        arr.push(-1)
      }
    }
  }
  return sum;
}