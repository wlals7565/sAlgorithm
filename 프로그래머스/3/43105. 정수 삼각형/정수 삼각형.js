function solution(triangle) {
  // 0
  // 1 2
  // 100 0 1
  console.log(triangle);
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j == 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j == triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] =
          triangle[i][j] + triangle[i - 1][j - 1] >
          triangle[i][j] + triangle[i - 1][j]
            ? triangle[i][j] + triangle[i - 1][j - 1]
            : triangle[i][j] + triangle[i - 1][j];
      }
    }
  }
  var answer = Math.max(...triangle[triangle.length - 1]);
  return answer;
}