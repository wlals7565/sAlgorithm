// skill [형태(1공격, 2회복), y1, x1, y2, x2, degress]
function solution(board, skill) {
  const initialArray = [];
  for (let i = 0; i < board.length; i++) {
    const array = [];
    for (let j = 0; j < board[0].length; j++) {
      array.push(0);
    }
    initialArray.push(array);
  }

  for (let i = 0; i < skill.length; i++) {
    const [type, y1, x1, y2, x2, degree] = skill[i];
    initialArray[y1][x1] -= degree * (type === 1 ? 1 : -1);
    if (initialArray[y1][x2 + 1] !== undefined) {
      initialArray[y1][x2 + 1] += degree * (type === 1 ? 1 : -1);
    }
    if (initialArray[y2 + 1] && initialArray[y2 + 1][x1] !== undefined) {
      initialArray[y2 + 1][x1] += degree * (type === 1 ? 1 : -1);
    }
    if (initialArray[y2 + 1] && initialArray[y2 + 1][x2 + 1] !== undefined) {
      initialArray[y2 + 1][x2 + 1] -= degree * (type === 1 ? 1 : -1);
    }
  }

  for (let y = 0; y < initialArray.length; y++) {
    for (let x = 0; x < initialArray[0].length; x++) {
      if (x === 0) {
        continue;
      }
      initialArray[y][x] += initialArray[y][x - 1];
    }
  }

  for (let x = 0; x < initialArray[0].length; x++) {
    for (let y = 0; y < initialArray.length; y++) {
      if (y === 0) {
        continue;
      }
      initialArray[y][x] += initialArray[y-1][x];
    }
  }

  let answer = 0;
  for (let y = 0; y < initialArray.length; y++) {
    for (let x = 0; x < initialArray[0].length; x++) {
      if(board[y][x]+initialArray[y][x]>0){
        answer++;
      }
    }
  }
  return answer;
}