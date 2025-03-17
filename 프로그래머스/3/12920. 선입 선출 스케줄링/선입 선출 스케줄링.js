function solution(n, cores) {
  if (cores.length >= n) {
    return n;
  }
  n -= cores.length
  var max = 0;
  for (var i = 0; i < cores.length; i++) {
    if (cores[i] > max) {
      max = cores[i];
    }
  }
  var right = max * cores.length;
  var left = 1;
  while (left < right) {
    var middle = Math.floor((right + left) / 2);
    var count = 0;
    for (var i = 0; i < cores.length; i++) {
      count += Math.floor(middle / cores[i]);
    }
    if (count >= n) {
      right = middle;
    } else if (count < n) {
      left = middle + 1;
    }
  }
  for (var i = 0; i < cores.length; i++) {
    n -= Math.floor((right - 1) / cores[i]);
    if (n == 0) {
      return i+1;
    }
  }

  for (var i = 0; i < cores.length; i++) {
    n -= right % cores[i] == 0 ? 1 : 0;
    if (n == 0) {
      return i+1;
    }
  }
}