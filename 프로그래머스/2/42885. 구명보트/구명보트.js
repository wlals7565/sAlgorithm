function solution(people, limit) {
  people.sort((a,b)=> {return a-b});
  let len = people.length
  let findex = 0;
  let bindex = people.length-1;
  while(findex<bindex){
    if(people[findex]+people[bindex]<=limit){
      len--;
      findex++;
      bindex--;
    }
    else{
      bindex--;
    }
  }
  return len;
  //일단 정렬하고 맨 앞 맨 뒤 하나씩 옮기면서 하자
}