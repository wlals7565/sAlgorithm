function solution(n, words) {
  let first = "";
  let last = words[0][words[0].length-1];
  let set = new Set();
  set.add(words[0])
  for(let i=1; i<words.length; i++){
    first = words[i][0];
    if(words[i].length==1 || first!=last|| set.has(words[i])){
      return [(i%n)+1,Math.floor(i/n)+1];
    }
    set.add(words[i])
    last = words[i][words[i].length-1]
  }
  return [0,0]
}