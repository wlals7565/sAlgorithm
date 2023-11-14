function solution(array, commands) {
  let answer = commands.map((arr)=>{
    return array.slice(arr[0]-1,arr[1]).sort((a,b)=>a-b)[arr[2]-1];
  })
  return answer;
}