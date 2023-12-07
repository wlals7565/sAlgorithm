function solution(n, k) {
  let answer = []; // 답안  
  let arr= []; // 미리 저장해둔 크기
  let sum = 1; // 미리 저장해둔 크기 만들기 용
  let set = new Set(); // 중복 검사용. 이거 사이즈 배열형태로 빼고 넣기 해야한다. 10개 넣고 시작해야한다.
  for(let i=0; i<n; i++){
    set.add(i+1);
  }
  let pick = 1;
  for(let i=1; i<=n; i++){
    sum *= i;
    arr.push(sum);
  }
  //여기 조건문 잘 봐야한다.
  while(k>1){
    for(let i=n-2; i>=0; i--){
      pick = 1;
      while(k>arr[i]){
        k-= arr[i];
        pick++;
      }
      answer.push(Array.from(set.values())[pick-1]); //이거 작동안한다.
      set.delete(Array.from(set.values())[pick-1]); //이거 작동안한다.
    }
  }
  while(Array.from(set.values())[0]){
    answer.push(Array.from(set.values())[0]);
    set.delete(Array.from(set.values())[0]);
  };

  return answer;
}