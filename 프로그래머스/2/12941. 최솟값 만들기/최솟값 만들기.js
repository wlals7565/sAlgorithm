function solution(A,B){
  let arra = A.sort((a,b)=>{return a-b});
  let arrb = B.sort((a,b)=>{return b-a});
  let sum = 0;
  for(let i=0; i<arra.length; i++){
    sum += arra[i]*arrb[i]
  }
  return sum;
}