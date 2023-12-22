function solution(arr1, arr2) {
  let row = arr1[0].length; //3
  let col = arr1.length; //2
  let temp = arr2[0].length;
  let result = [];

  for (let i = 0; i < col; i++) {
    let rowResult = [];
    for (let j = 0; j < temp; j++) {
      let sum = 0;
      for (let k = 0; k < row; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      rowResult.push(sum);
    }
    result.push(rowResult);
  }
  return result;
}
