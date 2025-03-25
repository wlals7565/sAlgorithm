
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

function solution(board) {
  const max = board.length;
  const queue = [];
  let frontIndex = 0;
  queue.push([[0,0],[0,1], 0]);
  const set = new Set();
  set.add(`0:0-0:1`)
  set.add(`0:1-0:0`)
  while(frontIndex!=queue.length) {
    // console.log(queue)
    const [leftPoint, rightPoint, moveCount] = queue[frontIndex++];
    if((leftPoint[0]===max-1 && leftPoint[1] === max -1) || (rightPoint[0]===max-1 && rightPoint[1] === max -1)) {
      console.log(queue)
      return moveCount
    }
    // 앞 뒤 왼쪽 오른쪽 이동
    for(let i=0; i<4; i++) {
      const leftYPoint = leftPoint[0] + dy[i];
      const leftXPoint = leftPoint[1] + dx[i];
      const rightYPoint = rightPoint[0] + dy[i];
      const rightXPoint = rightPoint[1] + dx[i];
      if(leftXPoint>=0 && leftYPoint>=0 && rightXPoint >=0 && rightYPoint >=0 && leftXPoint<max && leftYPoint<max && rightXPoint<max && rightYPoint<max&& board[leftYPoint][leftXPoint] == 0 && board[rightYPoint][rightXPoint] == 0 && !set.has(`${leftYPoint}:${leftXPoint}-${rightYPoint}:${rightXPoint}`)) {
        queue.push([[leftYPoint,leftXPoint],[rightYPoint,rightXPoint], moveCount+1]);
        set.add(`${leftYPoint}:${leftXPoint}-${rightYPoint}:${rightXPoint}`);
        set.add(`${rightYPoint}:${rightXPoint}-${leftYPoint}:${leftXPoint}`);
      }
    }
    // 위는 문제 없을 확률이 매우 높다.
    //console.log(queue)
    // 회전
    // x가 같으면
    if(leftPoint[1]===rightPoint[1]) {
      // 왼쪽이 움직여 보자
      if(leftPoint[1]+1 <max  && board[leftPoint[0]][leftPoint[1]+1] == 0 && board[rightPoint[0]][leftPoint[1]+1] == 0 &&  !set.has(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]+1}`)) {
        queue.push([[rightPoint[0],rightPoint[1]], [rightPoint[0], rightPoint[1]+1], moveCount+1]);
        set.add(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]+1}`)
        set.add(`${rightPoint[0]}:${rightPoint[1]+1}-${rightPoint[0]}:${rightPoint[1]}`)
      }
      if(leftPoint[1]-1>=0 && board[leftPoint[0]][leftPoint[1]-1] == 0 && board[rightPoint[0]][leftPoint[1]-1] == 0 &&  !set.has(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]-1}`)) {
        queue.push([[rightPoint[0],rightPoint[1]], [rightPoint[0], rightPoint[1]-1], moveCount+1]);
        set.add(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]-1}`)
        set.add(`${rightPoint[0]}:${rightPoint[1]-1}-${rightPoint[0]}:${rightPoint[1]}`)
      }
      // 오른쪽이 움직여 보자
      if(rightPoint[1]+1 <max  && board[rightPoint[0]][rightPoint[1]+1] == 0 && board[leftPoint[0]][rightPoint[1]+1] == 0 &&  !set.has(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]+1}`)) {
        queue.push([[leftPoint[0],leftPoint[1]], [leftPoint[0], leftPoint[1]+1], moveCount+1]);
        set.add(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]+1}`)
        set.add(`${leftPoint[0]}:${leftPoint[1]+1}-${leftPoint[0]}:${leftPoint[1]}`)
      }
      if(rightPoint[1]-1 >=0  && board[rightPoint[0]][rightPoint[1]-1] == 0 && board[leftPoint[0]][rightPoint[1]-1] == 0 &&  !set.has(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]-1}`)) {
        queue.push([[leftPoint[0],leftPoint[1]], [leftPoint[0], leftPoint[1]-1], moveCount+1]);
        set.add(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]-1}`)
        set.add(`${leftPoint[0]}:${leftPoint[1]-1}-${leftPoint[0]}:${leftPoint[1]}`)
      }
    }
    // y가 같으면
    else if(leftPoint[0]===rightPoint[0]) {
      // 왼쪽이 움직여 보자
      if(leftPoint[0]+1 <max  && board[leftPoint[0]+1][leftPoint[1]] == 0 && board[rightPoint[0]+1][rightPoint[1]] == 0 &&  !set.has(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]+1}:${rightPoint[1]}`)) {
        queue.push([[rightPoint[0],rightPoint[1]], [rightPoint[0]+1, rightPoint[1]], moveCount+1]);
        set.add(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]+1}:${rightPoint[1]}`)
        set.add(`${rightPoint[0]+1}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]}`)
      }
      if(leftPoint[0]-1>=0 &&board[leftPoint[0]-1][leftPoint[1]] == 0 && board[rightPoint[0]-1][rightPoint[1]] == 0 &&  !set.has(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]-1}:${rightPoint[1]}`)) {
        queue.push([[rightPoint[0],rightPoint[1]], [rightPoint[0]-1, rightPoint[1]], moveCount+1]);
        set.add(`${rightPoint[0]}:${rightPoint[1]}-${rightPoint[0]-1}:${rightPoint[1]}`)
        set.add(`${rightPoint[0]-1}:${rightPoint[1]}-${rightPoint[0]}:${rightPoint[1]}`)
      }
      // 오른쪽이 움직여 보자
      if(rightPoint[0]+1 <max  && board[rightPoint[0]+1][rightPoint[1]] == 0 && board[leftPoint[0]+1][leftPoint[1]] == 0 &&  !set.has(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]+1}:${leftPoint[1]}`)) {
        queue.push([[leftPoint[0],leftPoint[1]], [leftPoint[0] + 1, leftPoint[1]], moveCount+1]);
        set.add(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0] + 1}:${leftPoint[1]}`)
        set.add(`${leftPoint[0] +1}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]}`)
      }
      if(rightPoint[0]-1 >=0  && board[rightPoint[0]-1][rightPoint[1]] == 0 && board[leftPoint[0]-1][leftPoint[1]] == 0 &&  !set.has(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]-1}:${leftPoint[1]}`)) {
        queue.push([[leftPoint[0],leftPoint[1]], [leftPoint[0]-1, leftPoint[1]], moveCount+1]);
        set.add(`${leftPoint[0]}:${leftPoint[1]}-${leftPoint[0]-1}:${leftPoint[1]}`)
        set.add(`${leftPoint[0]-1}:${leftPoint[1]}-${leftPoint[0]}:${leftPoint[1]}`)
      }
    }
  }
}