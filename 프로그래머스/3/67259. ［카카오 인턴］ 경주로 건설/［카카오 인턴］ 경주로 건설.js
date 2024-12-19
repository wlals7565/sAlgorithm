function solution(board, state) {
  //[x좌표, y좌표, 굴곡 있는지, 비용]
  let otherResult;
  if (!state) {
    let copyBoard = JSON.stringify(board);
    copyBoard = JSON.parse(copyBoard);
    copyBoard.reverse();
    for (let i = 0; i < copyBoard.length; i++) {
      copyBoard[i].reverse();
    }
    otherResult = solution(copyBoard, true);
  }
  let queue = [[0, 0, "z", 0]];
  let queueFrontIndex = 0;
  let length = board.length;
  // BFS탐색
  while (queue.length != queueFrontIndex) {
    const [xIndex, yIndex, axios, cost] = queue[queueFrontIndex++];
    // X축으로 이동 +1
    if (xIndex + 1 < length) {
      // 방문한 적이 없으면 방문한다.
      if (board[xIndex + 1][yIndex] === 0) {
        board[xIndex + 1][yIndex] =
          cost + (axios === "x" || axios === "z" ? 100 : 600);
        queue.push([xIndex + 1, yIndex, "x", board[xIndex + 1][yIndex]]);
      }
      // 방문해본적이 있다면 비용이 덜 들게 될 경우 방문한다.
      else {
        const oldValue = board[xIndex + 1][yIndex];
        const newValue = cost + (axios === "x" || axios === "z" ? 100 : 600);
        const isChange = oldValue >= newValue;
        board[xIndex + 1][yIndex] = isChange ? newValue : oldValue;
        if (isChange) {
          queue.push([xIndex + 1, yIndex, "x", board[xIndex + 1][yIndex]]);
        }
      }
    }
    // X축으로 이동 -1;
    if (xIndex - 1 >= 0) {
      // 방문한 적이 없으면 방문한다.
      if (board[xIndex - 1][yIndex] === 0) {
        board[xIndex - 1][yIndex] =
          cost + (axios === "x" || axios === "z" ? 100 : 600);
        queue.push([xIndex - 1, yIndex, "x", board[xIndex - 1][yIndex]]);
      }
      // 방문해본적이 있다면 비용이 덜 들게 될 경우 방문한다.
      else {
        const oldValue = board[xIndex - 1][yIndex];
        const newValue = cost + (axios === "x" || axios === "z" ? 100 : 600);
        const isChange = oldValue >= newValue;
        board[xIndex - 1][yIndex] = isChange ? newValue : oldValue;
        if (isChange) {
          queue.push([xIndex - 1, yIndex, "x", board[xIndex - 1][yIndex]]);
        }
      }
    }
    // y축 이동 +1
    if (yIndex + 1 < length) {
      // 방문한 적이 없으면 방문한다.
      if (board[xIndex][yIndex + 1] === 0) {
        board[xIndex][yIndex + 1] =
          cost + (axios === "y" || axios === "z" ? 100 : 600);
        queue.push([xIndex, yIndex + 1, "y", board[xIndex][yIndex + 1]]);
      }
      // 방문해본적이 있다면 비용이 덜 들게 될 경우 방문한다.
      else {
        const oldValue = board[xIndex][yIndex + 1];
        const newValue = cost + (axios === "y" || axios === "z" ? 100 : 600);
        const isChange = oldValue >= newValue;
        board[xIndex][yIndex + 1] = isChange ? newValue : oldValue;
        if (isChange) {
          queue.push([xIndex, yIndex + 1, "y", newValue]);
        }
      }
    }
    if (yIndex - 1 >= 0) {
      // 방문한 적이 없으면 방문한다.
      if (board[xIndex][yIndex - 1] === 0) {
        board[xIndex][yIndex - 1] =
          cost + (axios === "y" || axios === "z" ? 100 : 600);
        queue.push([xIndex, yIndex - 1, "y", board[xIndex][yIndex - 1]]);
      }
      // 방문해본적이 있다면 비용이 덜 들게 될 경우 방문한다.
      else {
        const oldValue = board[xIndex][yIndex - 1];
        const newValue = cost + (axios === "y" || axios === "z" ? 100 : 600);
        const isChange = oldValue >= newValue;
        board[xIndex][yIndex - 1] = isChange ? newValue : oldValue;
        if (isChange) {
          queue.push([xIndex, yIndex - 1, "y", newValue]);
        }
      }
    }
  }
  return Math.min(board[length - 1][length - 1], otherResult||Number.POSITIVE_INFINITY);
}