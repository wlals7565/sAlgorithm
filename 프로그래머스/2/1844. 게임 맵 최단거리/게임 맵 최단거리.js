function solution(maps) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const xLen = maps.length;
    const yLen = maps[0].length;
    const goalX = xLen - 1;
    const goalY = yLen - 1;
    const queue = [];       
    queue.push([0, 0, 1]);
    while(queue.length) {
        const [curX, curY, move] = queue.shift();
        if(curX === goalX && curY === goalY) return move;
        for(let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];
            if(nx >= 0 && nx < xLen && ny >= 0 && ny < yLen && maps[nx][ny] === 1) {
                queue.push([nx, ny, move + 1]);
                maps[nx][ny] = 0;
            }
        }
    } 
    return -1;
}