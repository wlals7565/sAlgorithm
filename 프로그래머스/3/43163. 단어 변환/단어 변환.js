// "hit"
// "cog"
// ["hot", "dot", "dog", "lot", "log", "cog"]
let answer;

function solution(begin, target, words) {
  // 시작단어 맨 처음과 끝 단어 맨 처음을 비교한다
  // 다르면 첫 단어가 달라질 경우 가능한 모든 경우의 수로 간다.
  // 다른 단어들도 재귀적으로 반복한다.
  // 이때 같다면 무시하고 다른 경우의 수로 간다.
  findWord(begin, target, words, 0)
  if(!answer) {
    return 0;
  }
  return answer;
}

function findWord (begin, target, words, count = 0) {
  // begin과 target이 같아지면 count를 반환한다.
  if(begin === target) {
    if(count<answer) {
      answer = count;
      return
    }
    else {
      answer = count
      return
    }
  }
  // 시작단어와 끝 단어 순서대로 비교
  for(let i=0; i<begin.length; i++) {
    // 같다면 무시한다.
    if(begin[i]==target[i]) {
    }
    // 다르다면 해당 부분만 달라지는 경우를 찾는다.
    else {
      for(let j=0; j<words.length; j++) {
        // 왼쪽 오른쪽 나누는거 이렇게 하면 안된다.
        const [beginLeft, beginRight] = [begin.slice(0,i), begin.slice(i+1)];
        const [wordLeft, wordRight] = [words[j].slice(0,i), words[j].slice(i+1)];
        // 해당 단어만 다르다면 
        // 해당 문자열부터 시작해서 재귀적으로 찾는다.
        if(beginLeft === wordLeft && beginRight === wordRight) {
          const beginWord = words[j]
          findWord(beginWord, target, words.filter( (word) => (word != words[j])), count + 1)
        }
      }
    }
  }
}