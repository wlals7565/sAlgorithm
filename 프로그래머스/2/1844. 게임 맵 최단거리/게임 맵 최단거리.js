let desty;
let destx;
let xarr = [1, 0, -1, 0];
let yarr = [0, -1, 0, 1];
let queue = [];
function solution(maps) {
  desty = maps.length - 1;
  destx = maps[0].length - 1;
  queue.push([0, 0, 1]);
  maps[0][0]=0;
  while (queue.length != 0) {
    let [y, x, deep] = queue.shift();
    if (x == destx && y == desty) {
      return deep;
    }
    for (let i = 0; i < 4; i++) {
      if (
        y + yarr[i] >= 0 &&
        y + yarr[i] <= desty &&
        x + xarr[i] >= 0 &&
        x + xarr[i] <= destx &&
        maps[y + yarr[i]][x + xarr[i]] == 1
      ) {
        maps[y + yarr[i]][x + xarr[i]] = 0;
        queue.push([y + yarr[i], x + xarr[i], deep + 1]);
      }
    }
  }
  return -1;
}