function solution(n, s) {
  // 나머지
  let remain = s % n;
  // 각 원소의 값
  const mock =Math.floor(s/n)

  const answer = []
  if(mock<1) {
    return [-1]
  }
  else {
    for(let i=0; i<n; i++){
      answer.push(mock);
    }
    for(let i=answer.length-1; remain>0;i--, remain--) {
      answer[i]++
    }
  }
  return answer
}