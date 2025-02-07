// n이 x최대치 m이 y최대치 
function solution(n, m, x, y, r, c, k) {
  //필요 최소 거리
  let minimumDistance = Math.abs(r - x) + Math.abs(c - y);
  // 낭비해도 되는 거리
  let overDistance = k - minimumDistance;
  if (overDistance % 2 != 0 || overDistance < 0) {
    return "impossible";
  }
  let map = {
    down: 0,
    up: 0,
    left: 0,
    right: 0,
  };
  if (c - y > 0) {
    map.right = c-y;
  } else {
    map.left -= (c - y);
  }
  if (r - x > 0) {
    map.down = r - x;
  } else {
    map.up -= (r - x);
  }
  let result = "";
  // 여기서부터 문제
  while (overDistance != 0 || x != r || y != c) {
    if (map.down > 0) {
      result += "d";
      map.down--;
      x++;
    } else if (overDistance && x + 1 <= n) {
      result += "d";
      x++;
      map.up++;
      overDistance -= 2;
    } else if (map.left > 0) {
      result += "l";
      map.left--;
      y--;
    } else if (overDistance && y - 1 > 0) {
      result += "l";
      y--
      map.right++;
      overDistance -= 2;
    } else if (map.right > 0) {
      result += "r";
      map.right--;
      y++;
    } else if (overDistance && y + 1 <= m) {
      map.left++;
      y++
      result += "r";
      overDistance -= 2;
    } else if (map.up > 0) {
      result += "u";
      map.up--;
      x--;
    } else if (overDistance && x - 1 > 0) {
      result += "u";
      x--;
      map.down++;
      overDistance -= 2;
    }
  }
  console.log(result)
  return result;
}